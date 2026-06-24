import { ReactNode } from 'react'
import Link from 'next/link'
import { Star, ArrowRight, ArrowUpRight, Calendar, Clock, MapPin } from 'lucide-react'

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctas,
}: {
  title: string
  subtitle: string
  backgroundImage: string
  ctas: Array<{ label: string; href: string; variant?: 'primary' | 'secondary' }>
}) {
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Layered scrims for a legible, premium look */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 md:pb-24">
        <p className="eyebrow mb-6">
          <span className="h-px w-8 bg-accent" />
          Established 1887 · Top 1% Worldwide
        </p>
        <h1 className="max-w-4xl font-heading text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl font-semibold text-background text-balance">
          {title}
        </h1>
        <p className="mt-7 max-w-xl text-lg md:text-xl text-background/80 leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          {ctas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className={`group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                cta.variant === 'secondary'
                  ? 'border border-background/30 text-background backdrop-blur-sm hover:bg-background/10'
                  : 'bg-accent text-accent-foreground hover:brightness-105 shadow-lg shadow-accent/20'
              }`}
            >
              {cta.label}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StatsCard({
  icon,
  number,
  label,
}: {
  icon: ReactNode
  number: string
  label: string
}) {
  return (
    <div className="group relative px-6 py-2 text-center md:text-left">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/12 text-accent ring-1 ring-accent/20 transition-colors group-hover:bg-accent group-hover:text-accent-foreground mx-auto md:mx-0">
        {icon}
      </div>
      <p className="font-heading text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
        {number}
      </p>
      <p className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  )
}

export function ProgramCard({
  title,
  description,
  image,
  href,
}: {
  title: string
  description: string
  image: string
  href: string
}) {
  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-accent/40">
        <div className="relative h-52 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.06]"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
          <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Explore program
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </article>
    </Link>
  )
}

export function FacultyCard({
  name,
  title,
  department,
  image,
  href,
}: {
  name: string
  title: string
  department: string
  image: string
  href: string
}) {
  return (
    <Link href={href} className="group block">
      <article className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/40">
        <div className="relative h-64 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
        </div>
        <div className="p-5">
          <h3 className="font-heading text-lg font-semibold text-foreground">{name}</h3>
          <p className="mt-0.5 text-sm font-medium text-accent">{title}</p>
          <p className="mt-1 text-xs text-muted-foreground">{department}</p>
        </div>
      </article>
    </Link>
  )
}

export function TestimonialCard({
  content,
  author,
  role,
  image,
}: {
  content: string
  author: string
  role: string
  image: string
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl hover:border-accent/30">
      <div className="mb-5 flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>
      <blockquote className="flex-1 font-heading text-lg leading-relaxed text-foreground/90">
        &ldquo;{content}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <div
          className="h-11 w-11 shrink-0 rounded-full bg-muted ring-2 ring-accent/20"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div>
          <p className="text-sm font-semibold text-foreground">{author}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export function NewsCard({
  title,
  excerpt,
  date,
  image,
  category,
  href,
}: {
  title: string
  excerpt: string
  date: string
  image: string
  category: string
  href: string
}) {
  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/40">
        <div className="relative h-48 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.06]"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <span className="absolute left-4 top-4 inline-block rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
            {category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{date}</p>
          <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent line-clamp-2">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">{excerpt}</p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Read story
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </article>
    </Link>
  )
}

export function EventCard({
  title,
  date,
  time,
  location,
  image,
  href,
}: {
  title: string
  date: string
  time: string
  location: string
  image: string
  href: string
}) {
  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/40">
        <div className="relative h-40 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.06]"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
            {title}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5">
              <Calendar size={15} className="text-accent shrink-0" /> {date}
            </li>
            <li className="flex items-center gap-2.5">
              <Clock size={15} className="text-accent shrink-0" /> {time}
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={15} className="text-accent shrink-0" /> {location}
            </li>
          </ul>
          <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Reserve a seat
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  )
}

export function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}
