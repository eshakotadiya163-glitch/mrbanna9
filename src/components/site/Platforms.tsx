import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const platforms = [
  { name: "Vantage Markets", desc: "Multi-asset broker with tight spreads and fast execution.", tag: "VM" },
  { name: "XM", desc: "Globally recognized broker with vast instruments & education.", tag: "XM" },
  { name: "Exness", desc: "Trusted multi-asset broker with fast withdrawals.", tag: "EX" },
  { name: "Delta", desc: "Crypto derivatives platform with innovative products.", tag: "Δ" },
];

export function Platforms() {
  return (
    <section id="platforms" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Trading Platforms</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Global platforms for <span className="text-gradient-gold">Forex & Crypto</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((p) => (
            <Card key={p.name} className="card-glass p-6 text-center border-0 hover:-translate-y-1 transition-transform">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-[image:var(--gradient-gold)] flex items-center justify-center text-primary-foreground font-display font-bold text-2xl shadow-gold mb-4">
                {p.tag}
              </div>
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-5">{p.desc}</p>
              <Button variant="outline" className="w-full">Signup</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
