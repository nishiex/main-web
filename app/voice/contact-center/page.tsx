import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { Breadcrumb, PageHero, SectionHeading, FaqSection, NextStepBand } from "@/components/page-parts"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Center Tools · Cloud Contact Center Platform | Twiching",
  description: "Cloud contact center with queues, routing, recording, and supervisor tools. Built for real customer interactions.",
}

const INCLUDED = [
  "Inbound and outbound call management",
  "IVR and call flow configuration",
  "Queue management with ring strategies",
  "Agent routing by skill, language, availability",
  "Call recording (Enterprise)",
  "Supervisor tools — listen, whisper, barge (Professional+)",
  "Integration with Twiching numbers and messaging",
]

const FAQS = [
  { q: "Does it integrate with CRM?", a: "Yes. HubSpot, Salesforce, Zoho, Zendesk, Pipedrive, and Zapier on Professional and Enterprise." },
  { q: "Is outbound dialing included?", a: "Professional supports outbound. Auto dialers (Preview, Progressive, Predictive, Agentless) are Enterprise." },
  { q: "Can I monitor live calls?", a: "Yes. Listen, Whisper, Barge available on Professional+." },
]

export default function ContactCenterPage() {
  return (
    <PageLayout>
      <Breadcrumb crumbs={[
        { label: "Voice", href: "/voice" },
        { label: "Contact Center" },
      ]} />
      <PageHero
        h1="A contact center that doesn't fight your team."
        sub="Cloud contact center tools for businesses running real customer interactions — not just call routing."
        trustItems={["Cloud-based", "Queue management", "Recording", "Supervisor tools"]}
        primaryCta={{ label: "See pricing", href: "/pricing" }}
        secondaryCta={{ label: "Explore supervisor tools", href: "/features/supervisor-tools" }}
      />

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[680px] font-mono text-[15px] text-gray-600 leading-relaxed space-y-4">
          <p>First call, a billing question. Same customer, three days later, a technical question. Different agent. Zero context.</p>
          <p>The customer repeats everything from scratch.</p>
          <p>Contact centers that don&apos;t share context aren&apos;t contact centers. They&apos;re phone queues with a logo.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading eyebrow="Features" h2="What's included" />
            <ul className="space-y-3">
              {INCLUDED.map((f) => (
                <li key={f} className="flex items-start gap-3 font-mono text-[14px] text-gray-700">
                  <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <SectionHeading eyebrow="Scale" h2="Built across scale" />
              <p className="font-mono text-[14px] text-gray-600 leading-relaxed">
                Whether you&apos;re 10 seats or 100, infrastructure scales without requiring a new platform at every growth stage.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <SectionHeading eyebrow="Cost savings" h2="What it saves" />
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed mb-5">
              Enterprise contact center platforms routinely run $125+ per seat per month. Twiching Enterprise includes contact center features, call recording, AI receptionist, and auto dialers.
            </p>
            <div className="bg-white rounded-xl p-5 border border-gray-100 mb-5">
              <p className="font-mono text-[11px] font-bold tracking-[2px] uppercase text-gray-400 mb-2">50-seat operation</p>
              <p className="font-serif text-[32px] font-bold text-accent leading-none">$56,000+</p>
              <p className="font-mono text-[12px] text-gray-500 mt-1">saved per year vs. enterprise alternatives</p>
            </div>
            <p className="font-mono text-[12px] text-gray-400">
              Based on industry-average enterprise contact center pricing vs. Twiching Enterprise.{" "}
              <a href="/pricing" className="text-accent hover:underline">See full pricing.</a>
            </p>
          </div>
        </div>
      </section>

      <FaqSection items={FAQS} />
      <NextStepBand
        primary={{ label: "See pricing for contact centers", href: "/pricing" }}
        secondary={{ label: "Explore supervisor tools", href: "/features/supervisor-tools" }}
      />
    </PageLayout>
  )
}
