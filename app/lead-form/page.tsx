import type { Metadata } from "next";
import { LeadForm } from "./LeadForm";

export const metadata: Metadata = {
  title: "Find Bathroom Project Options Near You",
  description:
    "Tell us which accessible bathroom project you are considering and check whether independent professionals may serve your ZIP code.",
  alternates: { canonical: "/lead-form/" },
  robots: { index: false, follow: true },
};

type LeadPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function valueOf(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

const projectMap: Record<string, string> = {
  "tub-to-shower conversion": "tub_to_shower_conversion",
  tub_to_shower_conversion: "tub_to_shower_conversion",
  "walk-in shower": "walk_in_shower",
  walk_in_shower: "walk_in_shower",
  "walk-in tub": "walk_in_tub",
  walk_in_tub: "walk_in_tub",
  "accessible bathroom remodel": "accessible_remodel",
  accessible_remodel: "accessible_remodel",
  "not sure yet": "not_sure",
  not_sure: "not_sure",
};

export default async function LeadFormPage({ searchParams }: LeadPageProps) {
  const query = await searchParams;
  const rawProject = valueOf(query.project).toLowerCase();

  return (
    <main id="main-content" className="lead-page">
      <div className="wrap lead-page__inner">
        <LeadForm
          initialZip={valueOf(query.zip).replace(/\D/g, "").slice(0, 5)}
          initialProject={projectMap[rawProject] ?? ""}
          source={valueOf(query.source)}
          pageType={valueOf(query.page_type)}
          city={valueOf(query.city)}
        />
        <p className="fine lead-platform-note">
          Aging at Home Advisor is an independent information and referral
          platform — not a contractor, insurer, or government agency.
        </p>
      </div>
    </main>
  );
}
