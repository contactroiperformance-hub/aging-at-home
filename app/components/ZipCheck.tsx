"use client";

import { FormEvent, useState } from "react";

export function ZipCheck({
  compact = false,
  label = "Check project options",
}: {
  compact?: boolean;
  label?: string;
}) {
  const [error, setError] = useState("");

  function validate(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const data = new FormData(form);
    const zip = String(data.get("zip") ?? "").trim();
    if (!/^\d{5}$/.test(zip)) {
      event.preventDefault();
      setError("Enter a 5-digit ZIP code.");
      return;
    }
    setError("");
  }

  return (
    <form
      className={`zip-check ${compact ? "zip-check--compact" : ""}`}
      action="/contact/"
      method="get"
      onSubmit={validate}
      noValidate
    >
      <label htmlFor={compact ? "zip-compact" : "zip-main"}>Your ZIP code</label>
      <div className="zip-check__row">
        <input
          id={compact ? "zip-compact" : "zip-main"}
          name="zip"
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={5}
          pattern="[0-9]{5}"
          aria-describedby={error ? "zip-error" : undefined}
          placeholder="e.g. 33602"
        />
        <button type="submit">{label}</button>
      </div>
      {error ? (
        <span id="zip-error" className="form-error" role="alert">
          {error}
        </span>
      ) : null}
      <small>
        Free request. No obligation. Availability varies by ZIP code and project type.
      </small>
    </form>
  );
}

