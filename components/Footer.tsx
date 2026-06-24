'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  GraduationCap,
  AtSign,
  Camera,
  Briefcase,
  Play,
  ArrowRight,
} from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const columns = [
    {
      title: 'Academics',
      links: [
        { label: 'Programs', href: '/programs' },
        { label: 'Research', href: '/research' },
        { label: 'Faculty Directory', href: '/faculty' },
        { label: 'Student Life', href: '/student-life' },
      ],
    },
    {
      title: 'Admissions',
      links: [
        { label: 'Apply Now', href: '/admissions' },
        { label: 'Financial Aid', href: '/financial-aid' },
        { label: 'Scholarships', href: '/scholarships' },
        { label: 'Visit Campus', href: '/campus-map' },
      ],
    },
    {
      title: 'Campus',
      links: [
        { label: 'Campus Map', href: '/campus-map' },
        { label: 'Events', href: '/events' },
        { label: 'News & Stories', href: '/news' },
        { label: 'Alumni', href: '/alumni' },
      ],
    },
  ]

  const socials = [
    { icon: AtSign, label: 'Twitter' },
    { icon: Camera, label: 'Instagram' },
    { icon: Briefcase, label: 'LinkedIn' },
    { icon: Play, label: 'YouTube' },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <GraduationCap size={22} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-lg font-semibold">Aldridge</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-primary-foreground/60">
                  University
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              A world-leading institution shaping scholars, scientists, and leaders since 1887.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Newsletter</h3>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Admissions, events, and research, delivered monthly.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 space-y-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2.5 text-sm text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-3 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-105"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
                {!subscribed && <ArrowRight size={15} />}
              </button>
            </form>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-14 grid grid-cols-1 gap-6 border-t border-primary-foreground/10 pt-10 md:grid-cols-3">
          {[
            { icon: MapPin, label: 'Visit', value: '1 University Quad, Cambridge, MA 02138' },
            { icon: Phone, label: 'Call', value: '(555) 123-4567' },
            { icon: Mail, label: 'Email', value: 'admissions@aldridge.edu' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-3">
              <Icon size={18} className="mt-0.5 shrink-0 text-accent" />
              <div className="text-sm">
                <p className="font-semibold">{label}</p>
                <p className="text-primary-foreground/70">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 sm:flex-row">
          <p className="text-xs text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Aldridge University. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-xs font-medium text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
