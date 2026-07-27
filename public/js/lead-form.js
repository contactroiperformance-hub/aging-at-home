/* /get-started/ — two-step lead form. Exact port of the prototype component:
   same validation, consent gating, field mapping, and LeadByte delivery. */
(function () {
  'use strict';
  var ENDPOINT = 'https://roiperformance.leadbyte.co.uk/api/submit.php';
  var CAMPID = 'BATHROOM-REMODELING';
  var SID = '1';
  var CONSENT_VERSION = 'v1.0-2026-07';
  var PROJECTS = ['Tub-to-shower conversion', 'Walk-in shower', 'Walk-in tub', 'Accessible bathroom remodel', 'Not sure yet'];

  function consentText() {
    return 'I agree that Aging at Home Advisor and home-improvement professionals receiving my request may contact me by telephone, email, or text message regarding the project I selected. I understand that I may revoke this permission at any time.';
  }
  function mapProject(v) {
    return ({ 'Tub-to-shower conversion': 'tub_to_shower_conversion', 'Walk-in shower': 'walk_in_shower', 'Walk-in tub': 'walk_in_tub', 'Accessible bathroom remodel': 'accessible_remodel', 'Not sure yet': 'not_sure' })[v] || '';
  }
  function mapOwn(v) { return ({ 'Yes': 'own', 'No': 'rent', 'Helping a family member': 'other' })[v] || ''; }
  function mapCurrent(v) { return ({ 'Bathtub': 'bathtub', 'Standard shower': 'shower_only', 'Walk-in shower': 'walk_in_shower', 'Other': 'other', 'Not sure': 'other' })[v] || ''; }
  function mapTiming(v) { return ({ 'As soon as possible': 'asap', 'Within 1\u20133 months': '1_3_months', 'Within 3\u20136 months': '3_6_months', 'Just researching': 'researching' })[v] || ''; }

  var q = new URLSearchParams(window.location.search);
  var state = {
    step: 1,
    zip: (q.get('zip') || '').replace(/[^0-9]/g, '').slice(0, 5),
    project: (function () {
      var p = (q.get('project') || '').toLowerCase();
      return PROJECTS.find(function (o) { return o.toLowerCase() === p; }) || '';
    })(),
    own: '', current: '', timing: '',
    firstName: '', phone: '', email: '', consent: false, sending: false, delivered: null
  };

  var s1 = document.querySelector('[data-step="1"]');
  var s2 = document.querySelector('[data-step="2"]');
  var s3 = document.querySelector('[data-step="3"]');
  var prog = document.querySelector('[data-lf="progress"]');
  var stepLabel = prog ? prog.querySelector('span') : null;
  var barWrap = prog ? prog.querySelector('[role="progressbar"]') : null;
  var bar = barWrap ? barWrap.firstElementChild : null;
  var err1 = s1 ? s1.querySelector('[data-lf-error]') : null;
  var err2 = s2 ? s2.querySelector('[data-lf-error]') : null;
  var zipInput = document.getElementById('lead-zip');
  var nameInput = document.getElementById('lead-name');
  var phoneInput = document.getElementById('lead-phone');
  var emailInput = document.getElementById('lead-email');
  var consentBox = s2 ? s2.querySelector('input[type="checkbox"]') : null;
  var submitBtn = s2 ? s2.querySelector('button[type="submit"]') : null;
  var backBtn = document.querySelector('[data-on-click="back"]');

  function show(el) { if (el) el.style.display = el.getAttribute('data-show') || ''; }
  function hide(el) { if (el) el.style.display = 'none'; }
  function setError(el, msg) {
    if (!el) return;
    if (msg) { el.textContent = msg; show(el); } else { el.textContent = ''; hide(el); }
  }
  function paint() {
    (state.step === 1 ? show : hide)(s1);
    (state.step === 2 ? show : hide)(s2);
    (state.step === 3 ? show : hide)(s3);
    (state.step < 3 ? show : hide)(prog);
    if (stepLabel) stepLabel.textContent = state.step === 1 ? 'Step 1 of 2 \u2014 Your project' : 'Step 2 of 2 \u2014 About your home';
    if (barWrap) barWrap.setAttribute('aria-valuenow', String(state.step));
    if (bar) bar.style.width = state.step === 1 ? '50%' : '100%';
  }

  /* radio groups */
  function wireRadios(field, groupName) {
    var radios = document.querySelectorAll('input[name="' + groupName + '"]');
    function paintGroup() {
      radios.forEach(function (r) {
        var l = r.closest('label');
        if (!l) return;
        l.style.borderColor = r.checked ? '#164E52' : '#DDD6C4';
        l.style.background = r.checked ? '#EAF0EC' : '#FFFFFF';
      });
    }
    radios.forEach(function (r) {
      r.addEventListener('change', function () {
        var span = r.closest('label').querySelector('span:last-child');
        state[field] = span ? span.textContent.trim() : '';
        setError(err1, ''); setError(err2, '');
        paintGroup();
      });
    });
    return { radios: radios, paintGroup: paintGroup };
  }
  var projectGroup = wireRadios('project', 'project');
  wireRadios('own', 'own');
  wireRadios('current', 'current');
  wireRadios('timing', 'timing');

  /* prefill from query string */
  if (zipInput && state.zip) zipInput.value = state.zip;
  if (state.project) {
    projectGroup.radios.forEach(function (r) {
      var span = r.closest('label').querySelector('span:last-child');
      if (span && span.textContent.trim() === state.project) r.checked = true;
    });
    projectGroup.paintGroup();
  }

  if (zipInput) zipInput.addEventListener('input', function () {
    var v = zipInput.value.replace(/[^0-9]/g, '').slice(0, 5);
    if (v !== zipInput.value) zipInput.value = v;
    state.zip = v;
    setError(err1, '');
  });
  if (nameInput) nameInput.addEventListener('input', function () { state.firstName = nameInput.value; });
  if (phoneInput) phoneInput.addEventListener('input', function () { state.phone = phoneInput.value; });
  if (emailInput) emailInput.addEventListener('input', function () { state.email = emailInput.value; });
  if (consentBox) consentBox.addEventListener('change', function () { state.consent = consentBox.checked; setError(err2, ''); });

  if (s1) s1.addEventListener('submit', function (e) {
    e.preventDefault();
    if (state.zip.length !== 5) return setError(err1, 'Please enter a 5-digit ZIP code.');
    if (!state.project) return setError(err1, 'Please choose a project type (or \u201cNot sure yet\u201d).');
    state.step = 2; setError(err1, ''); paint();
    window.scrollTo(0, 0);
  });
  if (backBtn) backBtn.addEventListener('click', function () {
    state.step = 1; setError(err2, ''); paint();
  });

  function payload() {
    var utm = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'].forEach(function (k) {
      var v = q.get(k); if (v) utm[k] = v;
    });
    return Object.assign({
      campid: CAMPID,
      sid: SID,
      returnjson: 'yes',
      first_name: state.firstName,
      phone: state.phone.replace(/[^0-9]/g, ''),
      email: state.email,
      zip: state.zip,
      state: 'FL',
      project_type: mapProject(state.project),
      homeowner_status: mapOwn(state.own),
      current_setup: mapCurrent(state.current),
      timing: mapTiming(state.timing),
      tcpa_consent: state.consent ? 'true' : 'false',
      tcpa_consent_text: consentText(),
      tcpa_consent_version: CONSENT_VERSION,
      consent_timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      source: q.get('source') || document.referrer.replace(/^https?:\/\/[^/]+/, '').replace(/^\/+|\/+$/g, '') || 'lead_form',
      source_url: window.location.href,
      page_type: q.get('page_type') || 'lead_form',
      city_page_slug: q.get('city') || '',
      referrer: document.referrer || '',
      device_type: window.matchMedia('(max-width:640px)').matches ? 'mobile' : 'desktop'
    }, utm);
  }

  if (s2) s2.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!state.consent) return setError(err2, 'Please review and check the consent box to continue.');
    if (!state.phone.replace(/[^0-9]/g, '').match(/^1?[0-9]{10}$/)) return setError(err2, 'Please enter a valid 10-digit phone number.');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(state.email)) return setError(err2, 'Please enter a valid email address.');
    if (state.sending) return;
    state.sending = true;
    setError(err2, '');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending\u2026'; }
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(payload()).toString()
    }).then(function (res) { return res.json(); }).then(function (json) {
      var ok = json && (json.success === true || json.status === 'success' || json.result === 'success');
      state.delivered = ok ? 'ok' : 'review';
      done();
    }).catch(function () {
      /* Never lose the visitor on a delivery failure — confirm receipt, flag for retry. */
      state.delivered = 'error';
      done();
    });
    function done() {
      state.step = 3; state.sending = false;
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'See My Options'; }
      var zs = s3 ? s3.querySelector('strong') : null;
      if (zs) zs.textContent = state.zip || '\u2014';
      paint();
      window.scrollTo(0, 0);
    }
  });

  paint();
})();
