import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  HeroSection,
  StatsCard,
  ProgramCard,
  TestimonialCard,
  NewsCard,
  EventCard,
} from '@/components/Cards'
import Link from 'next/link'
import {
  Users,
  BookOpen,
  Globe,
  Lightbulb,
  Award,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react'

export const metadata = {
  title: 'Aldridge University — Where Ambition Becomes Achievement',
  description: 'A world-leading institution shaping scholars, scientists, and leaders since 1887.',
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className={`eyebrow ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

export default function Home() {
  const stats = [
    { icon: <Users size={24} />, number: '15,000+', label: 'Students' },
    { icon: <BookOpen size={24} />, number: '200+', label: 'Programs' },
    { icon: <Globe size={24} />, number: '120+', label: 'Countries' },
    { icon: <TrendingUp size={24} />, number: '95%', label: 'Employment Rate' },
  ]

  const programs = [
    {
      title: 'Computer Science',
      description: 'Master cutting-edge programming, AI, and cybersecurity technologies.',
      image: '/lab.png',
      href: '/programs',
    },
    {
      title: 'Business Administration',
      description: 'Develop leadership skills and business acumen for global markets.',
      image: '/collaboration.png',
      href: '/programs',
    },
    {
      title: 'Engineering',
      description: 'Design the future with innovative solutions and hands-on learning.',
      image: '/research-bg.png',
      href: '/programs',
    },
    {
      title: 'Biomedical Sciences',
      description: 'Advance healthcare through groundbreaking research and discovery.',
      image: '/library.png',
      href: '/programs',
    },
  ]

  const testimonials = [
    {
      content:
        'Aldridge transformed my academic journey and opened doors to opportunities I never imagined possible.',
      author: 'Sarah Chen',
      role: 'Class of 2023 · Goldman Sachs',
      image: '/graduate.png',
    },
    {
      content:
        'The faculty mentorship and research opportunities here are unmatched. I published three papers before graduation.',
      author: 'James Williams',
      role: 'Class of 2022 · MIT PhD',
      image: '/faculty.png',
    },
    {
      content:
        'The community and world-class education prepared me to launch my own company straight out of school.',
      author: 'Aisha Patel',
      role: 'Class of 2021 · Founder & CEO',
      image: '/student-activities.png',
    },
  ]

  const news = [
    {
      title: 'New $50M Research Center Opens',
      excerpt: 'Aldridge inaugurates a state-of-the-art facility for sustainable energy research.',
      date: 'November 15, 2024',
      category: 'Research',
      image: '/lab.png',
      href: '/news',
    },
    {
      title: 'Student Team Wins International Competition',
      excerpt: 'Our engineering students take first place at the Global Innovation Summit.',
      date: 'November 10, 2024',
      category: 'Achievement',
      image: '/collaboration.png',
      href: '/news',
    },
    {
      title: 'Campus Sustainability Initiative Launched',
      excerpt: 'The university commits to carbon neutrality by 2030 with bold new programs.',
      date: 'November 5, 2024',
      category: 'Sustainability',
      image: '/campus-aerial.png',
      href: '/news',
    },
  ]

  const events = [
    {
      title: 'Guided Campus Tour',
      date: 'December 3, 2024',
      time: '10:00 AM – 12:00 PM',
      location: 'Main Quad, Heritage Hall',
      image: '/campus-aerial.png',
      href: '/events',
    },
    {
      title: 'Admissions Information Session',
      date: 'December 5, 2024',
      time: '2:00 PM – 3:30 PM',
      location: 'Virtual',
      image: '/admissions.png',
      href: '/events',
    },
    {
      title: 'Annual Research Symposium',
      date: 'December 10, 2024',
      time: '1:00 PM – 5:00 PM',
      location: 'Convention Center',
      image: '/events.png',
      href: '/events',
    },
  ]

  const services = [
    {
      icon: <BookOpen size={22} />,
      title: 'Academic Excellence',
      description: 'World-class faculty and rigorous curricula prepare students for global success.',
    },
    {
      icon: <Lightbulb size={22} />,
      title: 'Innovation Hub',
      description: 'State-of-the-art facilities and research opportunities drive discovery.',
    },
    {
      icon: <Award size={22} />,
      title: 'Career Support',
      description: 'Comprehensive career services with a 95% graduate placement rate.',
    },
    {
      icon: <Globe size={22} />,
      title: 'Global Network',
      description: 'Connect with peers and mentors across 120+ countries worldwide.',
    },
  ]

  return (
    <>
      <Navbar />

      <main className="bg-background">
        <HeroSection
          title="Where ambition becomes achievement."
          subtitle="Join a community of innovators, scholars, and leaders at one of the world's most distinguished universities."
          backgroundImage="/hero-campus.png"
          ctas={[
            { label: 'Begin Your Application', href: '/admissions' },
            { label: 'Explore Programs', href: '/programs', variant: 'secondary' },
          ]}
        />

        {/* Stats */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
            <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-border">
              {stats.map((stat, index) => (
                <StatsCard key={index} icon={stat.icon} number={stat.number} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                align="left"
                eyebrow="Academics"
                title="Programs designed for impact"
                description="Explore undergraduate and graduate degrees crafted to prepare you for a meaningful career and a life of purpose."
              />
              <Link
                href="/programs"
                className="group inline-flex items-center gap-2 self-start rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent md:self-auto"
              >
                View all programs
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {programs.map((program, index) => (
                <ProgramCard key={index} {...program} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose — editorial split */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:px-8 py-20 md:py-28 lg:grid-cols-2">
            <div
              className="relative h-80 overflow-hidden rounded-3xl lg:h-[28rem]"
              style={{
                backgroundImage: 'url(/grand-library.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary-foreground/10" />
            </div>

            <div>
              <p className="eyebrow">
                <span className="h-px w-8 bg-accent" />
                Why Aldridge
              </p>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-balance">
                An education that transforms lives and shapes the future.
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-primary-foreground/75">
                For more than a century, we have cultivated the curiosity, character, and conviction
                that define tomorrow&apos;s leaders.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                      {service.icon}
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold">{service.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Voices"
              title="Stories of those who came before"
              description="Hear from the alumni whose journeys began on our campus."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="bg-secondary/40 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading align="left" eyebrow="Newsroom" title="The latest from campus" />
              <Link
                href="/news"
                className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-primary md:self-auto"
              >
                All news
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {news.map((article, index) => (
                <NewsCard key={index} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading align="left" eyebrow="What's On" title="Upcoming events" />
              <Link
                href="/events"
                className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-primary md:self-auto"
              >
                Full calendar
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-6 lg:px-8 pb-20 md:pb-28">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:py-24">
            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="eyebrow justify-center">
                <span className="h-px w-8 bg-accent" />
                Admissions Open
              </p>
              <h2 className="mt-4 font-heading text-3xl md:text-5xl font-semibold text-balance">
                Your future begins here.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
                Apply today and become part of a global community of scholars, innovators, and leaders.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-105"
                >
                  Apply Now
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/financial-aid"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Financial Aid
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
