import { Phone, PhoneForwarded, Radio, Cloud, Zap, Network, BarChart2 } from "lucide-react"

const integrations = [
  { name: "Asterisk",   Icon: Phone },
  { name: "3CX",        Icon: PhoneForwarded },
  { name: "FreePBX",    Icon: Radio },
  { name: "Salesforce", Icon: Cloud },
  { name: "Zapier",     Icon: Zap },
  { name: "Cisco UCM",  Icon: Network },
  { name: "HubSpot",    Icon: BarChart2 },
]

export function LogoStrip() {
  return (
    <section
      id="s-logos"
      data-sec="logos"
      aria-label="Integrations"
      className="bg-[#ffffff] py-10 px-4 sm:px-6 lg:px-[5%]"
    >
      <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-7">
        <span className="border border-[#b0b0bc] bg-[#dcdce2] text-[#5e5e72] text-[9px] font-mono font-bold tracking-[2.5px] uppercase px-4 py-1.5 select-none">
          Works with the tools your business already uses
        </span>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {integrations.map(({ name, Icon }) => (
            <span
              key={name}
              className="inline-flex items-center gap-2 text-[#8080a0] hover:text-[#404055] transition-colors cursor-default select-none font-mono text-[13px] tracking-wide"
            >
              <Icon className="h-[14px] w-[14px] shrink-0" strokeWidth={1.7} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
