"use client";

import { useEffect, useState } from "react";

function writeChoice(name: string, value: boolean) {
  localStorage.setItem(name, String(value));
  document.cookie = `${name}=${value ? "1" : "0"}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function PrivacyChoices() {
  const [analytics, setAnalytics] = useState(true);
  const [advertising, setAdvertising] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setAnalytics(localStorage.getItem("aaha_analytics_optout") !== "true");
      setAdvertising(localStorage.getItem("aaha_advertising_optout") !== "true");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  function save() {
    writeChoice("aaha_analytics_optout", !analytics);
    writeChoice("aaha_advertising_optout", !advertising);
    setSaved(true);
  }

  return (
    <section className="privacy-controls card card--lg" aria-labelledby="privacy-controls-title">
      <p className="eyebrow">Browser controls</p>
      <h2 id="privacy-controls-title">Manage optional data use on this device</h2>
      <label className="choice-row">
        <span>
          <strong>Analytics</strong>
          <small>Allow privacy-conscious measurement of site use.</small>
        </span>
        <input
          type="checkbox"
          checked={analytics}
          onChange={(event) => setAnalytics(event.target.checked)}
        />
      </label>
      <label className="choice-row">
        <span>
          <strong>Targeted advertising</strong>
          <small>Allow advertising tags and cross-context behavioral advertising.</small>
        </span>
        <input
          type="checkbox"
          checked={advertising}
          onChange={(event) => setAdvertising(event.target.checked)}
        />
      </label>
      <button className="button button--primary btn btn--cta" type="button" onClick={save}>
        Save privacy choices
      </button>
      {saved ? <p role="status">Your choices have been saved on this device.</p> : null}
    </section>
  );
}
