import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PhoneCall, MessageSquare, Bot, Mail, ShieldCheck, Workflow, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * 🔧 HOW TO USE YOUR REAL LOGO
 * 1) Replace LOGO_SRC below with your actual logo URL or a base64 data URL.
 * 2) If you have light/dark variants, set prefersDark to false (bright site),
 *    and use the light version (transparent background recommended).
 */
const LOGO_SRC = "/assets/closer-pilot-logo.png"; // ← Replace with the correct logo path or data URL

export default function CloserPilotLandingV2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-900">
      <SiteHeader />
      <Hero />
      <TrustBar />
      <ProductGrid />
      <HowItWorks />
      <Outcomes />
      <FAQ />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={LOGO_SRC}
            alt="Closer Pilot AI logo"
            className="h-9 w-auto object-contain"
            onError={(e)=>{
              const el = e.currentTarget as HTMLImageElement;
              el.outerHTML = `<div class='font-bold text-xl tracking-tight'>Closer Pilot AI</div>`;
            }}
          />
          <span className="sr-only">Closer Pilot AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-slate-700">Features</a>
          <a href="#how" className="hover:text-slate-700">How it works</a>
          <a href="#faq" className="hover:text-slate-700">FAQs</a>
          <a href="#contact" className="hover:text-slate-700">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button className="rounded-2xl shadow-sm" asChild>
            <a href="#contact">Get a custom offer</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(65%_50%_at_50%_0%,rgba(99,102,241,0.12)_0%,rgba(255,255,255,0)_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            >
              AI that books you jobs while you sleep.
            </motion.h1>
            <p className="mt-4 text-slate-700 text-lg">
              Closer Pilot AI installs in your workflow and turns cold prospects into scheduled calls, demos, and paid jobs for home-service businesses.
              No rate card on the site—every offer is tailored to your business.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-2xl" asChild>
                <a href="#contact" className="flex items-center gap-2">Build my custom offer <ArrowRight className="h-4 w-4"/></a>
              </Button>
              <a href="#features" className="px-5 py-3 rounded-2xl border border-slate-300 hover:bg-white shadow-sm text-sm font-semibold">See features</a>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                "No long-term contract",
                "Use your number or ours",
                "White-label friendly",
                "Done-for-you setup",
              ].map((item)=> (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4"/>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-indigo-100 via-white to-purple-100 blur-2xl"/>
            <Card className="relative rounded-3xl shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">Your AI Revenue Stack</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-4">
                <FeatureMini icon={PhoneCall} title="AI Phone Agent" text="Answers, qualifies, and books jobs 24/7."/>
                <FeatureMini icon={Mail} title="Cold Email Engine" text="Finds leads and lands replies that convert."/>
                <FeatureMini icon={MessageSquare} title="DM Autopilot" text="IG & FB inbox that actually sells."/>
                <FeatureMini icon={Workflow} title="CRM Automations" text="Pipeline, follow-up, reviews, and billing."/>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureMini({icon:Icon, title, text}:{icon: any, title: string, text: string}){
  return (
    <div className="p-4 rounded-2xl border bg-white">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5"/>
        <div className="font-semibold">{title}</div>
      </div>
      <p className="text-sm text-slate-600 mt-1">{text}</p>
    </div>
  );
}

function TrustBar(){
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-sm font-semibold text-slate-600">Plug into tools you already use</div>
          <div className="flex flex-wrap items-center gap-6 opacity-80">
            {[
              "GoHighLevel","Twilio","Air.ai","Vapi","Bland.ai","Zoom","Stripe"
            ].map((name)=> (
              <div key={name} className="text-xs sm:text-sm font-medium border rounded-full px-3 py-1 bg-white">{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductGrid(){
  const items = [
    {
      icon: Bot,
      title: "AI Phone Agents",
      desc: "Pick up every call, pre-qualify, price-check, and schedule in your calendar.",
      bullets: ["Natural voices","Knows your offers","Books on your calendar"],
    },
    {
      icon: Mail,
      title: "AI Cold Email",
      desc: "Prospecting that actually lands replies—lead sourcing, warm-up, sequences, and inbox management.",
      bullets: ["Lead lists","Auto-personalization","Auto follow-up"],
    },
    {
      icon: MessageSquare,
      title: "Social DM Autopilot",
      desc: "IG/FB inbox that qualifies and routes to closing without you babysitting.",
      bullets: ["One question at a time","Human handoff","Spam-safe"],
    },
    {
      icon: Workflow,
      title: "CRM + Automations",
      desc: "Pipeline, reviews, payments, reminders, and missed-call text-backs. All done-for-you.",
      bullets: ["White-label ready","Reporting dashboards","Review booster"],
    },
  ];

  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Everything you need to book more jobs</h2>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((it)=> (
            <Card key={it.title} className="rounded-3xl">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <it.icon className="h-5 w-5"/>
                  <CardTitle className="text-lg">{it.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">{it.desc}</p>
                <ul className="mt-3 space-y-1 text-sm">
                  {it.bullets.map((b)=> (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4"/>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks(){
  const steps = [
    {icon: ShieldCheck, title: "Audit & Plan", text: "Quick discovery to learn your offers, pricing rules, and calendar."},
    {icon: Zap, title: "Build & Train", text: "We connect your CRM, phone, email, and DM playbooks and train your agent."},
    {icon: Star, title: "Launch & Scale", text: "Go live in days. We monitor, optimize, and scale what works."},
  ];
  return (
    <section id="how" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">How it works</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map((s, i)=> (
            <div key={s.title} className="p-6 rounded-3xl border bg-white">
              <s.icon className="h-6 w-6"/>
              <div className="mt-3 font-semibold">{i+1}. {s.title}</div>
              <p className="text-sm text-slate-600 mt-1">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes(){
  const cards = [
    {title: "More booked jobs", text: "Turn missed calls and ignored emails into scheduled work.", kpi: "+30%"},
    {title: "Lower CAC", text: "Automations follow up faster and cheaper than humans.", kpi: "-25%"},
    {title: "Owner time back", text: "Focus on fulfillment—let the robots chase leads.", kpi: "+10h/wk"},
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Outcomes we aim for</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cards.map((c)=> (
            <Card key={c.title} className="rounded-3xl">
              <CardHeader>
                <CardTitle className="text-lg">{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-extrabold">{c.kpi}</div>
                <p className="text-sm text-slate-600 mt-2">{c.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ(){
  const faqs = [
    {q: "Do you publish prices?", a: "No. We build a custom offer per business so the value is obvious and the scope fits your stack."},
    {q: "Can you use my phone number?", a: "Yes—port or forward. Or we can provide a new number."},
    {q: "How fast is setup?", a: "Most stacks launch in days, not weeks, depending on integrations and assets."},
    {q: "Can you white‑label?", a: "Yep. We can live inside your CRM as your team."},
    {q: "What if it doesn’t pay for itself?", a: "We’ll keep working until it does—terms in the agreement."},
  ];
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">FAQs</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f)=> (
            <div key={f.q} className="p-6 rounded-3xl border bg-white">
              <div className="font-semibold">{f.q}</div>
              <p className="text-sm text-slate-600 mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA(){
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold">Ready for a tailored offer?</h2>
        <p className="mt-3 text-slate-700">Tell us your service, city, and goal. We’ll design a package just for you—no public pricing.</p>
        <form className="mt-8 grid gap-3 text-left">
          <input className="w-full rounded-2xl border px-4 py-3" placeholder="Your name" required />
          <input className="w-full rounded-2xl border px-4 py-3" placeholder="Business email" type="email" required />
          <input className="w-full rounded-2xl border px-4 py-3" placeholder="Phone number" />
          <input className="w-full rounded-2xl border px-4 py-3" placeholder="City / Service area" />
          <textarea className="w-full rounded-2xl border px-4 py-3 min-h-[120px]" placeholder="What do you want this AI to accomplish in 30 days?" />
          <Button size="lg" className="rounded-2xl">Request my offer</Button>
          <p className="text-xs text-slate-500">By submitting, you agree to our Terms. We’ll reply within 1 business day.</p>
        </form>
      </div>
    </section>
  );
}

function SiteFooter(){
  return (
    <footer className="py-10 border-t bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={LOGO_SRC} alt="Closer Pilot AI" className="h-7 w-auto object-contain" />
          <span className="text-sm text-slate-600">© {new Date().getFullYear()} Closer Pilot AI LLC</span>
        </div>
        <div className="text-sm text-slate-600 flex gap-4">
          <a href="#" className="hover:text-slate-800">Terms</a>
          <a href="#" className="hover:text-slate-800">Privacy</a>
          <a href="#contact" className="hover:text-slate-800">Contact</a>
        </div>
      </div>
    </footer>
  );
}
