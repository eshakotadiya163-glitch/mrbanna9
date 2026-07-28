import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Check, ArrowRight } from "lucide-react";

export function CTA() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert(form);
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Message sent! We'll be in touch.");
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Begin Your <span className="text-gradient-gold">Ascent</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join the elite. Master the markets. Transform your financial future.
          </p>
          <ul className="mt-8 space-y-3">
            {["Join our free Telegram channel", "Get access to VIP channel", "Access MrBaNNa Algo Trading", "Join 100,000+ successful traders"].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[image:var(--gradient-gold)] flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a href="#services"><Button variant="gold" size="xl" className="mt-8">Join Now <ArrowRight /></Button></a>
        </div>

        <Card className="card-glass p-8 border-0">
          <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
          <p className="text-sm text-muted-foreground mb-6">Have a question? Drop us a message.</p>
          <form onSubmit={submit} className="space-y-4">
            <Input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <Input required type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Textarea required placeholder="How can we help?" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <Button type="submit" variant="gold" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
