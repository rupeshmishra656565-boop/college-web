import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HeroSection, EventCard } from '@/components/Cards'
import { Calendar } from 'lucide-react'

export const metadata = {
  title: 'Events - Premier University',
  description: 'Explore upcoming events, campus tours, and activities at Premier University.',
}

export default function EventsPage() {
  const events = [
    {
      title: 'Campus Tour',
      date: 'December 3, 2024',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Campus, Building A',
      image: '/campus-bg.png',
      href: '/events/campus-tour',
    },
    {
      title: 'Admissions Information Session',
      date: 'December 5, 2024',
      time: '2:00 PM - 3:30 PM',
      location: 'Virtual',
      image: '/campus-bg.png',
      href: '/events/info-session',
    },
    {
      title: 'Annual Research Symposium',
      date: 'December 10, 2024',
      time: '1:00 PM - 5:00 PM',
      location: 'Convention Center',
      image: '/research-bg.png',
      href: '/events/research-symposium',
    },
    {
      title: 'Winter Career Fair',
      date: 'December 12, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Student Center',
      image: '/programs-bg.png',
      href: '/events/career-fair',
    },
    {
      title: 'Faculty Lecture: Innovation & Entrepreneurship',
      date: 'December 15, 2024',
      time: '6:00 PM - 7:30 PM',
      location: 'Auditorium',
      image: '/programs-bg.png',
      href: '/events/faculty-lecture',
    },
    {
      title: 'Student Showcase & Exhibition',
      date: 'December 18, 2024',
      time: '11:00 AM - 3:00 PM',
      location: 'Main Quad',
      image: '/campus-bg.png',
      href: '/events/student-showcase',
    },
  ]

  const upcomingMonths = ['December 2024', 'January 2025', 'February 2025']

  return (
    <>
      <Navbar />

      <main className="bg-background">
        <HeroSection
          title="Upcoming Events"
          subtitle="Join Us for Exciting Campus Events and Activities"
          backgroundImage="/campus-bg.png"
          ctas={[
            { label: 'View All Events', href: '#events' },
            { label: 'Campus Tour', href: '/events/campus-tour', variant: 'secondary' },
          ]}
        />

        {/* Events Calendar */}
        <section className="py-12 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">Filter by Month</h3>
                <div className="flex gap-2">
                  {upcomingMonths.map((month) => (
                    <button
                      key={month}
                      className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-sm"
                    >
                      {month}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-semibold">
                  List View
                </button>
                <button className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-background transition-colors text-sm font-semibold">
                  Calendar View
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 md:py-20" id="events">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Events</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our exciting lineup of events including campus tours, information sessions, and special presentations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Event Categories</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Calendar className="text-primary mb-3" size={32} />
                <h3 className="font-bold text-foreground mb-2">Campus Tours</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Explore our beautiful campus and facilities with guided tours.
                </p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">
                  View Tours
                </a>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Calendar className="text-secondary mb-3" size={32} />
                <h3 className="font-bold text-foreground mb-2">Admissions</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Attend information sessions and speak with admissions counselors.
                </p>
                <a href="#" className="text-secondary font-semibold text-sm hover:underline">
                  View Sessions
                </a>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Calendar className="text-accent mb-3" size={32} />
                <h3 className="font-bold text-foreground mb-2">Academic</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Symposiums, lectures, and showcases featuring academic excellence.
                </p>
                <a href="#" className="text-accent font-semibold text-sm hover:underline">
                  View Events
                </a>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Calendar className="text-primary mb-3" size={32} />
                <h3 className="font-bold text-foreground mb-2">Student Life</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Celebrations, fairs, and social events throughout the year.
                </p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">
                  View Events
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule a Campus Visit</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Experience Premier University firsthand. Sign up for a personalized campus tour today.
            </p>

            <a
              href="/admissions"
              className="inline-block px-8 py-3 bg-accent text-primary rounded-lg hover:bg-accent/90 transition-colors font-bold"
            >
              Book Your Tour
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
