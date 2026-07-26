"use client";

import { FormEvent, useId, useState } from "react";

export function ZipCheck({
  compact = false,
  label = "Check project options",
}: {
  compact?: boolean;
  label?: string;
}) {
  const [error, setError] = useState("");
  const id = useId();
  const inputId = `zip-${id.replace(/:/g, "")}`;
  const errorId = `${inputId}-error`;

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
      className={`zip-check field ${compact ? "zip-check--compact" : ""}`}
      action="/lead-form/"
      method="get"
      onSubmit={validate}
      noValidate
    >
      <label htmlFor={inputId}>Your ZIP code</label>
      <div className="zip-check__row">
        <input
          id={inputId}
          name="zip"
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          maxLength={5}
          pattern="[0-9]{5}"
          aria-describedby={error ? errorId : undefined}
          placeholder="e.g. 33602"
        />
        <button className="btn btn--cta" type="submit">{label}</button>
      </div>
      {error ? (
        <span id={errorId} className="form-error" role="alert">
          {error}
        </span>
      ) : null}
      <small className="fine">
        Free request. No obligation. Availability varies by ZIP code and project type.
      </small>
    </form>
  );
}
