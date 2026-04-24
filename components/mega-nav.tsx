"use client"

import { useState } from "react"
import {
  ChevronDown, ArrowRight, Globe, MapPin, Sparkles, Briefcase,
  PhoneIncoming, PhoneCall, Network, Headphones, Building2,
  MessageSquare, Megaphone, Code2, Menu, X,
} from "lucide-react"

type MenuKey = "numbers" | "voice" | "messaging" | null

const menus = {
  numbers: {
    title: "Phone Numbers",
    items: [
      { title: "Virtual numbers",  desc: "Any area code, routed to any device.",              Icon: Globe },
      { title: "Local numbers",    desc: "Recognized area codes — 212, 305, 415.",            Icon: MapPin },
      { title: "Vanity numbers",   desc: "1-800-YOUR-BRAND. Numbers customers remember.",     Icon: Sparkles },
      { title: "Business numbers", desc: "A dedicated professional line.",                    Icon: Briefcase },
      { title: "Second numbers",   desc: "Work and life on one phone. Two numbers.",          Icon: PhoneIncoming },
    ],
  },
  voice: {
    title: "Voice",
    items: [
      { title: "Call termination", desc: "Carrier-grade routing with STIR/SHAKEN.",           Icon: PhoneCall },
      { title: "SIP trunking",     desc: "Drop into Asterisk, 3CX, FreePBX.",                 Icon: Network },
      { title: "VoIP wholesale",   desc: "Transparent rates for BPOs and resellers.",         Icon: Building2 },
      { title: "Contact center",   desc: "Inbound and outbound tools for any team size.",     Icon: Headphones },
    ],
  },
  messaging: {
    title: "Messaging",
    items: [
      { title: "SMS gateway", desc: "Multi-channel messaging from one dashboard.",            Icon: MessageSquare },
      { title: "Bulk SMS",    desc: "Campaign-grade outreach with delivery receipts.",        Icon: Megaphone },
      { title: "SMS API",     desc: "Developer integration in under a day.",                  Icon: Code2 },
    ],
  },
} as const

export function MegaNav() {
  const [open, setOpen] = useState<MenuKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<MenuKey>(null)

  return (
    <header
      className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100"
      onMouseLeave={() => setOpen(null)}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[5%] h-[62px] flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center flex-shrink-0">
          <img
            src="https://www.twiching.ai/wp-content/uploads/2023/07/White-new-logo.png"
            alt="Twiching"
            width={140}
            height={36}
            className="h-8 sm:h-9 w-auto object-contain"
            style={{ filter: "brightness(0)" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-[13px]">
          {(Object.keys(menus) as Array<keyof typeof menus>).map((key) => (
            <button
              key={key}
              onMouseEnter={() => setOpen(key)}
              onClick={() => setOpen(open === key ? null : key)}
              className={`px-3 py-2 rounded-full transition-colors flex items-center gap-1 ${
                open === key ? "bg-slate-100 text-black" : "text-gray-600 hover:text-black"
              }`}
            >
              {menus[key].title}
              <ChevronDown className="h-3 w-3" strokeWidth={2.2} />
            </button>
          ))}
          <a href="/pricing" className="px-3 py-2 text-gray-600 hover:text-black">Pricing</a>
          <a href="#s-faq" className="px-3 py-2 text-gray-600 hover:text-black">FAQ</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="https://www.twiching.ai/" className="text-[13px] font-mono text-gray-600 hover:text-black px-3 py-2">
            Sign in
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-black text-white text-[13px] font-semibold font-mono pl-4 pr-2 py-1.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Request a Demo
            <span className="grid place-items-center h-6 w-6 rounded-full bg-white/15">
              <ArrowRight className="h-3 w-3" strokeWidth={2.4} />
            </span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-700"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => { setMobileOpen(!mobileOpen); setMobileSection(null) }}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Desktop mega panel */}
      {open && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full border-b border-gray-100 bg-white backdrop-blur shadow-sm"
          onMouseEnter={() => setOpen(open)}
        >
          <div className="max-w-[1200px] mx-auto px-[5%] py-8 grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {menus[open].items.map(({ title, desc, Icon }) => (
              <a
                key={title}
                href="#"
                className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <span className="mt-0.5 w-9 h-9 rounded-xl bg-blue-50 text-accent grid place-items-center flex-shrink-0">
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-black">{title}</span>
                  <span className="block text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-b border-gray-100 shadow-lg overflow-y-auto max-h-[80vh]">
          <div className="px-4 py-4 space-y-1 font-mono text-sm">

            {(Object.keys(menus) as Array<keyof typeof menus>).map((key) => (
              <div key={key}>
                <button
                  onClick={() => setMobileSection(mobileSection === key ? null : key)}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-gray-700 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold">{menus[key].title}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileSection === key ? "rotate-180" : ""}`}
                    strokeWidth={2}
                  />
                </button>
                {mobileSection === key && (
                  <div className="ml-3 mt-1 space-y-1 pb-2">
                    {menus[key].items.map(({ title, desc, Icon }) => (
                      <a
                        key={title}
                        href="#"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <span className="mt-0.5 w-8 h-8 rounded-lg bg-blue-50 text-accent grid place-items-center flex-shrink-0">
                          <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-black">{title}</span>
                          <span className="block text-[11px] text-gray-500 mt-0.5">{desc}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a href="/pricing" className="block px-3 py-3 text-gray-700 hover:bg-slate-50 rounded-xl font-semibold">Pricing</a>
            <a href="#s-faq" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-gray-700 hover:bg-slate-50 rounded-xl font-semibold">FAQ</a>

            <div className="pt-3 pb-1 border-t border-gray-100 flex flex-col gap-2">
              <a href="/login" className="block px-3 py-2.5 text-center text-gray-600 border border-gray-200 rounded-full hover:bg-slate-50">Sign in</a>
              <a href="/contact" className="block px-3 py-2.5 text-center bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
