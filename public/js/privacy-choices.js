/* /your-privacy-choices/ — opt-out toggles, GPC detection, privacy request form.
   Exact port of the prototype component. */
(function () {
  'use strict';
  function getCookie(name) {
    var m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    if (m) return decodeURIComponent(m[1]);
    try { return localStorage.getItem(name); } catch (e) { return null; }
  }
  function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value) + ';path=/;max-age=31536000;samesite=lax';
    try { localStorage.setItem(name, value); } catch (e) {}
  }
  function delCookie(name) { document.cookie = name + '=;path=/;max-age=0'; }
  function removeTrackingCookies(ad, an) {
    if (ad) { delCookie('_fbp'); delCookie('_fbc'); }
    if (an) {
      document.cookie.split('; ').forEach(function (c) {
        var name = c.split('=')[0];
        if (name === '_ga' || name.indexOf('_ga_') === 0) delCookie(name);
      });
    }
  }

  var state = { ad: false, an: false, gpc: false };
  var adBtn = document.querySelector('[data-on-click="toggleAd"]');
  var anBtn = document.querySelector('[data-on-click="toggleAn"]');
  var saveBtn = document.querySelector('[data-on-click="saveChoices"]');
  var restoreBtn = document.querySelector('[data-on-click="restoreDefaults"]');
  var savedMsg = document.querySelector('[data-pc="saved"]');
  var gpcBox = document.getElementById('gpc');

  function paintSwitch(btn, on, onLabel, offLabel) {
    if (!btn) return;
    btn.setAttribute('aria-checked', on ? 'true' : 'false');
    var spans = btn.querySelectorAll('span');
    if (spans[0]) { spans[0].textContent = on ? onLabel : offLabel; spans[0].style.color = on ? '#47664F' : '#5C6B67'; }
    if (spans[1]) spans[1].style.background = on ? '#164E52' : '#C9C2B0';
    if (spans[2]) spans[2].style.left = on ? '29px' : '3px';
  }
  function msg(t) {
    if (!savedMsg) return;
    if (t) { savedMsg.textContent = t; savedMsg.style.display = savedMsg.getAttribute('data-show') || ''; }
    else { savedMsg.textContent = ''; savedMsg.style.display = 'none'; }
  }
  function paint() {
    paintSwitch(adBtn, state.ad, 'Opted out', 'Not opted out');
    paintSwitch(anBtn, state.an, 'Disabled', 'Enabled');
    if (gpcBox) {
      gpcBox.style.background = state.gpc ? '#EAF0EC' : '#FFFFFF';
      gpcBox.style.borderColor = state.gpc ? '#C9DACB' : '#E7E0D2';
      var p = gpcBox.querySelector('p');
      var text = state.gpc
        ? 'Your browser is sending a GPC opt-out signal, and we have recognized it: advertising technologies will not load, advertising events are stopped, and your advertising opt-out has been saved. The website and lead form keep working normally.'
        : 'Your browser is not currently sending a GPC signal. When a GPC signal is detected, we automatically stop advertising technologies and save the advertising opt-out. You can also opt out manually below.';
      if (p) {
        p.textContent = '';
        var b = document.createElement('strong');
        b.textContent = 'Global Privacy Control:';
        p.appendChild(b);
        p.appendChild(document.createTextNode(' ' + text));
      }
    }
  }

  /* init — mirror componentDidMount */
  state.gpc = !!navigator.globalPrivacyControl;
  var adStored = getCookie('aaha_advertising_optout');
  var anStored = getCookie('aaha_analytics_optout');
  state.ad = adStored !== null ? adStored === 'true' : state.gpc;
  state.an = anStored === 'true';
  if (state.gpc && adStored === null) setCookie('aaha_advertising_optout', 'true');
  paint();

  if (adBtn) adBtn.addEventListener('click', function () { state.ad = !state.ad; msg(''); paint(); });
  if (anBtn) anBtn.addEventListener('click', function () { state.an = !state.an; msg(''); paint(); });
  if (saveBtn) saveBtn.addEventListener('click', function () {
    setCookie('aaha_advertising_optout', state.ad ? 'true' : 'false');
    setCookie('aaha_analytics_optout', state.an ? 'true' : 'false');
    removeTrackingCookies(state.ad, state.an);
    msg('Choices saved.');
  });
  if (restoreBtn) restoreBtn.addEventListener('click', function () {
    setCookie('aaha_advertising_optout', 'false');
    setCookie('aaha_analytics_optout', 'false');
    state.ad = false; state.an = false;
    paint();
    msg('Default settings restored.');
  });

  /* privacy request form (prototype confirmation; not yet connected to a live request system) */
  var form = document.querySelector('[data-pc="form"]');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    var ok = document.querySelector('[data-pc="submitted"]');
    if (ok) ok.style.display = ok.getAttribute('data-show') || '';
  });
})();
