import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Youtube, Twitter, Instagram, MessageCircle } from "lucide-react";

const socials = [
  { icon: Send, name: "Telegram", handle: "@OfficialMrBaNNa", desc: "Real-time trading signals & analysis", color: "from-sky-400 to-blue-600", url: "https://t.me/OfficialMrBaNNa", btnColor: "bg-blue-950/30 border-blue-900/50 hover:bg-blue-900/50 text-blue-200" },
  { icon: Youtube, name: "YouTube", handle: "@Mrbanna9", desc: "Educational content & market breakdowns", color: "from-red-500 to-rose-600", url: "https://www.youtube.com/@Mrbanna9", btnColor: "bg-red-950/30 border-red-900/50 hover:bg-red-900/50 text-red-200" },
  { icon: Instagram, name: "Instagram", handle: "@parthsuraniarc", desc: "Behind the scenes & lifestyle", color: "from-fuchsia-500 to-orange-500", url: "https://www.instagram.com/parthsuraniarc", btnColor: "bg-fuchsia-950/30 border-fuchsia-900/50 hover:bg-fuchsia-900/50 text-fuchsia-200" },
];

const stats = [
  { v: "1.5M+", l: "Total Followers" },
  { v: "100M+", l: "Total Views" },
  { v: "98%", l: "Engagement Rate" },
  { v: "24/7", l: "Active Community" },
];

export function Social() {
  return (
    <section id="social" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Connect With Us</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Join our <span className="text-gradient-gold">growing community</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Exclusive content and insights across every platform.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="block outline-none h-full">
                <Card className="card-glass p-6 border-0 hover:-translate-y-1 transition-transform h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold">{s.name}</h3>
                  <p className="text-primary text-xs">{s.handle}</p>
                  <p className="text-sm text-muted-foreground mt-2 mb-6 flex-grow">{s.desc}</p>
                  
                  <Button variant="outline" className={`w-full border ${s.btnColor} font-semibold transition-colors`}>
                    Follow on {s.name}
                  </Button>
                </Card>
              </a>
            );
          })}
        </div>

        <div className="card-glass rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Community Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-gold">{s.v}</div>
                <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
