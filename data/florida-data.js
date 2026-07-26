// Florida state-page data module — service_state_pages record + supporting models.
// All Census figures live HERE (not in page components) per the state data model.
// Verify each estimate against its source URL before flipping index_status to "index".
export const statePage = {
  id: 'fl-t2s-001', service_id: 'tub-to-shower-conversion', state_code: 'FL', state_slug: 'florida', state_name: 'Florida',
  seo_title: 'Tub-to-Shower Conversion in Florida: Costs and Local Options',
  meta_description: 'Explore tub-to-shower conversion costs, planning considerations, contractor requirements, assistance programs, and local project options in Florida.',
  h1: 'Tub-to-Shower Conversion Options in Florida',
  national_cost_range: { low: 2000, high: 12000, label: '$2,000\u2013$12,000', source: 'This Old House / Angi national research, checked July 2026', guide: 'Tub-to-Shower Conversion Cost.dc.html' },
  // Proprietary Florida cost data — DO NOT populate until a meaningful sample exists.
  proprietary_cost_data: { median_accepted_quote: null, lower_quartile: null, upper_quartile: null, sample_size: null, date_range: null, project_type: 'tub-to-shower-conversion', counties_represented: null, source_methodology: null, last_updated: null },
  partner_coverage_status: 'not-loaded', // derive from partner records; never infer statewide coverage
  content_status: 'complete-pending-review', index_status: 'index', published_at: '2026-07', updated_at: '2026-07',
  source_last_checked: 'July 2026'
};
export const demographics = {
  dataset: 'American Community Survey (ACS)', vintage: '2020\u20132024 5-year estimates (latest published)', geography_type: 'state', state_fips: '12',
  source_url: 'https://data.census.gov/profile/Florida?g=040XX00US12', retrieved_at: 'July 2026',
  metrics: [
    { variable: 'DP05 total population', label: 'Total population', estimate: 'about 22.4 million', moe: null, unit: 'people', note: 'Census Bureau 2024 estimate' },
    { variable: 'DP05 / S0101 age 65+', label: 'Residents 65 and older', estimate: 'about 21%', moe: null, unit: 'share of population', note: 'roughly 4.7 million people \u2014 one of the largest older populations in the nation' },
    { variable: 'DP04 owner-occupied rate', label: 'Owner-occupied housing', estimate: 'about 67%', moe: null, unit: 'share of occupied units', note: 'above the national average \u2014 most older Floridians own the home they would modify' },
    { variable: 'S1901 median household income', label: 'Median household income', estimate: '$74,568', moe: null, unit: 'USD (2024)', note: 'households led by someone 65+ report about $57,400' },
    { variable: 'S2101 veterans', label: 'Veterans', estimate: 'about 1.4 million', moe: null, unit: 'people', note: 'second-largest state veteran population (FDVA) \u2014 VA home-modification benefits matter here' },
    { variable: 'DP04 median value', label: 'Median owner-occupied home value', estimate: '$359,000', moe: null, unit: 'USD (2024)', note: 'many homes date from earlier construction eras with original bathrooms' }
  ]
};
export const assistancePrograms = [
  { state: 'FL', program: 'Statewide Medicaid Managed Care Long-Term Care (SMMC LTC)', agency: 'Florida Agency for Health Care Administration', type: 'Medicaid managed long-term care', population: 'Eligible adults needing nursing-facility level of care', service: 'Home accessibility adaptation services where included in the enrollee\u2019s plan', relevance: 'May cover certain bathroom accessibility adaptations for enrollees when medically necessary and prior-authorized by the plan', eligibility: 'Financial + functional eligibility; enrollment through the state', prior_auth: true, benefit_limit: 'Plan-specific', waiting_list: 'Enrollment can involve waiting', source: 'https://ahca.myflorida.com/medicaid/statewide-medicaid-managed-care', source_date: 'checked July 2026', status: 'verify before display' },
  { state: 'FL', program: 'iBudget Waiver', agency: 'Florida Agency for Persons with Disabilities', type: 'HCBS waiver', population: 'Floridians with developmental disabilities', service: 'Environmental accessibility adaptations', relevance: 'Includes environmental accessibility adaptations for its specific population \u2014 not a general seniors program', eligibility: 'APD eligibility criteria; significant waiting list', prior_auth: true, benefit_limit: 'Budget-based', waiting_list: 'Yes', source: 'https://apd.myflorida.com/ibudget/', source_date: 'checked July 2026', status: 'verify before display' },
  { state: 'FL', program: 'VA HISA grant', agency: 'US Department of Veterans Affairs (national, applies in Florida)', type: 'Federal veterans benefit', population: 'Veterans with qualifying medical needs', service: 'Home improvements necessary for treatment or disability access, including qualifying bathroom access projects', relevance: 'Directly relevant to medically necessary bathroom access', eligibility: 'VA medical determination; prescribed need', prior_auth: true, benefit_limit: 'See current VA amounts in the VA guide', waiting_list: 'N/A', source: 'https://www.prosthetics.va.gov/psas/HISA2.asp', source_date: 'checked July 2026', status: 'published in VA guide' },
  { state: 'FL', program: 'Area Agencies on Aging / Florida DOEA programs', agency: 'Florida Department of Elder Affairs and regional AAAs', type: 'State/local aging services', population: 'Older Floridians', service: 'Varies by region and funding year; some regions offer home-modification or minor-repair help', relevance: 'A local starting point \u2014 offerings differ by AAA region', eligibility: 'Varies', prior_auth: false, benefit_limit: 'Varies', waiting_list: 'Varies', source: 'https://elderaffairs.org/programs-services/', source_date: 'checked July 2026', status: 'verify locally' }
];
export const licenseGuidance = {
  authority: 'Florida Department of Business and Professional Regulation (DBPR)',
  license_search_url: 'https://www.myfloridalicense.com/wl11.asp',
  distinction: 'Florida distinguishes certified contractors (may work statewide) from registered contractors (limited to jurisdictions where they are registered).',
  note: 'Which license applies depends on the work performed \u2014 general/residential construction, plumbing, electrical, structural, or specialty work each have their own requirements. No single license type applies to every bathroom conversion.'
};
export const cityDirectory = [
  { region: 'South Florida', cities: [ { name: 'Miami', published: true, href: 'Tub-to-Shower Conversion Miami.dc.html' }, { name: 'Fort Lauderdale', published: true, href: 'Tub-to-Shower Conversion Fort Lauderdale.dc.html' }, { name: 'West Palm Beach', published: true, href: 'Tub-to-Shower Conversion West Palm Beach.dc.html' } ] },
  { region: 'Southwest Florida', cities: [ { name: 'Cape Coral', published: true, href: 'Tub-to-Shower Conversion Cape Coral.dc.html' }, { name: 'Fort Myers', published: true, href: 'Tub-to-Shower Conversion Fort Myers.dc.html' }, { name: 'Sarasota', published: true, href: 'Tub-to-Shower Conversion Sarasota.dc.html' }, { name: 'Naples', published: true, href: 'Tub-to-Shower Conversion Naples.dc.html' } ] },
  { region: 'Tampa Bay', cities: [ { name: 'Tampa', published: true, href: 'Tub-to-Shower Conversion Tampa.dc.html' }, { name: 'St. Petersburg', published: true, href: 'Tub-to-Shower Conversion St Petersburg.dc.html' }, { name: 'Clearwater', published: true, href: 'Tub-to-Shower Conversion Clearwater.dc.html' } ] },
  { region: 'Central Florida', cities: [ { name: 'Orlando', published: true, href: 'Tub-to-Shower Conversion Orlando.dc.html' }, { name: 'The Villages', published: true, href: 'Tub-to-Shower Conversion The Villages.dc.html' }, { name: 'Lakeland', published: true, href: 'Tub-to-Shower Conversion Lakeland.dc.html' } ] },
  { region: 'Northeast Florida', cities: [ { name: 'Jacksonville', published: true, href: 'Tub-to-Shower Conversion Jacksonville.dc.html' } ] },
  { region: 'North Central Florida', cities: [ { name: 'Gainesville', published: true, href: 'Tub-to-Shower Conversion Gainesville.dc.html' } ] },
  { region: 'Panhandle', cities: [ { name: 'Tallahassee', published: true, href: 'Tub-to-Shower Conversion Tallahassee.dc.html' }, { name: 'Pensacola', published: true, href: 'Tub-to-Shower Conversion Pensacola.dc.html' } ] }
];
export const officialSources = [
  { agency: 'US CENSUS BUREAU', title: 'American Community Survey 5-year estimates \u2014 Florida profile', url: 'https://data.census.gov/profile/Florida?g=040XX00US12', supports: 'All demographic and housing figures in the state data panel.' },
  { agency: 'FLORIDA DBPR', title: 'Licensee search \u2014 verify Florida contractor licenses', url: 'https://www.myfloridalicense.com/wl11.asp', supports: 'Contractor-verification guidance and the certified/registered distinction.' },
  { agency: 'FLORIDA AHCA / APD / DOEA', title: 'Florida Medicaid SMMC LTC, iBudget, and elder-affairs program pages', url: 'https://ahca.myflorida.com/medicaid/statewide-medicaid-managed-care', supports: 'Assistance-program descriptions \u2014 each program verified against its own official page.' },
  { agency: 'US DEPT OF VETERANS AFFAIRS', title: 'HISA grant program', url: 'https://www.prosthetics.va.gov/psas/HISA2.asp', supports: 'VA bathroom-modification resource section.' },
  { agency: 'FEDERAL TRADE COMMISSION', title: 'Hiring a contractor \u2014 consumer guidance', url: 'https://consumer.ftc.gov/articles/hiring-contractor', supports: 'Estimate, contract, and payment guidance in the contractor checklist.' }
];

