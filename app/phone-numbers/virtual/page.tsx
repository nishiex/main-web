import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import {
  Breadcrumb, PageHero, SectionHeading, FaqSection, RelatedCards, NextStepBand, CompareTable,
} from "@/components/page-parts"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Virtual Phone Numbers · Any Area Code, Any Device | Twiching",
  description: "Virtual phone numbers routed to any device. Nationwide area codes. STIR/SHAKEN ready. 14-day free trial.",
}

const USERS = [
  { label: "Sales teams", desc: "Expanding into new territories before committing to regional offices" },
  { label: "Consultants", desc: "Want a professional number that isn't their cell" },
  { label: "E-commerce brands", desc: "Building regional trust in shipping markets" },
  { label: "SaaS companies", desc: "Customers who expect local support presence" },
  { label: "Agencies", desc: "Managing multi-market clients from a central team" },
]

const FAQS = [
  { q: "How fast does a number activate?", a: "Most within 24 hours. Some instantly." },
  { q: "Can I receive SMS on a virtual number?", a: "Yes. Two-way SMS supported." },
  { q: "What if I exceed my plan's minutes?", a: "Starter includes 5,000 domestic minutes/month. Overage at published rates. Professional and Enterprise include unlimited domestic calling." },
  { q: "Can I port an existing number?", a: "Yes. Standard domestic porting: 5-10 business days." },
]

export default function VirtualNumberPage() {
  return (
    <PageLayout>
      <Breadcrumb crumbs={[
        { label: "Phone Numbers", href: "/phone-numbers" },
        { label: "Virtual Phone Number" },
      ]} />
      <PageHero
        h1="A phone number in any area code. Routed to any device."
        sub="Virtual numbers give your business nationwide reach — without the office rent."
        trustItems={["Instant provisioning", "Any area code", "Any device", "STIR/SHAKEN"]}
        primaryCta={{ label: "Start 14-day free trial", href: "/pricing" }}
      />

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[680px] font-mono text-[15px] text-gray-600 leading-relaxed space-y-4">
          <p>The prospect in Dallas saw an unknown out-of-state number and let it ring to voicemail.</p>
          <p>It wasn&apos;t personal. People don&apos;t answer numbers they don&apos;t recognize.</p>
          <p>A virtual phone number gives your business a recognizable identity anywhere — without moving your team. The call routes through the cloud to wherever you actually work.</p>
        </div>
      </section>

      {/* What it does */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading eyebrow="How it works" h2="What a virtual number actually does" />
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed mb-6">
              It isn&apos;t tied to a physical line or a location you rent. It&apos;s tied to a routing rule.
            </p>
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed">
              A customer in Chicago dials a 312 number. The call routes to your team in Denver — or Austin, or Seattle, or wherever they actually sit. They never know the difference. You never miss the call.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Setup" h2="How it works" />
            <ol className="space-y-4">
              {[
                "Pick your area code — nationwide coverage",
                "Number activates — typically within 24 hours",
                "Configure routing — mobile, desk phone, softphone, SIP device",
                "Start taking calls",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-accent text-white text-[12px] font-mono font-bold grid place-items-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="font-mono text-[14px] text-gray-700 leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 font-mono text-[13px] text-gray-400">No hardware. No long-term contract. No phone company visit.</p>
          </div>
        </div>
      </section>

      {/* Who uses it */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <SectionHeading eyebrow="Use cases" h2="Who uses virtual numbers" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {USERS.map(({ label, desc }) => (
            <div key={label} className="p-5 rounded-xl border border-gray-100 bg-white">
              <p className="font-mono font-bold text-[14px] text-gray-900 mb-1.5">{label}</p>
              <p className="font-mono text-[12px] text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <SectionHeading eyebrow="vs. old way" h2="What it replaces" />
        <CompareTable
          headers={["The Old Way", "The Twiching Way"]}
          rows={[
            { label: "Open an office for local presence", values: ["Provision a virtual number in 24 hours"] },
            { label: "Sign a multi-year telco contract", values: ["Month-to-month billing"] },
            { label: "Buy desk phones and a PBX", values: ["Route to any device you already own"] },
            { label: "Hire a regional receptionist", values: ["Add auto-attendant routing"] },
          ]}
        />
      </section>

      <FaqSection items={FAQS} />
      <NextStepBand
        primary={{ label: "Start 14-day free trial", href: "/pricing" }}
        secondary={{ label: "Compare to local numbers", href: "/phone-numbers/local" }}
      />
    </PageLayout>
  )
}
