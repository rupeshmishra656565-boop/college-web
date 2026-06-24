import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HeroSection, ProgramCard } from '@/components/Cards'

export const metadata = {
  title: 'Programs - Premier University',
  description: 'Explore our diverse range of undergraduate and graduate programs.',
}

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Computer Science',
      description: 'Master cutting-edge programming, AI, and cybersecurity technologies.',
      image: '/programs-bg.png',
      href: '/programs/computer-science',
    },
    {
      title: 'Business Administration',
      description: 'Develop leadership skills and business acumen for global markets.',
      image: '/programs-bg.png',
      href: '/programs/business',
    },
    {
      title: 'Engineering',
      description: 'Design the future with innovative solutions and hands-on learning.',
      image: '/programs-bg.png',
      href: '/programs/engineering',
    },
    {
      title: 'Biomedical Sciences',
      description: 'Advance healthcare through groundbreaking research and discovery.',
      image: '/programs-bg.png',
      href: '/programs/biomedical',
    },
    {
      title: 'Liberal Arts',
      description: 'Cultivate critical thinking and interdisciplinary knowledge.',
      image: '/programs-bg.png',
      href: '/programs/liberal-arts',
    },
    {
      title: 'Environmental Science',
      description: 'Address global environmental challenges through research and innovation.',
      image: '/programs-bg.png',
      href: '/programs/environmental',
    },
    {
      title: 'Psychology',
      description: 'Explore human behavior and mental health through advanced research.',
      image: '/programs-bg.png',
      href: '/programs/psychology',
    },
    {
      title: 'Law',
      description: 'Prepare for a career in law with expert faculty and practical experience.',
      image: '/programs-bg.png',
      href: '/programs/law',
    },
  ]

  return (
    <>
      <Navbar />

      <main className="bg-background">
        <HeroSection
          title="Our Programs"
          subtitle="Discover World-Class Academic Programs Designed for Your Success"
          backgroundImage="/programs-bg.png"
          ctas={[
            { label: 'Apply Now', href: '/admissions' },
            { label: 'Campus Tour', href: '/campus-map', variant: 'secondary' },
          ]}
        />

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explore All Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer over 200 undergraduate and graduate programs across diverse fields of study.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program, index) => (
                <ProgramCard key={index} {...program} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Program Highlights</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Flexible Learning</h3>
                <p className="text-muted-foreground">
                  Choose from full-time, part-time, online, and hybrid learning formats to fit your schedule.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Expert Faculty</h3>
                <p className="text-muted-foreground">
                  Learn from world-renowned scholars and industry leaders dedicated to your success.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Career Services</h3>
                <p className="text-muted-foreground">
                  Access internships, job placements, and career guidance throughout your academic journey.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Research Opportunities</h3>
                <p className="text-muted-foreground">
                  Participate in cutting-edge research projects with access to state-of-the-art facilities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
