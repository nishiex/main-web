"use client"

import { useEffect, useRef, useState } from "react"

/* ── Analog clock ──────────────────────────────────────────────────── */
function AnalogClock({ zone, label }: { zone: string; label: string }) {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const local = new Date(time.toLocaleString("en-US", { timeZone: zone }))
  const h = local.getHours() % 12
  const m = local.getMinutes()
  const s = local.getSeconds()
  const ampm = local.getHours() < 12 ? "AM" : "PM"

  const hourDeg = h * 30 + m * 0.5
  const minDeg = m * 6 + s * 0.1
  const secDeg = s * 6

  const hand = (deg: number, len: number, width: number, color: string) => {
    const rad = ((deg - 90) * Math.PI) / 180
    const x2 = 50 + len * Math.cos(rad)
    const y2 = 50 + len * Math.sin(rad)
    return <line x1="50" y1="50" x2={x2} y2={y2} stroke={color} strokeWidth={width} strokeLinecap="round" />
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[80px] h-[80px] rounded-[18px] bg-[#1c1c2e] p-2 shadow-lg">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Clock face */}
          <circle cx="50" cy="50" r="48" fill="#f5f5f5" />
          {/* Hour markers */}
          {[12, 3, 6, 9].map((n, i) => {
            const a = ((i * 90 - 90) * Math.PI) / 180
            const tx = 50 + 36 * Math.cos(a)
            const ty = 50 + 36 * Math.sin(a)
            return (
              <text key={n} x={tx} y={ty} textAnchor="middle" dominantBaseline="central"
                fontSize="10" fontWeight="600" fill="#555" fontFamily="monospace">
                {n}
              </text>
            )
          })}
          {/* AM/PM at 6 o'clock */}
          <text x="50" y="72" textAnchor="middle" fontSize="7" fontWeight="700"
            fill="#06b6d4" fontFamily="monospace">{ampm}</text>
          {/* Hands */}
          {hand(hourDeg, 24, 4, "#1e293b")}
          {hand(minDeg, 34, 2.5, "#334155")}
          {hand(secDeg, 38, 1.5, "#06b6d4")}
          {/* Center dot */}
          <circle cx="50" cy="50" r="4" fill="#06b6d4" />
        </svg>
      </div>
      <span className="text-[11px] font-mono font-bold tracking-widest text-gray-400 uppercase">
        {label}
      </span>
    </div>
  )
}

/* ── Link columns ─────────────────────────────────────────────────── */
const cols = [
  {
    title: "Products",
    links: [
      { label: "Phone numbers", href: "#" },
      { label: "Voice services", href: "#" },
      { label: "Messaging", href: "#" },
      { label: "AI receptionist", href: "#" },
      { label: "Auto dialers", href: "#" },
      { label: "Pricing", href: "https://www.twiching.ai/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Trust & SLA", href: "#" },
      { label: "Singapore infrastructure", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: "Request a Demo", href: "https://www.twiching.ai/contact", highlight: true },
      { label: "Start Free Trial", href: "https://www.twiching.ai/pricing" },
      { label: "Sales enquiries", href: "#" },
      { label: "Support", href: "#" },
      { label: "Status", href: "#" },
      { label: "Docs", href: "#" },
    ],
  },
]

/* ── Footer ──────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 sm:px-6 lg:px-[5%]">
      <div className="max-w-[1200px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="/" className="inline-block mb-5" aria-label="Twiching">
              <img
                src="https://www.twiching.ai/wp-content/uploads/2023/07/White-new-logo.png"
                alt="Twiching"
                width={160}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed font-mono max-w-[300px] mb-8">
              Phone numbers, voice and SMS on one platform. Built for how modern businesses
              actually work. 14-day free trial — no charges during the trial window.
            </p>

            {/* Clocks */}
            <div className="flex items-end gap-5">
              <AnalogClock zone="Asia/Singapore" label="SG" />
              <AnalogClock zone="Asia/Kolkata" label="IN" />
              <AnalogClock zone="America/New_York" label="USA" />
            </div>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title} className="min-w-0">
              <div className="text-[10px] font-bold tracking-[2px] uppercase text-gray-500 mb-4 font-mono">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={`text-sm font-mono transition-colors ${
                        l.highlight
                          ? "text-blue-400 font-semibold"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-gray-500 font-mono">
          <div>© 2026 Twiching Pte. Ltd. · Infrastructure anchored in Singapore</div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {["Privacy", "Terms", "SLA", "Security"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
