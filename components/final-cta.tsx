import { ArrowRight } from "lucide-react"

export function FinalCta() {
  return (
    <section
      id="s-cta"
      data-sec="cta"
      className="relative overflow-hidden text-center px-[5%] py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 500px at 50% 100%, rgba(37,99,235,0.85), rgba(37,99,235,0.15) 55%, rgba(255,255,255,0) 80%)",
        }}
      />
      <div className="relative">
        <p className="text-xs font-bold tracking-[1.5px] uppercase text-accent mb-3 font-mono">
          Start free
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.08] max-w-[720px] mx-auto mb-5 tracking-tighter2 text-balance">
          Try it for 14 days. See what a real phone stack does for your answer rates.
        </h2>
        <p className="text-[17px] text-gray-700 max-w-[560px] mx-auto mb-4 leading-relaxed">
          Phone numbers, voice, SMS and AI on one account. Card required at sign-up — no charges
          during the trial.
        </p>
        <p className="text-[12px] text-gray-600 font-mono mb-9">
          Compliance with applicable regulations required.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://www.twiching.ai/pricing"
            className="group inline-flex items-center gap-2 bg-black text-white text-[15px] font-semibold font-mono pl-6 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Start Free Trial
            <span className="grid place-items-center h-8 w-8 rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </a>
          <a
            href="https://www.twiching.ai/contact"
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur text-black ring-1 ring-gray-200 text-[15px] font-semibold font-mono px-6 py-2.5 rounded-full hover:bg-white transition-colors"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  )
}
