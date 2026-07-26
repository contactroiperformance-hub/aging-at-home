const endpoint = "https://roiperformance.leadbyte.co.uk/api/submit.php";

const allowedProjects = new Set([
  "walk_in_tub",
  "walk_in_shower",
  "tub_to_shower_conversion",
  "accessible_remodel",
  "not_sure",
]);
const allowedHomeowner = new Set(["own", "rent", "other"]);
const allowedSetup = new Set(["bathtub", "tub_shower_combo", "shower_only", "walk_in_tub", "walk_in_shower", "other"]);
const allowedTiming = new Set(["asap", "1_3_months", "3_6_months", "researching"]);

function text(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let input: Record<string, unknown>;
  try {
    input = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const phone = text(input.phone).replace(/\D/g, "");
  const zip = text(input.zip, 5);
  const projectType = text(input.project_type, 40);
  const homeownerStatus = text(input.homeowner_status, 20);
  const currentSetup = text(input.current_setup, 40);
  const timing = text(input.timing, 20);
  const email = text(input.email, 200);
  const consent = input.tcpa_consent === true;

  if (
    !text(input.first_name, 100) ||
    !/^1?\d{10}$/.test(phone) ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ||
    !/^\d{5}$/.test(zip) ||
    !allowedProjects.has(projectType) ||
    !allowedHomeowner.has(homeownerStatus) ||
    !allowedSetup.has(currentSetup) ||
    !allowedTiming.has(timing) ||
    !consent
  ) {
    return Response.json(
      { ok: false, message: "Please complete every required field." },
      { status: 400 },
    );
  }

  const forwarded = request.headers.get("cf-connecting-ip")
    ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? "";
  const payload = new URLSearchParams({
    campid: "BATHROOM-REMODELING",
    sid: "1",
    returnjson: "yes",
    first_name: text(input.first_name, 100),
    phone,
    email,
    zip,
    state: "FL",
    project_type: projectType,
    homeowner_status: homeownerStatus,
    current_setup: currentSetup,
    timing,
    tcpa_consent: "true",
    tcpa_consent_text: text(input.tcpa_consent_text, 2000),
    tcpa_consent_version: text(input.tcpa_consent_version, 40),
    consent_timestamp: text(input.consent_timestamp, 50),
    ip_address: forwarded,
    user_agent: text(request.headers.get("user-agent"), 500),
    source_url: text(input.source_url, 1000),
    page_type: text(input.page_type, 40),
    city_page_slug: text(input.city_page_slug, 100),
    source: text(input.source, 200),
    referrer: text(input.referrer, 1000),
    landing_page: text(input.landing_page, 1000),
    device_type: text(input.device_type, 20),
    privacy_policy_version: text(input.privacy_policy_version, 40),
    terms_version: text(input.terms_version, 40),
  });

  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
  ]) {
    const value = text(input[key], 500);
    if (value) payload.set(key, value);
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload,
    });
    const raw = await response.text();
    let result: Record<string, unknown> = {};
    try {
      result = JSON.parse(raw) as Record<string, unknown>;
    } catch {
      result = {};
    }
    const delivered =
      response.ok &&
      (result.success === true || result.status === "success" || result.result === "success");
    if (!delivered) {
      return Response.json(
        { ok: false, message: "The request could not be delivered." },
        { status: 502 },
      );
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, message: "The request could not be delivered." },
      { status: 502 },
    );
  }
}
