"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Camera,
  Heart,
  Building2,
  Cake,
  Gift,
  PartyPopper,
  Megaphone,
  HandPlatter,
  Palette,
  Users,
  MapPin,
  Phone,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const NAV_LINKS = ["Home", "Services", "Gallery", "About", "Contact"];

const SERVICES = [
  { icon: Camera,       title: "Photography",             desc: "Professional event photography capturing every precious moment with artistry." },
  { icon: Heart,        title: "Wedding Event",            desc: "Flawless wedding planning from décor to ceremony management." },
  { icon: Building2,    title: "Corporate Event",          desc: "Tailored corporate gatherings, conferences, and high-impact seminars." },
  { icon: Cake,         title: "Birthday Party Decoration",desc: "Creative themed decorations for unforgettable birthday celebrations." },
  { icon: Gift,         title: "Surprise Party Planning",  desc: "Perfectly orchestrated surprise events that leave guests speechless." },
  { icon: PartyPopper,  title: "Corporate Party",          desc: "Vibrant corporate parties that boost team morale and connections." },
  { icon: Megaphone,    title: "Promotional Activities",   desc: "Impactful brand promotions designed to maximize audience reach." },
  { icon: HandPlatter,  title: "Hospitality Management",   desc: "End-to-end hospitality ensuring every guest feels valued and comfortable." },
  { icon: Palette,      title: "All Types of Branding",    desc: "Comprehensive branding services that elevate your brand identity." },
  { icon: Users,        title: "Manpower Team",            desc: "Professional event staff and manpower for seamless execution." },
];

const GALLERY = [
  {
    label: "Weddings",
    category: "Wedding Planning",
    desc: "Elegant wedding ceremonies and receptions crafted with love, from intimate garden affairs to grand ballroom celebrations.",
    img: "https://images.unsplash.com/photo-1762709118823-7fe9c9afa8ff?w=900&q=80",
  },
  {
    label: "Corporate Events",
    category: "Corporate",
    desc: "Professional conferences, seminars, and team-building events designed to inspire and deliver impact.",
    img: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=900&q=80",
  },
  {
    label: "Birthday Parties",
    category: "Celebration",
    desc: "Creative themed birthday celebrations with stunning décor, entertainment, and unforgettable moments.",
    img: "https://images.unsplash.com/photo-1643175816971-a463dee6ae61?w=900&q=80",
  },
  {
    label: "Photography",
    category: "Photography",
    desc: "Professional event photography capturing every candid smile, emotional embrace, and joyful dance.",
    img: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=900&q=80",
  },
  {
    label: "Branding Events",
    category: "Branding & Promotion",
    desc: "High-impact brand activations, product launches, and promotional campaigns that captivate audiences.",
    img: "https://images.unsplash.com/photo-1769798643655-e0f10f62c3fd?w=900&q=80",
  },
  {
    label: "Corporate Party",
    category: "Corporate Party",
    desc: "Vibrant year-end galas, award nights, and celebration parties that reward and energize teams.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80",
  },
  {
    label: "Hospitality",
    category: "Hospitality Management",
    desc: "Seamless guest management and hospitality services ensuring every attendee feels valued and welcomed.",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&q=80",
  },
  {
    label: "Surprise Events",
    category: "Surprise Planning",
    desc: "Perfectly orchestrated surprise parties and proposals that leave lasting impressions on your loved ones.",
    img: "https://images.unsplash.com/photo-1769374077145-cff000d91633?w=900&q=80",
  },
];

