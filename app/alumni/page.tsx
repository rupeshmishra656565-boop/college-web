import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HeroSection, TestimonialCard } from '@/components/Cards'
import { Users, Award, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Alumni - Premier University',
  description: 'Join our global alumni network of over 500,000 successful graduates.',
}

export default function AlumniPage() {
  const successStories = [
    {
      content: 'Premier University provided the foundation for my career in tech entrepreneurship. The connections I made here led to my first venture.',
      author: 'Michael Chen',
      role: 'Founder & CEO, TechStart Inc.',
      image: '/programs-bg.png',
    },
    {
      content: 'The faculty mentorship and research opportunities prepared me perfectly for my role as a research scientist. I am grateful for every moment.',
      author: 'Dr. Lisa Johnson',
      role: 'Senior Researcher, NIH',
      image: '/programs-bg.png',
    },
    {
      content: 'My Premier University education opened doors across the globe. Today I lead international development initiatives in 15 countries.',
      author: 'Ambassador David Kumar',
      role: 'International Policy Leader',
      image: '/programs-bg.png',
    },
  ]

  return (
    <>
      <Navbar />

      <main className="bg-background">
        <HeroSection
          title="Premier University Alumni"
          subtitle="Connecting a Global Network of Leaders, Innovators, and Change-Makers"
          backgroundImage="/hero-bg.png"
          ctas={[
            { label: 'Join Alumni Network', href: '#benefits' },
            { label: 'Give Back', href: '#giving', variant: 'secondary' },
          ]}
        />

        {/* Alumni Network */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">A Powerful Global Community</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Over 500,000 Premier University alumni are making an impact in every field, in every corner of the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">500K+</p>
                <p className="text-muted-foreground mb-4">Alumni Worldwide</p>
                <div className="bg-background border border-border rounded-lg h-48" />
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-secondary mb-2">120+</p>
                <p className="text-muted-foreground mb-4">Countries</p>
                <div className="bg-background border border-border rounded-lg h-48" />
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">95%</p>
                <p className="text-muted-foreground mb-4">Career Satisfaction</p>
                <div className="bg-background border border-border rounded-lg h-48" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <Users className="text-primary mx-auto mb-3" size={32} />
                <p className="font-bold text-foreground mb-1">100+ Chapters</p>
                <p className="text-muted-foreground text-xs">Local alumni chapters worldwide</p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <Award className="text-secondary mx-auto mb-3" size={32} />
                <p className="font-bold text-foreground mb-1">Top Leaders</p>
                <p className="text-muted-foreground text-xs">CEOs, politicians, and innovators</p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <TrendingUp className="text-accent mx-auto mb-3" size={32} />
                <p className="font-bold text-foreground mb-1">Career Growth</p>
                <p className="text-muted-foreground text-xs">Average salary 40% above peers</p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <Users className="text-primary mx-auto mb-3" size={32} />
                <p className="font-bold text-foreground mb-1">Mentorship</p>
                <p className="text-muted-foreground text-xs">Active mentorship programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Alumni Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our graduates are leading innovation, creating change, and making an impact across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <TestimonialCard key={index} {...story} />
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Benefits */}
        <section className="py-16 md:py-20 bg-white" id="benefits">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Alumni Benefits & Privileges</h2>

            <div className="space-y-6">
              <div className="bg-background border border-border rounded-lg p-6 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Lifetime Alumni Email</h3>
                  <p className="text-muted-foreground text-sm">Maintain your Premier University email address for life.</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Career Services</h3>
                  <p className="text-muted-foreground text-sm">Unlimited access to career counseling and job search resources.</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Networking Events</h3>
                  <p className="text-muted-foreground text-sm">Exclusive alumni events and networking opportunities throughout the year.</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Professional Development</h3>
                  <p className="text-muted-foreground text-sm">Online courses and webinars for continuous learning and growth.</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Library Access</h3>
                  <p className="text-muted-foreground text-sm">Access to university library resources and research databases.</p>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-primary font-bold">
                  6
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Exclusive Discounts</h3>
                  <p className="text-muted-foreground text-sm">Special discounts on campus facilities, bookstore, and partner services.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Giving Back */}
        <section className="py-16 md:py-20 bg-background" id="giving">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Give Back</h2>

            <div className="bg-card border border-border rounded-xl p-8 md:p-12 text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Your support makes a direct impact on student scholarships, research initiatives, and campus improvements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-background rounded-lg p-6">
                  <p className="text-3xl font-bold text-primary mb-2">$50</p>
                  <p className="text-muted-foreground text-sm">Supports one student meal</p>
                </div>

                <div className="bg-background rounded-lg p-6">
                  <p className="text-3xl font-bold text-secondary mb-2">$500</p>
                  <p className="text-muted-foreground text-sm">Provides research supplies</p>
                </div>

                <div className="bg-background rounded-lg p-6">
                  <p className="text-3xl font-bold text-accent mb-2">$5,000</p>
                  <p className="text-muted-foreground text-sm">Funds a full scholarship</p>
                </div>
              </div>

              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-bold">
                Make a Donation
              </button>
            </div>
          </div>
        </section>

        {/* Alumni Activities */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Alumni Activities & Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3 text-lg">Annual Homecoming</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Join thousands of alumni for our flagship annual celebration featuring sports, reunions, and traditions.
                </p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">
                  Learn More
                </a>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3 text-lg">Regional Chapters</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect with fellow alumni in your city through our 100+ active regional chapter networks.
                </p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">
                  Find Your Chapter
                </a>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3 text-lg">Mentorship Program</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Give back by mentoring current students and young alumni as they navigate their careers.
                </p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">
                  Become a Mentor
                </a>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3 text-lg">Class Reunions</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Reconnect with your class at milestone reunions and celebrate your years together.
                </p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">
                  View Schedule
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
