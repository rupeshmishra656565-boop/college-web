import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HeroSection, ServiceCard } from '@/components/Cards'
import { Users, Zap, Heart, Volleyball } from 'lucide-react'

export const metadata = {
  title: 'Student Life - Premier University',
  description: 'Discover student life, clubs, activities, and housing at Premier University.',
}

export default function StudentLifePage() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        <HeroSection
          title="Student Life"
          subtitle="More Than Classes: A Vibrant Community of Learning, Growth, and Friendship"
          backgroundImage="/campus-bg.png"
          ctas={[
            { label: 'Explore Clubs', href: '#clubs' },
            { label: 'Housing', href: '#housing', variant: 'secondary' },
          ]}
        />

        {/* Overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience Premier University</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our vibrant campus community offers countless opportunities for personal growth, friendship, and unforgettable memories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-muted-foreground">Student Organizations</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-secondary mb-2">50+</p>
                <p className="text-muted-foreground">NCAA Sports</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">98%</p>
                <p className="text-muted-foreground">Student Engagement</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                <p className="text-muted-foreground">Campus Activities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Student Life Features */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Life at Premier University</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={<Users size={32} />}
                title="Student Clubs"
                description="Join 500+ clubs covering academics, culture, sports, and special interests."
              />
              <ServiceCard
                icon={<Volleyball size={32} />}
                title="Athletics & Recreation"
                description="Compete in NCAA sports or participate in intramurals and fitness programs."
              />
              <ServiceCard
                icon={<Zap size={32} />}
                title="Leadership Programs"
                description="Develop leadership skills through mentoring and student organization roles."
              />
              <ServiceCard
                icon={<Heart size={32} />}
                title="Community Service"
                description="Make a difference through volunteer work and service learning opportunities."
              />
            </div>
          </div>
        </section>

        {/* Clubs & Organizations */}
        <section className="py-16 md:py-20 bg-white" id="clubs">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Student Organizations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Academic & Professional</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Clubs focused on specific majors and professional development, from engineering to business to arts.
                </p>
                <p className="text-accent font-semibold text-sm">150+ clubs</p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Cultural & Diversity</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Celebrate diverse backgrounds and cultures through international and identity-based organizations.
                </p>
                <p className="text-accent font-semibold text-sm">100+ clubs</p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Sports & Recreation</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  From varsity sports to club teams to recreational activities, there&apos;s something for everyone.
                </p>
                <p className="text-accent font-semibold text-sm">100+ clubs</p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Arts & Entertainment</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Music, theater, comedy, film, and visual arts clubs showcase student talent year-round.
                </p>
                <p className="text-accent font-semibold text-sm">75+ clubs</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Explore All Clubs
              </a>
            </div>
          </div>
        </section>

        {/* Housing */}
        <section className="py-16 md:py-20 bg-background" id="housing">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Housing & Residence Life</h2>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">First Year Housing</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  All first-year students live on campus in community-focused residential halls. Experience dorm life with built-in peer support.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Modern</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Community</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Affordable</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Themed Housing</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Choose from honors housing, sustainability-focused living, international students floor, and more academic-themed residences.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">Academic</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">Interest-Based</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">Immersive</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Upper Class Housing</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Juniors and seniors can live in on-campus apartments or residence halls with more independence and privacy.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">Independent</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">Apartments</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">Flexible</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Off-Campus Housing</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  For graduate students and some upper-class undergraduates, we provide guidance on off-campus housing options.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Support</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Resources</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Athletics */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Athletics & Recreation</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">25</p>
                <p className="text-muted-foreground mb-4">NCAA Division I Teams</p>
                <p className="text-muted-foreground text-sm">Competing at the highest collegiate level</p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-secondary mb-2">40+</p>
                <p className="text-muted-foreground mb-4">Club Teams</p>
                <p className="text-muted-foreground text-sm">Competitive opportunities beyond varsity</p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-accent mb-2">50+</p>
                <p className="text-muted-foreground mb-4">Intramural Sports</p>
                <p className="text-muted-foreground text-sm">Recreational competitions and fitness</p>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">State-of-the-Art Facilities</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Olympic-size swimming pool</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Indoor and outdoor tracks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Tennis and racquetball courts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Multipurpose athletic fields</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Fitness and weight training centers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Martial arts and yoga studios</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Well-being & Support */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Student Well-being & Support</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Mental Health Services</h3>
                <p className="text-muted-foreground text-sm">
                  Free counseling, stress management workshops, and 24/7 crisis support available to all students.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Health & Wellness</h3>
                <p className="text-muted-foreground text-sm">
                  On-campus health center offering preventive care, vaccinations, and emergency services.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Peer Support</h3>
                <p className="text-muted-foreground text-sm">
                  Trained peer mentors and advisors available to support you throughout your college journey.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Diversity & Inclusion</h3>
                <p className="text-muted-foreground text-sm">
                  Safe spaces and support programs for all students, with focus on equity and belonging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Campus Events</h2>

            <p className="text-muted-foreground text-center mb-8">
              Throughout the year, we host hundreds of events including concerts, lectures, art exhibitions, sports competitions, and cultural celebrations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Fall Festival', 'Spring Concert Series', 'Cultural Week', 'Homecoming', 'Graduation', 'Study Abroad Fair'].map(
                (event) => (
                  <div key={event} className="bg-background border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                    <p className="font-bold text-foreground">{event}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