const FAQS = [
  {
    q: "What event management services do you provide?",
    a: "We offer a wide range of services including photography, wedding events, corporate events, birthday party decoration, surprise party planning, corporate parties, promotional activities, hospitality management, branding, and professional manpower team services.",
  },
  {
    q: "How early should I book your services?",
    a: "We recommend booking at least 2–3 months in advance for weddings and large corporate events. For smaller events, 2–4 weeks notice is usually sufficient.",
  },
  {
    q: "What is the booking process?",
    a: "Simply contact us via phone or visit our office. We'll schedule a consultation to discuss your event needs, provide a customized plan, and confirm with a booking agreement.",
  },
  {
    q: "How can I find out more about your pricing?",
    a: "Pricing varies by event type and requirements. Contact us at 01750951093 or 01750622423 for a personalized quote tailored to your event.",
  },
  {
    q: "Do you manage events outside Rangpur?",
    a: "Yes! While we are based in Rangpur, we can arrange services across Bangladesh for the right project.",
  },
  {
    q: "Can you support large-scale corporate events?",
    a: "Absolutely. Our professional manpower team and hospitality management experience make us well-equipped for events of any scale.",
  },
];

const STRENGTHS = [
  { icon: Star,         label: "Award-Winning Team" },
  { icon: CheckCircle2, label: "On-Time Delivery" },
  { icon: Sparkles,     label: "Creative Excellence" },
  { icon: Users,        label: "Dedicated Support" },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [galleryPage, setGalleryPage] = useState(0);

  // Gallery carousel: show 2 on mobile, 3 on larger screens (we'll render all per page and use CSS)
  const CARDS_PER_PAGE = 3;
  const totalPages = Math.ceil(GALLERY.length / CARDS_PER_PAGE);
  const currentGalleryItems = GALLERY.slice(
    galleryPage * CARDS_PER_PAGE,
    galleryPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* ══════════════════════════════
          NAVBAR
      ══════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 h-16 bg-black/85 backdrop-blur-md border-b border-[#c9a84c]/15">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Vine & Vibe Event Logo"
            width={40}
            height={40}
            className="rounded-full object-cover ring-1 ring-[#c9a84c]/40"
            style={{ width: 40, height: 40 }}
          />
          <span style={{ fontFamily: "var(--font-serif)" }} className="text-base font-normal tracking-wide text-[#c9a84c]">
            Vine &amp; Vibe Event
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-zinc-400 hover:text-[#c9a84c] transition-colors tracking-wide"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#c9a84c] text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#dbb85a] transition-colors"
        >
          Book Now <ArrowRight size={14} />
        </a>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/97 flex flex-col items-center justify-center gap-7 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-2xl text-[#c9a84c] tracking-wide"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#c9a84c] text-black font-semibold px-8 py-3 rounded-full"
          >
            Book Now
          </a>
        </div>
      )}

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section id="home" className="relative min-h-screen flex flex-col justify-end pt-16">
        {/* Full-bleed hero image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1745573673583-a51f665ae48e?w=1920&q=85&auto=format&fit=crop"
            alt="Vine & Vibe luxury royal wedding stage decoration with flowers, drapery, and seating in Rangpur, Bangladesh"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 px-8 md:px-16 pb-0">
          <p className="text-[#c9a84c] tracking-[0.35em] text-xs uppercase font-medium mb-5">
            Premium Event Management · Rangpur, Bangladesh
          </p>
          <h1
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-6xl md:text-8xl lg:text-[108px] font-normal leading-[0.95] mb-6"
          >
            <span className="text-white">VINE</span>
            <span className="text-[#c9a84c]"> &amp; </span>
            <span className="text-white">VIBE</span>
            <br />
            <span className="text-zinc-300 text-4xl md:text-5xl lg:text-6xl italic">Event</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
            Turning moments into memories. From weddings to corporate galas,
            we craft extraordinary experiences with precision and passion.
          </p>
          <div className="flex flex-wrap gap-4 mb-24">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-[#c9a84c] text-black font-semibold px-7 py-3.5 rounded-full hover:bg-[#dbb85a] transition-colors"
            >
              Explore Services <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[#c9a84c]/50 text-[#c9a84c] font-semibold px-7 py-3.5 rounded-full hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#c9a84c]/15 bg-black/70 backdrop-blur-sm border-t border-[#c9a84c]/15">
          {[
            { num: "500+", label: "Events Managed" },
            { num: "10+",  label: "Service Categories" },
            { num: "100%", label: "Client Satisfaction" },
            { num: "24/7", label: "Support Available" },
          ].map((s) => (
            <div key={s.label} className="text-center py-5 px-4">
              <div style={{ fontFamily: "var(--font-serif)" }} className="text-[#c9a84c] text-2xl">{s.num}</div>
              <div className="text-zinc-500 text-xs mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          SERVICES
      ══════════════════════════════ */}
      <section id="services" className="py-24 px-6 md:px-14 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-[#c9a84c] tracking-[0.35em] text-xs uppercase font-medium mb-3">What We Offer</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-4xl md:text-5xl font-normal leading-tight">
                Tailored Event <br />
                <em className="text-[#c9a84c]">Solutions</em>
              </h2>
              <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
                From intimate gatherings to grand corporate events,
                every detail handled with care and creativity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className={`group p-7 md:p-8 rounded-2xl border border-zinc-800/80 bg-[#121212] hover:border-[#c9a84c]/60 hover:bg-[#171717] transition-all duration-300 cursor-default flex flex-col justify-between gap-5 shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-[#c9a84c]/5 ${
                  index === SERVICES.length - 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/25 flex items-center justify-center mb-5 group-hover:bg-[#c9a84c] transition-all duration-300">
                    <Icon size={24} className="text-[#c9a84c] group-hover:text-black transition-colors" strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)" }} className="text-xl md:text-2xl font-normal text-white group-hover:text-[#c9a84c] transition-colors leading-snug mb-3">
                    {title}
                  </h3>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed group-hover:text-zinc-100 transition-colors">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          ABOUT
      ══════════════════════════════ */}
      <section id="about" className="py-24 px-6 md:px-14 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left: image grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden h-64 col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=900&q=80"
                alt="Vine & Vibe professional event setup and celebration stage decor in Rangpur"
                width={900} height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-40">
              <Image
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80"
                alt="Vine & Vibe atmospheric party lighting and banquet ambiance styling"
                width={600} height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-40 relative">
              <Image
                src="/logo.jpg"
                alt="Vine & Vibe Event Management Rangpur Logo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span style={{ fontFamily: "var(--font-serif)" }} className="text-[#c9a84c] text-center text-sm px-2 leading-snug">
                  Vine &amp; Vibe Event
                </span>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <p className="text-[#c9a84c] tracking-[0.35em] text-xs uppercase font-medium mb-4">Who We Are</p>
            <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-4xl md:text-5xl font-normal mb-6 leading-tight">
              Stunning &amp; <br />
              <em className="text-[#c9a84c]">Unforgettable</em> <br />
              Events
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4 text-sm">
              Vine &amp; Vibe Event is Rangpur's premier event management company,
              dedicated to turning your vision into reality. With a passionate team
              of professionals, we handle every detail — from décor and photography
              to logistics and manpower.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
              Whether it's an intimate wedding or a large-scale corporate gathering,
              we bring creativity, reliability, and energy to every event we manage.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {STRENGTHS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-[#c9a84c]" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm text-zinc-300">{label}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#c9a84c] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#dbb85a] transition-colors text-sm"
            >
              Book a Consultation <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          GALLERY – Carousel Grid
      ══════════════════════════════ */}
      <section id="gallery" className="py-24 px-6 md:px-14 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[#c9a84c] tracking-[0.35em] text-xs uppercase font-medium mb-3">Our Work</p>
              <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-4xl md:text-5xl font-normal leading-tight">
                Stunning &amp; <br />
                <em className="text-[#c9a84c]">Picturesque</em> Moments
              </h2>
              <p className="text-zinc-500 text-sm max-w-xs leading-relaxed mt-4">
                A glimpse into the events we've crafted with passion and precision.
              </p>
            </div>

            {/* Carousel navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setGalleryPage((p) => Math.max(0, p - 1))}
                disabled={galleryPage === 0}
                className="w-11 h-11 rounded-full border border-[#c9a84c]/30 flex items-center justify-center hover:bg-[#c9a84c] hover:text-black text-[#c9a84c] transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#c9a84c] disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-zinc-500 text-sm tabular-nums min-w-[3rem] text-center">
                {galleryPage + 1} / {totalPages}
              </span>
              <button
                onClick={() => setGalleryPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={galleryPage === totalPages - 1}
                className="w-11 h-11 rounded-full border border-[#c9a84c]/30 flex items-center justify-center hover:bg-[#c9a84c] hover:text-black text-[#c9a84c] transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#c9a84c] disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Cards grid: 1 col on small, 2 on md, 3 on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentGalleryItems.map((item) => (
              <div
                key={item.label}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-zinc-800/60 hover:border-[#c9a84c]/40 transition-all duration-500 shadow-lg shadow-black/30"
              >
                {/* Image */}
                <div className="relative h-[340px] md:h-[380px] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={`Vine & Vibe ${item.label} - ${item.category} in Rangpur, Bangladesh`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                {/* Content overlay on top of card */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Top: category badge */}
                  <div className="flex justify-between items-start">
                    <span className="bg-[#c9a84c]/90 backdrop-blur-sm text-black text-[11px] font-semibold px-3 py-1.5 rounded-full">
                      {item.category}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </div>

                  {/* Bottom: title & description */}
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3
                      style={{ fontFamily: "var(--font-serif)" }}
                      className="text-2xl md:text-3xl font-normal text-white mb-2 leading-snug"
                    >
                      {item.label}
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[90%]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setGalleryPage(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === galleryPage
                    ? "w-8 h-2 bg-[#c9a84c]"
                    : "w-2 h-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FAQ
      ══════════════════════════════ */}
      <section id="faq" className="py-24 px-6 md:px-14 bg-[#c9a84c]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
          {/* Left */}
          <div>
            <p className="tracking-[0.35em] text-xs uppercase font-medium text-black/50 mb-3">FAQ</p>
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-4xl md:text-5xl font-normal text-black leading-tight mb-5"
            >
              Answers to <br />
              <em>Your Questions</em>
            </h2>
            <p className="text-black/60 text-sm leading-relaxed mb-8">
              Everything you need to know about planning your event with Vine &amp; Vibe Event.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-black text-[#c9a84c] font-semibold px-6 py-3 rounded-full hover:bg-zinc-900 transition-colors text-sm"
            >
              Still have questions? <ArrowRight size={14} />
            </a>
          </div>

          {/* Right: accordion */}
          <div className="flex flex-col gap-2">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-black/10 rounded-xl border border-black/10 overflow-hidden"
              >
                <button
                  className="w-full text-left px-5 py-4 text-sm font-semibold text-black flex items-center justify-between gap-3"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={16} className="shrink-0" />
                    : <ChevronDown size={16} className="shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-black/65 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CONTACT
      ══════════════════════════════ */}
      <section id="contact" className="py-24 px-6 md:px-14 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-[#c9a84c]/20 bg-[#0d0d0d] p-10 md:p-16 text-center">
            {/* Background image accent */}
            <div className="absolute inset-0 opacity-10">
              <Image
                src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=60"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#c9a84c]/10 via-transparent to-black/80" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <p className="text-[#c9a84c] tracking-[0.35em] text-xs uppercase font-medium mb-4">Get In Touch</p>
              <h2
                style={{ fontFamily: "var(--font-serif)" }}
                className="text-4xl md:text-6xl font-normal mb-5 leading-tight text-white"
              >
                Ready to Book Your <br />
                <em className="text-[#c9a84c]">Next Event?</em>
              </h2>
              <p className="text-zinc-300 text-base md:text-lg max-w-xl mb-12 leading-relaxed">
                Call our direct lines for immediate booking, consultation, and tailored packages. We are ready to assist you every day.
              </p>

              {/* Big, Focused Contact Cards */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <a
                  href="tel:01750951093"
                  aria-label="Call Vine & Vibe Event primary booking hotline 01750 951 093"
                  className="group p-8 rounded-2xl border border-[#c9a84c]/30 bg-[#141414] hover:bg-[#1a1a1a] hover:border-[#c9a84c] transition-all duration-300 flex flex-col items-center gap-3 shadow-xl hover:shadow-[#c9a84c]/10"
                >
                  <div className="w-16 h-16 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center group-hover:bg-[#c9a84c] transition-all duration-300">
                    <Phone size={28} className="text-[#c9a84c] group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-zinc-400 mt-1">Primary Hotline</span>
                  <span
                    style={{ fontFamily: "var(--font-serif)" }}
                    className="text-3xl md:text-4xl font-normal text-[#c9a84c] group-hover:text-white transition-colors tracking-wide"
                  >
                    01750 951 093
                  </span>
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-200 inline-flex items-center gap-1.5 mt-1 font-medium">
                    Tap to Call <ArrowRight size={13} />
                  </span>
                </a>

                <a
                  href="tel:01750622423"
                  aria-label="Call Vine & Vibe Event customer support and booking line 01750 622 423"
                  className="group p-8 rounded-2xl border border-[#c9a84c]/30 bg-[#141414] hover:bg-[#1a1a1a] hover:border-[#c9a84c] transition-all duration-300 flex flex-col items-center gap-3 shadow-xl hover:shadow-[#c9a84c]/10"
                >
                  <div className="w-16 h-16 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center group-hover:bg-[#c9a84c] transition-all duration-300">
                    <Phone size={28} className="text-[#c9a84c] group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-zinc-400 mt-1">Support &amp; Booking</span>
                  <span
                    style={{ fontFamily: "var(--font-serif)" }}
                    className="text-3xl md:text-4xl font-normal text-[#c9a84c] group-hover:text-white transition-colors tracking-wide"
                  >
                    01750 622 423
                  </span>
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-200 inline-flex items-center gap-1.5 mt-1 font-medium">
                    Tap to Call <ArrowRight size={13} />
                  </span>
                </a>
              </div>

              {/* Address info below */}
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-zinc-800 bg-[#121212]/90 text-zinc-300 text-sm md:text-base">
                <MapPin size={20} className="text-[#c9a84c] shrink-0" strokeWidth={1.5} />
                <span>JK Tower, G.L Roy Road, Kamal Kachna, Sailor Building, Rangpur, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <footer className="bg-[#050505] border-t border-[#c9a84c]/10 pt-14 pb-8 px-6 md:px-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.jpg" alt="Logo" width={36} height={36} className="rounded-full ring-1 ring-[#c9a84c]/30" style={{ width: 36, height: 36 }} />
              <span style={{ fontFamily: "var(--font-serif)" }} className="text-[#c9a84c]">Vine &amp; Vibe Event</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Premium event management services in Rangpur, Bangladesh.
              Making every moment extraordinary.
            </p>
          </div>
          <div>
            <p className="text-zinc-400 text-xs uppercase tracking-widest font-medium mb-4">Quick Links</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-zinc-500 hover:text-[#c9a84c] text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-zinc-400 text-xs uppercase tracking-widest font-medium mb-4">Contact</p>
            <div className="flex items-start gap-3 mb-3">
              <MapPin size={15} className="text-[#c9a84c] mt-0.5 shrink-0" strokeWidth={1.5} />
              <p className="text-zinc-500 text-sm leading-relaxed">
                JK Tower, G.L Roy Road, Kamal Kachna<br />
                Sailor Building, Rangpur
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={15} className="text-[#c9a84c] shrink-0" strokeWidth={1.5} />
              <div>
                <a href="tel:01750951093" className="text-[#c9a84c] text-sm block hover:underline">01750951093</a>
                <a href="tel:01750622423" className="text-[#c9a84c] text-sm block hover:underline">01750622423</a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-6 border-t border-[#c9a84c]/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs">© 2026 Vine &amp; Vibe Event. All rights reserved.</p>
          <p className="text-zinc-600 text-xs">Rangpur, Bangladesh</p>
        </div>
      </footer>
    </main>
  );
}
