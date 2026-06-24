import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HeroSection, ServiceCard } from '@/components/Cards'
import { Beaker, Users, TrendingUp, Globe } from 'lucide-react'

export const metadata = {
  title: 'Research - Premier University',
  description: 'Explore our groundbreaking research initiatives and opportunities.',
}

export default function ResearchPage() {
  const research_areas = [
    {
      icon: <Beaker size={32} />,
      title: 'STEM Research',
      description: 'Advancing science, technology, engineering and mathematics through innovative research projects.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Sustainability',
      description: 'Addressing environmental and sustainability challenges for a better future.',
    },
    {
      icon: <Users size={32} />,
      title: 'Health Sciences',
      description: 'Breakthrough research in biomedical sciences and human health.',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Social Innovation',
      description: 'Research aimed at solving complex social and economic challenges.',
    },
  ]

  return (
    <>
      <Navbar />

      <main className="bg-background">
        <HeroSection
          title="Research & Innovation"
          subtitle="Advancing Knowledge and Creating Solutions for Global Challenges"
          backgroundImage="/research-bg.png"
          ctas={[
            { label: 'Get Involved', href: '#opportunities' },
            { label: 'Research Centers', href: '#centers', variant: 'secondary' },
          ]}
        />

        {/* Overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership in Research</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Premier University is a leader in research and scholarship, with over $2.5 billion in annual research expenditure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">$2.5B</p>
                <p className="text-muted-foreground">Annual Research Funding</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-secondary mb-2">500+</p>
                <p className="text-muted-foreground">Research Centers</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">5K+</p>
                <p className="text-muted-foreground">Faculty Researchers</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">10K+</p>
                <p className="text-muted-foreground">Student Researchers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Research Areas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {research_areas.map((area, index) => (
                <ServiceCard key={index} {...area} />
              ))}
            </div>
          </div>
        </section>

        {/* Research Centers */}
        <section className="py-16 md:py-20 bg-white" id="centers">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Major Research Centers</h2>

            <div className="space-y-6">
              <div className="bg-background border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">Institute for Advanced Computing</h3>
                <p className="text-muted-foreground mb-4">
                  Leading research in artificial intelligence, machine learning, and computational science. Focus areas include autonomous systems and data analytics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">AI & ML</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Computing</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Data Science</span>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">Center for Sustainable Energy</h3>
                <p className="text-muted-foreground mb-4">
                  Advancing clean energy technologies and sustainable practices. Research in renewable energy, energy efficiency, and climate solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">Renewable Energy</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">Sustainability</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">Climate</span>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">Biomedical Research Institute</h3>
                <p className="text-muted-foreground mb-4">
                  Pioneering research in disease treatment, drug development, and personalized medicine. Focus on cancer, neurodegenerative diseases, and vaccines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">Biomedical</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">Health</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">Medicine</span>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">Center for Social Innovation</h3>
                <p className="text-muted-foreground mb-4">
                  Research addressing poverty, education access, and economic development. Developing solutions for underserved communities worldwide.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Social Impact</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Development</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 md:py-20 bg-background" id="opportunities">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Research Opportunities</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Undergraduate Research</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Gain hands-on research experience while pursuing your degree. Work alongside faculty and graduate students.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Summer research programs</li>
                  <li>• STEM scholarships</li>
                  <li>• Mentorship opportunities</li>
                  <li>• Publications & presentations</li>
                </ul>
                <a
                  href="#"
                  className="text-primary font-semibold hover:underline text-sm"
                >
                  Learn More
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Graduate Research</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Conduct cutting-edge research as part of your graduate studies. Full funding and support available.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Funded graduate positions</li>
                  <li>• Research assistantships</li>
                  <li>• Collaborative projects</li>
                  <li>• Career development</li>
                </ul>
                <a
                  href="#"
                  className="text-primary font-semibold hover:underline text-sm"
                >
                  Learn More
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Faculty Research</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Join our distinguished faculty in pursuing groundbreaking research. Support and resources available.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Research grants</li>
                  <li>• Collaboration networks</li>
                  <li>• Lab facilities</li>
                  <li>• Professional development</li>
                </ul>
                <a
                  href="#"
                  className="text-primary font-semibold hover:underline text-sm"
                >
                  Learn More
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Industry Partnerships</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Collaborate with industry partners on applied research and innovation projects.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Joint ventures</li>
                  <li>• Technology transfer</li>
                  <li>• Sponsored research</li>
                  <li>• Commercialization</li>
                </ul>
                <a
                  href="#"
                  className="text-primary font-semibold hover:underline text-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Research */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Featured Research</h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-lg p-8">
                <p className="text-accent font-bold mb-2">2024 Breakthrough</p>
                <h3 className="text-2xl font-bold text-foreground mb-3">Revolutionary Cancer Treatment Shows Promise</h3>
                <p className="text-muted-foreground mb-4">
                  Our researchers have developed a novel immunotherapy approach that shows significantly improved outcomes in clinical trials.
                </p>
                <a href="#" className="text-primary font-semibold hover:underline">
                  Read the Full Study →
                </a>
              </div>

              <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-border rounded-lg p-8">
                <p className="text-accent font-bold mb-2">Sustainability Initiative</p>
                <h3 className="text-2xl font-bold text-foreground mb-3">Novel Materials for Clean Energy Production</h3>
                <p className="text-muted-foreground mb-4">
                  Scientists discover new material that increases solar panel efficiency while reducing manufacturing costs.
                </p>
                <a href="#" className="text-primary font-semibold hover:underline">
                  Read the Full Study →
                </a>
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-border rounded-lg p-8">
                <p className="text-accent font-bold mb-2">AI Innovation</p>
                <h3 className="text-2xl font-bold text-foreground mb-3">AI Model Predicts Disease Outbreaks</h3>
                <p className="text-muted-foreground mb-4">
                  Machine learning algorithm developed that can accurately predict disease spread patterns months in advance.
                </p>
                <a href="#" className="text-primary font-semibold hover:underline">
                  Read the Full Study →
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
