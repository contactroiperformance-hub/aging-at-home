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