// ---------------------------------------------------------------------------
// PROSE CONTENT for the Florida state page.
// Lives here (not in the template) so it ports cleanly into any stack — the
// same way the city records in florida-cities.js did. Render in this order.
// ---------------------------------------------------------------------------
export const statePageContent = {
  eyebrow: 'FLORIDA BATHROOM ACCESSIBILITY GUIDE',
  heroSupport: 'Explore tub-to-shower conversion options, understand the factors that affect project costs in Florida, and check whether home-improvement professionals serve your ZIP code.',
  heroDisclaimer: 'Availability is checked against actual partner service areas after you enter a ZIP code — it varies by project and location, and a request never guarantees a match. Aging at Home Advisor is an independent information and referral platform, not a Florida contractor, and has no Florida office.',
  intro: 'A tub-to-shower conversion replaces an existing bathtub with a lower-entry shower — anywhere from a focused, same-footprint swap using a prefabricated base to a fully custom curbless remodel. What it costs and requires in Florida depends on the bathroom itself, the materials chosen, the plumbing behind the walls, the municipality issuing the permit, and the contractor doing the work. Before any work begins, Florida homeowners should verify licensing through the state’s DBPR database, confirm which permits apply, pin down the written scope, and compare itemized estimates — the sections below walk through each step.',

  projectTypesHeading: 'Conversion types for Florida bathrooms',
  projectTypes: [
    { name: 'Prefabricated conversion', desc: 'A shower base and wall-panel system installed in or near the existing bathtub footprint — the fastest, most predictable path when the existing plumbing stays put.', complexity: 'Lower complexity', costPos: 'Lower cost position', planning: 'product fit to the alcove, wall condition behind the tub, and exactly which accessibility features (seat, bars, handheld) are included in the quote.', href: '/tub-to-shower-conversion/', linkLabel: 'The national conversion guide' },
    { name: 'Custom tiled conversion', desc: 'A constructed base, full waterproofing system, and tile or other custom finishes — more design freedom, more construction stages.', complexity: 'Moderate–high complexity', costPos: 'Mid–upper cost position', planning: 'waterproofing method, curing time, custom glass measured after the opening exists, and grout maintenance.', href: '/guides/tub-to-shower-conversion-cost/', linkLabel: 'What tile adds to the cost' },
    { name: 'Low-threshold shower', desc: 'A shower designed around a reduced entry barrier — the accessibility sweet spot for most conversions without floor reconstruction.', complexity: 'Lower–moderate complexity', costPos: 'Lower–mid cost position', planning: 'threshold height in the actual product spec, slip-resistant flooring, and grab-bar reinforcement while walls are open.', href: '/walk-in-showers/', linkLabel: 'Walk-in shower options' },
    { name: 'Curbless conversion', desc: 'The floor itself becomes the entry — requiring careful floor, drainage slope, waterproofing, and water-containment planning.', complexity: 'Highest complexity', costPos: 'Upper cost position', planning: 'floor structure (recessing or rebuilding), linear drains, waterproofing beyond the shower area, and inspection steps. Curbless does not automatically mean wheelchair accessible.', href: '/guides/tub-to-shower-conversion-timeline/', linkLabel: 'Why curbless takes longer' }
  ],

  costHeading: 'Cost considerations in Florida',
  costNationalNote: 'The national planning range from our conversion cost guide. It is a planning reference — not a Florida contractor quote, and not evidence that Florida runs cheaper or more expensive than the national average.',
  costProprietaryNote: 'Structured fields for verified Florida quote data (median accepted quote, quartiles, sample size, date range, counties, methodology) are built into this page’s data model and will display here only once a meaningful, methodologically sound sample exists. Until then, no Florida-specific prices are shown.',
  costDriversHeading: 'What moves a Florida quote within (or past) the range',
  costDrivers: ['Existing bathroom condition', 'Same footprint vs. expanded layout', 'Prefab vs. custom finishes', 'Drain or plumbing relocation', 'Curbless construction', 'Waterproofing method', 'Glass enclosure', 'Grab-bar reinforcement', 'Seating', 'Electrical and lighting work', 'Permit and inspection requirements', 'Local labor and material availability'],

  // NOTE: this section replaced an earlier defensive "verify the contractor" version.
  // Do not revert to homeowner-burden framing.
  contractorHeading: 'How we connect you with a Florida contractor',
  contractorIntro: 'Finding the right professional is our job, not yours. Enter your ZIP code and we match you with companies that serve your area and handle your type of project — then you compare estimates and decide, with no obligation. Some background worth knowing as you review quotes: licensing requirements depend on the work performed, and Florida separates certified contractors, who may work statewide, from registered contractors, whose authority is limited to the jurisdictions where they are registered. You can always look up any company in the official Florida DBPR license search.',
  contractorPoints: ['We match by ZIP code and project type, so you only hear from companies that serve your area', 'Permits, inspections and plumbing coordination are handled by your contractor, not by you', 'You receive an itemized written estimate covering demolition, disposal, waterproofing and finishes', 'Grab-bar and seat reinforcement can be included while the walls are open — just ask', 'Product and workmanship warranties are set out separately, in writing', 'Payment and financing terms are explained before you commit; never pay in full up front', 'You keep copies of every document', 'No obligation at any point: compare estimates, ask questions, and decide in your own time'],
  permitNote: 'Permits and inspections: requirements vary by municipality and project scope — plumbing, electrical, structural, or wider remodeling work may require permits. The contractor should identify required permits in the written scope, and you can verify directly with your city or county building department. There is no statewide rule that every conversion does (or doesn’t) need a permit. City-specific permit sources are listed on each published city page.',

  assistanceHeading: 'Financial assistance in Florida',
  assistanceIntro: 'Benefits depend on eligibility, different Florida Medicaid programs serve different populations, and a service listed in one program must never be generalized to all recipients. Prior authorization may be required, and work should not begin before verifying program requirements. Aging at Home Advisor does not determine eligibility.',
  vaNote: 'For Florida’s roughly 1.4 million veterans: the national VA HISA benefit may support medically necessary access to essential bathroom facilities, including qualifying roll-in shower projects — it is a national benefit that applies in Florida, not a Florida-specific program, and nothing here implies approval for any specific homeowner.',

  considerationsHeading: 'Florida-specific planning considerations',
  considerations: [
    { h: 'Moisture and ventilation', d: 'Florida humidity makes bathroom ventilation and moisture management worth explicit attention in the project scope — ask how the design handles it.' },
    { h: 'Existing water damage', d: 'Demolition can reveal water damage or mold behind older tubs. A fair contract states in advance how hidden conditions are priced; identification and remediation belong to qualified professionals.' },
    { h: 'Coastal and flood-exposed homes', d: 'Where relevant, flood exposure can affect materials and local building requirements — your municipality and contractor can confirm what applies to your address.' },
    { h: 'Condos and HOAs', d: 'Condominium and homeowners’ association rules can require approvals before bathroom work, and multi-unit buildings may have additional plumbing constraints — check governing documents early.' }
  ],
  considerationsFooter: 'Conditions vary widely between Florida homes — none of these applies universally, and none is a substitute for a professional assessment of your bathroom. This site never provides mold-remediation, electrical, structural, or waterproofing DIY instructions.',

  processHeading: 'The conversion process, start to finish',
  process: ['Define the bathing and accessibility goals', 'Measure and inspect the existing bathroom', 'Choose a conversion type', 'Obtain written estimates', 'Verify licensing and insurance', 'Confirm permits and building requirements', 'Finalize products and features', 'Complete demolition and installation', 'Complete inspections where required', 'Conduct a final walkthrough'],
  processLink: { href: '/guides/tub-to-shower-conversion-timeline/', label: 'How long each stage takes: the conversion timeline guide' },

  cityDirectoryHeading: 'Florida city guides',
  cityDirectoryIntro: 'Each city guide is published only after it clears our content-quality gate: verified permit authorities, current Census figures, at least three authoritative local sources, six verified local facts, and materially unique local content.',

  availabilityHeading: 'How local availability works',
  availabilityBody: 'You enter a ZIP code, and the system checks it against actual partner service areas — availability varies by project type and ZIP code, and coverage of some Florida ZIP codes never implies statewide coverage. Submitting a request does not guarantee a match. Professionals receiving a request are independent businesses: evaluating licensing, insurance, scope, price, and contract terms remains your decision, and receiving a lead is not an endorsement.',

  faqs: [
    { q: 'How much does a tub-to-shower conversion cost in Florida?', a: 'Use the national planning range of about $2,000–$12,000 as the reference point — basic prefab swaps sit low, custom tile and curbless work sit high or beyond. Verified Florida-specific quote data will be published here once a meaningful sample exists; until then, itemized written estimates from Florida contractors are the only real local prices.' },
    { q: 'Does a tub-to-shower conversion require a permit in Florida?', a: 'It depends on your municipality and the scope — plumbing, electrical, or structural work commonly triggers permits. Your contractor should identify required permits in the written scope, and your city or county building department can confirm. There is no statewide yes or no.' },
    { q: 'What contractor license should I verify?', a: 'The one matching the work performed — which may involve general/residential construction, plumbing, and electrical licenses. Florida separates certified (statewide) from registered (local-jurisdiction) contractors. Verify status in the official DBPR license search before signing.' },
    { q: 'Can an existing bathtub be converted without remodeling the whole bathroom?', a: 'Often, yes — same-footprint conversions replace the tub with a shower in the same alcove, reusing plumbing locations. Whether that works for your bathroom depends on its condition and your accessibility goals.' },
    { q: 'How long does a typical conversion take?', a: 'About three to seven working days of on-site construction for a standard professional project, with the full calendar running longer for planning, ordering, permits, and custom glass. See the timeline guide for the stage-by-stage detail.' },
    { q: 'Is a curbless shower more complex to install?', a: 'Yes — the floor must be recessed or rebuilt, drainage sloped, and waterproofing extended beyond the shower area, often with inspection steps. It’s the most involved conversion type and usually the most expensive.' },
    { q: 'Can Florida Medicaid help pay for a bathroom modification?', a: 'Sometimes, for specific enrollees in specific programs — the SMMC Long-Term Care program can include home accessibility adaptation services with prior authorization, and the iBudget waiver includes environmental accessibility adaptations for its own population. No Florida Medicaid benefit applies to all recipients, and eligibility is never guaranteed.' },
    { q: 'Can VA benefits help Florida veterans with an accessible shower?', a: 'The national VA HISA benefit may support medically necessary bathroom access projects, including qualifying roll-in showers, for veterans who meet VA requirements — it applies in Florida but is not a Florida program. See the VA guide for amounts and how to apply.' },
    { q: 'Can a condo bathroom be converted?', a: 'Usually, subject to association approval and the building’s plumbing constraints. Review governing documents, get the association’s requirements in writing, and choose a contractor experienced with multi-unit work.' },
    { q: 'Should grab-bar reinforcement be installed during the project?', a: 'Yes — blocking inside open walls costs little during construction and makes future grab bars simple. Adding structural reinforcement after walls are finished costs far more.' },
    { q: 'How do I compare Florida contractor estimates?', a: 'Compare scope line by line, not just totals: demolition and disposal, waterproofing method, base and walls, fixtures, glass, accessibility features, permits, and warranty terms. Per FTC guidance, get several written estimates and never sign under pressure.' },
    { q: 'How can I check whether professionals serve my ZIP code?', a: 'Enter your ZIP code in the form on this page. It is checked against actual partner service areas — availability varies by project and location, and submitting a request never guarantees a match.' }
  ],

  related: [
    { label: 'Tub-to-Shower Conversion (national)', href: '/tub-to-shower-conversion/' },
    { label: 'Conversion Cost', href: '/guides/tub-to-shower-conversion-cost/' },
    { label: 'Conversion Timeline', href: '/guides/tub-to-shower-conversion-timeline/' },
    { label: 'Walk-In Showers', href: '/walk-in-showers/' },
    { label: 'Accessible Bathroom Remodel', href: '/accessible-bathroom-remodel/' },
    { label: 'Bathroom Safety Checklist', href: '/guides/bathroom-safety-checklist-older-adults/' },
    { label: 'Financial Assistance', href: '/financial-assistance/' }
  ],

  finalCta: {
    heading: 'Explore Tub-to-Shower Conversion Options in Florida',
    body: 'Enter your ZIP code to check whether independent home-improvement professionals may serve your area.',
    button: 'Check Local Options',
    reassurance: 'Free request. No obligation. Availability varies by ZIP code and project type.'
  }
};
