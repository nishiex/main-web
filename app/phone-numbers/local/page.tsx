import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { Breadcrumb, PageHero, SectionHeading, FaqSection, NextStepBand } from "@/components/page-parts"

export const metadata: Metadata = {
  title: "Local Phone Numbers · Any Area Code, Any City | Twiching",
  description: "Local area codes in every major market. 212, 305, 415, 312, and more. 14-day free trial.",
}

const FAQS = [
  { q: "What's the difference between local and virtual?", a: "A local number has a specific city area code. A virtual number is broader cloud-routed. Most local numbers are also virtual in structure." },
  { q: "Can I have local numbers in multiple cities?", a: "Yes. All managed from one dashboard." },
  { q: "Do they support SMS?", a: "Yes. Two-way SMS supported." },
]

export default function LocalNumberPage() {
  return (
    <PageLayout>
      <Breadcrumb crumbs={[
        { label: "Phone Numbers", href: "/phone-numbers" },
        { label: "Local Phone Number" },
      ]} />
      <PageHero
        h1="A local area code. In any city. Without the office."
        sub="Local numbers that make your business feel like it's already next door."
        trustItems={["Every major area code", "Instant provisioning", "STIR/SHAKEN"]}
        primaryCta={{ label: "Start 14-day free trial", href: "/pricing" }}
      />

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[680px] font-mono text-[15px] text-gray-600 leading-relaxed space-y-4">
          <p>They had the better product. Lower price. Faster delivery.</p>
          <p>The deal went to the competitor.</p>
          <p>Later, the buyer admitted it: the other company had a local Manhattan number. It felt like they were invested in the market.</p>
          <p>A local phone number doesn&apos;t just route calls. It signals presence.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Presence" h2="Local presence, market by market" />
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed mb-6">
              A 212 says Manhattan. A 305 says Miami. A 415 says the Bay Area.
            </p>
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed mb-8">
              Buyers in those markets don&apos;t notice when you have the right area code. They definitely notice when you don&apos;t.
            </p>
            <SectionHeading eyebrow="Who uses it" h2="Who uses local numbers most" />
            <ul className="space-y-3">
              {[
                { label: "Real estate", desc: "one local number per listing city" },
                { label: "Professional services", desc: "credibility where enterprise buyers are" },
                { label: "Sales outbound", desc: "higher answer rates on dials from a familiar prefix" },
                { label: "Regional e-commerce", desc: "support numbers that feel local" },
              ].map(({ label, desc }) => (
                <li key={label} className="flex items-start gap-2 font-mono text-[13px] text-gray-700">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span><strong>{label}</strong> — {desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <SectionHeading eyebrow="The math" h2="What the answer-rate difference is worth" />
              <div className="space-y-4 font-mono text-[14px] text-gray-600">
                <p>200 dials/week at a 15% answer rate = <strong className="text-gray-900">30 conversations</strong></p>
                <p>200 dials/week at a 45% answer rate = <strong className="text-accent">90 conversations</strong></p>
                <p className="pt-2 text-[13px] text-gray-500">
                  That&apos;s <strong className="text-gray-700">60 additional conversations per rep, per week</strong> — recovered without a single extra dial. At a 10% close rate, that&apos;s 6 more deals per rep weekly.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <SectionHeading eyebrow="Multi-market" h2="Multi-market operations" />
              <p className="font-mono text-[14px] text-gray-600 leading-relaxed">
                Running across 10 cities? Add a local number for each. All routed to your central team. All managed from one dashboard. Available in 190+ countries for operations that cross borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={FAQS} />
      <NextStepBand
        primary={{ label: "Start 14-day free trial", href: "/pricing" }}
        secondary={{ label: "Explore vanity numbers", href: "/phone-numbers/vanity" }}
      />
    </PageLayout>
  )
}
