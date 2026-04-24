"use client"

import { useState, useRef, useCallback } from "react"
import {
  ChevronDown, ArrowRight, Globe, MapPin, Sparkles, Briefcase,
  PhoneIncoming, PhoneCall, Network, Headphones, Building2,
  MessageSquare, Megaphone, Code2, Menu, X, Users, Home,
  UserCheck, Building, Cloud, Layers, Plane, GitBranch,
  PhoneForwarded, Mic, Shuffle, Brain, Shield, Heart,
  DollarSign, ShoppingBag, Package, Landmark,
} from "lucide-react"

type MenuKey = "numbers" | "voice" | "messaging" | null

/* ─── Phone Numbers menu data ─────────────────────────────────── */
const numbersCol1 = [
  { title: "Virtual Phone Number",  desc: "Nationwide reach, any area code.",        Icon: Globe,         href: "/phone-numbers/virtual" },
  { title: "Local Phone Number",    desc: "City/region area code presence.",          Icon: MapPin,        href: "/phone-numbers/local" },
  { title: "Vanity Phone Number",   desc: "Brand-memorable numbers.",                 Icon: Sparkles,      href: "/phone-numbers/vanity" },
  { title: "Business Phone Number", desc: "Dedicated professional lines.",            Icon: Briefcase,     href: "/phone-numbers/business" },
  { title: "Second Phone Number",   desc: "Work + personal on one device.",           Icon: PhoneIncoming, href: "/phone-numbers/second-number" },
]
const numbersCol2 = [
  "Inbound call routing to any device",
  "Two-way SMS on every number",
  "Voicemail + call forwarding",
  "STIR/SHAKEN attestation on outbound",
  "190+ country coverage",
]
const numbersCol3 = [
  { title: "Sales teams",   Icon: Users,     href: "/solutions/sales" },
  { title: "Real estate",   Icon: Home,      href: "/solutions/real-estate" },
  { title: "Remote teams",  Icon: UserCheck, href: "/solutions/remote" },
  { title: "Freelancers",   Icon: Briefcase, href: "/solutions/freelancers" },
  { title: "Agencies",      Icon: Building,  href: "/solutions/agencies" },
]

/* ─── Voice menu data ─────────────────────────────────────────── */
const voiceCol1 = [
  { title: "Voice Termination",  desc: "Global call termination.",             Icon: PhoneCall,    href: "/voice/termination" },
  { title: "SIP Termination",    desc: "Secure SIP-based routing.",            Icon: Network,      href: "/voice/sip-termination" },
  { title: "VoIP Wholesaler",    desc: "Scalable wholesale voice.",            Icon: Building2,    href: "/voice/voip-wholesale" },
  { title: "Contact Center",     desc: "Customer interaction tools.",          Icon: Headphones,   href: "/voice/contact-center" },
  { title: "Call Termination",   desc: "Reliable worldwide routing.",          Icon: PhoneForwarded, href: "/voice/call-termination" },
]
const voiceCol2 = [
  { title: "Cloud Calling",         Icon: Cloud,       href: "/platform/cloud-calling" },
  { title: "Omnichannel",           Icon: Layers,      href: "/platform/omnichannel" },
  { title: "International Calling", Icon: Plane,       href: "/platform/international" },
  { title: "Number Porting",        Icon: GitBranch,   href: "/platform/porting" },
  { title: "Toll-Free Numbers",     Icon: PhoneCall,   href: "/platform/toll-free" },
]
const voiceCol3 = [
  { title: "Auto-Attendant",           Icon: Shuffle,  href: "/features/auto-attendant" },
  { title: "Call Recording",           Icon: Mic,      href: "/features/call-recording" },
  { title: "Intelligent Routing",      Icon: Brain,    href: "/features/routing" },
  { title: "Conversation Intelligence",Icon: Shield,   href: "/features/conv-intelligence" },
  { title: "Supervisor Tools",         Icon: Users,    href: "/features/supervisor" },
]

