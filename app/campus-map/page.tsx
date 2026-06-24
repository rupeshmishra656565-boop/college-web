import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HeroSection, ServiceCard } from '@/components/Cards'
import { MapPin, Utensils, Dumbbell, Building, Library, Heart } from 'lucide-react'

export const metadata = {
  title: 'Campus Map & Facilities - Premier University',
  description: 'Explore our beautiful campus and state-of-the-art facilities.',
}

export default function CampusMapPage() {
  const facilities = [
    {
      icon: <Library size={32} />,
      title: 'Main Library',
      description: 'State-of-the-art library with 2+ million books and digital resources.',
    },
    {
      icon: <Dumbbell size={32} />,
      title: 'Athletic Center',
      description: 'Olympic-standard facilities for sports training and wellness programs.',
    },
    {
      icon: <Utensils size={32} />,
      title: 'Dining Facilities',
      description: 'Multiple dining options offering diverse cuisines and dietary options.',
    },
    {
      icon: <Heart size={32} />,
      title: 'Health Center',
      description: 'Comprehensive healthcare services including emergency care.',
    },
    {
      icon: <Building size={32} />,
      title: 'Residence Halls',
      description: 'Comfortable and modern housing options for students.',
    },
    {
      icon: <MapPin size={32} />,
      title: 'Student Center',
      description: 'Hub for social activities, clubs, and student organizations.',
    },
  ]

  return (
    <>
      <Navbar />

      <main className="bg-background">
        <HeroSection
          title="Campus Map & Facilities"
          subtitle="Explore Our Beautiful 600-Acre Campus"
          backgroundImage="/campus-bg.png"
          ctas={[
            { label: 'Download Map', href: '#map' },
            { label: 'Campus Tour', href: '#tour', variant: 'secondary' },
          ]}
        />

        {/* Campus Map */}
        <section className="py-16 md:py-20 bg-white" id="map">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Interactive Campus Map</h2>

            <div className="w-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl h-96 md:h-96 flex items-center justify-center border border-border">
              <p className="text-muted-foreground text-center px-4">
                Interactive campus map will be displayed here. Use the directory to find specific buildings.
              </p>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Download PDF Map
              </a>
            </div>
          </div>
        </section>

        {/* Campus Highlights */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Campus Highlights</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <ServiceCard key={index} {...facility} />
              ))}
            </div>
          </div>
        </section>

        {/* Building Directory */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Building Directory</h2>

            <div className="space-y-3 mb-8">
              <input
                type="text"
                placeholder="Search for buildings..."
                className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { code: 'Building A', name: 'Main Academic Hall', location: 'Central Campus' },
                { code: 'Building B', name: 'Science & Engineering', location: 'North Campus' },
                { code: 'Building C', name: 'Business School', location: 'Central Campus' },
                { code: 'Building D', name: 'Student Center', location: 'Central Campus' },
                { code: 'Building E', name: 'Medical Sciences', location: 'East Campus' },
                { code: 'Building F', name: 'Arts & Humanities', location: 'West Campus' },
                { code: 'Building G', name: 'Research Center', location: 'North Campus' },
                { code: 'Building H', name: 'Library Complex', location: 'Central Campus' },
              ].map((building) => (
                <div key={building.code} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <p className="font-bold text-primary text-sm">{building.code}</p>
                  <p className="font-semibold text-foreground">{building.name}</p>
                  <p className="text-muted-foreground text-xs">{building.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Facilities Details */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Detailed Facilities Information</h2>

            <div className="space-y-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <Library className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Main Library</h3>
                    <p className="text-muted-foreground text-sm">Building A, Central Campus</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Our flagship library houses over 2 million volumes, 50,000 digital resources, and provides spaces for study, research, and collaboration.
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>Hours: 24/7 during semester</span>
                  <span>Phone: (555) 123-4567</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <Dumbbell className="text-secondary flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Athletic & Recreation Center</h3>
                    <p className="text-muted-foreground text-sm">Building C, South Campus</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Olympic-quality athletic facilities including pools, courts, tracks, fitness centers, and specialized training rooms.
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>Hours: 6 AM - 11 PM</span>
                  <span>Phone: (555) 123-4568</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <Utensils className="text-accent flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Dining Services</h3>
                    <p className="text-muted-foreground text-sm">Multiple Locations Across Campus</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Multiple dining facilities offering international cuisines, vegetarian/vegan options, and accommodations for dietary restrictions.
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>Hours: 7 AM - 10 PM</span>
                  <span>Phone: (555) 123-4569</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <Heart className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Health & Wellness Center</h3>
                    <p className="text-muted-foreground text-sm">Building D, Central Campus</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Comprehensive healthcare including emergency care, preventive health, mental health counseling, and specialized services.
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>Hours: 24/7 Emergency</span>
                  <span>Phone: (555) 123-4570</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Tour */}
        <section className="py-16 md:py-20 bg-white" id="tour">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Virtual Campus Tour</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg h-48 flex items-center justify-center border border-border">
                <p className="text-muted-foreground">Virtual Tour Preview</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Explore from Home</h3>
                <p className="text-muted-foreground mb-4">
                  Take a 360-degree virtual tour of our campus, buildings, and facilities. Visit classrooms, dormitories, research centers, and recreational areas.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm mb-4">
                  <li>• Interactive 360-degree views</li>
                  <li>• Guided tours with commentary</li>
                  <li>• Information about each building</li>
                  <li>• Student testimonials</li>
                </ul>
                <a
                  href="#"
                  className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Start Virtual Tour
                </a>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-6 text-center">
              <h3 className="font-bold text-foreground mb-3">Schedule an In-Person Tour</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Experience our campus firsthand. Guided in-person tours are available daily.
              </p>
              <a
                href="/admissions"
                className="inline-block px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg font-semibold text-sm"
              >
                Book Campus Tour
              </a>
            </div>
          </div>
        </section>

        {/* Transportation */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Getting Around Campus</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Campus Shuttle</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Free shuttle service connecting all major campus locations. Runs every 15 minutes.
                </p>
                <p className="text-muted-foreground text-xs">Hours: 7 AM - 11 PM</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Bike Share Program</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Enjoy our eco-friendly bike share program with 200+ bikes across campus.
                </p>
                <p className="text-muted-foreground text-xs">Available 24/7</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Parking</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Multiple parking facilities with permits available for faculty, staff, and students.
                </p>
                <p className="text-muted-foreground text-xs">Permit required</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
