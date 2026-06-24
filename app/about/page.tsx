import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HeroSection, ServiceCard } from '@/components/Cards'
import { Award, Users, Globe, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'About Premier University',
  description: 'Learn about our history, mission, values, and commitment to excellence.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        <HeroSection
          title="About Premier University"
          subtitle="A Legacy of Excellence, Innovation, and Impact"
          backgroundImage="/hero-bg.png"
          ctas={[
            { label: 'Explore History', href: '#history' },
            { label: 'Our Team', href: '/faculty', variant: 'secondary' },
          ]}
        />

        {/* Mission & Values */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Premier University is committed to providing world-class education that transforms lives and advances knowledge. We prepare students for meaningful careers and civic engagement while advancing the frontiers of human knowledge through research and scholarship.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-3">Core Values</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">Excellence in all endeavors</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">Integrity and ethical conduct</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">Diversity and inclusion</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">Innovation and discovery</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">Community engagement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary rounded-xl h-96" />
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 md:py-20 bg-background" id="history">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Our History</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <p className="text-accent font-bold mb-2">Founded 1876</p>
                <h3 className="text-xl font-bold text-foreground mb-2">Founding & Early Years</h3>
                <p className="text-muted-foreground">
                  Premier University was established with a vision to provide quality education accessible to talented students regardless of background. Starting with just three buildings and 200 students, we grew to become a leading research institution.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <p className="text-accent font-bold mb-2">1920s - 1950s</p>
                <h3 className="text-xl font-bold text-foreground mb-2">Expansion & Academic Excellence</h3>
                <p className="text-muted-foreground">
                  The university expanded significantly, establishing numerous academic schools and programs. We became recognized for research in science, engineering, and medicine. International programs were established during this period.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <p className="text-accent font-bold mb-2">1960s - 1990s</p>
                <h3 className="text-xl font-bold text-foreground mb-2">Growth & Modernization</h3>
                <p className="text-muted-foreground">
                  Major infrastructure development and modernization of facilities. Commitment to diversity and inclusion strengthened. Research funding increased dramatically, establishing us as a leading research university.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <p className="text-accent font-bold mb-2">2000s - Present</p>
                <h3 className="text-xl font-bold text-foreground mb-2">Global Leadership</h3>
                <p className="text-muted-foreground">
                  Emergence as a globally recognized institution with research centers in multiple countries. Enhanced graduate programs and strengthened industry partnerships. Current focus on sustainability and interdisciplinary research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">By The Numbers</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">15K+</p>
                <p className="text-muted-foreground">Students Enrolled</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-secondary mb-2">850+</p>
                <p className="text-muted-foreground">Faculty Members</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">200+</p>
                <p className="text-muted-foreground">Academic Programs</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">$2.5B</p>
                <p className="text-muted-foreground">Research Expenditure</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-secondary mb-2">120+</p>
                <p className="text-muted-foreground">Countries</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">500K+</p>
                <p className="text-muted-foreground">Alumni Worldwide</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">95%</p>
                <p className="text-muted-foreground">Employment Rate</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-secondary mb-2">Top 20</p>
                <p className="text-muted-foreground">Global Rankings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Why Premier University</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={<Award size={32} />}
                title="Academic Excellence"
                description="World-class faculty committed to teaching and mentorship at all levels."
              />
              <ServiceCard
                icon={<Lightbulb size={32} />}
                title="Research Leadership"
                description="Cutting-edge research with billions in funding across diverse disciplines."
              />
              <ServiceCard
                icon={<Users size={32} />}
                title="Diverse Community"
                description="Students and faculty from 120+ countries creating a global learning environment."
              />
              <ServiceCard
                icon={<Globe size={32} />}
                title="Global Impact"
                description="Alumni leading initiatives and organizations around the world."
              />
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">University Leadership</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-1">Dr. President Name</h3>
                <p className="text-accent font-semibold text-sm mb-2">President</p>
                <p className="text-muted-foreground text-xs">Leading the university with vision and purpose</p>
              </div>

              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-1">Dr. Provost Name</h3>
                <p className="text-accent font-semibold text-sm mb-2">Provost</p>
                <p className="text-muted-foreground text-xs">Overseeing academic affairs and excellence</p>
              </div>

              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-1">Dr. Chancellor Name</h3>
                <p className="text-accent font-semibold text-sm mb-2">Chancellor</p>
                <p className="text-muted-foreground text-xs">Supporting strategic initiatives and growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditation */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Accreditations & Recognition</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <p className="font-bold text-foreground mb-2">WASC</p>
                <p className="text-muted-foreground text-xs">Commission Accreditation</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <p className="font-bold text-foreground mb-2">AACSB</p>
                <p className="text-muted-foreground text-xs">Business Programs</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <p className="font-bold text-foreground mb-2">ABET</p>
                <p className="text-muted-foreground text-xs">Engineering Programs</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <p className="font-bold text-foreground mb-2">LCME</p>
                <p className="text-muted-foreground text-xs">Medical Education</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <p className="font-bold text-foreground mb-2">R1 Research</p>
                <p className="text-muted-foreground text-xs">Carnegie Classification</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <p className="font-bold text-foreground mb-2">Top 20</p>
                <p className="text-muted-foreground text-xs">US News Rankings</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <p className="font-bold text-foreground mb-2">Top 50</p>
                <p className="text-muted-foreground text-xs">Global Rankings</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <p className="font-bold text-foreground mb-2">ISO</p>
                <p className="text-muted-foreground text-xs">Quality Management</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