/* ─── Messaging menu data ─────────────────────────────────────── */
const messagingCol1 = [
  { title: "SMS Gateway", desc: "Multi-channel delivery from one dashboard.", Icon: MessageSquare, href: "/messaging/sms-gateway" },
  { title: "Bulk SMS",    desc: "Campaign-grade outreach at scale.",           Icon: Megaphone,     href: "/messaging/bulk-sms" },
  { title: "SMS API",     desc: "Developer integration in under a day.",       Icon: Code2,         href: "/messaging/sms-api" },
]
const messagingCol2 = [
  { title: "Healthcare",        Icon: Heart,       href: "/solutions/healthcare" },
  { title: "Finance",           Icon: Landmark,    href: "/solutions/finance" },
  { title: "Retail + E-commerce", Icon: ShoppingBag, href: "/solutions/retail" },
  { title: "SaaS",              Icon: DollarSign,  href: "/solutions/saas" },
  { title: "Logistics",         Icon: Package,     href: "/solutions/logistics" },
  { title: "Real Estate",       Icon: Home,        href: "/solutions/real-estate" },
]

/* ─── Helper: chevron icon ────────────────────────────────────── */
function Chevron({ open }: { open: boolean }) {
  return (
    <ChevronDown
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      strokeWidth={2.2}
    />
  )
}

/* ─── Featured card ──────────────────────────────────────────── */
function FeaturedCard({ headline, sub }: { headline: string; sub: string }) {
  return (
    <div className="rounded-2xl bg-[#F5F5F5] p-5 flex flex-col justify-between h-full min-h-[180px]">
      <div>
        <p className="text-[11px] font-mono font-bold tracking-[1.2px] uppercase text-[#2563EB] mb-3">
          Featured
        </p>
        <p className="text-[15px] font-semibold text-black leading-snug mb-2">{headline}</p>
        <p className="text-[13px] text-gray-500 leading-relaxed">{sub}</p>
      </div>
      <a
        href="https://www.twiching.ai/pricing"
        className="mt-4 inline-flex items-center gap-1.5 bg-[#2563EB] text-white text-[13px] font-semibold font-mono px-4 py-2 rounded-full hover:bg-[#1d4ed8] transition-colors self-start"
      >
        Start Free Trial
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
      </a>
    </div>
  )
}

/* ─── Section heading inside panel ───────────────────────────── */
function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-mono font-bold tracking-[1.4px] uppercase text-gray-400 mb-3">
      {children}
    </p>
  )
}

