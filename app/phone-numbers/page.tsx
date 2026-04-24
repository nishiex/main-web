import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import {
  Breadcrumb, PageHero, SectionHeading, FaqSection, RelatedCards, NextStepBand,
} from "@/components/page-parts"
import { Globe, MapPin, Sparkles, Briefcase, Smartphone, ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Phone Numbers · Virtual, Local, Vanity & More | Twiching",
  description: "Five number types in one account. Virtual, local, vanity, business, second numbers. 14-day free trial.",
}

const NUMBER_TYPES = [
  {
    Icon: Globe,
    label: "Virtual Phone Number",
    href: "/phone-numbers/virtual",
    best: "Remote teams, expanding businesses, distributed operations",
    desc: "Nationwide connectivity without a physical office. Route to any device from any area code.",
  },
  {
    Icon: MapPin,
    label: "Local Phone Number",
    href: "/phone-numbers/local",
    best: "Sales teams, real estate, regional businesses",
    desc: "A specific area code matching your target market — 212 Manhattan, 305 Miami, 415 Bay Area.",
  },
  {
    Icon: Sparkles,
    label: "Vanity Phone Number",
    href: "/phone-numbers/vanity",
    best: "Consumer brands, advertisers, recall-dependent industries",
    desc: "A number customers actually remember. 1-800-FLOWERS works. 212-555-8391 doesn't.",
  },
  {
    Icon: Briefcase,
    label: "Business Phone Number",
    href: "/phone-numbers/business",
    best: "Consultants, small firms, owner-operators",
    desc: "A dedicated professional line. Separate from personal. Routes to any device.",
  },
  {
    Icon: Smartphone,
    label: "Second Phone Number",
    href: "/phone-numbers/second-number",
    best: "Freelancers, agents, side-hustle owners",
    desc: "Work and life on one phone. Two numbers. No second SIM.",
  },
]

const SHARED = [
  "Inbound call routing to any device",
  "Two-way SMS capability",
  "Voicemail and call forwarding",
  "STIR/SHAKEN attestation on outbound",
  "Connection to the full voice + messaging stack",
]

const FAQS = [
  { q: "Can I have multiple number types on one account?", a: "Yes. Most businesses use 2-3 types. A consultant might have a business number for clients and a second number for public listings." },
  { q: "Do I need a separate plan for each number?", a: "No. Numbers attach to user seats. One plan, multiple numbers per seat where needed." },
  { q: "Can I port existing numbers?", a: "Yes. Porting supported for all types. Domestic ports typically complete in 5-10 business days." },
]

export default function PhoneNumbersHub() {
  return (
    <PageLayout>
      <Breadcrumb crumbs={[{ label: "Phone Numbers" }]} />
      <PageHero
        h1="A number for every way your business actually communicates."
        sub="Five number types. One account. Pick what fits — or use all five."
        trustItems={["5 number types", "Instant provisioning", "Porting supported", "STIR/SHAKEN"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      {/* Opening copy */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[680px] font-mono text-[15px] text-gray-600 leading-relaxed space-y-4">
          <p>Different conversations need different numbers.</p>
          <p>A vanity line for your TV spot. A local area code for the market you&apos;re expanding into. A business number for your team. A second number so your personal mobile stops being a listing contact.</p>
          <p>Most providers make you pick one. Twiching gives you all five — from one account.</p>
        </div>
      </section>

      {/* Five number types */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <SectionHeading eyebrow="Number types" h2="The five number types" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {NUMBER_TYPES.map(({ Icon, label, href, best, desc }) => (
            <a key={href} href={href}
              className="group block p-7 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all bg-white">
              <span className="w-10 h-10 rounded-2xl bg-blue-50 text-accent grid place-items-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="font-mono font-bold text-[15px] text-gray-900 mb-1.5">{label}</h3>
              <p className="text-[13px] font-mono text-gray-500 leading-relaxed mb-3">{desc}</p>
              <p className="text-[11px] font-mono text-gray-400 mb-4">
                <strong className="text-gray-600">Best for:</strong> {best}
              </p>
              <span className="inline-flex items-center gap-1.5 text-accent text-[12px] font-semibold font-mono">
                Learn more <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Shared capabilities */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading eyebrow="Every number type" h2="What they share" />
            <p className="font-mono text-[14px] text-gray-500 leading-relaxed mb-6">
              Every Twiching number — whatever type — includes:
            </p>
            <ul className="space-y-3">
              {SHARED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] font-mono text-gray-700">
                  <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="font-mono font-bold text-[11px] tracking-[2px] uppercase text-accent mb-3">Pricing</p>
            <p className="font-mono text-[15px] text-gray-700 leading-relaxed mb-3">
              All five number types available across all plans. Provisioning included — no per-number fees on standard numbers.
            </p>
            <p className="font-mono text-[13px] text-gray-500 mb-5">
              Premium vanity numbers may carry a one-time cost.
            </p>
            <a href="/pricing"
              className="inline-flex items-center gap-2 bg-accent text-white text-[13px] font-semibold font-mono px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors">
              See full pricing <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      <FaqSection items={FAQS} />
      <NextStepBand
        primary={{ label: "Pick your number type", href: "/phone-numbers/virtual" }}
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </PageLayout>
  )
}
