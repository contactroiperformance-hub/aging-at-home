/* AgingAtHomeAdvisor.com — sitewide behavior (exact port of the prototype logic) */
(function () {
  'use strict';
  var root = document.body.getAttribute('data-root') || '';

  function getCookie(n) {
    var m = document.cookie.match(new RegExp('(?:^|; )' + n + '=([^;]*)'));
    if (m) return decodeURIComponent(m[1]);
    try { return localStorage.getItem(n); } catch (e) { return null; }
  }
  function setCookie(n, v) {
    document.cookie = n + '=' + encodeURIComponent(v) + ';path=/;max-age=31536000;samesite=lax';
    try { localStorage.setItem(n, v); } catch (e) {}
  }

  /* ---- fixed header: keep spacer matched to real header height ---- */
  function measure() {
    var h = document.querySelector('[data-ref="headerRef"]');
    if (!h) return;
    var sp = h.nextElementSibling;
    if (sp && sp.getAttribute('aria-hidden') === 'true' && h.offsetHeight) sp.style.height = h.offsetHeight + 'px';
  }
  measure();
  setTimeout(measure, 600); /* after fonts load */
  window.addEventListener('load', measure);
  window.addEventListener('resize', measure);

  /* ---- first-visit privacy notice ---- */
  var notice = document.querySelector('[data-privacy-notice]');
  if (notice) {
    var seen = document.cookie.indexOf('aaha_privacy_notice_seen=') !== -1;
    try { seen = seen || localStorage.getItem('aaha_privacy_notice_seen') === '1'; } catch (e) {}
    if (!seen) notice.style.display = notice.getAttribute('data-show') || '';
    var got = notice.querySelector('[data-on-click="dismissNotice"]');
    if (got) got.addEventListener('click', function () {
      setCookie('aaha_privacy_notice_seen', '1');
      notice.style.display = 'none';
    });
  }

  /* ---- ZIP forms -> lead form ---- */
  function digits5(v) { return v.replace(/[^0-9]/g, '').slice(0, 5); }
  document.querySelectorAll('form[data-zip-form]').forEach(function (f) {
    var input = f.querySelector('input');
    if (!input) return;
    input.addEventListener('input', function () {
      var v = digits5(input.value);
      if (v !== input.value) input.value = v;
    });
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var p = [];
      var zip = digits5(input.value);
      if (zip) p.push('zip=' + zip);
      var proj = f.getAttribute('data-project');
      if (proj) p.push('project=' + encodeURIComponent(proj));
      /* Page the visitor signed up from -> LeadByte `source` */
      var src = location.pathname.replace(/index\.html$/, '').replace(/^\/+|\/+$/g, '') || 'home';
      p.push('source=' + encodeURIComponent(src));
      location.href = root + 'get-started/' + (p.length ? '?' + p.join('&') : '');
    });
  });

  /* ---- comparison-guide CTA form (Walk-In Tub vs Walk-In Shower) ---- */
  var cta = document.querySelector('form[data-on-submit="ctaGo"]');
  if (cta) {
    var ctaZip = document.getElementById('cta-zip');
    if (ctaZip) ctaZip.addEventListener('input', function () {
      var v = digits5(ctaZip.value);
      if (v !== ctaZip.value) ctaZip.value = v;
    });
    var ctaRadios = cta.querySelectorAll('input[name="cta-project"]');
    function paintCta() {
      ctaRadios.forEach(function (r) {
        var l = r.closest('label');
        if (!l) return;
        l.style.borderColor = r.checked ? '#F7F3E9' : 'rgba(247,243,233,.35)';
        l.style.background = r.checked ? 'rgba(247,243,233,.14)' : 'transparent';
      });
    }
    ctaRadios.forEach(function (r) { r.addEventListener('change', paintCta); });
    cta.addEventListener('submit', function (e) {
      e.preventDefault();
      var p = [];
      var zip = ctaZip ? digits5(ctaZip.value) : '';
      if (zip) p.push('zip=' + zip);
      var sel = cta.querySelector('input[name="cta-project"]:checked');
      if (sel) {
        var span = sel.closest('label').querySelector('span:last-child');
        if (span) p.push('project=' + encodeURIComponent(span.textContent.trim()));
      }
      location.href = root + 'get-started/' + (p.length ? '?' + p.join('&') : '');
    });
  }

  /* ---- contact form (prototype confirmation; not yet connected to a backend) ---- */
  var cform = document.querySelector('[data-contact="form"]');
  if (cform) {
    cform.addEventListener('submit', function (e) {
      e.preventDefault();
      cform.style.display = 'none';
      var ok = document.querySelector('[data-contact="submitted"]');
      if (ok) ok.style.display = ok.getAttribute('data-show') || '';
      window.scrollTo(0, 0);
    });
  }

  /* ---- bathroom safety checklist (saves in this browser) ---- */
  var printBtn = document.querySelector('[data-on-click="printPage"]');
  if (printBtn) {
    var KEY = 'aha-bathroom-safety-checklist-v1';
    var load = function () { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } };
    var store = function (m) { try { localStorage.setItem(KEY, JSON.stringify(m)); } catch (e) {} };
    var boxes = [];
    document.querySelectorAll('article div[id]').forEach(function (sec) {
      sec.querySelectorAll('input[type="checkbox"]').forEach(function (inp, i) {
        inp.setAttribute('data-key', sec.id + '-' + i);
        boxes.push(inp);
      });
    });
    var block = printBtn.parentElement;
    var spans = block ? block.querySelectorAll(':scope > span') : [];
    var label = spans[1];
    var bar = block ? block.querySelector('div > div') : null;
    function update() {
      var m = load(), done = 0;
      boxes.forEach(function (b) {
        b.checked = !!m[b.getAttribute('data-key')];
        if (b.checked) done++;
      });
      var pct = boxes.length ? Math.round((done / boxes.length) * 100) : 0;
      if (label) label.textContent = pct + '% in good shape';
      if (bar) bar.style.width = pct + '%';
    }
    boxes.forEach(function (b) {
      b.addEventListener('change', function () {
        var m = load();
        m[b.getAttribute('data-key')] = b.checked;
        store(m);
        update();
      });
    });
    printBtn.addEventListener('click', function () { window.print(); });
    var clearBtn = document.querySelector('[data-on-click="clearAll"]');
    if (clearBtn) clearBtn.addEventListener('click', function () { store({}); update(); });
    update();
  }

  /* ---- analytics & advertising (US opt-out model — see Cookie Policy) ----
     Fill in the IDs to activate. Tags never load for opted-out visitors or
     GPC browsers (advertising). Never send PII, form answers, or lead data. */
  var GA4_ID = '';        /* e.g. 'G-XXXXXXXXXX' */
  var META_PIXEL_ID = ''; /* e.g. '1234567890' */
  var gpc = !!navigator.globalPrivacyControl;
  var adOut = getCookie('aaha_advertising_optout');
  if (gpc && adOut === null) { setCookie('aaha_advertising_optout', 'true'); adOut = 'true'; }
  var anOut = getCookie('aaha_analytics_optout') === 'true';
  if (GA4_ID && !anOut) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID);
  }
  if (META_PIXEL_ID && adOut !== 'true') {
    !(function (f, b, e, v, n, t, x) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; x = b.getElementsByTagName(e)[0]; x.parentNode.insertBefore(t, x);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
})();
