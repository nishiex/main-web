import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { Breadcrumb, PageHero, SectionHeading, FaqSection, NextStepBand } from "@/components/page-parts"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "SIP Termination · Secure SIP Call Delivery | Twiching",
  description: "Secure SIP termination with TLS/SRTP. Carrier-grade routing for businesses running their own PBX.",
}

const FEATURES = [
  "TLS authentication and SRTP encryption",
  "Redundant SIP paths — single point of failure isn't an option",
  "Compatible with major SIP-capable PBX and UCaaS platforms",
  "Support for G.711, G.729, and standard codecs",
  "Carrier-grade uptime commitments",
]

const FAQS = [
  { q: "What PBX systems are compatible?", a: "Standard SIP-capable PBX — Asterisk, FreePBX, 3CX, Cisco, Avaya, and more. Contact us for specifics." },
  { q: "Is failover available?", a: "Yes. Redundant routes standard." },
  { q: "What codecs are supported?", a: "G.711 (ulaw/alaw), G.729, and others." },
]

export default function SipTerminationPage() {
  return (
    <PageLayout>
      <Breadcrumb crumbs={[
        { label: "Voice", href: "/voice" },
        { label: "SIP Termination" },
      ]} />
      <PageHero
        h1="SIP termination for businesses that can't afford downtime."
        sub="Encrypted SIP delivery. Redundant paths. Compatible with any standard SIP PBX."
        trustItems={["TLS + SRTP", "Redundant routes", "PBX-compatible", "Carrier-grade"]}
        primaryCta={{ label: "Contact us about SIP setup", href: "/contact" }}
        secondaryCta={{ label: "See VoIP wholesale", href: "/voice/voip-wholesale" }}
      />

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[680px] font-mono text-[15px] text-gray-600 leading-relaxed space-y-4">
          <p>The PBX was configured. The SIP trunk was pointed. And then the audio was one-way for three days.</p>
          <p>Debugging SIP issues isn&apos;t what most businesses want their IT team solving.</p>
          <p>Twiching&apos;s SIP termination connects to your existing setup without the routing nightmares — stable, secure, globally routed.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Included" h2="What you get" />
            <ul className="space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 font-mono text-[14px] text-gray-700">
                  <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Setup" h2="Technical setup" />
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed mb-6">
              Point your SIP device or PBX at Twiching&apos;s termination endpoints. Authenticate. Start routing.
            </p>
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed mb-8">
              For businesses already on SIP, the switch is typically one configuration change — not a rip-and-replace project.
            </p>
            <SectionHeading eyebrow="Who uses it" h2="Typical users" />
            <ul className="space-y-2">
              {["Enterprises running on-premise PBX", "Contact centers with custom routing logic", "UCaaS platforms integrating Twiching as a voice provider", "Resellers and carriers"].map((u) => (
                <li key={u} className="flex items-center gap-2 font-mono text-[13px] text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />{u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection items={FAQS} />
      <NextStepBand
        primary={{ label: "Contact us about SIP setup", href: "/contact" }}
        secondary={{ label: "See VoIP wholesale", href: "/voice/voip-wholesale" }}
      />
    </PageLayout>
  )
}
