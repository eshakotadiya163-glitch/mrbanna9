import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const services = [
  {
    badge: "EARLY ACCESS",
    title: <><span className="text-white">ALGO</span> <span className="text-[#A855F7]">TRADING</span></>,
    subtitle: "AI-Powered Trading Journal",
    features: [
      "Auto-sync trades from MT5 brokers",
      "Fixed 1:2 Risk-to-Reward strategy",
      "AI trade analysis & performance scoring",
      "Daily, weekly & monthly trading reports",
      "Equity curve & drawdown analytics",
      "Trade replay with detailed chart review"
    ],
    cta: "Get Access",
    isPurple: true,
    url: "https://t.me/m/ufpk44-uNDQ1"
  },
  {
    title: <span className="text-[#F3D081]">VIP SIGNALS</span>,
    subtitle: "Premium Gold Trading Signals",
    features: [
      "3–7 high-quality Gold (XAUUSD) signals daily",
      "Accurate Entry, Stop Loss & Take Profit levels",
      "London & US session trade opportunities",
      "Real-time Telegram trade alerts",
      "Trade management & risk management guidance",
      "Exclusive VIP community support"
    ],
    cta: "Join",
    isPurple: false,
    url: "https://t.me/m/kvq7UgQXOWFl"
  },
  {
    title: <span className="text-[#F3D081]">MASTER TRADER<br/>COURSE</span>,
    subtitle: "Complete Gold Trading Education",
    features: [
      "Gold trading from beginner to advanced",
      "Live Zoom classes with microphone interaction",
      "Range Calculation trading strategy",
      "Price Action & Market Structure concepts",
      "Risk Management & Trading Psychology",
      "Lifetime course updates & mentor support"
    ],
    cta: "Join",
    isPurple: false,
    url: "https://t.me/m/TqxmFfj2YmU1"
  },
  {
    title: <span className="text-[#F3D081]">LIVE TRADING<br/><span className="text-[18px]">London / US Session</span></span>,
    subtitle: "London & US Session Live Trading",
    features: [
      "Live trading during London & US sessions",
      "Real-time market analysis & execution",
      "Multi-timeframe chart analysis",
      "Live trade entries & exit explanations",
      "Trading psychology & risk management tips",
      "Interactive Q&A during live sessions"
    ],
    cta: "Get Access",
    isPurple: false,
    url: "https://www.youtube.com/@Mrbanna9"
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F3D081] mb-4">
            Your Arsenal
          </h2>
          <p className="text-gray-400 text-lg">
            Choose your path to trading mastery with our Free services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Card 
              key={i} 
              className={`p-8 flex flex-col bg-[#111111] border rounded-2xl relative overflow-visible transition-all duration-300 hover:-translate-y-2 ${
                s.isPurple 
                  ? 'border-[#A855F7]/30 hover:border-[#A855F7] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]' 
                  : 'border-gray-800 hover:border-[#F3D081] hover:shadow-[0_0_30px_rgba(243,208,129,0.15)]'
              }`}
            >
              {s.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-[#A855F7] bg-[#111111] border border-[#A855F7]/30 rounded-full px-3 py-1 uppercase">
                    <Star className="w-3 h-3 fill-current" /> {s.badge}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6 mt-2">
                <h3 className="text-xl font-bold tracking-wide mb-6 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-400 min-h-[40px]">
                  {s.subtitle}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="text-[13px] text-gray-300 flex items-start leading-snug">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F3D081] mt-1.5 mr-3 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {s.url ? (
                <a href={s.url} target="_blank" rel="noreferrer" className="block w-full">
                  <Button 
                    className={`w-full h-12 rounded-lg font-semibold text-[15px] cursor-pointer ${
                      s.isPurple 
                        ? 'bg-[#A855F7] hover:bg-[#9333EA] text-white' 
                        : 'bg-[#F3D081] hover:bg-[#E5C170] text-black'
                    }`}
                  >
                    {s.cta}
                  </Button>
                </a>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className={`w-full h-12 rounded-lg font-semibold text-[15px] cursor-pointer ${
                        s.isPurple 
                          ? 'bg-[#A855F7] hover:bg-[#9333EA] text-white' 
                          : 'bg-[#F3D081] hover:bg-[#E5C170] text-black'
                      }`}
                    >
                      {s.cta}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md bg-[#111111] border border-gray-800 text-gray-300">
                    <DialogHeader className="mb-4">
                      <DialogTitle className="text-2xl font-bold text-white text-center">Get Access</DialogTitle>
                    </DialogHeader>
                    <div className="text-center space-y-6 py-4">
                      <div className="w-16 h-16 bg-[#1A1A1A] rounded-full mx-auto flex items-center justify-center border border-gray-800">
                        <Star className={`w-8 h-8 ${s.isPurple ? 'text-[#A855F7]' : 'text-[#F3D081]'}`} />
                      </div>
                      <p className="text-lg">
                        To get access to <span className="font-bold text-white">{s.subtitle}</span>, please join our official Telegram channel and contact our support.
                      </p>
                      <a href="https://t.me/OfficialMrBaNNa" target="_blank" rel="noreferrer" className="block w-full">
                        <Button className="w-full h-12 rounded-lg font-bold text-black bg-[#F3D081] hover:bg-[#E5C170]">
                          Join Telegram Now
                        </Button>
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
