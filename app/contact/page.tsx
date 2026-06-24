import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HeroSection, ServiceCard } from '@/components/Cards'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - Premier University',
  description: 'Get in touch with Premier University. We&apos;re here to help and answer any questions.',
}

export default function ContactPage() {
  const departments = [
    {
      name: 'Admissions',
      email: 'admissions@premiereuniversity.edu',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri: 9 AM - 5 PM',
    },
    {
      name: 'Academic Affairs',
      email: 'academic@premiereuniversity.edu',
      phone: '(555) 123-4568',
      hours: 'Mon-Fri: 8 AM - 6 PM',
    },
    {
      name: 'Student Services',
      email: 'students@premiereuniversity.edu',
      phone: '(555) 123-4569',
      hours: 'Mon-Fri: 8 AM - 5 PM',
    },
    {
      name: 'Financial Aid',
      email: 'financialaid@premiereuniversity.edu',
      phone: '(555) 123-4570',
      hours: 'Mon-Fri: 9 AM - 5 PM',
    },
  ]

  return (
    <>
      <Navbar />

      <main className="bg-background">
        <HeroSection
          title="Contact Premier University"
          subtitle="We're Here to Help and Answer Your Questions"
          backgroundImage="/hero-bg.png"
          ctas={[
            { label: 'Send Message', href: '#contact-form' },
            { label: 'Call Us', href: 'tel:+15551234567', variant: 'secondary' },
          ]}
        />

        {/* Quick Contact */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={<Phone size={32} />}
                title="Call Us"
                description="Main Office: (555) 123-4567 Ext. 5000"
              />
              <ServiceCard
                icon={<Mail size={32} />}
                title="Email Us"
                description="General: info@premiereuniversity.edu"
              />
              <ServiceCard
                icon={<MapPin size={32} />}
                title="Visit Us"
                description="123 University Drive, City, State 12345"
              />
              <ServiceCard
                icon={<Clock size={32} />}
                title="Hours"
                description="Mon-Fri: 8 AM - 6 PM, Sat: 10 AM - 2 PM"
              />
            </div>
          </div>
        </section>

        {/* Department Directory */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Department Directory</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept) => (
                <div key={dept.name} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-foreground mb-4">{dept.name}</h3>

                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold">Email</p>
                        <a href={`mailto:${dept.email}`} className="text-primary hover:underline">
                          {dept.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Phone size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold">Phone</p>
                        <a href={`tel:${dept.phone}`} className="text-secondary hover:underline">
                          {dept.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Clock size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold">Hours</p>
                        <p className="text-foreground">{dept.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-20 bg-white" id="contact-form">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <select className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Select a subject</option>
                    <option>Admissions Inquiry</option>
                    <option>Academic Programs</option>
                    <option>Financial Aid</option>
                    <option>Campus Visit</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Visit Our Campus</h2>

            <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl h-96 flex items-center justify-center border border-border mb-8">
              <p className="text-muted-foreground">Interactive Map - Coming Soon</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Main Campus Address</h3>
              <div className="space-y-2">
                <p className="text-foreground font-semibold">Premier University</p>
                <p className="text-muted-foreground">123 University Drive</p>
                <p className="text-muted-foreground">City, State 12345</p>
                <p className="text-muted-foreground">United States</p>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-accent font-semibold mb-2">Parking Information</p>
                  <p className="text-muted-foreground text-sm">
                    Visitor parking is available in Lot C. Please display a visitor parking pass on your dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">What are the best times to contact the admissions office?</h3>
                <p className="text-muted-foreground text-sm">
                  We're available Monday through Friday, 9 AM to 5 PM. We may have limited hours during holidays.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">How long does it take to get a response?</h3>
                <p className="text-muted-foreground text-sm">
                  We typically respond to all inquiries within 24-48 hours during business days.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">Can I schedule a campus tour?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! You can schedule a tour through our admissions office or book it online at /events/campus-tour.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">What if I have an emergency?</h3>
                <p className="text-muted-foreground text-sm">
                  In case of emergency, please call campus security at (555) 999-911 or go to the nearest emergency station.
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
