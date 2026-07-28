import { Button } from "@/components/ui/button";

import heroImg from "@/assets/hero-burj.jpg";
import { ArrowRight, Mouse } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 px-4">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-[76px] font-semibold leading-[1.15] text-[#F3D081] mb-6">
            Welcome To <br />
            MrBaNNa
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-[420px] mb-8 leading-relaxed">
            Where precision meets performance in the digital frontier of trading
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services">
              <Button className="bg-[#F3D081] hover:bg-[#E5C170] text-black rounded-full px-8 h-14 font-semibold text-base">
                Join Us
              </Button>
            </a>
            <a href="https://t.me/OfficialMrBaNNa" target="_blank" rel="noreferrer">
              <Button className="bg-transparent border border-gray-700 hover:bg-[#1A1A1A] text-white rounded-full px-8 h-14 font-semibold text-base">
                Learn More
              </Button>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[image:var(--gradient-gold)] blur-3xl opacity-20 rounded-full" />
          <img
            src={heroImg}
            alt="MrBaNNa — founder & trader"
            className="relative rounded-3xl w-full max-w-sm mx-auto shadow-gold border border-primary/20"
            width={1024}
            height={1280}
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce">
        <Mouse className="w-6 h-6" />
      </div>
    </section>
  );
}