/* ─── Phone Numbers panel ────────────────────────────────────── */
function NumbersPanel({ close }: { close: () => void }) {
  return (
    <div className="max-w-[1200px] mx-auto px-[5%] py-8 grid grid-cols-4 gap-8">
      {/* Col 1 */}
      <div>
        <ColHeading>Number Types</ColHeading>
        <ul className="space-y-0.5">
          {numbersCol1.map(({ title, desc, Icon, href }) => (
            <li key={title}>
              <a
                href={href}
                onClick={close}
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <span className="mt-0.5 w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] grid place-items-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-[13px] font-semibold text-black leading-tight">{title}</span>
                  <span className="block text-[11px] text-gray-500 mt-0.5 leading-relaxed">{desc}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Col 2 */}
      <div>
        <ColHeading>Shared Capabilities</ColHeading>
        <ul className="space-y-2.5 mt-1">
          {numbersCol2.map((cap) => (
            <li key={cap} className="flex items-start gap-2 text-[13px] text-gray-600">
              <span className="mt-[3px] w-4 h-4 rounded-full bg-green-50 text-green-600 grid place-items-center flex-shrink-0">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4L3.5 6L6.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {cap}
            </li>
          ))}
        </ul>
      </div>

      {/* Col 3 */}
      <div>
        <ColHeading>By Use Case</ColHeading>
        <ul className="space-y-0.5">
          {numbersCol3.map(({ title, Icon, href }) => (
            <li key={title}>
              <a
                href={href}
                onClick={close}
                className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-colors text-[13px] font-medium text-gray-700 hover:text-black group"
              >
                <span className="w-6 h-6 rounded-md bg-slate-100 text-gray-500 grid place-items-center flex-shrink-0 group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors">
                  <Icon className="h-3 w-3" strokeWidth={1.8} />
                </span>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Col 4 */}
      <FeaturedCard
        headline="Five number types. One account."
        sub="Virtual, local, vanity, business, and second numbers — all included."
      />
    </div>
  )
}

/* ─── Voice panel ─────────────────────────────────────────────── */
function VoicePanel({ close }: { close: () => void }) {
  return (
    <div className="max-w-[1200px] mx-auto px-[5%] py-8 grid grid-cols-4 gap-8">
      {/* Col 1 */}
      <div>
        <ColHeading>Voice Services</ColHeading>
        <ul className="space-y-0.5">
          {voiceCol1.map(({ title, desc, Icon, href }) => (
            <li key={title}>
              <a
                href={href}
                onClick={close}
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <span className="mt-0.5 w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] grid place-items-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-[13px] font-semibold text-black leading-tight">{title}</span>
                  <span className="block text-[11px] text-gray-500 mt-0.5">{desc}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Col 2 */}
      <div>
        <ColHeading>Platform Features</ColHeading>
        <ul className="space-y-0.5">
          {voiceCol2.map(({ title, Icon, href }) => (
            <li key={title}>
              <a
                href={href}
                onClick={close}
                className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-colors text-[13px] font-medium text-gray-700 hover:text-black group"
              >
                <span className="w-6 h-6 rounded-md bg-slate-100 text-gray-500 grid place-items-center flex-shrink-0 group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors">
                  <Icon className="h-3 w-3" strokeWidth={1.8} />
                </span>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Col 3 */}
      <div>
        <ColHeading>Call Features</ColHeading>
        <ul className="space-y-0.5">
          {voiceCol3.map(({ title, Icon, href }) => (
            <li key={title}>
              <a
                href={href}
                onClick={close}
                className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-colors text-[13px] font-medium text-gray-700 hover:text-black group"
              >
                <span className="w-6 h-6 rounded-md bg-slate-100 text-gray-500 grid place-items-center flex-shrink-0 group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors">
                  <Icon className="h-3 w-3" strokeWidth={1.8} />
                </span>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Col 4 */}
      <FeaturedCard
        headline="Carrier-grade voice. Zero vendor juggling."
        sub="SIP, termination, wholesale VoIP, and contact center — all in one account."
      />
    </div>
  )
}

/* ─── Messaging panel ─────────────────────────────────────────── */
function MessagingPanel({ close }: { close: () => void }) {
  return (
    <div className="max-w-[1200px] mx-auto px-[5%] py-8 grid grid-cols-3 gap-8">
      {/* Col 1 */}
      <div>
        <ColHeading>Messaging Products</ColHeading>
        <ul className="space-y-0.5">
          {messagingCol1.map(({ title, desc, Icon, href }) => (
            <li key={title}>
              <a
                href={href}
                onClick={close}
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <span className="mt-0.5 w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] grid place-items-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-[13px] font-semibold text-black leading-tight">{title}</span>
                  <span className="block text-[11px] text-gray-500 mt-0.5 leading-relaxed">{desc}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Col 2 */}
      <div>
        <ColHeading>By Industry</ColHeading>
        <ul className="grid grid-cols-2 gap-0.5">
          {messagingCol2.map(({ title, Icon, href }) => (
            <li key={title}>
              <a
                href={href}
                onClick={close}
                className="flex items-center gap-2 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-colors text-[13px] font-medium text-gray-700 hover:text-black group"
              >
                <span className="w-6 h-6 rounded-md bg-slate-100 text-gray-500 grid place-items-center flex-shrink-0 group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors">
                  <Icon className="h-3 w-3" strokeWidth={1.8} />
                </span>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Col 3 */}
      <FeaturedCard
        headline="From one reminder to 10,000 sends."
        sub="SMS Gateway, Bulk SMS, and SMS API — one platform, one account."
      />
    </div>
  )
}

/* ─── Main component ─────────────────────────────────────────── */
export function MegaNav() {
  const [open, setOpen] = useState<MenuKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<MenuKey>(null)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = useCallback((key: MenuKey) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    setOpen(key)
  }, [])

  const handleMouseLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setOpen(null), 150)
  }, [])

  const close = useCallback(() => setOpen(null), [])

  const navItems: Array<{ key: MenuKey & string; label: string }> = [
    { key: "numbers",   label: "Phone Numbers" },
    { key: "voice",     label: "Voice" },
    { key: "messaging", label: "Messaging" },
  ]

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:outline-[2px] focus:outline-[#2563EB] focus:outline-offset-2 text-sm font-semibold"
      >
        Skip to content
      </a>

      <header
        className="sticky top-0 z-30 bg-white border-b border-[#E5E5E5]"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[5%] h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0" aria-label="Twiching home">
            <img
              src="https://www.twiching.ai/wp-content/uploads/2023/07/White-new-logo.png"
              alt="Twiching"
              width={140}
              height={36}
              className="h-8 sm:h-9 w-auto object-contain"
              style={{ filter: "brightness(0)" }}
            />
          </a>

          {/* Desktop center nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onMouseEnter={() => handleMouseEnter(key)}
                onClick={() => setOpen(open === key ? null : key)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setOpen(open === key ? null : key)
                  }
                  if (e.key === "Escape") setOpen(null)
                }}
                aria-expanded={open === key}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-[14px] font-sans font-medium transition-colors ${
                  open === key
                    ? "bg-slate-100 text-black"
                    : "text-gray-600 hover:text-black hover:bg-slate-50"
                }`}
              >
                {label}
                <Chevron open={open === key} />
              </button>
            ))}
            <a
              href="/pricing"
              className="px-3.5 py-2 text-[14px] font-sans font-medium text-gray-600 hover:text-black hover:bg-slate-50 rounded-full transition-colors"
            >
              Pricing
            </a>
            <a
              href="/about"
              className="px-3.5 py-2 text-[14px] font-sans font-medium text-gray-600 hover:text-black hover:bg-slate-50 rounded-full transition-colors"
            >
              About
            </a>
          </nav>

          {/* Desktop right CTAs */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a
              href="https://www.twiching.ai/"
              className="text-[14px] font-sans font-medium text-gray-600 hover:text-black px-3 py-2"
            >
              Sign In
            </a>
            <a
              href="https://www.twiching.ai/pricing"
              className="inline-flex items-center gap-1.5 bg-[#2563EB] text-white text-[14px] font-semibold font-sans px-5 py-2 rounded-full hover:bg-[#1d4ed8] transition-colors"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-slate-50 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => { setMobileOpen(!mobileOpen); setMobileSection(null) }}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* ── Desktop mega panel ─────────────────────────────── */}
        {open && (
          <div
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-[#E5E5E5] shadow-sm"
            onMouseEnter={() => handleMouseEnter(open)}
          >
            {open === "numbers"   && <NumbersPanel   close={close} />}
            {open === "voice"     && <VoicePanel     close={close} />}
            {open === "messaging" && <MessagingPanel close={close} />}
          </div>
        )}
      </header>

      {/* ── Mobile full-screen drawer ──────────────────────── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-white overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-4 h-14 border-b border-[#E5E5E5]">
            <a href="/" aria-label="Twiching home" onClick={() => setMobileOpen(false)}>
              <img
                src="https://www.twiching.ai/wp-content/uploads/2023/07/White-new-logo.png"
                alt="Twiching"
                width={120}
                height={32}
                className="h-7 w-auto object-contain"
                style={{ filter: "brightness(0)" }}
              />
            </a>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-lg hover:bg-slate-50 text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer body */}
          <div className="px-4 pt-4 pb-32 space-y-1 text-sm">
            {/* Phone Numbers */}
            <div>
              <button
                onClick={() => setMobileSection(mobileSection === "numbers" ? null : "numbers")}
                className="w-full flex items-center justify-between h-14 px-3 rounded-xl text-gray-800 font-semibold text-[15px] hover:bg-slate-50 transition-colors"
              >
                Phone Numbers
                <Chevron open={mobileSection === "numbers"} />
              </button>
              {mobileSection === "numbers" && (
                <div className="ml-2 mb-2 space-y-1">
                  <p className="text-[10px] font-mono font-bold tracking-[1.2px] uppercase text-gray-400 px-3 pt-1 pb-1">Number Types</p>
                  {numbersCol1.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] grid place-items-center flex-shrink-0">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                  <p className="text-[10px] font-mono font-bold tracking-[1.2px] uppercase text-gray-400 px-3 pt-3 pb-1">By Use Case</p>
                  {numbersCol3.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-slate-100 text-gray-500 grid place-items-center flex-shrink-0">
                        <Icon className="h-3 w-3" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Voice */}
            <div>
              <button
                onClick={() => setMobileSection(mobileSection === "voice" ? null : "voice")}
                className="w-full flex items-center justify-between h-14 px-3 rounded-xl text-gray-800 font-semibold text-[15px] hover:bg-slate-50 transition-colors"
              >
                Voice
                <Chevron open={mobileSection === "voice"} />
              </button>
              {mobileSection === "voice" && (
                <div className="ml-2 mb-2 space-y-1">
                  <p className="text-[10px] font-mono font-bold tracking-[1.2px] uppercase text-gray-400 px-3 pt-1 pb-1">Voice Services</p>
                  {voiceCol1.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] grid place-items-center flex-shrink-0">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                  <p className="text-[10px] font-mono font-bold tracking-[1.2px] uppercase text-gray-400 px-3 pt-3 pb-1">Call Features</p>
                  {voiceCol3.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-slate-100 text-gray-500 grid place-items-center flex-shrink-0">
                        <Icon className="h-3 w-3" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Messaging */}
            <div>
              <button
                onClick={() => setMobileSection(mobileSection === "messaging" ? null : "messaging")}
                className="w-full flex items-center justify-between h-14 px-3 rounded-xl text-gray-800 font-semibold text-[15px] hover:bg-slate-50 transition-colors"
              >
                Messaging
                <Chevron open={mobileSection === "messaging"} />
              </button>
              {mobileSection === "messaging" && (
                <div className="ml-2 mb-2 space-y-1">
                  {messagingCol1.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] grid place-items-center flex-shrink-0">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="flex items-center h-14 px-3 rounded-xl text-gray-800 font-semibold text-[15px] hover:bg-slate-50 transition-colors"
            >
              Pricing
            </a>
            <a
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="flex items-center h-14 px-3 rounded-xl text-gray-800 font-semibold text-[15px] hover:bg-slate-50 transition-colors"
            >
              About
            </a>
          </div>

          {/* Pinned bottom CTAs */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E5E5] px-4 py-4 flex flex-col gap-2">
            <a
              href="https://www.twiching.ai/"
              className="block text-center py-3 text-[15px] font-medium text-gray-600 border border-gray-200 rounded-full hover:bg-slate-50 transition-colors"
            >
              Sign In
            </a>
            <a
              href="https://www.twiching.ai/pricing"
              className="block text-center py-3 text-[15px] font-semibold text-white bg-[#2563EB] rounded-full hover:bg-[#1d4ed8] transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </>
  )
}
