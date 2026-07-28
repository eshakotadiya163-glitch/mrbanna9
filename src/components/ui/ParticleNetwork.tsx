import { useEffect, useRef } from "react";

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("ParticleNetwork: No canvas found");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("ParticleNetwork: No 2d context found");
      return;
    }
    
    console.log("ParticleNetwork: Mounted successfully!");

    let particles: Particle[] = [];
    let animationFrameId: number;
    let w = 0;
    let h = 0;

    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.6; // Reduced speed
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2.0 + 1.5; 
      }

      update() {
        if (mouse.x !== -1000 && mouse.y !== -1000) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const repelRadius = 120;
          if (dist < repelRadius) {
            const force = (repelRadius - dist) / repelRadius;
            const forceX = (dx / dist) * force * 3;
            const forceY = (dy / dist) * force * 3;
            this.x += forceX;
            this.y += forceY;
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx = -this.vx;
        if (this.y < 0 || this.y > h) this.vy = -this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(250, 204, 21, 0.35)"; // Made particles lighter
        ctx.fill();
      }
    }

    const init = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      
      console.log(`ParticleNetwork: Initializing with ${w}x${h}`);
      
      particles = [];
      const numParticles = Math.floor((w * h) / 8000); 
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(Math.random() * w, Math.random() * h));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(250, 204, 21, ${0.15 - dist / 1000})`; // Made lines lighter
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#FACC15]/5 blur-[120px] z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-[#FACC15]/5 blur-[120px] z-10" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-[#FACC15]/5 blur-[150px] z-10" />
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0" 
        style={{ display: "block" }}
      />
    </div>
  );
}
