"use client"

import { useState } from "react"
import { ChevronRight, Plus, ArrowRight } from "lucide-react"

/* ── Breadcrumb ──────────────────────────────────────────────────────── */
interface Crumb { label: string; href?: string }
export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <ol className="flex items-center gap-1.5 flex-wrap">
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3 text-gray-400" strokeWidth={2} />}
            {c.href && i < crumbs.length - 1 ? (
              <a href={c.href} className="text-[11px] font-mono text-gray-500 hover:text-accent transition-colors">
                {c.label}
              </a>
            ) : (
              <span className="text-[11px] font-mono text-gray-400">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/* ── Trust bar ───────────────────────────────────────────────────────── */
export function TrustBar({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6">
      {items.map((item) => (
        <span key={item} className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-[1.5px] uppercase text-gray-400">
          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
          {item}
        </span>
      ))}
    </div>
  )
}

/* ── Page Hero ───────────────────────────────────────────────────────── */
interface PageHeroProps {
  h1: string
  sub: string
  trustItems: string[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}
export function PageHero({ h1, sub, trustItems, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      <div className="max-w-[780px]">
        <h1 className="font-serif text-[38px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.1] tracking-tight text-gray-900 text-balance">
          {h1}
        </h1>
        <p className="mt-5 text-[18px] sm:text-[20px] text-gray-500 font-mono leading-relaxed max-w-[600px]">
          {sub}
        </p>
        <TrustBar items={trustItems} />
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap items-center gap-3 mt-8">
            {primaryCta && (
              <a href={primaryCta.href}
                className="inline-flex items-center gap-2 bg-accent text-white text-[14px] font-semibold font-mono px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                {primaryCta.label} <ArrowRight className="h-4 w-4" />
              </a>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href}
                className="inline-flex items-center gap-2 text-[14px] font-semibold font-mono text-gray-700 px-6 py-3 rounded-full border border-gray-200 hover:border-gray-400 transition-colors">
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

/* ── Section heading ─────────────────────────────────────────────────── */
export function SectionHeading({ eyebrow, h2, sub }: { eyebrow?: string; h2: string; sub?: string }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-[10px] font-mono font-bold tracking-[2.5px] uppercase text-accent mb-3">{eyebrow}</p>
      )}
      <h2 className="font-serif text-[28px] sm:text-[34px] font-bold leading-tight text-gray-900 text-balance">{h2}</h2>
      {sub && <p className="mt-3 text-[16px] text-gray-500 font-mono leading-relaxed max-w-[600px]">{sub}</p>}
    </div>
  )
}

/* ── FAQ accordion ───────────────────────────────────────────────────── */
export function FaqSection({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
      <SectionHeading eyebrow="FAQ" h2="Common questions" />
      <div className="max-w-[720px] divide-y divide-gray-100">
        {items.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left gap-4"
              aria-expanded={open === i}
            >
              <span className="font-mono text-[15px] font-semibold text-gray-800">{item.q}</span>
              <Plus className={`h-4 w-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`} strokeWidth={2} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96 pb-5" : "max-h-0"}`}>
              <p className="font-mono text-[14px] text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Related cards ───────────────────────────────────────────────────── */
interface RelatedCard { title: string; desc: string; href: string }
export function RelatedCards({ heading, cards }: { heading: string; cards: RelatedCard[] }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
      <SectionHeading eyebrow="Explore more" h2={heading} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c) => (
          <a key={c.href} href={c.href}
            className="group block p-6 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all bg-white">
            <h3 className="font-mono font-semibold text-[15px] text-gray-900 group-hover:text-accent transition-colors mb-2">{c.title}</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed font-mono">{c.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-accent text-[12px] font-semibold font-mono">
              Learn more <ArrowRight className="h-3 w-3" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

/* ── Comparison table ────────────────────────────────────────────────── */
export function CompareTable({ headers, rows }: {
  headers: string[]
  rows: { label: string; values: string[] }[]
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 mt-6">
      <table className="w-full text-[13px] font-mono">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left px-5 py-4 text-[11px] font-bold tracking-[1.5px] uppercase text-gray-400 bg-gray-50 w-[240px]">
              {headers[0]}
            </th>
            {headers.slice(1).map((h) => (
              <th key={h} className="text-left px-5 py-4 text-[11px] font-bold tracking-[1.5px] uppercase text-gray-700 bg-gray-50">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
              <td className="px-5 py-3.5 font-semibold text-gray-700">{row.label}</td>
              {row.values.map((v, j) => (
                <td key={j} className="px-5 py-3.5 text-gray-500">{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ── Next-step CTA band ──────────────────────────────────────────────── */
export function NextStepBand({ primary, secondary }: {
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="bg-accent py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-serif text-[22px] sm:text-[28px] font-bold text-white text-balance max-w-[520px]">
          Ready to get started?
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href={primary.href}
            className="inline-flex items-center gap-2 bg-white text-accent text-[14px] font-semibold font-mono px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
            {primary.label} <ArrowRight className="h-4 w-4" />
          </a>
          {secondary && (
            <a href={secondary.href}
              className="inline-flex items-center gap-2 text-[14px] font-semibold font-mono text-white/80 px-6 py-3 rounded-full border border-white/30 hover:border-white transition-colors">
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
