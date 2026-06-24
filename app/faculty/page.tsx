import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HeroSection, FacultyCard } from '@/components/Cards'
import { Mail, Phone, Globe } from 'lucide-react'

export const metadata = {
  title: 'Faculty Directory - Premier University',
  description: 'Meet our world-class faculty members and researchers.',
}

export default function FacultyPage() {
  const faculty = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Professor of Computer Science',
      department: 'School of Engineering',
      image: '/programs-bg.png',
      href: '/faculty/sarah-chen',
    },
    {
      name: 'Dr. James Williams',
      title: 'Professor of Business Strategy',
      department: 'School of Business',
      image: '/programs-bg.png',
      href: '/faculty/james-williams',
    },
    {
      name: 'Dr. Maria Rodriguez',
      title: 'Associate Professor of Biomedical Science',
      department: 'School of Medicine',
      image: '/programs-bg.png',
      href: '/faculty/maria-rodriguez',
    },
    {
      name: 'Dr. Ahmed Hassan',
      title: 'Professor of Environmental Science',
      department: 'School of Science',
      image: '/programs-bg.png',
      href: '/faculty/ahmed-hassan',
    },
    {
      name: 'Dr. Emily Zhang',
      title: 'Associate Professor of Psychology',
      department: 'School of Social Sciences',
      image: '/programs-bg.png',
      href: '/faculty/emily-zhang',
    },
    {
      name: 'Dr. Robert Johnson',
      title: 'Professor of Law and Policy',
      department: 'School of Law',
      image: '/programs-bg.png',
      href: '/faculty/robert-johnson',
    },
    {
      name: 'Dr. Lisa Park',
      title: 'Professor of Literature and Languages',
      department: 'School of Arts',
      image: '/programs-bg.png',
      href: '/faculty/lisa-park',
    },
    {
      name: 'Dr. Michael Kumar',
      title: 'Associate Professor of Physics',
      department: 'School of Science',
      image: '/programs-bg.png',
      href: '/faculty/michael-kumar',
    },
    {
      name: 'Dr. Jennifer Martinez',
      title: 'Professor of Education',
      department: 'School of Education',
      image: '/programs-bg.png',
      href: '/faculty/jennifer-martinez',
    },
  ]

  const departments = [
    'School of Engineering',
    'School of Business',
    'School of Medicine',
    'School of Science',
    'School of Social Sciences',
    'School of Law',
    'School of Arts',
    'School of Education',
  ]

  return (
    <>
      <Navbar />

      <main className="bg-background">
        <HeroSection
          title="Faculty & Staff"
          subtitle="Meet Our World-Class Scholars and Educators"
          backgroundImage="/hero-bg.png"
          ctas={[
            { label: 'Contact Faculty', href: '#directory' },
            { label: 'Learn More', href: '/about', variant: 'secondary' },
          ]}
        />

        {/* Faculty Search and Filter */}
        <section className="py-12 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <input
                type="text"
                placeholder="Search faculty by name..."
                className="flex-1 px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <select className="px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Departments</option>
                {departments.map((dept) => (
                  <option key={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Faculty Directory */}
        <section className="py-16 md:py-20" id="directory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faculty.map((member, index) => (
                <FacultyCard key={index} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Information */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">About Our Faculty</h2>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Our faculty members are accomplished scholars, researchers, and educators from around the world.
                They bring diverse perspectives and extensive expertise to their teaching and mentoring.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background border border-border rounded-lg p-6">
                  <p className="text-3xl font-bold text-primary mb-2">850+</p>
                  <p className="text-muted-foreground">Full-time Faculty Members</p>
                </div>

                <div className="bg-background border border-border rounded-lg p-6">
                  <p className="text-3xl font-bold text-secondary mb-2">92%</p>
                  <p className="text-muted-foreground">Hold Terminal Degrees</p>
                </div>

                <div className="bg-background border border-border rounded-lg p-6">
                  <p className="text-3xl font-bold text-accent mb-2">45</p>
                  <p className="text-muted-foreground">Countries Represented</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Faculty Commitments</h3>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Dedicated mentorship and guidance for students at all levels
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Cutting-edge research and scholarly pursuits</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Accessible office hours and academic advising</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">Innovation in teaching methods and curriculum</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Leadership in academic and professional communities
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Faculty */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Get in Touch</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center">
                <Mail className="text-primary mb-3" size={32} />
                <h3 className="font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">faculty@premiereuniversity.edu</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center">
                <Phone className="text-secondary mb-3" size={32} />
                <h3 className="font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">(555) 123-4567 Ext. 5000</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center">
                <Globe className="text-accent mb-3" size={32} />
                <h3 className="font-bold text-foreground mb-2">Office</h3>
                <p className="text-muted-foreground text-sm">Academic Building, Room 201</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
