import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HeroSection } from '@/components/Cards'
import { CheckCircle, Users, Calendar, FileText } from 'lucide-react'

export const metadata = {
  title: 'Admissions - Premier University',
  description: 'Apply to Premier University and start your journey today.',
}

export default function AdmissionsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        <HeroSection
          title="Start Your Journey"
          subtitle="Join Our Community of Scholars and Innovators"
          backgroundImage="/hero-bg.png"
          ctas={[
            { label: 'Apply Now', href: '#apply' },
            { label: 'Request Info', href: '#request-info', variant: 'secondary' },
          ]}
        />

        {/* Application Requirements */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Application Requirements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Transcripts</h3>
                    <p className="text-muted-foreground text-sm">Official high school or college transcripts</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Test Scores</h3>
                    <p className="text-muted-foreground text-sm">SAT or ACT scores (optional for some programs)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Essay</h3>
                    <p className="text-muted-foreground text-sm">Personal statement (500-750 words)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Recommendations</h3>
                    <p className="text-muted-foreground text-sm">2-3 letters from teachers or counselors</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Interview</h3>
                    <p className="text-muted-foreground text-sm">Optional but recommended interview</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Application Fee</h3>
                    <p className="text-muted-foreground text-sm">$75 (waived for select applicants)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Important Dates</h2>

            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-card border border-border rounded-lg p-6">
                <Calendar className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-foreground">November 1, 2024</p>
                  <p className="text-muted-foreground text-sm">Early Decision Application Deadline</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-card border border-border rounded-lg p-6">
                <Calendar className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-foreground">January 15, 2025</p>
                  <p className="text-muted-foreground text-sm">Regular Decision Application Deadline</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-card border border-border rounded-lg p-6">
                <Calendar className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-foreground">February 1, 2025</p>
                  <p className="text-muted-foreground text-sm">Financial Aid Application Deadline (FAFSA)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-card border border-border rounded-lg p-6">
                <Calendar className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-foreground">April 1, 2025</p>
                  <p className="text-muted-foreground text-sm">Admission Decision Notification Date</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Statistics */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Class Profile</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">3.8</p>
                <p className="text-muted-foreground text-sm">Average GPA</p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-secondary mb-2">1520</p>
                <p className="text-muted-foreground text-sm">Average SAT Score</p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-accent mb-2">15%</p>
                <p className="text-muted-foreground text-sm">Acceptance Rate</p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">48</p>
                <p className="text-muted-foreground text-sm">States Represented</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 md:py-20 bg-background" id="apply">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Ready to Apply?</h2>
            <p className="text-muted-foreground mb-8">
              Submit your application through our online portal. It takes just 15 minutes to get started.
            </p>

            <div className="bg-card border border-border rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Program of Interest</label>
                  <select className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Select a program</option>
                    <option>Computer Science</option>
                    <option>Business Administration</option>
                    <option>Engineering</option>
                    <option>Biomedical Sciences</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Personal Statement</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Start Your Application
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">What is your application fee?</h3>
                <p className="text-muted-foreground text-sm">
                  The application fee is $75. We offer fee waivers for students with demonstrated financial need.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">Do you require SAT/ACT scores?</h3>
                <p className="text-muted-foreground text-sm">
                  Test scores are optional for most programs. However, submitting scores can strengthen your application.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">How long does the application process take?</h3>
                <p className="text-muted-foreground text-sm">
                  We typically review applications within 4-6 weeks of the application deadline.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">Can I apply for multiple programs?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, you can apply to multiple programs. Each program requires a separate application.
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
