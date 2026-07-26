"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const consentText =
  "I agree that Aging at Home Advisor and home-improvement professionals receiving my request may contact me by telephone, email, or text message regarding the project I selected. I understand that I may revoke this permission at any time.";

const projectOptions = [
  ["tub_to_shower_conversion", "Tub-to-shower conversion"],
  ["walk_in_shower", "Walk-in shower"],
  ["walk_in_tub", "Walk-in tub"],
  ["accessible_remodel", "Accessible bathroom remodel"],
  ["not_sure", "Not sure yet"],
] as const;

const homeownerOptions = [
  ["own", "Yes"],
  ["rent", "No"],
  ["other", "Helping a family member"],
] as const;

const setupOptions = [
  ["bathtub", "Bathtub"],
  ["shower_only", "Standard shower"],
  ["walk_in_shower", "Walk-in shower"],
  ["other", "Other"],
  ["not_sure", "Not sure"],
] as const;

const timingOptions = [
  ["asap", "As soon as possible"],
  ["1_3_months", "Within 1–3 months"],
  ["3_6_months", "Within 3–6 months"],
  ["researching", "Just researching"],
] as const;

type LeadFormProps = {
  initialZip: string;
  initialProject: string;
  source: string;
  pageType: string;
  city: string;
};

function ChoiceGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: ReadonlyArray<readonly [string, string]>;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="lead-fieldset">
      <legend>{legend}</legend>
      <div className="lead-choice-grid">
        {options.map(([optionValue, label]) => (
          <label
            className={`lead-choice ${value === optionValue ? "lead-choice--selected" : ""}`}
            key={optionValue}
          >
            <input
              type="radio"
              name={name}
              value={optionValue}
              checked={value === optionValue}
              onChange={() => onChange(optionValue)}
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function LeadForm({
  initialZip,
  initialProject,
  source,
  pageType,
  city,
}: LeadFormProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [zip, setZip] = useState(initialZip);
  const [projectType, setProjectType] = useState(initialProject);
  const [homeownerStatus, setHomeownerStatus] = useState("");
  const [currentSetup, setCurrentSetup] = useState("");
  const [timing, setTiming] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  function continueToDetails(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\d{5}$/.test(zip)) {
      setError("Please enter a 5-digit ZIP code.");
      return;
    }
    if (!projectType) {
      setError("Please choose a project type, or select “Not sure yet.”");
      return;
    }
    setError("");
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!firstName.trim()) {
      setError("Please enter your first name.");
      return;
    }
    if (!/^1?\d{10}$/.test(phone.replace(/\D/g, ""))) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!homeownerStatus || !currentSetup || !timing) {
      setError("Please answer each project question.");
      return;
    }
    if (!consent) {
      setError("Please review and check the contact-permission box to continue.");
      return;
    }

    setSending(true);
    setError("");
    const query = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries(
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"]
        .map((key) => [key, query.get(key) ?? ""])
        .filter(([, value]) => value),
    );

    try {
      const response = await fetch("/api/leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName.trim(),
          phone,
          email: email.trim(),
          zip,
          project_type: projectType,
          homeowner_status: homeownerStatus,
          current_setup: currentSetup === "not_sure" ? "other" : currentSetup,
          timing,
          tcpa_consent: consent,
          tcpa_consent_text: consentText,
          tcpa_consent_version: "v1.0-2026-07",
          consent_timestamp: new Date().toISOString(),
          source_url: window.location.href,
          page_type: pageType || "lead_form",
          city_page_slug: city,
          source: source || "lead_form",
          referrer: document.referrer,
          landing_page: window.location.href,
          device_type:
            window.innerWidth <= 640
              ? "mobile"
              : window.innerWidth <= 1024
                ? "tablet"
                : "desktop",
          privacy_policy_version: "2026-07",
          terms_version: "2026-07",
          ...attribution,
        }),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "The request could not be sent.");
      }
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError(
        "We could not send your request right now. Please try again or call (833) 363-2420.",
      );
    } finally {
      setSending(false);
    }
  }

  if (step === 3) {
    return (
      <section className="lead-card card card--lg lead-complete" aria-live="polite">
        <span className="lead-complete__check" aria-hidden="true">✓</span>
        <h1>Thank you — request received</h1>
        <p className="lead">
          We&apos;ll check whether independent professionals serve ZIP code{" "}
          <strong>{zip}</strong> for your project, and someone may contact you to
          discuss it. Availability varies by ZIP code and project type.
        </p>
        <div className="row">
          <Link className="btn btn--teal" href="/">Back to Home</Link>
          <Link className="btn btn--ghost" href="/financial-assistance/">
            Explore Financial Assistance
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="lead-progress">
        <div className="row">
          <strong>{step === 1 ? "Step 1 of 2 — Your project" : "Step 2 of 2 — About your home"}</strong>
          <span className="meta">No obligation · Free to use</span>
        </div>
        <div
          className="lead-progress__track"
          role="progressbar"
          aria-label="Form progress"
          aria-valuemin={1}
          aria-valuemax={2}
          aria-valuenow={step}
        >
          <span style={{ width: step === 1 ? "50%" : "100%" }} />
        </div>
      </div>

      {step === 1 ? (
        <form className="lead-card card card--lg" onSubmit={continueToDetails} noValidate>
          <h1>What project are you considering?</h1>
          <label className="field lead-zip">
            ZIP code
            <input
              name="zip"
              inputMode="numeric"
              autoComplete="postal-code"
              value={zip}
              onChange={(event) => setZip(event.target.value.replace(/\D/g, "").slice(0, 5))}
              placeholder="e.g. 33629"
            />
          </label>
          <ChoiceGroup
            legend="Project type"
            name="project_type"
            options={projectOptions}
            value={projectType}
            onChange={setProjectType}
          />
          {error ? <p className="form-error note" role="alert">{error}</p> : null}
          <button className="btn btn--cta" type="submit">Continue</button>
        </form>
      ) : (
        <form className="lead-card card card--lg" onSubmit={submit} noValidate>
          <div>
            <h1>Tell us a little more</h1>
            <button
              className="lead-back"
              type="button"
              onClick={() => {
                setStep(1);
                setError("");
              }}
            >
              ← Back to step 1
            </button>
          </div>

          <ChoiceGroup
            legend="Do you own the home?"
            name="homeowner_status"
            options={homeownerOptions}
            value={homeownerStatus}
            onChange={setHomeownerStatus}
          />
          <ChoiceGroup
            legend="What is currently in the bathroom?"
            name="current_setup"
            options={setupOptions}
            value={currentSetup}
            onChange={setCurrentSetup}
          />
          <ChoiceGroup
            legend="When are you hoping to begin?"
            name="timing"
            options={timingOptions}
            value={timing}
            onChange={setTiming}
          />

          <div className="grid">
            <label className="field">
              First name
              <input
                autoComplete="given-name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </label>
            <label className="field">
              Phone number
              <input
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </label>
            <label className="field">
              Email address
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>

          <div className="card card--panel lead-notice">
            <span className="stat-label">Notice at collection</span>
            <p className="fine">
              ROI PERFORMANCE LLC, doing business as Aging at Home Advisor,
              collects the information you submit to respond to your request,
              determine whether service professionals may serve your area, share
              the inquiry with applicable home-improvement professionals,
              communicate with you, maintain consent and compliance records,
              prevent fraud, and measure website and advertising performance.
              Depending on applicable law, disclosure to service professionals
              or use of advertising technologies may be considered a sale,
              sharing, or targeted advertising. See the full{" "}
              <Link href="/notice-at-collection/">Notice at Collection</Link> and{" "}
              <Link href="/your-privacy-choices/">Your Privacy Choices</Link>.
            </p>
            <label className="lead-consent">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
              />
              <span>{consentText}</span>
            </label>
            <p className="fine">
              This permission does not authorize prerecorded or artificial-voice
              calls or automated marketing texts — any such program requires
              separate, specifically identified consent. Consent records
              (wording, version, timestamp, IP, user agent, source URL,
              recipients) are stored.
            </p>
          </div>

          <p className="fine">
            By submitting this form, you request information about the selected
            home-improvement project selected and acknowledge that Aging at Home Advisor
            may share your information with independent professionals that may
            serve your area. You agree to the{" "}
            <Link href="/privacy-policy/">Privacy Policy</Link> and{" "}
            <Link href="/terms/">Terms</Link>. Consent to receive marketing
            communications is not a condition of purchasing any goods or services.
          </p>
          {error ? <p className="form-error note" role="alert">{error}</p> : null}
          <button className="btn btn--cta" type="submit" disabled={sending}>
            {sending ? "Sending…" : "See My Options"}
          </button>
          <p className="fine lead-form-fine">
            No obligation. Your information will be used to help respond to your request.
          </p>
        </form>
      )}
    </>
  );
}
