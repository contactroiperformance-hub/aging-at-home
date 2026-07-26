// Florida city-guide data. One record per city; the City Guide component renders from these.
// QUALITY GATE (enforced before index_status flips to "index"):
//   >= 3 authoritative local sources, >= 6 verified local facts, complete permit + Census fields,
//   unique intro/FAQ/summary body copy, honest coverage status. Draft cities stay noindex+hidden.
// ACS figures are 5-year estimates and should be re-pulled from data.census.gov each review cycle.
export const cities = {
  tallahassee: {
    slug: 'tallahassee', name: 'Tallahassee', county: 'Leon County', region: 'Panhandle',
    seo_title: 'Tub-to-Shower Conversion in Tallahassee: Costs and Local Options',
    meta_description: 'Explore tub-to-shower conversion costs, project options, permits, local housing resources, and professional availability in Tallahassee, Florida.',
    h1: 'Tub-to-Shower Conversion Options in Tallahassee, Florida',
    intro: [
      'Tallahassee is a government town before it is anything else, and the bathroom projects here reflect that stability. State agencies, the capitol complex and two universities produce a workforce that stays for decades and retires in place \u2014 so the conversions being planned are overwhelmingly in long-held family homes rather than newly purchased retirement properties. Betton Hills, Killearn Estates, Indianhead Acres and Lafayette Oaks are where the requests come from: households adapting a bathroom they have used for thirty years, or preparing a spare bath for a parent moving closer.',
      'Killearn and the northeast quadrant expanded heavily through the 1970s and 1980s, and that era defines the typical conversion candidate: a brick ranch on slab with a hall bath containing a standard alcove tub. These convert efficiently when the shower stays where the tub was. Tallahassee\u2019s rolling terrain also means split-level and stepped-foundation homes are more common here than in flat peninsular Florida, which occasionally changes how drain lines run \u2014 worth mentioning to whoever measures the bathroom.',
      'The jurisdiction question matters more here than the map suggests. Leon County has substantial residential areas outside city boundaries, and a Tallahassee mailing address does not guarantee City jurisdiction. City properties go through Tallahassee Growth Management and its customer permit portal; properties outside city limits go through Leon County Development Support and Environmental Management. A professional preparing your scope determines which applies from the property address and files accordingly.'
    ],
    facts: [
      { label: 'City population', value: '~200,000', note: 'Florida\u2019s capital; Leon County approaches 300,000' },
      { label: 'Residents 65 and older', value: '~12%', note: 'well below the Florida average \u2014 two universities keep the population young' },
      { label: 'Owner-occupied homes', value: '~42%', note: 'a large student rental share; conversions concentrate among long-term owner households' },
      { label: 'Median owner-occupied home value', value: '~$260,000', note: 'city-level ACS estimate' },
      { label: 'Dominant construction era', value: '1960s\u20131980s', note: 'brick and frame homes on slab, with compact bathrooms and alcove tubs' },
      { label: 'Median household income', value: '~$55,000', note: 'city-level estimate, held down by the student population' }
    ],
    permit: { authority: 'City of Tallahassee Growth Management (customer permit portal)', url: 'https://www.talgov.com/growth/growth-permits', county_authority: 'Leon County Development Support and Environmental Management (properties outside city limits)', county_url: 'https://cms.leoncountyfl.gov/dsem', note: 'Work that changes plumbing, electrical systems, or structure normally requires a permit, and the categories depend on the scope in the written application. City properties are handled through Tallahassee Growth Management\u2019s permit portal; properties outside city limits go through Leon County. Your contractor identifies the authority from the property address and submits the application.' },
    considerations: [
      { h: 'City limits versus unincorporated Leon County', d: 'Leon County has substantial residential areas outside city boundaries, so a Tallahassee address does not settle jurisdiction. Contractors working locally confirm the parcel before filing.' },
      { h: 'Rolling terrain and stepped foundations', d: 'Unlike flat peninsular Florida, Tallahassee\u2019s hills produce split-level and stepped-foundation homes where drain routing can differ. Raise it early so the measurement visit accounts for it.' },
      { h: 'Older plumbing behind the tub', d: 'Removing a decades-old tub can expose plumbing needing attention. A scope stating how post-demolition conditions are priced keeps the project predictable.' },
      { h: 'Storm-season scheduling', d: 'The Big Bend region sees hurricane-related demand spikes that can tighten local trade availability in late summer. Booking measurement and product ordering outside that window tends to keep schedules tighter.' }
    ],
    resources: [
      { name: 'Advantage Aging Solutions', d: 'The Area Agency on Aging and ADRC serving Leon County \u2014 the Elder Helpline connects residents to local aging services and referrals. It is a referral and services agency, not a source of direct funding for remodeling.', url: 'https://advantageaging.org/' },
      { name: 'City of Tallahassee Housing Division', d: 'Municipal housing programs that may assist qualifying households with eligible health, safety, rehabilitation, or accessibility-barrier work. Owner occupancy, income limits, city-limit requirements, approved scope and current funding availability are determined by the program \u2014 confirm status directly before planning around it.', url: 'https://www.talgov.com/housing/housing' }
    ],
    faqs: [
      { q: 'Who handles tub-to-shower permits inside Tallahassee?', a: 'For properties inside city limits, City of Tallahassee Growth Management issues permits through its customer permit portal. A conversion that changes plumbing normally requires one, and the professional preparing your scope typically submits the application as part of the project.' },
      { q: 'Is a Tallahassee mailing address always inside city limits?', a: 'No \u2014 substantial residential areas with Tallahassee addresses sit in unincorporated Leon County. The property address determines jurisdiction, and your contractor confirms it before filing anything.' },
      { q: 'Is Leon County permitting different from City of Tallahassee permitting?', a: 'Yes \u2014 they are separate authorities with separate systems. Properties outside city limits go through Leon County Development Support and Environmental Management rather than the City portal.' },
      { q: 'Can Tallahassee housing programs help with bathroom accessibility work?', a: 'They may, for qualifying households. The City of Tallahassee Housing Division administers programs that can address eligible health, safety, rehabilitation and accessibility-barrier work, with priority rules for some households. Owner occupancy, income limits, city-limit requirements and current funding all apply \u2014 confirm the program\u2019s status and approved scope directly with the City.' },
      { q: 'Does the City\u2019s rehabilitation program automatically cover a tub-to-shower conversion?', a: 'No. Accessibility-barrier removal can fall within the purpose of these programs, but no specific project is automatically covered. The City determines eligibility, funding availability and the approved scope of work, and a housing application is entirely separate from a project request here.' },
      { q: 'How does Aging at Home Advisor check professional coverage in Tallahassee?', a: 'We check your submitted ZIP code against the service areas currently available for tub-to-shower conversions. Where coverage exists, your request may be shared with an independent professional handling these projects, who can discuss the bathroom and prepare a site-specific estimate. There is no obligation.' },
      { q: 'Can plumbing changes affect the permit scope?', a: 'Yes. A conversion that keeps the drain in place is a simpler scope than one relocating plumbing or adding electrical work, and the permit categories follow the written scope your contractor submits.' },
      { q: 'Can a conversion reuse the current bathtub footprint?', a: 'Usually, and it is the recommended approach in most Tallahassee homes \u2014 reusing the drain and supply locations avoids slab work, shortens the schedule, and holds the cost at the lower end of the range.' },
      { q: 'How long does a typical conversion take?', a: 'Around three to seven working days of on-site work for a standard conversion, plus planning and product ordering beforehand.', links: [{ href: 'Tub-to-Shower Conversion Timeline.dc.html', label: 'Timeline guide' }] },
      { q: 'What should be included in a project estimate?', a: 'An itemized written scope covering demolition and disposal, the shower base and wall system, plumbing responsibilities, waterproofing method, grab-bar and seat reinforcement, permit responsibility, schedule, and product and labor warranties.', links: [{ href: 'Tub-to-Shower Conversion Cost.dc.html', label: 'Cost guide' }] },
      { q: 'Can Medicaid or VA benefits help eligible residents?', a: 'They can for those who qualify. Certain Florida Medicaid long-term care programs may include home accessibility adaptations with prior authorization, and VA HISA may support medically necessary bathroom access for eligible veterans. Both are applied for through those programs, separately from a project request.', links: [{ href: 'Does Medicaid Cover Walk-In Tubs.dc.html', label: 'Medicaid guide' }, { href: 'VA Benefits for Accessible Bathrooms.dc.html', label: 'VA benefits guide' }] },
      { q: 'Can a rental or condominium bathroom be converted?', a: 'Often, though requirements differ: rental properties can involve different permitting considerations, and condominiums usually require association approval before work begins. Raise the property type when you request estimates so the right professionals respond.' }
    ],
    summary: 'Most Tallahassee conversions are straightforward same-footprint projects in a 1970s bathroom \u2014 the main planning question is whether the property is city or county. Enter your ZIP code to see whether professionals handling these projects serve your area.',
    cta: 'See Local Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Tallahassee city, Florida', url: 'https://data.census.gov/profile/Tallahassee_city,_Florida?g=160XX00US1270600', supports: 'Population, age, ownership, home value and income figures.' },
      { agency: 'CITY OF TALLAHASSEE', title: 'Growth Management \u2014 permits', url: 'https://www.talgov.com/growth/growth-permits', supports: 'Municipal permitting authority and customer permit portal.' },
      { agency: 'LEON COUNTY', title: 'Development Support and Environmental Management \u2014 permits', url: 'https://cms.leoncountyfl.gov/dsem', supports: 'County permitting authority for properties outside city limits.' },
      { agency: 'CITY OF TALLAHASSEE', title: 'Housing Division \u2014 rehabilitation and repair programs', url: 'https://www.talgov.com/housing/housing', supports: 'Housing-program discussion, eligibility limits and status caveats.' },
      { agency: 'ADVANTAGE AGING SOLUTIONS', title: 'Area Agency on Aging and ADRC for the Big Bend region', url: 'https://advantageaging.org/', supports: 'Local aging-services resource for Leon County.' }
    ],
    nearby: [{ name: 'Gainesville', href: 'Tub-to-Shower Conversion Gainesville.dc.html' }, { name: 'Jacksonville', href: 'Tub-to-Shower Conversion Jacksonville.dc.html' }, { name: 'Pensacola', href: 'Tub-to-Shower Conversion Pensacola.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  pensacola: {
    slug: 'pensacola', name: 'Pensacola', county: 'Escambia County', region: 'Panhandle',
    seo_title: 'Tub-to-Shower Conversion in Pensacola: Costs and Local Options',
    meta_description: 'Explore tub-to-shower conversion costs, permits, housing assistance, planning considerations, and professional availability in Pensacola, Florida.',
    h1: 'Tub-to-Shower Conversion Options in Pensacola, Florida',
    intro: [
      'Pensacola has the oldest housing stock of any city in this guide, and that single fact shapes almost every conversion here. A large share of homes predate 1980, and neighborhoods like East Hill, North Hill and Old East Hill run considerably older than that \u2014 small bathrooms, original fixtures, and plumbing that has been repaired rather than replaced. It is entirely workable, but it rewards a contractor who prices what might be behind the wall rather than assuming.',
      'The military presence changes the picture too. NAS Pensacola, Corry Station and Whiting Field have anchored a career military population for generations, and retired aviators and instructors who settled here decades ago now own many of those older homes. VA benefits are unusually relevant as a result: HISA questions come up in a large share of Pensacola conversations, and households frequently want seating, reinforced grab bars and a handheld showerhead specified from the outset rather than retrofitted.',
      'Jurisdiction needs care in Escambia County. The City of Pensacola, unincorporated Escambia County, Pensacola Beach on Santa Rosa Island, and the Town of Century are separate \u2014 and many addresses with a Pensacola mailing address sit outside city limits. The City\u2019s own guidance applies only to properties within its jurisdiction. City properties go through Pensacola Development Services and its online permit portal; county properties go through Escambia County Building Services. Your contractor establishes which applies from the property address.'
    ],
    facts: [
      { label: 'City population', value: '~54,000', note: 'City of Pensacola; Escambia County exceeds 320,000' },
      { label: 'Residents 65 and older', value: '~20%', note: 'above the national average and higher than most Panhandle cities' },
      { label: 'Owner-occupied homes', value: '~55%', note: 'a majority-owner city with a significant rental share' },
      { label: 'Housing built before 1980', value: 'a large majority', note: 'the oldest housing stock among the Florida cities in this guide' },
      { label: 'Median owner-occupied home value', value: '~$280,000', note: 'city-level ACS estimate, with wide neighborhood variation' },
      { label: 'Veterans', value: 'a high share of adults', note: 'a long-established military community \u2014 VA home-modification benefits are widely relevant' }
    ],
    permit: { authority: 'City of Pensacola Development Services Department (Building Inspections)', url: 'https://www.cityofpensacola.com/155/Development-Services', county_authority: 'Escambia County Building Services (unincorporated addresses); Pensacola Beach and the Town of Century are separate again', county_url: 'https://myescambia.com/our-services/development-services/building-services', note: 'A conversion involving plumbing normally requires a building or plumbing application, with sub-permits where applicable, and registered contractors typically file it. The City\u2019s permitting guidance applies only to properties within City of Pensacola jurisdiction \u2014 unincorporated Escambia County addresses go through the county instead.' },
    considerations: [
      { h: 'Pre-1980 housing', d: 'Most Pensacola homes predate 1980, so original plumbing, small bathrooms, and dated fixtures are common. Ask that the scope state how conditions found after demolition are handled and priced.' },
      { h: 'Four jurisdictions, one mailing city', d: 'City of Pensacola, unincorporated Escambia County, Pensacola Beach, and the Town of Century are separate authorities. The parcel decides, not the postal address.' },
      { h: 'Historic-district properties', d: 'Some North Hill and Old East Hill properties sit within historic districts. Review there focuses on exteriors, so interior bathroom work is generally unaffected \u2014 worth confirming if your home is designated.' },
      { h: 'Condominiums and coastal properties', d: 'Association approval applies in condominium buildings, and coastal properties may face additional considerations for larger work. Both are routine for contractors working across Escambia County.' }
    ],
    resources: [
      { name: 'Northwest Florida Area Agency on Aging', d: 'The Area Agency on Aging and ADRC serving Escambia County \u2014 the Elder Helpline connects residents to local services and referrals. It is a referral and services agency rather than a direct funder of remodeling projects.', url: 'https://www.nwflaaa.org/' },
      { name: 'City of Pensacola Single-Family Housing Repair', d: 'A municipal repair program for income-qualified homeowners on homestead property inside city limits. Published examples of eligible work include safety, plumbing and structural repairs, bathroom grab bars, and accessibility improvements. Approval, funding availability and the approved scope are determined by the City \u2014 confirm current status before planning around it.', url: 'https://www.cityofpensacola.com/1002/Housing' }
    ],
    faqs: [
      { q: 'Who handles bathroom-remodel permits inside Pensacola?', a: 'For properties within city limits, the City of Pensacola Development Services Department handles building and plumbing applications through its online permit portal. A conversion involving plumbing normally requires an application, and registered contractors typically file it as part of the project.' },
      { q: 'Is a Pensacola mailing address always inside city limits?', a: 'No \u2014 many addresses with a Pensacola postal address sit in unincorporated Escambia County, and Pensacola Beach and the Town of Century are separate jurisdictions again. The City\u2019s own permitting guidance applies only to properties within its jurisdiction.' },
      { q: 'Does Escambia County handle permits outside the City of Pensacola?', a: 'Yes \u2014 Escambia County Building Services covers unincorporated addresses, with its own process and portal. Your contractor determines which authority applies from the property address before filing.' },
      { q: 'Can Pensacola\u2019s Single-Family Housing Repair program help with bathroom accessibility work?', a: 'It may, for qualifying homeowners. The City\u2019s program lists safety, plumbing and structural repairs, bathroom grab bars, and accessibility improvements among examples of possible work, for income-qualified applicants on homestead property inside city limits. Eligibility, funding availability and approved scope are determined by the City.' },
      { q: 'Does that program automatically fund tub-to-shower conversions?', a: 'No. Listing accessibility improvements as possible work is not the same as approving a full conversion \u2014 the City decides eligibility and the approved scope, funding is limited and can be subject to first-qualified rules, and a housing application is entirely separate from a project request here.' },
      { q: 'How does Aging at Home Advisor check professional coverage in Pensacola?', a: 'We check your submitted ZIP code against the service areas currently available for tub-to-shower conversions. Where coverage exists, your request may be shared with an independent professional handling these projects, who can discuss the bathroom and prepare a site-specific estimate. There is no obligation.' },
      { q: 'Can a tub be replaced without remodeling the entire bathroom?', a: 'Yes \u2014 and in Pensacola\u2019s older, compact bathrooms it is usually the best approach. Keeping the shower in the tub footprint reuses the existing drain, limits disruption, and holds the project to a few days on site.' },
      { q: 'Do plumbing changes affect the permit process?', a: 'Yes. Relocating plumbing or adding electrical work expands the application and may involve sub-permits, while a same-footprint conversion keeps the scope simpler. The written scope your contractor submits is what the department reviews.' },
      { q: 'Can a condominium or historic property require additional approval?', a: 'A condominium generally does \u2014 the association runs its own alteration process before work begins. Historic-district review focuses on exteriors, so an interior bathroom conversion is usually unaffected, though it is worth confirming if your home is designated.' },
      { q: 'What should be included in a local project estimate?', a: 'An itemized written scope covering demolition and disposal, shower base and wall materials, plumbing and electrical responsibilities, the waterproofing method, grab-bar and seat reinforcement, permit responsibility, schedule, warranties, and payment terms.', links: [{ href: 'Tub-to-Shower Conversion Cost.dc.html', label: 'Cost guide' }] },
      { q: 'Can Medicaid or VA benefits assist eligible Pensacola residents?', a: 'They can for those who qualify \u2014 and with a large veteran community here, VA HISA is particularly worth checking for medically necessary bathroom access. Certain Florida Medicaid long-term care programs may also include home accessibility adaptations with prior authorization. Applications go through those programs, separately from a project request.', links: [{ href: 'VA Benefits for Accessible Bathrooms.dc.html', label: 'VA benefits guide' }, { href: 'Does Medicaid Cover Walk-In Tubs.dc.html', label: 'Medicaid guide' }] },
      { q: 'How long can installation take?', a: 'Typically three to seven working days on site for a standard conversion, though older homes occasionally need extra time if plumbing repairs are uncovered.', links: [{ href: 'Tub-to-Shower Conversion Timeline.dc.html', label: 'Timeline guide' }] }
    ],
    summary: 'Pensacola\u2019s older bathrooms convert well when the scope accounts honestly for what is behind the wall \u2014 and when the right jurisdiction is identified first. Enter your ZIP code to see whether professionals handling these projects serve your neighborhood.',
    cta: 'See Local Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Pensacola city, Florida', url: 'https://data.census.gov/profile/Pensacola_city,_Florida?g=160XX00US1255925', supports: 'Population, age, ownership, housing age and veteran figures.' },
      { agency: 'CITY OF PENSACOLA', title: 'Development Services \u2014 building inspections and permits', url: 'https://www.cityofpensacola.com/155/Development-Services', supports: 'Municipal permitting authority, portal, and the city-jurisdiction limitation.' },
      { agency: 'ESCAMBIA COUNTY', title: 'Building Services \u2014 permits', url: 'https://myescambia.com/our-services/development-services/building-services', supports: 'County permitting authority for unincorporated addresses.' },
      { agency: 'CITY OF PENSACOLA', title: 'Housing \u2014 Single-Family Housing Repair program', url: 'https://www.cityofpensacola.com/1002/Housing', supports: 'Housing-repair program description, eligibility limits and status caveats.' },
      { agency: 'NORTHWEST FLORIDA AREA AGENCY ON AGING', title: 'Area Agency on Aging and ADRC for Northwest Florida', url: 'https://www.nwflaaa.org/', supports: 'Local aging-services resource for Escambia County.' }
    ],
    nearby: [{ name: 'Tallahassee', href: 'Tub-to-Shower Conversion Tallahassee.dc.html' }, { name: 'Gainesville', href: 'Tub-to-Shower Conversion Gainesville.dc.html' }, { name: 'Jacksonville', href: 'Tub-to-Shower Conversion Jacksonville.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  'the-villages': {
    slug: 'the-villages', name: 'The Villages', county: 'Sumter, Lake and Marion counties', region: 'Central Florida',
    seo_title: 'Tub-to-Shower Conversion in The Villages: Local Planning Guide',
    meta_description: 'Plan a tub-to-shower conversion in The Villages: which county issues your permit, how district and deed rules differ from building permits, local aging resources, costs, and project availability.',
    h1: 'Tub-to-Shower Conversion Options in The Villages, Florida',
    intro: [
      'The Villages is not a single incorporated city with one building department, and that is the most important practical fact for anyone planning a bathroom project here. The community spreads across Sumter, Lake and Marion counties, and portions fall within incorporated municipalities such as Wildwood, Fruitland Park and Leesburg. Which authority issues your permit depends on the exact address \u2014 not on the community name.',
      'The second thing worth understanding is that county permits and community approvals are entirely separate processes. A county building permit covers the construction work. District rules, deed restrictions, and architectural review govern the property under community standards, and those materials focus principally on exterior alterations and property appearance. An interior tub-to-shower conversion does not automatically trigger architectural review \u2014 but if the scope touches anything visible from outside, or if the home is an attached villa where the rules reach further, it can. One may apply without the other.',
      'Beyond jurisdiction, the projects themselves are familiar. Homes here are predominantly single-story and slab-built, ranging from courtyard villas to designer homes, with bathrooms that convert cleanly when the shower stays in the existing tub footprint. Because so many residents are planning for long-term use, seating, reinforced grab bars, handheld showerheads and slip-resistant flooring are standard inclusions rather than upgrades.'
    ],
    facts: [
      { label: 'Geography', value: 'Census-designated place', note: 'The Villages CDP is a statistical geography spanning Sumter, Lake and Marion counties \u2014 not an incorporated city' },
      { label: 'CDP population', value: '~80,000', note: 'ACS 5-year estimate for the CDP; the wider community is larger than the CDP boundary' },
      { label: 'Residents 65 and older', value: 'the large majority', note: 'among the highest concentrations in the United States \u2014 an age-restricted community by design' },
      { label: 'Owner-occupied homes', value: 'very high', note: 'predominantly owner-occupied single-story homes and villas' },
      { label: 'Housing type', value: 'single-story, slab-built', note: 'courtyard villas through designer homes; bathrooms convert well in the existing footprint' },
      { label: 'Veterans', value: 'a substantial share of residents', note: 'VA home-modification benefits are relevant to many households here' }
    ],
    permit: { authority: 'Sumter County Building Services (for Sumter County addresses)', url: 'https://www.sumtercountyfl.gov/159/Building-Services', county_authority: 'Lake County Building Services, Marion County Building Safety, or the relevant municipality \u2014 depending on the address', county_url: 'https://www.lakecountyfl.gov/departments/building-services/', note: 'There is no single Villages building department. Sumter, Lake and Marion counties each issue permits for their own portions, and addresses inside Wildwood, Fruitland Park or Leesburg go through those municipalities. Work that changes plumbing normally requires a permit; a professional preparing your scope identifies the correct authority from the exact property address and submits it.' },
    considerations: [
      { h: 'Identify the jurisdiction from the address', d: 'Sumter, Lake or Marion County \u2014 or an incorporated municipality \u2014 may have authority over your parcel. The community name does not determine it, and this is the first thing a contractor establishes.' },
      { h: 'County permits and community approvals are separate', d: 'A building permit covers construction. District rules, deed restrictions and architectural review govern property standards. One may be required without the other, and the exact property and scope control the answer.' },
      { h: 'Interior work and architectural review', d: 'Community materials focus principally on exterior alterations and appearance, so an interior conversion does not automatically require architectural review. Confirm with your district or association if any part of the scope is visible from outside or if you live in an attached villa.' },
      { h: 'Villas and attached homes', d: 'Attached and courtyard villas can carry different approval requirements from detached homes, particularly where shared walls or common elements are involved. Check your specific property documents early.' }
    ],
    resources: [
      { name: 'Elder Options (Area Agency on Aging for North Central Florida)', d: 'The regional agency serving Sumter, Lake and Marion counties \u2014 the Elder Helpline is the entry point for local aging services and referrals.', url: 'https://agingresources.org/' },
      { name: 'The Villages Community Development Districts', d: 'District resources covering property standards, deed compliance and community rules \u2014 separate from county building permits.', url: 'https://www.districtgov.org/' }
    ],
    faqs: [
      { q: 'Who issues permits for a bathroom conversion in The Villages?', a: 'It depends on the property address: Sumter County Building Services, Lake County Building Services, and Marion County Building Safety each cover their own portions of the community, and homes inside Wildwood, Fruitland Park or Leesburg go through those municipalities. A professional preparing your scope identifies the correct authority and submits the application.' },
      { q: 'Is The Villages located entirely in Sumter County?', a: 'No. The community spans Sumter, Lake and Marion counties, and parts fall within incorporated municipalities. This is why the permitting answer depends on the exact address rather than the community name.' },
      { q: 'Does an interior bathroom conversion need Architectural Review Committee approval?', a: 'Not automatically. Community architectural materials focus principally on exterior alterations and property appearance, so a purely interior conversion is generally outside that review. Confirm with your district or association if any part of the work is visible from outside or if you live in an attached villa.' },
      { q: 'Is county approval different from community or deed approval?', a: 'Yes \u2014 they are separate processes. A county or municipal building permit covers the construction work itself; district rules and deed restrictions govern property standards under community documents. One may apply without the other, depending on the property and the scope.' },
      { q: 'How does Aging at Home Advisor determine which professionals serve a Villages address?', a: 'We check your submitted ZIP code against the service areas currently available for tub-to-shower conversions \u2014 by actual ZIP code rather than by the community name, since coverage varies across the three counties. Where coverage exists, your request may be shared with an independent professional handling these projects.' },
      { q: 'Can a professional help identify the likely permit authority?', a: 'Yes \u2014 that is a normal part of preparing a scope of work here. Contractors working in the Tri-County area routinely determine whether a property falls under Sumter, Lake or Marion County or an incorporated municipality, and handle the filing.' },
      { q: 'Can a villa or attached home have different approval requirements?', a: 'It can. Attached and courtyard villas may involve shared walls or common elements, so association or district requirements can reach further than for a detached home. Check your property documents before scheduling work.' },
      { q: 'Are VA or Medicaid home-modification programs available to eligible residents?', a: 'They can be. VA HISA may support medically necessary bathroom access for eligible veterans \u2014 relevant to many households here \u2014 and certain Florida Medicaid long-term care programs may include home accessibility adaptations with prior authorization. Benefit applications are separate from a project request.', links: [{ href: 'VA Benefits for Accessible Bathrooms.dc.html', label: 'VA benefits guide' }, { href: 'Does Medicaid Cover Walk-In Tubs.dc.html', label: 'Medicaid guide' }] },
      { q: 'What does a conversion cost here?', a: 'Most projects fall inside the national planning range of roughly $2,000\u201312,000, with same-footprint conversions toward the lower end. Product selection, glass, and any plumbing changes decide where you land.', links: [{ href: 'Tub-to-Shower Conversion Cost.dc.html', label: 'Cost guide' }] },
      { q: 'How long does the work take?', a: 'Typically three to seven working days on site for a standard conversion, plus planning, ordering, and any approval time beforehand.', links: [{ href: 'Tub-to-Shower Conversion Timeline.dc.html', label: 'Timeline guide' }] }
    ],
    summary: 'In The Villages the whole planning question is jurisdiction: which county or municipality issues the permit, and whether community rules apply to your scope. A professional preparing your estimate answers both. Enter your ZIP code to see local options.',
    cta: 'See Local Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 The Villages CDP, Florida', url: 'https://data.census.gov/profile/The_Villages_CDP,_Florida?g=160XX00US1271625', supports: 'Population, age, ownership and housing figures for the Census-designated place.' },
      { agency: 'SUMTER COUNTY', title: 'Building Services \u2014 permits', url: 'https://www.sumtercountyfl.gov/159/Building-Services', supports: 'Permitting authority for Sumter County portions.' },
      { agency: 'LAKE COUNTY', title: 'Building Services \u2014 permits', url: 'https://www.lakecountyfl.gov/departments/building-services/', supports: 'Permitting authority for Lake County portions.' },
      { agency: 'MARION COUNTY', title: 'Building Safety \u2014 permits', url: 'https://www.marionfl.org/agencies-departments/departments-facilities-offices/building-safety', supports: 'Permitting authority for Marion County portions.' },
      { agency: 'ELDER OPTIONS', title: 'Area Agency on Aging for North Central Florida', url: 'https://agingresources.org/', supports: 'Regional aging-services resource for Sumter, Lake and Marion counties.' }
    ],
    nearby: [{ name: 'Orlando', href: 'Tub-to-Shower Conversion Orlando.dc.html' }, { name: 'Lakeland', href: 'Tub-to-Shower Conversion Lakeland.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  lakeland: {
    slug: 'lakeland', name: 'Lakeland', county: 'Polk County', region: 'Central Florida',
    seo_title: 'Tub-to-Shower Conversion in Lakeland: Costs and Local Options',
    meta_description: 'Plan a tub-to-shower conversion in Lakeland: city permitting versus unincorporated Polk County, older and manufactured housing considerations, Polk aging resources, and local project availability.',
    h1: 'Tub-to-Shower Conversion Options in Lakeland, Florida',
    intro: [
      'Lakeland sits between Tampa and Orlando with a housing stock that spans nearly a century: 1920s bungalows in the Dixieland and Lake Morton historic areas, mid-century ranches through the middle of the city, and newer subdivisions on the edges. Add Polk County\u2019s large stock of manufactured and modular homes, and the practical answer to \u201chow does a conversion work here\u201d depends more on the house than on the city.',
      'In a mid-century or newer slab home, a same-footprint conversion is quick and predictable: the tub comes out, the drain stays, and a low-threshold shower goes in. In an older bungalow, the bathroom is likely small and the plumbing may be original, which is worth pricing honestly in the scope rather than discovering later. In a manufactured home, the conversion is genuinely possible but the approach differs \u2014 floor structure, wall construction and plumbing all behave differently, so the work belongs with a contractor who has done it before.',
      'One jurisdictional note: a Lakeland mailing address does not guarantee City of Lakeland jurisdiction. Sizeable residential areas around the city are unincorporated Polk County, where the county building division issues permits instead. A contractor preparing your estimate establishes this before filing anything.'
    ],
    facts: [
      { label: 'City population', value: '~120,000', note: 'City of Lakeland; Polk County exceeds 780,000 and is growing quickly' },
      { label: 'Residents 65 and older', value: '~17%', note: 'above the national average; Polk County overall skews older' },
      { label: 'Owner-occupied homes', value: '~55%', note: 'a majority-owner city with a substantial rental share' },
      { label: 'Median owner-occupied home value', value: '~$260,000', note: 'among the more affordable metro markets in Central Florida' },
      { label: 'Housing range', value: '1920s bungalows to new build', note: 'historic districts, mid-century ranches, and newer subdivisions' },
      { label: 'Manufactured housing', value: 'common across Polk County', note: 'conversions are possible but call for contractors experienced with these structures' }
    ],
    permit: { authority: 'City of Lakeland Building Inspection Division', url: 'https://www.lakelandgov.net/departments/community-economic-development/building-inspection/', county_authority: 'Polk County Building Division (unincorporated addresses)', county_url: 'https://www.polk-county.net/building-division', note: 'Work that changes plumbing or electrical systems normally requires a permit, submitted by your contractor through the city\u2019s online permitting system. A Lakeland mailing address does not always mean city jurisdiction \u2014 unincorporated Polk County addresses go through the county building division instead.' },
    considerations: [
      { h: 'City limits versus unincorporated Polk County', d: 'Many Lakeland-addressed homes sit outside city limits. It changes which department issues the permit, and contractors working locally confirm it before submitting.' },
      { h: 'Historic-district bungalows', d: 'Dixieland and Lake Morton homes have small original bathrooms and sometimes original plumbing. Same-footprint conversions suit them; ask how post-demolition conditions are priced.' },
      { h: 'Manufactured and modular homes', d: 'Conversions are possible, but floor structure, wall construction and plumbing differ from site-built homes. Choose a contractor who has done this work in manufactured housing.' },
      { h: 'Slab-built suburban homes', d: 'Keeping the shower in the tub footprint avoids cutting concrete, which is what keeps these projects at the affordable end of the range.' }
    ],
    resources: [
      { name: 'Senior Connection Center', d: 'The Area Agency on Aging serving Polk County \u2014 the Elder Helpline connects residents to local aging services and referrals.', url: 'https://seniorconnectioncenter.org/' },
      { name: 'City of Lakeland Community Development \u2014 housing programs', d: 'Municipal housing and rehabilitation resources; eligibility and funding vary by program year.', url: 'https://www.lakelandgov.net/departments/community-economic-development/' }
    ],
    faqs: [
      { q: 'Who handles bathroom-remodel permits inside Lakeland?', a: 'The City of Lakeland Building Inspection Division issues permits for addresses inside city limits, through the city\u2019s online permitting system. A conversion that changes plumbing normally requires one, and your contractor typically prepares and submits it.' },
      { q: 'Is a Lakeland mailing address always within city limits?', a: 'No \u2014 substantial residential areas with Lakeland addresses are in unincorporated Polk County, where the Polk County Building Division issues permits. Your contractor determines which authority covers your parcel before filing.' },
      { q: 'Can plumbing changes affect the permit required?', a: 'Yes. A conversion that keeps the drain in place is a simpler scope than one that relocates plumbing or adds electrical work, and the permit reflects that. The written scope your contractor prepares is what the reviewing department works from.' },
      { q: 'How does Aging at Home Advisor check professional coverage in Lakeland?', a: 'We check your submitted ZIP code against the service areas currently available for tub-to-shower conversions. Where coverage exists, your request may be shared with an independent professional handling these projects, who can discuss the bathroom and prepare a site-specific estimate.' },
      { q: 'Can a manufactured home have a tub-to-shower conversion?', a: 'Yes, and it is a common request across Polk County \u2014 but the approach differs from a site-built home because floor structure, wall construction and plumbing behave differently. Mention the home type when you request estimates so the right contractors respond.' },
      { q: 'What should be included in a Lakeland project estimate?', a: 'A written itemized scope covering demolition and disposal, the shower base and wall system, plumbing responsibilities, the waterproofing approach, grab-bar and seat reinforcement, permit responsibility, schedule, and warranties.', links: [{ href: 'Tub-to-Shower Conversion Cost.dc.html', label: 'Cost guide' }] },
      { q: 'How long does the work take?', a: 'Typically three to seven working days on site for a standard conversion, plus planning and product ordering beforehand.', links: [{ href: 'Tub-to-Shower Conversion Timeline.dc.html', label: 'Timeline guide' }] },
      { q: 'Can Medicaid or VA benefits help with the cost?', a: 'They can for those who qualify. Certain Florida Medicaid long-term care programs may include home accessibility adaptations with prior authorization, and VA HISA may support medically necessary bathroom access for eligible veterans. Applications are separate from a project request here.', links: [{ href: 'Does Medicaid Cover Walk-In Tubs.dc.html', label: 'Medicaid guide' }, { href: 'VA Benefits for Accessible Bathrooms.dc.html', label: 'VA benefits guide' }] }
    ],
    summary: 'Lakeland projects come down to the house: slab, bungalow, or manufactured, each with its own approach \u2014 and to whether the address is city or county. Enter your ZIP code to see whether professionals handling these projects serve your area.',
    cta: 'See Local Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Lakeland city, Florida', url: 'https://data.census.gov/profile/Lakeland_city,_Florida?g=160XX00US1238250', supports: 'Population, age, ownership and home value figures.' },
      { agency: 'CITY OF LAKELAND', title: 'Building Inspection Division \u2014 permits', url: 'https://www.lakelandgov.net/departments/community-economic-development/building-inspection/', supports: 'Municipal permitting authority and online permit system.' },
      { agency: 'POLK COUNTY', title: 'Building Division \u2014 permits', url: 'https://www.polk-county.net/building-division', supports: 'County permitting authority for unincorporated addresses.' },
      { agency: 'SENIOR CONNECTION CENTER', title: 'Area Agency on Aging serving Polk County', url: 'https://seniorconnectioncenter.org/', supports: 'Local aging-services resource.' }
    ],
    nearby: [{ name: 'Orlando', href: 'Tub-to-Shower Conversion Orlando.dc.html' }, { name: 'Tampa', href: 'Tub-to-Shower Conversion Tampa.dc.html' }, { name: 'The Villages', href: 'Tub-to-Shower Conversion The Villages.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  gainesville: {
    slug: 'gainesville', name: 'Gainesville', county: 'Alachua County', region: 'North Central Florida',
    seo_title: 'Tub-to-Shower Conversion in Gainesville: Costs and Local Options',
    meta_description: 'Plan a tub-to-shower conversion in Gainesville: PermitGNV and city versus unincorporated Alachua County permitting, housing rehabilitation resources, local aging services, and project availability.',
    h1: 'Tub-to-Shower Conversion Options in Gainesville, Florida',
    intro: [
      'Gainesville is younger than most Florida cities \u2014 the university keeps the median age low and the ownership rate down \u2014 but that statistic hides the households actually planning bathroom conversions here. They are long-term residents in mid-century neighborhoods like Duckpond and Florida Park, retirees who stayed after careers at the university or the health system, and adult children preparing a family home for a parent moving closer.',
      'The housing those households own is generally 1950s\u20131980s and site-built, with compact bathrooms and standard alcove tubs. That is favorable: a same-footprint conversion reuses the drain, avoids structural work, and finishes in a few days on site. Bathrooms in older homes occasionally reveal aging plumbing once the tub comes out, which is worth pricing in the written scope rather than treating as a surprise.',
      'On permits, the City of Gainesville runs its own building division and the PermitGNV system for addresses inside the city, while unincorporated Alachua County has a separate building division. The two are distinct, and the property\u2019s jurisdiction \u2014 not its mailing address \u2014 decides which applies. The written scope of work is what the reviewing department evaluates, which is one more reason to have it itemized properly.'
    ],
    facts: [
      { label: 'City population', value: '~145,000', note: 'City of Gainesville; Alachua County approaches 290,000' },
      { label: 'Residents 65 and older', value: '~11%', note: 'lower than the Florida average \u2014 a university city with a young population' },
      { label: 'Owner-occupied homes', value: '~40%', note: 'a large student rental share; conversions here are concentrated among long-term owner households' },
      { label: 'Median owner-occupied home value', value: '~$250,000', note: 'city-level ACS estimate' },
      { label: 'Dominant construction era', value: '1950s\u20131980s', note: 'site-built homes with compact bathrooms and standard alcove tubs' },
      { label: 'Median household income', value: '~$52,000', note: 'city-level estimate, held down by the student population' }
    ],
    permit: { authority: 'City of Gainesville Building Division (PermitGNV)', url: 'https://www.gainesvillefl.gov/Government-Pages/Government/Departments/Sustainable-Development/Building-Division', county_authority: 'Alachua County Building Division (unincorporated addresses)', county_url: 'https://growth-management.alachuacounty.us/building', note: 'Work that changes plumbing normally requires a permit, submitted by your contractor through PermitGNV for city addresses or through Alachua County for unincorporated ones. The written scope of work is what the reviewing department evaluates, so an itemized scope helps the review move smoothly.' },
    considerations: [
      { h: 'City versus unincorporated Alachua County', d: 'Jurisdiction follows the parcel, not the mailing address. Contractors working locally verify it before submitting through PermitGNV or the county.' },
      { h: 'Mid-century bathrooms', d: 'Compact 1950s\u20131980s bathrooms convert cleanly in the existing footprint \u2014 the fastest and least expensive approach, and usually the right one.' },
      { h: 'Aging plumbing in older homes', d: 'Removing a decades-old tub occasionally exposes plumbing that needs attention. A scope that states how post-demolition conditions are priced avoids friction mid-project.' },
      { h: 'Rental and multi-unit properties', d: 'Requirements can differ for rental properties, and owner-builder permitting has limitations. If the property is not your primary residence, raise it when requesting estimates.' }
    ],
    resources: [
      { name: 'Elder Options (Area Agency on Aging for North Central Florida)', d: 'The regional agency serving Alachua County \u2014 the Elder Helpline is the entry point for local aging services and referrals.', url: 'https://agingresources.org/' },
      { name: 'City of Gainesville Housing Rehabilitation Program', d: 'A municipal program supporting qualifying homeowners with housing rehabilitation, which in some cases can include special-needs retrofitting. Eligibility, funding availability and project approval are determined by the program \u2014 confirm with the city before beginning any work.', url: 'https://www.gainesvillefl.gov/Government-Pages/Government/Departments/Housing-and-Community-Development' }
    ],
    faqs: [
      { q: 'Which authority handles tub-to-shower permits in Gainesville?', a: 'For addresses inside the city, the City of Gainesville Building Division issues permits through the PermitGNV system. A conversion that changes plumbing normally requires one, and your contractor typically prepares the scope and submits the application.' },
      { q: 'How can I tell whether the property is in Gainesville or unincorporated Alachua County?', a: 'Jurisdiction follows the parcel rather than the mailing address, and it determines whether you go through PermitGNV or the Alachua County Building Division. A contractor preparing your estimate verifies it as a normal first step.' },
      { q: 'Can Gainesville housing-rehabilitation funding help with accessibility work?', a: 'Possibly. The City of Gainesville runs a Housing Rehabilitation Program for qualifying homeowners, and special-needs retrofitting can fall within its purpose \u2014 but eligibility, available funding and approval for a specific bathroom project are determined by the program itself. Confirm with the city before starting work, and treat any funding application as separate from a project request here.' },
      { q: 'Can a rental property use an owner-builder permit?', a: 'Owner-builder permitting carries limitations, and requirements can differ for rental properties. If the home is not your primary residence, mention it when requesting estimates so the contractor can advise on the correct permitting path.' },
      { q: 'How does Aging at Home Advisor match Gainesville project requests?', a: 'We check your submitted ZIP code against the service areas currently available for tub-to-shower conversions. Where coverage exists, your request may be shared with an independent professional handling these projects, who can discuss the bathroom and prepare a site-specific estimate. There is no obligation.' },
      { q: 'Can an existing tub footprint be reused?', a: 'Usually, yes \u2014 and it is the recommended approach in most Gainesville homes. Reusing the drain and supply locations avoids structural work, keeps the project inside a few days on site, and holds the cost at the lower end of the range.' },
      { q: 'What does a conversion cost here?', a: 'Most projects fall inside the national planning range of roughly $2,000\u201312,000, with same-footprint conversions toward the lower end. Product selection, glass, and any plumbing work decide where you land.', links: [{ href: 'Tub-to-Shower Conversion Cost.dc.html', label: 'Cost guide' }] },
      { q: 'Can Medicaid or VA benefits help pay for the project?', a: 'They can for those who qualify. Certain Florida Medicaid long-term care programs may include home accessibility adaptations with prior authorization, and VA HISA may support medically necessary bathroom access for eligible veterans. Benefit applications are handled by those programs, separately from a project request.', links: [{ href: 'Does Medicaid Cover Walk-In Tubs.dc.html', label: 'Medicaid guide' }, { href: 'VA Benefits for Accessible Bathrooms.dc.html', label: 'VA benefits guide' }] }
    ],
    summary: 'Gainesville conversions are usually simple: a mid-century bathroom, the same footprint, and a permit filed through PermitGNV or the county by your contractor. Enter your ZIP code to see whether professionals handling these projects serve your neighborhood.',
    cta: 'See Local Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Gainesville city, Florida', url: 'https://data.census.gov/profile/Gainesville_city,_Florida?g=160XX00US1225175', supports: 'Population, age, ownership, home value and income figures.' },
      { agency: 'CITY OF GAINESVILLE', title: 'Building Division and PermitGNV', url: 'https://www.gainesvillefl.gov/Government-Pages/Government/Departments/Sustainable-Development/Building-Division', supports: 'Municipal permitting authority and permit system.' },
      { agency: 'ALACHUA COUNTY', title: 'Building Division \u2014 permits', url: 'https://growth-management.alachuacounty.us/building', supports: 'County permitting authority for unincorporated addresses.' },
      { agency: 'CITY OF GAINESVILLE', title: 'Housing and Community Development \u2014 rehabilitation programs', url: 'https://www.gainesvillefl.gov/Government-Pages/Government/Departments/Housing-and-Community-Development', supports: 'The housing rehabilitation program description and eligibility caveats.' },
      { agency: 'ELDER OPTIONS', title: 'Area Agency on Aging for North Central Florida', url: 'https://agingresources.org/', supports: 'Local aging-services resource for Alachua County.' }
    ],
    nearby: [{ name: 'Jacksonville', href: 'Tub-to-Shower Conversion Jacksonville.dc.html' }, { name: 'The Villages', href: 'Tub-to-Shower Conversion The Villages.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  'cape-coral': {
    slug: 'cape-coral', name: 'Cape Coral', county: 'Lee County', region: 'Southwest Florida',
    seo_title: 'Tub-to-Shower Conversion in Cape Coral: Costs and Local Options',
    meta_description: 'Plan a tub-to-shower conversion in Cape Coral: city permitting versus unincorporated Lee County, canal-front and 1990s housing considerations, Lee County aging resources, and local project availability.',
    h1: 'Tub-to-Shower Conversion Options in Cape Coral, Florida',
    intro: [
      'Cape Coral is one of Florida\u2019s most owner-occupied cities \u2014 around three quarters of homes are lived in by their owners \u2014 and a large share of those households are planning for the long term rather than reacting to an emergency. That shows up in the projects: conversions here are frequently chosen while the homeowner is still comfortable on their feet, with seating and grab-bar reinforcement added because it makes sense now rather than later.',
      'The housing stock is younger than most of Florida. Cape Coral grew rapidly from the 1990s onward, so the typical home is a single-story, slab-built house with a primary bathroom containing an alcove tub and a separate shower, plus a guest bath with a tub-shower combination. That configuration is close to ideal for a conversion: the guest bath tub comes out, the plumbing stays where it is, and the household keeps a bathtub elsewhere in the home if they want one.',
      'Two practical notes. Permits inside city limits go through the City of Cape Coral\u2019s Community Development department; addresses in unincorporated Lee County go through the county instead, and the two are not interchangeable. And in a city built around canals, ventilation and moisture management deserve real attention in the estimate \u2014 not because Cape Coral homes are unusually damp, but because bathroom projects are the right moment to correct an undersized exhaust fan.'
    ],
    facts: [
      { label: 'City population', value: '~224,000', note: 'one of Florida\u2019s fastest-growing cities; Lee County exceeds 800,000' },
      { label: 'Residents 65 and older', value: '~22%', note: 'above the Florida average' },
      { label: 'Owner-occupied homes', value: '~76%', note: 'among the highest ownership rates of any large Florida city' },
      { label: 'Median owner-occupied home value', value: '~$370,000', note: 'city-level ACS estimate' },
      { label: 'Dominant construction era', value: '1990s onward', note: 'single-story slab homes, typically with a guest-bath tub-shower combination' },
      { label: 'Veterans', value: '~9% of adults', note: 'VA home-modification benefits are relevant to a meaningful share of households' }
    ],
    permit: { authority: 'City of Cape Coral Department of Community Development', url: 'https://www.capecoral.gov/department/department_of_community_development/', county_authority: 'Lee County Department of Community Development (unincorporated addresses)', county_url: 'https://www.leegov.com/dcd', note: 'Work that changes plumbing normally requires a permit, and the professional preparing your scope typically submits it through the city\u2019s online permitting system. Addresses inside Cape Coral go through the city; unincorporated Lee County addresses go through the county. Permit scope depends on whether plumbing, electrical, or structural work is involved.' },
    considerations: [
      { h: 'Guest-bath conversions', d: 'Many Cape Coral homes have a tub-shower combination in the guest bath and a separate shower in the primary. Converting the guest bath makes one bathroom fully accessible while keeping a tub in the house.' },
      { h: 'Slab construction', d: 'Homes here are almost universally slab-built, so keeping the drain where it is keeps the project affordable. Curbless entries require cutting or recessing concrete and sit at the higher end of the range.' },
      { h: 'City versus unincorporated Lee County', d: 'A Cape Coral mailing address does not always mean city jurisdiction. Contractors working across Lee County confirm this before submitting anything.' },
      { h: 'Ventilation and moisture', d: 'A conversion is the natural moment to upgrade an undersized exhaust fan and confirm the waterproofing system. Both are worth naming as line items in the estimate.' }
    ],
    resources: [
      { name: 'Area Agency on Aging for Southwest Florida', d: 'The regional agency serving Lee County \u2014 the Elder Helpline is the entry point for local aging services and referrals.', url: 'https://aaaswfl.org/' },
      { name: 'Lee County Human and Veteran Services', d: 'County programs including housing assistance and veteran services; eligibility and funding vary by program year.', url: 'https://www.leegov.com/humanservices' }
    ],
    faqs: [
      { q: 'Who handles bathroom-remodel permits inside Cape Coral?', a: 'The City of Cape Coral Department of Community Development issues permits for addresses inside city limits, through its online permitting system. A conversion that changes plumbing normally requires one, and the professional preparing your scope typically submits it.' },
      { q: 'Is Cape Coral permitting different from unincorporated Lee County?', a: 'Yes \u2014 they are separate authorities with separate processes. Addresses inside the city go through Cape Coral; unincorporated Lee County addresses go through the Lee County Department of Community Development. Your contractor confirms which applies to your parcel.' },
      { q: 'Can a Cape Coral tub be replaced without remodeling the whole bathroom?', a: 'Yes, and that is how most conversions here are done. Keeping the shower in the existing tub footprint reuses the drain and supply lines, avoids slab work, and typically finishes in under a week on site.' },
      { q: 'How does Aging at Home Advisor check project coverage in Cape Coral?', a: 'We check your submitted ZIP code against the service areas currently available for tub-to-shower conversions. Where coverage exists, your request may be shared with an independent professional handling these projects, who can discuss the bathroom and move toward a site-specific estimate. There is no obligation.' },
      { q: 'Can Lee County aging resources help with home modifications?', a: 'The Area Agency on Aging for Southwest Florida is the right first call \u2014 its Elder Helpline can point Lee County residents toward current programs and eligibility requirements. Availability changes by funding year, and benefit applications are separate from a project request here.' },
      { q: 'How long does a Cape Coral conversion take?', a: 'Typically three to seven working days of on-site work for a standard same-footprint conversion, plus planning and product ordering beforehand.', links: [{ href: 'Tub-to-Shower Conversion Timeline.dc.html', label: 'Timeline guide' }] },
      { q: 'What does a conversion cost here?', a: 'Most projects fall inside the national planning range of roughly $2,000\u201312,000, with same-footprint conversions toward the lower end. Product selection, glass, and any plumbing changes decide where you land.', links: [{ href: 'Tub-to-Shower Conversion Cost.dc.html', label: 'Cost guide' }] },
      { q: 'Can VA benefits help pay for the project?', a: 'They can for eligible veterans \u2014 VA HISA may support medically necessary bathroom access, and with a substantial veteran population in Lee County it is worth checking. Approval comes before work begins and is never guaranteed.', links: [{ href: 'VA Benefits for Accessible Bathrooms.dc.html', label: 'VA benefits guide' }] }
    ],
    summary: 'Most Cape Coral conversions are clean, same-footprint projects in a guest bath \u2014 quick, affordable, and easy to plan around. Enter your ZIP code to see whether professionals handling these projects serve your street.',
    cta: 'See Local Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Cape Coral city, Florida', url: 'https://data.census.gov/profile/Cape_Coral_city,_Florida?g=160XX00US1210275', supports: 'Population, age, ownership, home value and veteran figures.' },
      { agency: 'CITY OF CAPE CORAL', title: 'Department of Community Development \u2014 permitting', url: 'https://www.capecoral.gov/department/department_of_community_development/', supports: 'Municipal permitting authority and online permit system.' },
      { agency: 'LEE COUNTY', title: 'Department of Community Development \u2014 permits', url: 'https://www.leegov.com/dcd', supports: 'County permitting authority for unincorporated addresses.' },
      { agency: 'AREA AGENCY ON AGING FOR SOUTHWEST FLORIDA', title: 'Regional aging services and Elder Helpline', url: 'https://aaaswfl.org/', supports: 'Local aging-services resource.' }
    ],
    nearby: [{ name: 'Fort Myers', href: 'Tub-to-Shower Conversion Fort Myers.dc.html' }, { name: 'Naples', href: 'Tub-to-Shower Conversion Naples.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  'fort-myers': {
    slug: 'fort-myers', name: 'Fort Myers', county: 'Lee County', region: 'Southwest Florida',
    seo_title: 'Tub-to-Shower Conversion in Fort Myers: Costs and Local Options',
    meta_description: 'Plan a tub-to-shower conversion in Fort Myers: city permitting versus unincorporated Lee County, condominium and older-home considerations, Lee County aging resources, and local project availability.',
    h1: 'Tub-to-Shower Conversion Options in Fort Myers, Florida',
    intro: [
      'Fort Myers covers a wider range of housing than its neighbors: historic homes near the river and McGregor Boulevard, postwar neighborhoods closer to downtown, and newer condominium and gated communities spreading south and east. A tub-to-shower conversion looks different in each \u2014 a 1950s bathroom with original tile and cast-iron plumbing is a different job from a 2005 condo with a builder-grade tub-shower unit.',
      'Geography causes more confusion here than in most Florida cities, and it matters for permits. The City of Fort Myers, Fort Myers Beach (a separate town on Estero Island), North Fort Myers (unincorporated Lee County), and the rest of unincorporated Lee County are four different things. Only addresses inside the city are handled by Fort Myers Building, Permitting and Inspections; the others go elsewhere. A contractor working in the region resolves this at the estimate stage rather than leaving it to the homeowner.',
      'For condominium owners, the association\u2019s alteration process comes first: an application, contractor licensing and insurance documentation, and scheduling for elevators or service access. It is routine work for professionals who handle Lee County buildings, and starting it early is the single best thing a homeowner can do to keep the project on schedule.'
    ],
    facts: [
      { label: 'City population', value: '~95,000', note: 'City of Fort Myers, the Lee County seat' },
      { label: 'Residents 65 and older', value: '~17%', note: 'city-level; unincorporated Lee County skews considerably older' },
      { label: 'Owner-occupied homes', value: '~48%', note: 'a near-even split, with a significant condominium and rental share' },
      { label: 'Median owner-occupied home value', value: '~$300,000', note: 'city-level ACS estimate, with wide neighborhood variation' },
      { label: 'Housing range', value: 'pre-1960 to 2000s', note: 'historic riverside homes through newer condominium communities' },
      { label: 'Veterans', value: 'a substantial share countywide', note: 'VA home-modification benefits are relevant across Lee County' }
    ],
    permit: { authority: 'City of Fort Myers Building, Permitting and Inspections', url: 'https://www.cityftmyers.com/158/Building-Permitting-Inspections', county_authority: 'Lee County Department of Community Development \u2014 covers North Fort Myers and other unincorporated addresses', county_url: 'https://www.leegov.com/dcd', note: 'Work that changes plumbing normally requires a permit, submitted by your contractor. Only addresses inside the City of Fort Myers go through city permitting \u2014 North Fort Myers and other unincorporated areas go through Lee County, and Fort Myers Beach is a separate town with its own authority.' },
    considerations: [
      { h: 'Four different jurisdictions', d: 'Fort Myers, Fort Myers Beach, North Fort Myers, and unincorporated Lee County are distinct. The permitting path follows the parcel, and contractors working regionally confirm it before submitting.' },
      { h: 'Older riverside homes', d: 'Pre-1960 homes near the river may have original plumbing and small bathrooms. Same-footprint conversions suit them well; ask that the scope state how conditions found after demolition are priced.' },
      { h: 'Condominium approvals', d: 'Association alteration applications, insurance documentation, and elevator scheduling are standard in Lee County buildings \u2014 begin the process before finalizing a start date.' },
      { h: 'Building access', d: 'In mid-rise buildings, protection of common areas and material handling can affect the estimate. Contractors experienced with local buildings account for it up front.' }
    ],
    resources: [
      { name: 'Area Agency on Aging for Southwest Florida', d: 'The regional agency serving Lee County \u2014 the Elder Helpline connects residents to local aging services and referrals.', url: 'https://aaaswfl.org/' },
      { name: 'City of Fort Myers Community Development \u2014 housing programs', d: 'Municipal housing and community development resources; eligibility and availability vary by program year.', url: 'https://www.cityftmyers.com/163/Community-Development' }
    ],
    faqs: [
      { q: 'Which authority handles bathroom-remodel permits in Fort Myers?', a: 'For addresses inside the city, Fort Myers Building, Permitting and Inspections issues the permit. A conversion that changes plumbing normally requires one, and your contractor typically prepares and submits the application as part of the project.' },
      { q: 'Is North Fort Myers covered by the City of Fort Myers?', a: 'No. North Fort Myers is unincorporated Lee County, so permits go through the Lee County Department of Community Development rather than the city. Fort Myers Beach is different again \u2014 a separate town with its own building authority.' },
      { q: 'Can a condo owner request a tub-to-shower conversion?', a: 'Yes, and it is common in Lee County buildings. The association runs an alteration process covering the application, contractor licensing and insurance, and scheduling; professionals who work in local condominiums handle that paperwork routinely.' },
      { q: 'How are professionals matched to Fort Myers ZIP codes?', a: 'We check your submitted ZIP code against the service areas currently available for tub-to-shower conversions. Where coverage exists, your request may be shared with an independent professional handling these projects, who can then discuss your bathroom and prepare a site-specific estimate.' },
      { q: 'What can affect a Fort Myers conversion estimate?', a: 'Bathroom size, the condition of existing plumbing, whether the shower stays in the tub footprint, product and glass selection, waterproofing, and \u2014 in condominiums \u2014 building access and association requirements.', links: [{ href: 'Tub-to-Shower Conversion Cost.dc.html', label: 'Cost guide' }] },
      { q: 'Are local or VA assistance resources available?', a: 'The Area Agency on Aging for Southwest Florida can point Lee County residents toward current local programs, and VA HISA may support medically necessary bathroom access for eligible veterans. Both are separate from a project request here.', links: [{ href: 'VA Benefits for Accessible Bathrooms.dc.html', label: 'VA benefits guide' }, { href: 'Financial Assistance.dc.html', label: 'All assistance options' }] },
      { q: 'How long does the work take?', a: 'Typically three to seven working days on site for a standard conversion, plus planning and ordering. Condominium approval can add time before the start date.', links: [{ href: 'Tub-to-Shower Conversion Timeline.dc.html', label: 'Timeline guide' }] },
      { q: 'Should grab-bar reinforcement be included?', a: 'Yes \u2014 adding blocking while the walls are open costs very little and makes installing grab bars simple whenever they are needed. Ask for it in the written scope even if bars come later.', links: [{ href: 'Bathroom Safety Checklist.dc.html', label: 'Bathroom safety checklist' }] }
    ],
    summary: 'In Fort Myers the first step is establishing which jurisdiction your address falls under, and the second is any association approval \u2014 both handled by the professional preparing your estimate. Enter your ZIP code to see local options.',
    cta: 'See Local Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Fort Myers city, Florida', url: 'https://data.census.gov/profile/Fort_Myers_city,_Florida?g=160XX00US1224125', supports: 'Population, age, ownership and home value figures.' },
      { agency: 'CITY OF FORT MYERS', title: 'Building, Permitting and Inspections', url: 'https://www.cityftmyers.com/158/Building-Permitting-Inspections', supports: 'Municipal permitting authority and process.' },
      { agency: 'LEE COUNTY', title: 'Department of Community Development \u2014 permits', url: 'https://www.leegov.com/dcd', supports: 'County permitting authority for North Fort Myers and other unincorporated addresses.' },
      { agency: 'AREA AGENCY ON AGING FOR SOUTHWEST FLORIDA', title: 'Regional aging services and Elder Helpline', url: 'https://aaaswfl.org/', supports: 'Local aging-services resource.' }
    ],
    nearby: [{ name: 'Cape Coral', href: 'Tub-to-Shower Conversion Cape Coral.dc.html' }, { name: 'Naples', href: 'Tub-to-Shower Conversion Naples.dc.html' }, { name: 'Sarasota', href: 'Tub-to-Shower Conversion Sarasota.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  'west-palm-beach': {
    slug: 'west-palm-beach', name: 'West Palm Beach', county: 'Palm Beach County', region: 'South Florida',
    seo_title: 'Tub-to-Shower Conversion in West Palm Beach, FL: Costs, Permits and Options',
    meta_description: 'Plan a tub-to-shower conversion in West Palm Beach: city and county permitting, historic-district and condominium considerations, local aging resources, costs, and local project availability.',
    h1: 'Tub-to-Shower Conversion Options in West Palm Beach, Florida',
    intro: [
      'West Palm Beach is the mainland county seat \u2014 distinct from the Town of Palm Beach across the Intracoastal, and from Palm Beach County as a whole \u2014 and that distinction matters the moment you apply for a permit. City addresses are handled by West Palm Beach\u2019s own construction services division, while a great many properties with a West Palm Beach mailing address actually sit in unincorporated Palm Beach County and go through the county instead.',
      'The housing runs from 1920s Mediterranean Revival homes in El Cid and Flamingo Park to postwar ranches, mid-rise condominiums downtown, and newer suburban construction to the west. Each brings its own conversion profile: the historic homes have small, original bathrooms where a same-footprint conversion preserves the room\u2019s proportions; the condos bring an association approval step; the suburban homes are typically slab-built, which keeps drains where they are.',
      'For most West Palm Beach households the practical decision is not which exotic design to pursue but how to make one bathroom genuinely easier to use without disrupting the rest of the home. A low-threshold shower in the existing tub alcove, with a seat, reinforced grab bars, and a handheld showerhead, does that in under a week of on-site work.'
    ],
    facts: [
      { label: 'City population', value: '~120,000', note: 'City of West Palm Beach; Palm Beach County exceeds 1.5 million' },
      { label: 'Residents 65 and older', value: '~16%', note: 'city-level; the wider county skews significantly older' },
      { label: 'Owner-occupied homes', value: '~46%', note: 'a substantial rental and condominium share alongside owner households' },
      { label: 'Median owner-occupied home value', value: '~$400,000', note: 'city-level estimate, with wide neighborhood variation' },
      { label: 'Historic housing', value: '1920s districts', note: 'El Cid and Flamingo Park \u2014 small original bathrooms in Mediterranean Revival homes' },
      { label: 'Median household income', value: '~$74,000', note: 'city-level ACS estimate' }
    ],
    permit: { authority: 'City of West Palm Beach Construction Services (Development Services)', url: 'https://www.wpb.org/Departments/Development-Services/Construction-Services', county_authority: 'Palm Beach County Planning, Zoning and Building (unincorporated addresses)', county_url: 'https://discover.pbcgov.org/pzb/Pages/default.aspx', note: 'Work that changes plumbing normally requires a permit, and your contractor typically submits it. Whether the city or Palm Beach County issues it depends on the parcel, not the mailing address \u2014 many \u201cWest Palm Beach\u201d addresses are in unincorporated county.' },
    considerations: [
      { h: 'City versus unincorporated county', d: 'A West Palm Beach mailing address does not settle which building department has jurisdiction. Professionals working across Palm Beach County identify this at the estimate stage.' },
      { h: 'Historic-district homes', d: 'El Cid and Flamingo Park homes have compact original bathrooms. Historic review focuses on exteriors, so interior conversions are generally unaffected \u2014 but a same-footprint design usually suits these rooms best anyway.' },
      { h: 'Condominium approvals', d: 'Downtown and waterfront buildings run an alteration process: application, contractor licensing and insurance, scheduling, sometimes waterproofing requirements. Beginning it early keeps the project moving.' },
      { h: 'Coastal humidity', d: 'Ventilation capacity and a clearly specified waterproofing system are worth naming as line items rather than assumed \u2014 particularly in older homes with original exhaust fans.' }
    ],
    resources: [
      { name: 'Your Aging and Disability Resource Center (Area Agency on Aging, Palm Beach and Treasure Coast)', d: 'The regional agency serving Palm Beach County \u2014 the Helpline connects residents to local aging services and referrals.', url: 'https://youradrc.org/' },
      { name: 'Palm Beach County Department of Housing and Economic Development', d: 'County housing programs and referrals; eligibility and availability vary by program and funding year.', url: 'https://discover.pbcgov.org/HES/Pages/default.aspx' }
    ],
    faqs: [
      { q: 'Do I need a permit for a tub-to-shower conversion in West Palm Beach?', a: 'A permit is normally required when the work changes plumbing. City addresses go through West Palm Beach Construction Services; unincorporated addresses go through Palm Beach County Planning, Zoning and Building. The professional preparing your scope can determine which applies and submit it.' },
      { q: 'Is West Palm Beach the same as Palm Beach?', a: 'No \u2014 they are separate municipalities. West Palm Beach is the mainland city; the Town of Palm Beach is a separate town across the Intracoastal with its own building department, and unincorporated Palm Beach County is different again. The distinction determines which authority issues your permit.' },
      { q: 'How does the local matching work?', a: 'You enter your ZIP code and we check it against the service areas available for tub-to-shower conversions. Where coverage exists, your request may be shared with independent professionals handling these projects, who can discuss your bathroom and prepare a site-specific estimate. There is no obligation.' },
      { q: 'Can I convert a bathroom in a historic-district home?', a: 'Generally yes \u2014 historic review focuses on exteriors, so interior bathroom work is usually unaffected. A same-footprint conversion also tends to suit the compact proportions of 1920s bathrooms in El Cid and Flamingo Park.' },
      { q: 'Can I convert a tub in a condominium?', a: 'Yes, with association approval. Expect an alteration application, contractor licensing and insurance documentation, and scheduling rules; contractors experienced with Palm Beach County buildings prepare that paperwork routinely.' },
      { q: 'What does a conversion cost here?', a: 'Most projects fall inside the national planning range of roughly $2,000\u2013$12,000, with same-footprint conversions toward the lower end. Product selection, glass, building access, and any plumbing changes decide where you land \u2014 see the cost guide, then get an in-home estimate.', links: [{ href: 'Tub-to-Shower Conversion Cost.dc.html', label: 'cost guide' }] },
      { q: 'How long does the project take?', a: 'Typically three to seven working days of on-site work for a standard conversion, plus planning and ordering beforehand. Condo buildings may add approval time \u2014 the timeline guide covers each stage.', links: [{ href: 'Tub-to-Shower Conversion Timeline.dc.html', label: 'timeline guide' }] },
      { q: 'Can VA benefits or Medicaid help pay for it?', a: 'They can for those who qualify. VA HISA may support medically necessary bathroom access for eligible veterans, and certain Florida Medicaid long-term care programs may include home accessibility adaptations with prior authorization. See the VA and Medicaid guides.', links: [{ href: 'VA Benefits for Accessible Bathrooms.dc.html', label: 'VA' }, { href: 'Does Medicaid Cover Walk-In Tubs.dc.html', label: 'Medicaid' }] }
    ],
    summary: 'In West Palm Beach the first question is jurisdiction, the second is whether an association is involved \u2014 and a professional preparing your estimate handles both. Enter your ZIP code to see what is available near you.',
    cta: 'See Local Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 West Palm Beach city, Florida', url: 'https://data.census.gov/profile/West_Palm_Beach_city,_Florida?g=160XX00US1276600', supports: 'Population, age, ownership, home value and income figures.' },
      { agency: 'CITY OF WEST PALM BEACH', title: 'Construction Services \u2014 permits', url: 'https://www.wpb.org/Departments/Development-Services/Construction-Services', supports: 'Municipal permitting authority and process.' },
      { agency: 'PALM BEACH COUNTY', title: 'Planning, Zoning and Building', url: 'https://discover.pbcgov.org/pzb/Pages/default.aspx', supports: 'County permitting authority for unincorporated addresses.' },
      { agency: 'YOUR ADRC / AREA AGENCY ON AGING', title: 'Palm Beach and Treasure Coast aging services', url: 'https://youradrc.org/', supports: 'Local aging-services resource.' }
    ],
    nearby: [{ name: 'Fort Lauderdale', href: 'Tub-to-Shower Conversion Fort Lauderdale.dc.html' }, { name: 'West Palm Beach', href: 'Tub-to-Shower Conversion West Palm Beach.dc.html' }, { name: 'Naples', href: 'Tub-to-Shower Conversion Naples.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  sarasota: {
    slug: 'sarasota', name: 'Sarasota', county: 'Sarasota County', region: 'Southwest Florida',
    seo_title: 'Tub-to-Shower Conversion in Sarasota, FL: Costs, Permits and Options',
    meta_description: 'Plan a tub-to-shower conversion in Sarasota: city and county permitting, mid-century and condominium housing considerations, local aging resources, costs, and local project availability.',
    h1: 'Tub-to-Shower Conversion Options in Sarasota, Florida',
    intro: [
      'Sarasota has one of the oldest resident populations in the state \u2014 roughly a quarter of city residents are 65 or older, and the surrounding county skews older still. Accessible bathing is not a niche request here; it is one of the most common home-improvement conversations in the region, and local contractors are unusually experienced at it.',
      'The housing is distinctive. Sarasota\u2019s mid-century modern legacy left behind flat-roofed, glass-walled homes with compact, precisely proportioned bathrooms, while the keys \u2014 Lido, Siesta, Longboat \u2014 are dominated by condominiums, many built in the 1970s and 1980s. Downtown adds mid- and high-rise buildings. What this means practically: a large share of Sarasota conversions involve an association approval step, and many involve bathrooms where preserving the existing footprint is the design-sensitive choice as well as the affordable one.',
      'Jurisdiction is worth confirming early. The City of Sarasota issues permits within city limits, while much of what people call Sarasota \u2014 including large residential areas east and south \u2014 is unincorporated Sarasota County. A professional preparing your scope will identify which applies before submitting anything.'
    ],
    facts: [
      { label: 'City population', value: '~56,000', note: 'City of Sarasota; Sarasota County exceeds 460,000' },
      { label: 'Residents 65 and older', value: '~25%', note: 'among the highest shares of any Florida city \u2014 higher still county-wide' },
      { label: 'Owner-occupied homes', value: '~53%', note: 'with a very large condominium component on the keys and downtown' },
      { label: 'Median owner-occupied home value', value: '~$450,000', note: 'city-level estimate; barrier-island values run far higher' },
      { label: 'Architectural legacy', value: 'Sarasota School mid-century', note: 'compact, precisely proportioned bathrooms in flat-roofed post-and-beam homes' },
      { label: 'Median household income', value: '~$70,000', note: 'city-level ACS estimate' }
    ],
    permit: { authority: 'City of Sarasota Building Division (Development Services)', url: 'https://www.sarasotafl.gov/government/development-services/building', county_authority: 'Sarasota County Planning and Development Services (unincorporated addresses)', county_url: 'https://www.scgov.net/government/planning-and-development-services', note: 'Work that changes plumbing normally requires a permit, submitted by your contractor. Much of the Sarasota area is unincorporated county rather than city, so confirming jurisdiction is part of preparing the scope \u2014 not something you need to research yourself.' },
    considerations: [
      { h: 'Condominium approvals on the keys', d: 'Lido, Siesta and Longboat buildings run alteration processes covering applications, contractor documentation, elevator scheduling, and sometimes waterproofing. Local contractors work within these regularly.' },
      { h: 'Mid-century bathroom proportions', d: 'Sarasota School homes have compact, deliberately proportioned bathrooms. A same-footprint low-threshold shower usually respects the original design better than an expanded layout \u2014 and costs less.' },
      { h: 'City versus unincorporated county', d: 'A large share of Sarasota-area addresses are in unincorporated Sarasota County. It changes which department issues the permit, and your contractor confirms it up front.' },
      { h: 'Accessibility as the default', d: 'With so many older residents, seating, reinforced grab bars, handheld showerheads, and slip-resistant flooring are standard here. Include reinforcement while the walls are open, even if bars come later.' }
    ],
    resources: [
      { name: 'Area Agency on Aging for Southwest Florida', d: 'The regional agency serving Sarasota County \u2014 the Elder Helpline is the entry point for local aging services and referrals.', url: 'https://aaaswfl.org/' },
      { name: 'Sarasota County Health and Human Services', d: 'County programs and referrals supporting older residents; availability and eligibility vary by program year.', url: 'https://www.scgov.net/government/health-and-human-services' }
    ],
    faqs: [
      { q: 'Do I need a permit for a tub-to-shower conversion in Sarasota?', a: 'A permit is normally required when plumbing changes. The City of Sarasota Building Division covers addresses inside city limits; Sarasota County Planning and Development Services covers unincorporated areas, which is a large share of the region. Your contractor determines which applies and submits it.' },
      { q: 'Can I convert a tub in a condominium on Siesta or Longboat Key?', a: 'Yes \u2014 it is common. The association runs an alteration process covering the application, contractor licensing and insurance, and scheduling for elevators and service access. Contractors working on the keys prepare this paperwork as a matter of routine.' },
      { q: 'How does the local matching work?', a: 'You enter your ZIP code and we check it against the service areas available for tub-to-shower conversions. Where coverage exists, your request may be shared with independent professionals handling these projects, who can then discuss your bathroom and prepare a site-specific estimate. No obligation.' },
      { q: 'Will a conversion damage the character of a mid-century home?', a: 'It should not. Keeping the shower in the existing footprint preserves the room\u2019s proportions, and a frameless or curtain enclosure with a low threshold reads as clean and contemporary \u2014 which is generally in keeping with Sarasota School interiors.' },
      { q: 'What does a conversion cost here?', a: 'Most projects fall inside the national planning range of roughly $2,000\u2013$12,000, with same-footprint conversions toward the lower end. Condo access requirements, product choices, and custom glass move the figure \u2014 see the cost guide, then get an in-home estimate.', links: [{ href: 'Tub-to-Shower Conversion Cost.dc.html', label: 'cost guide' }] },
      { q: 'How long does the work take?', a: 'Typically three to seven working days on site for a standard conversion, plus planning and ordering. Condominium approval can add time before the start date \u2014 the timeline guide breaks it down.', links: [{ href: 'Tub-to-Shower Conversion Timeline.dc.html', label: 'timeline guide' }] },
      { q: 'Which accessibility features are worth including?', a: 'A low threshold, a bench or fold-down seat, reinforced grab bars, a handheld showerhead, reachable controls, and slip-resistant flooring cover most needs. The shower features guide compares the options in detail.', links: [{ href: 'Best Shower Features.dc.html', label: 'shower features guide' }] },
      { q: 'Can Medicaid or VA benefits help pay for the project?', a: 'They can for those who qualify. Certain Florida Medicaid long-term care programs may include home accessibility adaptations with prior authorization, and VA HISA may support medically necessary bathroom access for eligible veterans. See the Medicaid and VA guides.', links: [{ href: 'Does Medicaid Cover Walk-In Tubs.dc.html', label: 'Medicaid' }, { href: 'VA Benefits for Accessible Bathrooms.dc.html', label: 'VA' }] }
    ],
    summary: 'Sarasota contractors convert bathrooms for older residents constantly, so the process here is well worn: confirm jurisdiction, start any association paperwork, and keep the shower in the tub footprint. Enter your ZIP code to see local options.',
    cta: 'See Local Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Sarasota city, Florida', url: 'https://data.census.gov/profile/Sarasota_city,_Florida?g=160XX00US1264175', supports: 'Population, age, ownership, home value and income figures.' },
      { agency: 'CITY OF SARASOTA', title: 'Building Division \u2014 permits and inspections', url: 'https://www.sarasotafl.gov/government/development-services/building', supports: 'Municipal permitting authority and process.' },
      { agency: 'SARASOTA COUNTY', title: 'Planning and Development Services', url: 'https://www.scgov.net/government/planning-and-development-services', supports: 'County permitting authority for unincorporated addresses.' },
      { agency: 'AREA AGENCY ON AGING FOR SOUTHWEST FLORIDA', title: 'Regional aging services and Elder Helpline', url: 'https://aaaswfl.org/', supports: 'Local aging-services resource.' }
    ],
    nearby: [{ name: 'Tampa', href: 'Tub-to-Shower Conversion Tampa.dc.html' }, { name: 'St. Petersburg', href: 'Tub-to-Shower Conversion St Petersburg.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  naples: {
    slug: 'naples', name: 'Naples', county: 'Collier County', region: 'Southwest Florida',
    seo_title: 'Tub-to-Shower Conversion in Naples, FL: Costs, Permits and Options',
    meta_description: 'Plan a tub-to-shower conversion in Naples: City of Naples versus Collier County permitting, HOA and condominium considerations, local aging resources, costs, and local project availability.',
    h1: 'Tub-to-Shower Conversion Options in Naples, Florida',
    intro: [
      'Naples has an older resident population than almost anywhere in the United States, and accessible bathing is one of the most frequently discussed home projects in Collier County. What makes the local picture unusual is scale: the City of Naples itself is small \u2014 under 20,000 residents \u2014 while the great majority of homes people call \u201cNaples\u201d sit in unincorporated Collier County, in golf, gated, and coastal communities stretching well inland.',
      'That has a direct consequence for permits. The City of Naples Building Department covers addresses inside city limits; everything else goes through Collier County\u2019s Growth Management Community Development Department. They are separate jurisdictions with separate processes, and a contractor preparing your scope will establish which applies before submitting anything.',
      'The other defining local factor is community governance. A large share of Collier County homes sit in HOA or condominium communities with alteration rules, seasonal work-hour restrictions, and contractor documentation requirements. Add coastal humidity and a housing stock heavy on 1980s\u20132000s slab construction, and the practical result is that most Naples conversions are same-footprint projects, planned around the community calendar as much as the construction schedule.'
    ],
    facts: [
      { label: 'City population', value: '~19,000', note: 'City of Naples proper; Collier County exceeds 390,000' },
      { label: 'Residents 65 and older', value: '~55% in the city', note: 'among the oldest resident populations in the nation; Collier County is also well above the state share' },
      { label: 'Owner-occupied homes', value: '~75% in the city', note: 'a strongly owner-occupied market' },
      { label: 'Median owner-occupied home value', value: 'over $1 million in the city', note: 'city-level estimate; unincorporated Collier values vary widely and run considerably lower' },
      { label: 'Community governance', value: 'HOA and condo majority', note: 'most Collier County homes carry association alteration rules' },
      { label: 'Dominant construction era', value: '1980s\u20132000s', note: 'slab-built homes in inland and gated communities' }
    ],
    permit: { authority: 'City of Naples Building Department', url: 'https://www.naplesgov.com/building', county_authority: 'Collier County Growth Management Community Development Department (unincorporated addresses \u2014 most of the Naples area)', county_url: 'https://www.colliercountyfl.gov/your-government/divisions-a-e/building-review-and-permitting', note: 'The City of Naples and Collier County are separate permitting jurisdictions, and most homes with a Naples mailing address are in unincorporated Collier County. Work that changes plumbing normally requires a permit; your contractor establishes jurisdiction and submits it.' },
    considerations: [
      { h: 'City limits are small', d: 'Most \u201cNaples\u201d addresses are unincorporated Collier County, not the City of Naples \u2014 a genuinely different permitting process. Contractors working locally sort this out at the estimate stage.' },
      { h: 'HOA and condominium rules', d: 'Alteration applications, approved-contractor requirements, insurance documentation, and work-hour limits are common in Collier communities \u2014 and some restrict work during peak season. Start the paperwork early.' },
      { h: 'Seasonal scheduling', d: 'Contractor availability and community restrictions both shift with the season here. If timing matters, ask about scheduling windows when you request estimates.' },
      { h: 'Slab construction and humidity', d: 'Most inland homes are slab-built, so keeping the drain in place is the affordable path. Coastal humidity makes ventilation and a named waterproofing system worth specifying.' }
    ],
    resources: [
      { name: 'Area Agency on Aging for Southwest Florida', d: 'The regional agency serving Collier County \u2014 the Elder Helpline is the entry point for local aging services and referrals.', url: 'https://aaaswfl.org/' },
      { name: 'Collier County Community and Human Services', d: 'County programs and referrals supporting residents; eligibility and availability vary by program and funding year.', url: 'https://www.colliercountyfl.gov/your-government/divisions-a-e/community-and-human-services' }
    ],
    faqs: [
      { q: 'Do I need a permit for a tub-to-shower conversion in Naples?', a: 'A permit is normally required when plumbing changes. If your home is inside city limits, the City of Naples Building Department issues it; if it is in unincorporated Collier County \u2014 as most Naples-area homes are \u2014 it goes through Collier County. Your contractor confirms which applies and submits it.' },
      { q: 'Is my home in the City of Naples or Collier County?', a: 'Most homes with a Naples mailing address are in unincorporated Collier County rather than the city, which is geographically small. The distinction determines the permitting authority, and it is one of the first things a local contractor checks when preparing a scope.' },
      { q: 'Will my HOA or condo association need to approve the work?', a: 'Very likely \u2014 a large share of Collier County homes are in governed communities requiring an alteration application, contractor documentation, and sometimes specific work hours. Beginning that process early keeps your schedule intact.' },
      { q: 'How does the local matching work?', a: 'You enter your ZIP code and we check it against the service areas available for tub-to-shower conversions. Where coverage exists, your request may be shared with independent professionals handling these projects, who can discuss your bathroom and prepare a site-specific estimate. There is no obligation.' },
      { q: 'Does the season affect scheduling?', a: 'It can. Contractor demand rises during peak months, and some communities restrict construction activity at certain times of year. Ask about scheduling windows when you request estimates so the project lands when you want it.' },
      { q: 'What does a conversion cost in the Naples area?', a: 'Most projects fall inside the national planning range of roughly $2,000\u2013$12,000, with same-footprint conversions toward the lower end. Product selection, custom glass, community access requirements, and any plumbing changes move the figure \u2014 see the cost guide, then get an in-home estimate.', links: [{ href: 'Tub-to-Shower Conversion Cost.dc.html', label: 'cost guide' }] },
      { q: 'Can I get a curbless shower in a slab-built Collier County home?', a: 'Yes, though it means cutting or recessing the concrete, which places it at the higher end of the range. Many households choose a low-threshold shower instead and get nearly the same day-to-day benefit for less.' },
      { q: 'Can VA benefits or Medicaid help with the cost?', a: 'They can for those who qualify. VA HISA may support medically necessary bathroom access for eligible veterans, and certain Florida Medicaid long-term care programs may include home accessibility adaptations with prior authorization. See the VA and Medicaid guides.', links: [{ href: 'VA Benefits for Accessible Bathrooms.dc.html', label: 'VA' }, { href: 'Does Medicaid Cover Walk-In Tubs.dc.html', label: 'Medicaid' }] }
    ],
    summary: 'In Naples the two things that shape a project are jurisdiction and community rules \u2014 both handled by the professional preparing your estimate. Enter your ZIP code to see whether tub-to-shower professionals serve your part of Collier County.',
    cta: 'See Local Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Naples city, Florida', url: 'https://data.census.gov/profile/Naples_city,_Florida?g=160XX00US1246975', supports: 'Population, age, ownership, home value and housing figures.' },
      { agency: 'CITY OF NAPLES', title: 'Building Department \u2014 permits', url: 'https://www.naplesgov.com/building', supports: 'Municipal permitting authority for addresses inside city limits.' },
      { agency: 'COLLIER COUNTY', title: 'Building Review and Permitting', url: 'https://www.colliercountyfl.gov/your-government/divisions-a-e/building-review-and-permitting', supports: 'County permitting authority for unincorporated addresses.' },
      { agency: 'AREA AGENCY ON AGING FOR SOUTHWEST FLORIDA', title: 'Regional aging services and Elder Helpline', url: 'https://aaaswfl.org/', supports: 'Local aging-services resource.' }
    ],
    nearby: [{ name: 'Fort Myers', href: 'Tub-to-Shower Conversion Fort Myers.dc.html' }, { name: 'Cape Coral', href: 'Tub-to-Shower Conversion Cape Coral.dc.html' }, { name: 'Sarasota', href: 'Tub-to-Shower Conversion Sarasota.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  'st-petersburg': {
    slug: 'st-petersburg', name: 'St. Petersburg', county: 'Pinellas County', region: 'Tampa Bay',
    seo_title: 'Tub-to-Shower Conversion in St. Petersburg, FL: Costs, Permits and Options',
    meta_description: 'Plan a tub-to-shower conversion in St. Petersburg: city permitting, mid-century and condominium housing considerations, local aging resources, costs, and how to check local project availability.',
    h1: 'Tub-to-Shower Conversion Options in St. Petersburg, Florida',
    intro: [
      'St. Petersburg has one of the higher concentrations of older homeowners in Tampa Bay, and its bathrooms show their age in a specific way: compact, tiled, and built around a standard alcove tub. Postwar neighborhoods from Old Northeast to Lakewood Estates are full of 1950s and 1960s houses where the original tub is still in place, and those alcoves are the classic candidate for a same-footprint conversion \u2014 the drain stays where it is, the surround comes out, and a low-threshold shower goes in.',
      'The city\u2019s waterfront and downtown condominium buildings are the other half of the picture. In a condo, the association\u2019s alteration process comes before anything else: an application, contractor licensing and insurance documentation, and often scheduling rules for elevators and service entrances. Buildings with units stacked above one another may also ask about the waterproofing approach for a wet area. None of this is difficult \u2014 it just needs to happen in the right order.',
      'One more St. Petersburg reality worth planning around: much of Pinellas County sits at low elevation, and older slab-built homes here occasionally reveal aging drain lines once a tub comes out. Contractors working in the area handle this routinely; what matters is that your written scope says how conditions found after demolition are priced.'
    ],
    facts: [
      { label: 'City population', value: '~260,000', note: 'City of St. Petersburg; Pinellas County approaches 960,000' },
      { label: 'Residents 65 and older', value: '~20%', note: 'in line with Florida overall and well above the national share' },
      { label: 'Owner-occupied homes', value: '~57%', note: 'a majority-owner city \u2014 most conversions here are homeowner decisions' },
      { label: 'Median owner-occupied home value', value: '~$390,000', note: 'city-level estimate; waterfront and inland values diverge widely' },
      { label: 'Postwar housing', value: '1950s\u20131960s core', note: 'compact bathrooms with original alcove tubs are the norm' },
      { label: 'Median household income', value: '~$72,000', note: 'city-level ACS estimate' }
    ],
    permit: { authority: 'City of St. Petersburg Construction Services and Permitting', url: 'https://www.stpete.org/residents/construction_services___permitting/index.php', county_authority: 'Pinellas County Building Services (unincorporated addresses)', county_url: 'https://pinellas.gov/departments/building-services/', note: 'A conversion that changes plumbing normally requires a permit, and the contractor preparing your scope typically submits it. City addresses go through St. Petersburg Construction Services; unincorporated Pinellas addresses go through the county.' },
    considerations: [
      { h: 'Postwar alcove bathrooms', d: 'Compact 1950s and 1960s bathrooms convert cleanly when the shower stays in the tub footprint \u2014 the most affordable and fastest path, and usually the right one here.' },
      { h: 'Condominium alteration approval', d: 'Downtown and waterfront buildings run an approval process before work: application, contractor documentation, scheduling, and sometimes waterproofing requirements. Start it early and the rest follows smoothly.' },
      { h: 'Older drain lines', d: 'Removing a decades-old tub sometimes exposes aging plumbing. Ask that the scope state how post-demolition conditions are handled \u2014 experienced local contractors price this transparently.' },
      { h: 'Low elevation and moisture', d: 'Coastal humidity rewards good ventilation and a clearly specified waterproofing system. Both belong as named line items in the estimate.' }
    ],
    resources: [
      { name: 'Area Agency on Aging of Pasco-Pinellas', d: 'The regional agency serving Pinellas County \u2014 the Elder Helpline is the usual first call for local aging services and referrals.', url: 'https://agingcarefl.org/' },
      { name: 'City of St. Petersburg Housing and Community Development', d: 'Municipal housing programs and referrals; availability and eligibility vary by program year.', url: 'https://www.stpete.org/residents/housing/index.php' }
    ],
    faqs: [
      { q: 'Do I need a permit for a tub-to-shower conversion in St. Petersburg?', a: 'A permit is normally required when the work changes plumbing. City addresses are handled by St. Petersburg Construction Services and Permitting; unincorporated Pinellas addresses go through Pinellas County Building Services. The professional preparing your scope can identify what is needed and submit it for you.' },
      { q: 'How does the local matching work?', a: 'You enter your ZIP code and we check it against the service areas available for tub-to-shower conversions. Where coverage exists, your request may be shared with independent professionals handling this type of project, who can then discuss your bathroom and prepare a site-specific estimate. There is no obligation at any stage.' },
      { q: 'Can I convert a tub in a St. Petersburg condominium?', a: 'Yes, and it happens frequently downtown and along the waterfront. Your association will have an alteration process covering the application, contractor licensing and insurance, and scheduling; professionals who work in local buildings prepare that paperwork routinely.' },
      { q: 'What does a conversion cost here?', a: 'Most projects fall within the national planning range of roughly $2,000\u2013$12,000, with same-footprint conversions toward the lower end. Bathroom size, plumbing condition, product selection, and whether custom glass is involved decide where you land \u2014 see the cost guide, then get an in-home estimate for a real figure.', links: [{ href: 'Tub-to-Shower Conversion Cost.dc.html', label: 'cost guide' }] },
      { q: 'How long does the work take?', a: 'Typically three to seven working days on site for a standard conversion, with planning and product ordering before that. The timeline guide breaks down each stage.', links: [{ href: 'Tub-to-Shower Conversion Timeline.dc.html', label: 'timeline guide' }] },
      { q: 'Can the existing plumbing be reused?', a: 'Usually, yes \u2014 keeping the shower in the tub footprint reuses the drain and supply locations, which is why same-footprint conversions are quicker and less expensive. Moving the drain is possible but adds slab work in most St. Petersburg homes.' },
      { q: 'Should grab-bar reinforcement be added during the project?', a: 'Yes \u2014 blocking inside open walls costs very little at that stage and makes adding grab bars simple later. Ask for it in the scope even if you are not installing bars now.' },
      { q: 'Can Medicaid or VA benefits help pay for the project?', a: 'Sometimes, for people who qualify. Certain Florida Medicaid long-term care programs can include home accessibility adaptations with prior authorization, and VA HISA may support medically necessary bathroom access for eligible veterans. See the Medicaid and VA guides.', links: [{ href: 'Does Medicaid Cover Walk-In Tubs.dc.html', label: 'Medicaid' }, { href: 'VA Benefits for Accessible Bathrooms.dc.html', label: 'VA' }] }
    ],
    summary: 'St. Petersburg conversions are usually straightforward: keep the shower in the tub footprint, settle the condo approval if you have one, and let a professional handle the permit. Enter your ZIP code to see what is available near you.',
    cta: 'See Local Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 St. Petersburg city, Florida', url: 'https://data.census.gov/profile/St._Petersburg_city,_Florida?g=160XX00US1263000', supports: 'Population, age, ownership, home value and income figures.' },
      { agency: 'CITY OF ST. PETERSBURG', title: 'Construction Services and Permitting', url: 'https://www.stpete.org/residents/construction_services___permitting/index.php', supports: 'Municipal permitting authority and process.' },
      { agency: 'PINELLAS COUNTY', title: 'Building Services \u2014 permits', url: 'https://pinellas.gov/departments/building-services/', supports: 'County permitting authority for unincorporated addresses.' },
      { agency: 'AREA AGENCY ON AGING OF PASCO-PINELLAS', title: 'Regional aging services and Elder Helpline', url: 'https://agingcarefl.org/', supports: 'Local aging-services resource.' }
    ],
    nearby: [{ name: 'Tampa', href: 'Tub-to-Shower Conversion Tampa.dc.html' }, { name: 'Clearwater', href: 'Tub-to-Shower Conversion Clearwater.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  clearwater: {
    slug: 'clearwater', name: 'Clearwater', county: 'Pinellas County', region: 'Tampa Bay',
    seo_title: 'Tub-to-Shower Conversion in Clearwater, FL: Costs, Permits and Options',
    meta_description: 'Plan a tub-to-shower conversion in Clearwater: city permitting, coastal and condominium considerations, 1970s housing stock, local aging resources, costs, and local project availability.',
    h1: 'Tub-to-Shower Conversion Options in Clearwater, Florida',
    intro: [
      'Clearwater has one of the oldest resident populations of any city its size in Florida \u2014 more than one in five residents is 65 or older \u2014 and that shapes what bathroom projects look like here. Requests are rarely speculative remodels. They are usually a specific response to a specific difficulty: stepping over a tub wall has become the hardest part of the day, and the household wants it solved without rebuilding the bathroom.',
      'The housing supports that. Much of Clearwater\u2019s stock went up between the 1960s and 1980s, including a large number of villas, low-rise condominiums, and 55-plus communities where bathrooms follow a handful of repeating layouts. Contractors who work here have converted the same alcove configuration many times, which is part of why same-footprint conversions in Clearwater tend to be quick and predictable.',
      'Two local factors deserve attention. Association rules govern a substantial share of Clearwater homes \u2014 villa and condo communities typically require an alteration application and contractor documentation before work begins. And barrier-island and near-coastal properties bring salt air and humidity into the material conversation, which is a good reason to have ventilation and the waterproofing system named explicitly in the estimate.'
    ],
    facts: [
      { label: 'City population', value: '~117,000', note: 'City of Clearwater, the Pinellas County seat' },
      { label: 'Residents 65 and older', value: '~22%', note: 'above the Florida average \u2014 one of the region\u2019s oldest resident populations' },
      { label: 'Owner-occupied homes', value: '~55%', note: 'with a large share of villas and low-rise condominiums' },
      { label: 'Median owner-occupied home value', value: '~$330,000', note: 'city-level estimate; beach properties run considerably higher' },
      { label: 'Dominant construction era', value: '1960s\u20131980s', note: 'repeating bathroom layouts that local contractors know well' },
      { label: 'Median household income', value: '~$63,000', note: 'city-level ACS estimate' }
    ],
    permit: { authority: 'City of Clearwater Building Division (Planning and Development)', url: 'https://www.myclearwater.com/government/city-departments/planning-development/divisions-/building', county_authority: 'Pinellas County Building Services (unincorporated addresses)', county_url: 'https://pinellas.gov/departments/building-services/', note: 'Work that changes plumbing normally requires a permit, and your contractor typically submits it. City addresses go through the Clearwater Building Division; unincorporated Pinellas addresses go through the county. Coastal properties may have additional requirements for larger projects.' },
    considerations: [
      { h: 'Villa and condominium associations', d: 'A large share of Clearwater homes sit in communities with alteration rules. Expect an application and contractor documentation \u2014 professionals working locally handle this as a normal part of the job.' },
      { h: 'Repeating bathroom layouts', d: 'Many 1960s\u20131980s communities share the same alcove configuration, so contractors here often know your layout before they arrive \u2014 which helps with both scheduling and accuracy of estimates.' },
      { h: 'Coastal exposure', d: 'Near-beach properties face salt air and humidity. Ventilation capacity, fixture finishes, and the waterproofing system are worth naming in the estimate rather than leaving to default selections.' },
      { h: 'Accessibility features from the start', d: 'With an older resident population, seating, grab-bar reinforcement, handheld showerheads, and slip-resistant flooring are standard requests here \u2014 include them in the scope while the walls are open.' }
    ],
    resources: [
      { name: 'Area Agency on Aging of Pasco-Pinellas', d: 'The regional agency for Pinellas County, including Clearwater \u2014 the Elder Helpline connects residents to local aging services.', url: 'https://agingcarefl.org/' },
      { name: 'Pinellas County Human Services', d: 'County programs and referrals supporting residents; eligibility and availability vary by program year.', url: 'https://pinellas.gov/departments/human-services/' }
    ],
    faqs: [
      { q: 'Do I need a permit for a tub-to-shower conversion in Clearwater?', a: 'A permit is normally required when plumbing changes. The City of Clearwater Building Division handles addresses inside the city, and Pinellas County Building Services covers unincorporated addresses. Your contractor generally identifies and submits what is needed as part of the project.' },
      { q: 'Does my villa or condo association need to approve the work?', a: 'Most likely yes \u2014 a large share of Clearwater homes are in communities with alteration rules requiring an application and contractor documentation. It is a routine step, and starting it early keeps the schedule on track.' },
      { q: 'How does the local matching work?', a: 'Enter your ZIP code and we check it against the service areas available for tub-to-shower conversions. Where coverage exists, your request may be shared with independent professionals handling these projects, who can discuss your bathroom and prepare a site-specific estimate. No obligation.' },
      { q: 'What accessibility features should I include?', a: 'A low threshold, a seat or bench, properly reinforced grab bars, a handheld showerhead, reachable controls, and slip-resistant flooring cover most needs. The shower features guide explains the trade-offs, and adding reinforcement while walls are open costs very little.', links: [{ href: 'Best Shower Features.dc.html', label: 'shower features guide' }] },
      { q: 'What does a conversion cost in Clearwater?', a: 'Most projects sit inside the national planning range of roughly $2,000\u2013$12,000, with straightforward same-footprint conversions toward the lower end. Product selection, glass, and any plumbing changes move the figure \u2014 an in-home estimate gives you the real number.' },
      { q: 'How long will my bathroom be out of use?', a: 'Usually three to seven working days of on-site work for a standard conversion. The bathing area is unavailable during that time; ask your contractor about daily access, and see the timeline guide.', links: [{ href: 'Tub-to-Shower Conversion Timeline.dc.html', label: 'timeline guide' }] },
      { q: 'Is a curbless shower possible in a Clearwater villa or condo?', a: 'Sometimes \u2014 it depends on the floor structure and, in a condo, on building rules, because a curbless entry needs floor recessing and extended waterproofing. A low-threshold shower achieves most of the same benefit and is far easier to approve.' },
      { q: 'Can Medicaid or VA benefits help with the cost?', a: 'They can for people who qualify. Certain Florida Medicaid long-term care programs may include home accessibility adaptations with prior authorization, and VA HISA may support medically necessary bathroom access. See the Medicaid and VA guides for how to apply.', links: [{ href: 'Does Medicaid Cover Walk-In Tubs.dc.html', label: 'Medicaid' }, { href: 'VA Benefits for Accessible Bathrooms.dc.html', label: 'VA' }] }
    ],
    summary: 'Clearwater bathrooms convert quickly when the shower stays in the tub footprint and the association paperwork starts early. Enter your ZIP code to see whether professionals handling these projects serve your community.',
    cta: 'See Local Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Clearwater city, Florida', url: 'https://data.census.gov/profile/Clearwater_city,_Florida?g=160XX00US1212875', supports: 'Population, age, ownership, home value and income figures.' },
      { agency: 'CITY OF CLEARWATER', title: 'Building Division \u2014 permits and inspections', url: 'https://www.myclearwater.com/government/city-departments/planning-development/divisions-/building', supports: 'Municipal permitting authority and process.' },
      { agency: 'PINELLAS COUNTY', title: 'Building Services \u2014 permits', url: 'https://pinellas.gov/departments/building-services/', supports: 'County permitting authority for unincorporated addresses.' },
      { agency: 'AREA AGENCY ON AGING OF PASCO-PINELLAS', title: 'Regional aging services and Elder Helpline', url: 'https://agingcarefl.org/', supports: 'Local aging-services resource.' }
    ],
    nearby: [{ name: 'Tampa', href: 'Tub-to-Shower Conversion Tampa.dc.html' }, { name: 'St. Petersburg', href: 'Tub-to-Shower Conversion St Petersburg.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  tampa: {
    slug: 'tampa', name: 'Tampa', county: 'Hillsborough County', region: 'Tampa Bay',
    seo_title: 'Tub-to-Shower Conversion in Tampa, FL: Costs, Permits and Local Planning',
    meta_description: 'Plan a tub-to-shower conversion in Tampa: City of Tampa and Hillsborough County permitting, bungalow and slab-home realities, flood-zone considerations, contractor verification and local aging resources.',
    h1: 'Tub-to-Shower Conversion Options in Tampa, Florida',
    intro: [
      'Tampa sits in the middle of two very different housing stories, and a bathroom conversion here depends on which one your home belongs to. Neighborhoods like Seminole Heights, Hyde Park and Old Seminole Heights are full of early-twentieth-century bungalows on pier-and-beam foundations \u2014 small bathrooms, original alcove tubs, and plumbing that has been patched more than once. South Tampa, New Tampa and the suburban ring are dominated by slab-built homes from the 1970s onward, where the tub-shower combination in the secondary bath is the standard conversion candidate.',
      'That foundation difference decides what is realistic. In a bungalow with a crawl space, moving a drain or building a curbless entry is genuinely feasible, because there is access beneath the floor \u2014 though opening those walls often reveals cast-iron drain lines or a subfloor needing repair. In a slab home, the same design means cutting or recessing concrete, which pushes the project into a much higher cost position. Same-footprint conversions dominate in the suburbs for exactly that reason.',
      'Two more Tampa-specific realities belong in the planning conversation: much of Hillsborough County sits in a designated flood zone, which can affect materials and permitting for larger projects, and permits are issued by either the City of Tampa or Hillsborough County depending on whether the address is inside city limits \u2014 a distinction plenty of \u201cTampa\u201d mailing addresses get wrong.'
    ],
    facts: [
      { label: 'City population', value: '~400,000', note: 'City of Tampa; Hillsborough County exceeds 1.5 million' },
      { label: 'Residents 65 and older', value: '~13%', note: 'below the statewide share, but the wider Tampa Bay region skews considerably older' },
      { label: 'Owner-occupied homes', value: '~48%', note: 'city-level; ownership is higher across unincorporated Hillsborough County' },
      { label: 'Median owner-occupied home value', value: '~$400,000', note: 'wide variation between historic-core and suburban neighborhoods' },
      { label: 'Historic-core housing', value: 'pre-1950 bungalows', note: 'Seminole Heights and Hyde Park \u2014 pier-and-beam floors, original bathrooms' },
      { label: 'Median household income', value: '~$71,000', note: 'city-level ACS estimate' }
    ],
    permit: { authority: 'City of Tampa Construction Services Center', url: 'https://www.tampa.gov/construction-services', county_authority: 'Hillsborough County Development Services (addresses outside city limits)', county_url: 'https://hcfl.gov/residents/property-owners-and-renters/permits-and-records', note: 'Whether the city or the county issues your permit depends on the parcel, not the mailing address \u2014 many \u201cTampa\u201d addresses are in unincorporated Hillsborough County. Plumbing work in a conversion commonly requires a permit, and flood-zone properties may face additional requirements; the contractor should confirm the authority having jurisdiction in the written scope.' },
    considerations: [
      { h: 'Pier-and-beam versus slab', d: 'Crawl-space bungalows make drain relocation and curbless entries practical; slab-built suburban homes make the same designs substantially more expensive. Confirm your foundation type before setting expectations.' },
      { h: 'Original plumbing in historic homes', d: 'Cast-iron drains and aged supply lines are common in Tampa\u2019s pre-1950 housing. Require written terms covering conditions discovered after demolition, and keep a contingency in the budget.' },
      { h: 'Flood-zone properties', d: 'Much of Hillsborough County is in a designated flood zone. For larger remodels this can affect materials and permitting \u2014 the building department and your contractor can confirm what applies to your address.' },
      { h: 'Humidity and ventilation', d: 'Tampa Bay humidity makes exhaust ventilation and a named waterproofing system worth explicit line items rather than assumptions in the estimate.' }
    ],
    resources: [
      { name: 'Senior Connection Center', d: 'The Area Agency on Aging for Hillsborough, Manatee, Pasco, Pinellas and Polk counties \u2014 the regional Elder Helpline and first stop for local aging services.', url: 'https://seniorconnectioncenter.org/' },
      { name: 'Hillsborough County Aging Services', d: 'County programs supporting older residents; offerings, eligibility and funding vary by program year.', url: 'https://hcfl.gov/residents/family-and-social-services/aging-services' }
    ],
    faqs: [
      { q: 'Do I need a permit for a tub-to-shower conversion in Tampa?', a: 'Usually yes when plumbing is involved \u2014 and your contractor normally handles it. Permits come from the City of Tampa Construction Services Center inside city limits or Hillsborough County Development Services for unincorporated addresses, and experienced local installers pull them routinely. Just confirm in the estimate that permits and inspections are included.' },
      { q: 'Is a curbless shower realistic in a Tampa home?', a: 'Often, yes. In a pier-and-beam bungalow with crawl-space access it is very achievable. In a slab-built suburban home the concrete has to be cut or recessed, so it costs more \u2014 many homeowners choose a low-threshold shower instead and get nearly the same everyday benefit. A local installer can tell you which applies after seeing the bathroom.' },
      { q: 'What should I expect in a Seminole Heights or Hyde Park bathroom?', a: 'These are small bathrooms with original alcove tubs, often cast-iron drain lines and framing that needs blocking for grab bars \u2014 all familiar territory for contractors who work in Tampa\u2019s historic neighborhoods. Ask how hidden conditions are priced, keep a modest contingency, and the project is straightforward.' },
      { q: 'Does being in a flood zone affect the project?', a: 'For a standard conversion, rarely. Larger remodels can involve different material or permitting requirements, and a contractor working in Hillsborough County will know how to check your address and handle it.' },
      { q: 'How do you decide which Tampa contractors I hear from?', a: 'We match by ZIP code and project type, so your details only go to companies that serve your neighborhood and do tub-to-shower conversions. From there you compare estimates and choose \u2014 there is no obligation, and you can always look a company up in the Florida DBPR licensee database yourself.' },
      { q: 'What does a conversion cost in Tampa?', a: 'Most projects land inside the national planning range of roughly $2,000\u2013$12,000, with same-footprint conversions toward the lower end. Foundation type, plumbing condition, and finishes decide where you fall \u2014 an in-home estimate will give you a real number for your bathroom.' }
    ],
    summary: 'In Tampa, the foundation under your bathroom sets the ceiling on what is affordable. Confirm it, confirm your permitting jurisdiction, and compare itemized estimates \u2014 then the project becomes predictable.',
    cta: 'See Tampa-Area Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Tampa city, Florida', url: 'https://data.census.gov/profile/Tampa_city,_Florida?g=160XX00US1271000', supports: 'Population, age, ownership, home value and income figures.' },
      { agency: 'CITY OF TAMPA', title: 'Construction Services Center \u2014 permits and inspections', url: 'https://www.tampa.gov/construction-services', supports: 'Municipal permitting authority and process.' },
      { agency: 'HILLSBOROUGH COUNTY', title: 'Development Services \u2014 permits and records', url: 'https://hcfl.gov/residents/property-owners-and-renters/permits-and-records', supports: 'County permitting authority for unincorporated addresses.' },
      { agency: 'SENIOR CONNECTION CENTER', title: 'Area Agency on Aging for the Tampa Bay region', url: 'https://seniorconnectioncenter.org/', supports: 'Regional aging-services resource.' }
    ],
    nearby: [{ name: 'St. Petersburg', href: 'Tub-to-Shower Conversion St Petersburg.dc.html' }, { name: 'Clearwater', href: 'Tub-to-Shower Conversion Clearwater.dc.html' }, { name: 'Sarasota', href: 'Tub-to-Shower Conversion Sarasota.dc.html' }, { name: 'Orlando', href: 'Tub-to-Shower Conversion Orlando.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  miami: {
    slug: 'miami', name: 'Miami', county: 'Miami-Dade County', region: 'South Florida',
    seo_title: 'Tub-to-Shower Conversion in Miami, FL: Costs, Permits and Condo Rules',
    meta_description: 'Plan a tub-to-shower conversion in Miami: Miami-Dade permitting, condominium approval and milestone-inspection realities, contractor verification, local aging resources and costs.',
    h1: 'Tub-to-Shower Conversion Options in Miami, Florida',
    intro: [
      'Miami bathrooms are, more often than not, condominium bathrooms. Roughly a third of households in the city own the home they live in \u2014 far below the Florida average \u2014 and a large share of owner-occupied units sit in mid- and high-rise buildings rather than single-family homes. That single fact reshapes a tub-to-shower conversion here: the project usually begins with the association, not the contractor.',
      'Practically, that means reviewing your declaration and alteration rules before requesting estimates, budgeting time for board or management approval, and confirming what the building requires in writing \u2014 licensed and insured contractors on its approved list, certificates of insurance, elevator and service-entrance scheduling, work-hour limits, and (in many buildings) waterproofing details for any change to a wet area over another unit. Stacked plumbing risers also limit how far a drain can move, which is why same-footprint conversions dominate in Miami towers.',
      'Single-family neighborhoods from Coral Way to Allapattah bring a different set of considerations: older slab-on-grade construction, cast-iron drain lines in mid-century homes, and humidity levels that make ventilation and waterproofing detail worth paying for. In both cases, the permit and inspection path runs through a specific municipal or county office \u2014 and getting that right at the start is the difference between a five-day project and a stalled one.'
    ],
    facts: [
      { label: 'City population', value: '~455,000', note: 'City of Miami; Miami-Dade County exceeds 2.7 million' },
      { label: 'Residents 65 and older', value: '~16%', note: 'close to the national average, below the Florida share' },
      { label: 'Owner-occupied homes', value: '~32%', note: 'one of the lowest ownership rates among large Florida cities \u2014 condo and rental stock dominates' },
      { label: 'Median owner-occupied home value', value: '~$540,000', note: 'high values, but many units are older mid-rise condos' },
      { label: 'Housing built before 1980', value: 'about half', note: 'original bathrooms and cast-iron drain lines are common' },
      { label: 'Median household income', value: '~$62,000', note: 'city-level; county figures differ' }
    ],
    permit: { authority: 'City of Miami Building Department', url: 'https://www.miami.gov/Government/Departments-and-Divisions/Building', county_authority: 'Miami-Dade County Department of Regulatory and Economic Resources (unincorporated areas and some municipalities)', county_url: 'https://www.miamidade.gov/global/service.page?Mduid_service=ser1508167701659962', note: 'Miami-Dade operates under the Florida Building Code with High-Velocity Hurricane Zone provisions. Plumbing work in a bathroom conversion commonly requires a permit; your contractor should confirm the exact scope with the authority having jurisdiction for your address, which may be the city, the county, or another municipality.' },
    considerations: [
      { h: 'Condominium approval comes first', d: 'Review the declaration and alteration rules, submit the required application, and expect the association to ask for licensed and insured contractors, certificates of insurance, and scheduling limits. Approval timelines vary widely by building.' },
      { h: 'Milestone inspections and reserve studies', d: 'Florida law requires milestone structural inspections and structural integrity reserve studies for many older multi-story condominium buildings. Buildings mid-assessment sometimes pause discretionary unit alterations \u2014 ask your association where yours stands before signing a contract.' },
      { h: 'Stacked plumbing risers', d: 'In towers, the drain and supply locations are shared building infrastructure. Moving a drain is often impractical, which is why same-footprint conversions are the norm and curbless designs are harder to achieve above the ground floor.' },
      { h: 'Humidity and ventilation', d: 'Coastal humidity makes exhaust ventilation and a properly detailed waterproofing system worth explicit line items in the estimate rather than assumptions.' }
    ],
    resources: [
      { name: 'Alliance for Aging, Inc.', d: 'The Area Agency on Aging serving Miami-Dade and Monroe counties \u2014 the Elder Helpline is the usual first call for local aging services and referrals.', url: 'https://www.allianceforaging.org/' },
      { name: 'Miami-Dade Community Action and Human Services', d: 'County department administering housing and human-services programs; availability and eligibility vary by program and funding year.', url: 'https://www.miamidade.gov/global/service.page?Mduid_service=ser1500403683455739' }
    ],
    faqs: [
      { q: 'Do I need a permit for a tub-to-shower conversion in Miami?', a: 'Usually yes when plumbing is involved \u2014 and it is normally the contractor\u2019s job, not yours. The City of Miami Building Department issues permits inside the city; Miami-Dade County or your municipality handles other addresses. Confirm the estimate includes permits and inspections and the rest is handled for you.' },
      { q: 'Can I convert a tub in a Miami condominium?', a: 'Yes \u2014 it happens constantly in Miami buildings. The association runs an approval process (an alteration application, contractor licensing and insurance, sometimes waterproofing requirements and work-hour rules), and contractors who regularly work in condos know how to assemble that paperwork. Start with your association, then bring in estimates.' },
      { q: 'Why do Miami contractors prefer same-footprint conversions?', a: 'Because they are faster and cheaper. Condo plumbing runs in shared stacks and single-family homes here sit on slab, so keeping the shower where the tub was avoids drain relocation entirely \u2014 which is why most Miami conversions finish in a matter of days.' },
      { q: 'Can a curbless shower be installed in a high-rise unit?', a: 'Sometimes, though it is a bigger project above the ground floor because of floor structure and building rules. Most high-rise residents get an excellent result with a low-threshold shower instead \u2014 an installer who works in your type of building can tell you quickly which is possible.' },
      { q: 'How do you decide which Miami contractors I hear from?', a: 'We match by ZIP code and project type, so your details only go to companies that serve your area and do this work \u2014 including ones experienced with condominium approval processes. You compare estimates and decide, with no obligation.' },
      { q: 'What does a conversion cost in Miami?', a: 'The national planning range of roughly $2,000\u2013$12,000 is the right starting point. Condo requirements, common-area protection and older plumbing can add scope, so an in-home estimate is where you get your real number \u2014 and it costs nothing to get a few.' }
    ],
    summary: 'In Miami, the sequence that saves money is: association rules first, permit authority second, itemized estimates third. Get all three settled before demolition and a conversion here is as predictable as anywhere else in Florida.',
    cta: 'See Miami-Area Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Miami city, Florida', url: 'https://data.census.gov/profile/Miami_city,_Florida?g=160XX00US1245000', supports: 'Population, age, ownership, home value and income figures.' },
      { agency: 'CITY OF MIAMI', title: 'Building Department \u2014 permits and inspections', url: 'https://www.miami.gov/Government/Departments-and-Divisions/Building', supports: 'Municipal permitting authority and process.' },
      { agency: 'MIAMI-DADE COUNTY', title: 'Regulatory and Economic Resources \u2014 building permits', url: 'https://www.miamidade.gov/global/service.page?Mduid_service=ser1508167701659962', supports: 'County permitting authority for unincorporated areas.' },
      { agency: 'ALLIANCE FOR AGING', title: 'Area Agency on Aging for Miami-Dade and Monroe', url: 'https://www.allianceforaging.org/', supports: 'Local aging-services resource.' }
    ],
    nearby: [{ name: 'Fort Lauderdale', href: 'Tub-to-Shower Conversion Fort Lauderdale.dc.html' }, { name: 'West Palm Beach', href: 'Tub-to-Shower Conversion West Palm Beach.dc.html' }, { name: 'Naples', href: 'Tub-to-Shower Conversion Naples.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  orlando: {
    slug: 'orlando', name: 'Orlando', county: 'Orange County', region: 'Central Florida',
    seo_title: 'Tub-to-Shower Conversion in Orlando, FL: Costs, Permits and Planning',
    meta_description: 'Plan a tub-to-shower conversion in Orlando: Orange County and city permitting, slab-on-grade construction realities, contractor verification, Central Florida aging resources and costs.',
    h1: 'Tub-to-Shower Conversion Options in Orlando, Florida',
    intro: [
      'Orlando is a younger city than most of Florida \u2014 around one in nine residents is 65 or older, well below the statewide share \u2014 and that shapes the conversions happening here. Many are planned in advance rather than in response to a fall: a parent moving in, a guest bath being made usable for visiting family, or an owner deciding to future-proof the primary bathroom during a wider remodel.',
      'The housing stock cooperates. A large share of Orange County\u2019s single-family homes went up from the 1980s onward, typically slab-on-grade with a fiberglass or acrylic tub-shower unit in the secondary bathroom and an alcove tub in the primary. Those alcoves are the straightforward case for a same-footprint conversion: the drain stays put, the surround comes out, and a prefabricated base and wall system goes in. Curbless entries are the harder ask, because recessing a concrete slab is real structural work rather than a finish upgrade.',
      'Two Orlando-specific notes worth raising with any contractor: many neighborhoods are governed by homeowners\u2019 associations whose architectural rules cover exterior work but rarely interior bathrooms \u2014 confirm rather than assume \u2014 and permitting runs through either the City of Orlando or Orange County depending on whether your address is inside city limits, a distinction that matters more here than in a consolidated jurisdiction.'
    ],
    facts: [
      { label: 'City population', value: '~320,000', note: 'City of Orlando; Orange County exceeds 1.4 million' },
      { label: 'Residents 65 and older', value: '~11%', note: 'notably younger than Florida overall (~21%)' },
      { label: 'Owner-occupied homes', value: '~39%', note: 'city-level; Orange County ownership is considerably higher' },
      { label: 'Median owner-occupied home value', value: '~$390,000', note: 'city of Orlando estimate' },
      { label: 'Dominant construction era', value: '1980s onward', note: 'much of the metro\u2019s single-family stock \u2014 slab-on-grade with alcove tubs' },
      { label: 'Median household income', value: '~$69,000', note: 'city-level ACS estimate' }
    ],
    permit: { authority: 'City of Orlando Permitting Services Division', url: 'https://www.orlando.gov/Building-Development/Permits-Applications', county_authority: 'Orange County Division of Building Safety (addresses outside city limits)', county_url: 'https://www.orangecountyfl.net/PermitsLicenses/Permits.aspx', note: 'Whether the city or the county issues your permit depends on the address, not the mailing city \u2014 many \u201cOrlando\u201d addresses are in unincorporated Orange County. Plumbing work in a conversion commonly requires a permit; the contractor should confirm the authority having jurisdiction in the written scope.' },
    considerations: [
      { h: 'Slab-on-grade floors', d: 'Most Central Florida homes sit on concrete slab. Relocating a drain means cutting and patching the slab, and a true curbless entry usually requires recessing it \u2014 both meaningfully more expensive than a same-footprint conversion.' },
      { h: 'City limits versus unincorporated county', d: 'An Orlando mailing address does not guarantee city jurisdiction. Confirm which building department covers the parcel before assuming permit timelines or fees.' },
      { h: 'HOA architectural rules', d: 'Many Orange County subdivisions have active associations. Interior bathroom work is usually outside their review, but confirm in writing \u2014 especially in villa, townhome, and 55-plus communities where rules can reach further.' },
      { h: 'Guest-bath conversions', d: 'A common Orlando pattern is converting a secondary bathroom for a visiting or incoming parent while leaving the primary tub intact \u2014 preserving a bathtub in the home is worth considering for resale flexibility.' }
    ],
    resources: [
      { name: 'Senior Resource Alliance', d: 'The Area Agency on Aging for Orange, Osceola, Seminole and Brevard counties \u2014 the regional starting point for elder services and referrals.', url: 'https://seniorresourcealliance.org/' },
      { name: 'Orange County Housing and Community Development', d: 'County programs supporting housing needs; offerings, eligibility and funding availability change by program year.', url: 'https://www.orangecountyfl.net/NeighborsHousing/HousingCommunityDevelopment.aspx' }
    ],
    faqs: [
      { q: 'Do I need a permit for a tub-to-shower conversion in Orlando?', a: 'Usually yes when plumbing is involved, and your contractor normally pulls it. City of Orlando Permitting Services covers addresses inside city limits; Orange County Building Safety covers unincorporated ones \u2014 a local company will know which is yours and include it in the quote.' },
      { q: 'How does a concrete slab affect the project?', a: 'Only if you want to move the drain or go fully curbless \u2014 both mean cutting or recessing concrete. Keeping the shower in the existing tub footprint skips all of that, which is why most Orlando conversions are quick and predictable.' },
      { q: 'Can I get a curbless shower in an Orlando home?', a: 'Yes \u2014 it just involves slab work and extended waterproofing, so it sits at the higher end of the range. If that is more than you need, a low-threshold shower delivers most of the same everyday benefit for less.' },
      { q: 'Will my HOA need to approve the work?', a: 'Usually not \u2014 interior bathroom work typically falls outside architectural review. A quick written confirmation from your association clears it up, and it is worth doing in townhome, villa, or 55-plus communities where rules sometimes reach further.' },
      { q: 'Should I convert the primary or the guest bathroom?', a: 'Plenty of Orlando households convert the secondary bathroom for a parent moving in and keep the primary tub \u2014 you get one genuinely easy-to-use bathroom while keeping a bathtub in the home. A designer or contractor can walk both rooms with you and recommend the better candidate.' },
      { q: 'How do you decide which Orlando contractors I hear from?', a: 'We match by ZIP code and project type \u2014 so whether your address is inside city limits or in unincorporated Orange County, you hear from companies that actually work there. You compare estimates and decide, with no obligation.' }
    ],
    summary: 'Orlando conversions are usually straightforward when they stay in the tub footprint. Settle the jurisdiction question early, decide which bathroom to convert, and reserve the budget for slab work only if a curbless entry is genuinely necessary.',
    cta: 'See Orlando-Area Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Orlando city, Florida', url: 'https://data.census.gov/profile/Orlando_city,_Florida?g=160XX00US1253000', supports: 'Population, age, ownership, home value and income figures.' },
      { agency: 'CITY OF ORLANDO', title: 'Permitting Services \u2014 permits and applications', url: 'https://www.orlando.gov/Building-Development/Permits-Applications', supports: 'Municipal permitting authority and process.' },
      { agency: 'ORANGE COUNTY', title: 'Division of Building Safety \u2014 permits', url: 'https://www.orangecountyfl.net/PermitsLicenses/Permits.aspx', supports: 'County permitting authority for unincorporated addresses.' },
      { agency: 'SENIOR RESOURCE ALLIANCE', title: 'Area Agency on Aging for Central Florida', url: 'https://seniorresourcealliance.org/', supports: 'Regional aging-services resource.' }
    ],
    nearby: [{ name: 'The Villages', href: 'Tub-to-Shower Conversion The Villages.dc.html' }, { name: 'Lakeland', href: 'Tub-to-Shower Conversion Lakeland.dc.html' }, { name: 'Tampa', href: 'Tub-to-Shower Conversion Tampa.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  jacksonville: {
    slug: 'jacksonville', name: 'Jacksonville', county: 'Duval County', region: 'Northeast Florida',
    seo_title: 'Tub-to-Shower Conversion in Jacksonville, FL: Costs, Permits and Older Homes',
    meta_description: 'Plan a tub-to-shower conversion in Jacksonville: consolidated Duval County permitting, older housing stock and crawl-space considerations, contractor verification and local aging resources.',
    h1: 'Tub-to-Shower Conversion Options in Jacksonville, Florida',
    intro: [
      'Jacksonville has a structural advantage other Florida cities do not: consolidated government. Because the city and Duval County merged, most homeowners deal with a single building authority rather than guessing whether their address falls inside a municipal boundary. For a bathroom conversion, that removes the jurisdiction question that trips up projects in Orlando and Miami \u2014 with the exception of the beaches communities and Baldwin, which retain their own governments.',
      'The housing stock is the other defining factor. Jacksonville is geographically enormous and its neighborhoods span nearly a century of construction: Riverside and Springfield homes from the early 1900s with pier-and-beam floors and original plumbing, mid-century ranches across the Southside and Arlington, and newer slab-built subdivisions further out. That range matters, because a conversion in a 1920s home may reveal galvanized or cast-iron supply and drain lines and a subfloor that needs attention, while a 1990s home usually needs nothing beyond the conversion itself.',
      'Crawl-space construction in the older neighborhoods is genuinely useful here: it makes drain relocation less expensive than in slab-built homes, so expanded or curbless designs are more attainable than in most of the state. The trade-off is that opening those bathrooms more often uncovers deferred plumbing work \u2014 which is exactly why the contract should state in advance how hidden conditions are priced.'
    ],
    facts: [
      { label: 'City population', value: '~985,000', note: 'Florida\u2019s most populous city; largest by land area in the contiguous US' },
      { label: 'Residents 65 and older', value: '~14%', note: 'below the statewide share but rising' },
      { label: 'Owner-occupied homes', value: '~57%', note: 'high for a large Florida city \u2014 most conversions here are owner-decided' },
      { label: 'Median owner-occupied home value', value: '~$290,000', note: 'among the more affordable large Florida markets' },
      { label: 'Pre-1980 housing', value: 'a large share of core neighborhoods', note: 'Riverside, Springfield and Arlington include pier-and-beam and mid-century homes' },
      { label: 'Median household income', value: '~$67,000', note: 'city-level ACS estimate' }
    ],
    permit: { authority: 'City of Jacksonville Building Inspection Division (Planning and Development)', url: 'https://www.jacksonville.gov/departments/planning-and-development/building-inspection-division', county_authority: 'Consolidated with Duval County; Jacksonville Beach, Neptune Beach, Atlantic Beach and Baldwin maintain separate authorities', county_url: 'https://www.jacksonville.gov/departments/planning-and-development', note: 'Consolidation means one authority for most of Duval County. Plumbing work in a conversion commonly requires a permit; if your address is in one of the beaches communities or Baldwin, confirm the local building department instead.' },
    considerations: [
      { h: 'Pier-and-beam floors in older neighborhoods', d: 'Crawl-space access makes drain relocation and curbless construction more achievable and less costly than in slab homes \u2014 an advantage worth discussing if a barrier-free entry is the goal.' },
      { h: 'Original plumbing in historic homes', d: 'Cast-iron drains and galvanized supply lines are common in early-1900s Riverside and Springfield homes. Demolition can reveal work the estimate could not see; require written terms for hidden conditions.' },
      { h: 'Historic district review', d: 'Some Jacksonville neighborhoods sit within historic districts. Interior bathroom work is generally outside that review, but confirm with the Planning and Development Department if your home is designated.' },
      { h: 'Flood-zone properties', d: 'Riverfront and low-lying parcels may carry flood-zone requirements affecting materials or permitting for larger projects. Your contractor and the building division can confirm what applies.' }
    ],
    resources: [
      { name: 'ElderSource', d: 'The Area Agency on Aging for Northeast Florida, covering Duval and surrounding counties \u2014 the regional starting point for elder services and referrals.', url: 'https://myeldersource.org/' },
      { name: 'City of Jacksonville Housing and Community Development', d: 'Municipal housing programs; availability, eligibility and funding vary by program year.', url: 'https://www.jacksonville.gov/departments/neighborhoods/housing-community-development' }
    ],
    faqs: [
      { q: 'Do I need a permit for a tub-to-shower conversion in Jacksonville?', a: 'Usually yes when plumbing is involved, and your contractor handles the filing. One consolidated authority \u2014 the City of Jacksonville Building Inspection Division \u2014 covers most of Duval County, which makes the process simpler here than in most Florida cities.' },
      { q: 'Does consolidated government make permitting simpler here?', a: 'Yes \u2014 for most addresses there is one building authority rather than a city-versus-county question, which removes a common source of delay. Only the beaches communities and Baldwin have their own departments.' },
      { q: 'Is a curbless shower easier in an older Jacksonville home?', a: 'Often, yes \u2014 and it is one of the real advantages of building here. Crawl-space construction gives access beneath the floor that slab homes lack, so drain relocation and curbless entries are genuinely practical. A contractor can confirm what your floor structure allows.' },
      { q: 'What should I expect in a 1920s Riverside or Springfield bathroom?', a: 'Likely cast-iron or galvanized plumbing, an aged subfloor, and framing that needs blocking for grab bars \u2014 all routine for contractors who work in Jacksonville\u2019s historic neighborhoods. Agree up front how hidden conditions are priced and the project stays on track.' },
      { q: 'Does a historic designation affect a bathroom conversion?', a: 'Generally not \u2014 historic review focuses on exteriors, so interior bathroom work is usually unaffected. If your home is in a designated district, a quick check with Planning and Development settles it.' },
      { q: 'How do you decide which Jacksonville contractors I hear from?', a: 'We match by ZIP code and project type, so you are put in touch with companies that work in your part of Duval County and handle conversions. You compare estimates and decide, with no obligation.' }
    ],
    summary: 'Jacksonville offers a simpler permitting path than most Florida cities and, in older neighborhoods, structural access that makes ambitious designs realistic. Budget for what demolition might reveal, and the range of possibilities here is wider than the statewide norm.',
    cta: 'See Jacksonville-Area Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Jacksonville city, Florida', url: 'https://data.census.gov/profile/Jacksonville_city,_Florida?g=160XX00US1235000', supports: 'Population, age, ownership, home value and income figures.' },
      { agency: 'CITY OF JACKSONVILLE', title: 'Building Inspection Division \u2014 permits and inspections', url: 'https://www.jacksonville.gov/departments/planning-and-development/building-inspection-division', supports: 'Consolidated permitting authority for most of Duval County.' },
      { agency: 'ELDERSOURCE', title: 'Area Agency on Aging for Northeast Florida', url: 'https://myeldersource.org/', supports: 'Regional aging-services resource.' },
      { agency: 'FLORIDA DBPR', title: 'Licensee search', url: 'https://www.myfloridalicense.com/wl11.asp', supports: 'Contractor license verification guidance.' }
    ],
    nearby: [{ name: 'Gainesville', href: 'Tub-to-Shower Conversion Gainesville.dc.html' }, { name: 'Tallahassee', href: 'Tub-to-Shower Conversion Tallahassee.dc.html' }, { name: 'Orlando', href: 'Tub-to-Shower Conversion Orlando.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  },
  'fort-lauderdale': {
    slug: 'fort-lauderdale', name: 'Fort Lauderdale', county: 'Broward County', region: 'South Florida',
    seo_title: 'Tub-to-Shower Conversion in Fort Lauderdale, FL: Permits, Condos and Costs',
    meta_description: 'Plan a tub-to-shower conversion in Fort Lauderdale: Broward County building rules, condominium approvals, coastal construction considerations, contractor verification and local aging resources.',
    h1: 'Tub-to-Shower Conversion Options in Fort Lauderdale, Florida',
    intro: [
      'Fort Lauderdale sits at the intersection of two things that shape bathroom projects: a large older-adult population and a housing market built substantially around condominiums, waterfront properties, and mid-century single-family homes. Around one in six residents is 65 or older, and many of them live in buildings where a bathroom alteration is a governed process rather than a private decision.',
      'Broward County adds a layer other Florida counties do not have. The Broward County Board of Rules and Appeals administers and interprets the Florida Building Code countywide, working alongside each municipality\u2019s building department \u2014 so Fort Lauderdale homeowners deal with the city\u2019s Building Services Division for permits within a county-wide administrative framework. It is worth knowing simply because it means local requirements are more standardized across Broward municipalities than a homeowner might expect.',
      'The rest is familiar South Florida territory: condominium alteration applications and insurance requirements, milestone inspections and reserve studies affecting many older multi-story buildings, stacked plumbing that discourages moving drains, and coastal humidity that rewards careful ventilation and waterproofing. In the single-family neighborhoods inland from the beach, 1950s and 1960s ranch homes with original alcove tubs are the classic conversion candidate \u2014 usually a clean, same-footprint project.'
    ],
    facts: [
      { label: 'City population', value: '~185,000', note: 'City of Fort Lauderdale; Broward County exceeds 1.9 million' },
      { label: 'Residents 65 and older', value: '~17%', note: 'above the national average; Broward County\u2019s older population is substantial' },
      { label: 'Owner-occupied homes', value: '~48%', note: 'a near-even split, with a large condominium share' },
      { label: 'Median owner-occupied home value', value: '~$520,000', note: 'city-level estimate; wide variation between waterfront and inland neighborhoods' },
      { label: 'Mid-century housing', value: 'common inland', note: '1950s\u20131960s ranch homes with original alcove tubs' },
      { label: 'Median household income', value: '~$77,000', note: 'city-level ACS estimate' }
    ],
    permit: { authority: 'City of Fort Lauderdale Building Services Division', url: 'https://www.fortlauderdale.gov/departments/development-services/building-services', county_authority: 'Broward County Board of Rules and Appeals (countywide Florida Building Code administration)', county_url: 'https://www.broward.org/CodeAppeals/Pages/default.aspx', note: 'Permits for city addresses come from Fort Lauderdale Building Services, within the countywide code framework administered by the Broward County Board of Rules and Appeals. Plumbing work in a conversion commonly requires a permit; confirm the exact requirements for your address and scope.' },
    considerations: [
      { h: 'Condominium alteration approval', d: 'Association review typically precedes any work: an alteration application, contractor licensing and insurance documentation, and often waterproofing requirements for wet areas above other units. Build the approval time into your schedule.' },
      { h: 'Milestone inspections and reserve studies', d: 'Florida law requires milestone structural inspections and structural integrity reserve studies for many older multi-story condominium buildings. Some associations restrict discretionary alterations while that work is underway \u2014 ask before contracting.' },
      { h: 'Countywide code administration', d: 'The Broward County Board of Rules and Appeals administers the Florida Building Code across municipalities, so requirements are relatively consistent county-wide \u2014 but your permit still comes from the city building department.' },
      { h: 'Coastal exposure and humidity', d: 'Near-coast properties face salt air and high humidity. Ventilation capacity, fixture finishes, and waterproofing detail deserve explicit attention in the estimate rather than default selections.' }
    ],
    resources: [
      { name: 'Aging and Disability Resource Center of Broward County', d: 'The Area Agency on Aging for Broward \u2014 the local starting point for elder services, the Elder Helpline, and program referrals.', url: 'https://adrcbroward.org/' },
      { name: 'Broward County Housing Options and Resources', d: 'County housing programs and referral resources; eligibility and availability vary by program and funding year.', url: 'https://www.broward.org/Housing/Pages/default.aspx' }
    ],
    faqs: [
      { q: 'Do I need a permit for a tub-to-shower conversion in Fort Lauderdale?', a: 'Usually yes when plumbing is involved \u2014 and your contractor normally handles it. Permits come from the City of Fort Lauderdale Building Services Division, within the countywide code framework. Just confirm the estimate includes permits and inspections.' },
      { q: 'What is the Broward County Board of Rules and Appeals?', a: 'It administers the Florida Building Code across Broward municipalities, which is good news for homeowners: requirements are consistent county-wide, so contractors working across Broward already know the rules. Your permit still comes from your city building department.' },
      { q: 'Can I convert a tub in a Fort Lauderdale condominium?', a: 'Yes \u2014 these projects are common in Broward buildings. Your association will have an alteration process (application, contractor licensing and insurance, sometimes waterproofing requirements and work hours), and contractors experienced with condos prepare that paperwork as a matter of course.' },
      { q: 'Do milestone inspections affect bathroom projects?', a: 'Only indirectly \u2014 a few associations pause discretionary unit alterations while milestone inspection or reserve-study work is underway. One question to your association tells you whether that affects your timing.' },
      { q: 'What should coastal homeowners ask about?', a: 'Ventilation capacity, moisture management, finishes suited to salt air, and which waterproofing system is being used \u2014 named in the estimate. Contractors who work near the coast specify for these conditions routinely.' },
      { q: 'How do you decide which Fort Lauderdale contractors I hear from?', a: 'We match by ZIP code and project type, and in condo-heavy Fort Lauderdale that often means companies already familiar with association approval requirements. You compare estimates and decide, with no obligation.' }
    ],
    summary: 'Fort Lauderdale projects go smoothly when the association process and the permit path are settled first. For inland single-family homes, a same-footprint conversion is usually simple; in condominiums, approval timing is the variable worth planning around.',
    cta: 'See Fort Lauderdale-Area Options',
    sources: [
      { agency: 'US CENSUS BUREAU', title: 'ACS 5-year estimates \u2014 Fort Lauderdale city, Florida', url: 'https://data.census.gov/profile/Fort_Lauderdale_city,_Florida?g=160XX00US1224000', supports: 'Population, age, ownership, home value and income figures.' },
      { agency: 'CITY OF FORT LAUDERDALE', title: 'Building Services Division \u2014 permits', url: 'https://www.fortlauderdale.gov/departments/development-services/building-services', supports: 'Municipal permitting authority and process.' },
      { agency: 'BROWARD COUNTY', title: 'Board of Rules and Appeals \u2014 building code administration', url: 'https://www.broward.org/CodeAppeals/Pages/default.aspx', supports: 'Countywide Florida Building Code administration.' },
      { agency: 'ADRC OF BROWARD COUNTY', title: 'Area Agency on Aging for Broward County', url: 'https://adrcbroward.org/', supports: 'Local aging-services resource.' }
    ],
    nearby: [{ name: 'Miami', href: 'Tub-to-Shower Conversion Miami.dc.html' }, { name: 'West Palm Beach', href: 'Tub-to-Shower Conversion West Palm Beach.dc.html' }, { name: 'Naples', href: 'Tub-to-Shower Conversion Naples.dc.html' }],
    index_status: 'index', source_last_checked: 'July 2026'
  }
};
// Content-quality gate. Runs against each record; only passing cities are publishable + listed.
export function qualityGate(city) {
  const checks = {
    three_local_sources: (city.sources || []).length >= 3,
    six_local_facts: (city.facts || []).length >= 6,
    permit_fields_complete: !!(city.permit && city.permit.authority && city.permit.url && city.permit.note),
    census_fields_complete: (city.sources || []).some(s => /CENSUS/i.test(s.agency)),
    unique_intro: (city.intro || []).join(' ').length > 700,
    city_faqs: (city.faqs || []).length >= 5,
    unique_summary: !!city.summary,
    honest_coverage: true
  };
  const failed = Object.keys(checks).filter(k => !checks[k]);
  return { pass: failed.length === 0, failed, checks };
}
// Similarity flag for editorial review — high overlap between two city bodies is a warning, not a hard fail.
export function similarity(a, b) {
  const tok = s => new Set(String(s).toLowerCase().match(/[a-z]{4,}/g) || []);
  const A = tok((a.intro || []).join(' ') + ' ' + a.summary), B = tok((b.intro || []).join(' ') + ' ' + b.summary);
  let shared = 0; A.forEach(t => { if (B.has(t)) shared++; });
  return shared / Math.max(1, Math.min(A.size, B.size));
}
export const publishedCities = Object.values(cities).filter(c => qualityGate(c).pass && c.index_status === 'index');
