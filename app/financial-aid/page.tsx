import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HeroSection, ServiceCard } from '@/components/Cards'
import { DollarSign, Heart, TrendingUp, Award } from 'lucide-react'

export const metadata = {
  title: 'Financial Aid - Premier University',
  description: 'Explore financial aid options, scholarships, and financing plans for your education.',
}

export default function FinancialAidPage() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        <HeroSection
          title="Financial Aid & Scholarships"
          subtitle="Making Premium Education Accessible and Affordable"
          backgroundImage="/hero-bg.png"
          ctas={[
            { label: 'Apply for Aid', href: '#aid-types' },
            { label: 'View Scholarships', href: '#scholarships', variant: 'secondary' },
          ]}
        />

        {/* Aid Overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Financial Aid Overview</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe finances should never be a barrier to quality education. Our comprehensive aid packages support students from all backgrounds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <ServiceCard
                icon={<DollarSign size={32} />}
                title="Grants & Scholarships"
                description="Non-repayable aid based on merit and financial need."
              />
              <ServiceCard
                icon={<Heart size={32} />}
                title="Loans"
                description="Flexible borrowing options with competitive interest rates."
              />
              <ServiceCard
                icon={<Award size={32} />}
                title="Work-Study"
                description="Earn while you learn with on-campus employment opportunities."
              />
              <ServiceCard
                icon={<TrendingUp size={32} />}
                title="Employer Plans"
                description="Professional development and employer-sponsored assistance."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-lg p-6">
                <p className="text-3xl font-bold text-primary mb-2">$150M</p>
                <p className="text-muted-foreground">Annual Aid Distributed</p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <p className="text-3xl font-bold text-secondary mb-2">85%</p>
                <p className="text-muted-foreground">Students Receiving Aid</p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <p className="text-3xl font-bold text-accent mb-2">$28K</p>
                <p className="text-muted-foreground">Average Aid Package</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Aid */}
        <section className="py-16 md:py-20 bg-background" id="aid-types">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Types of Financial Aid</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Merit Scholarships</h3>
                <p className="text-muted-foreground mb-3">
                  Awarded based on academic achievement, test scores, and extracurricular accomplishments.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Presidential Scholarship: Full tuition + room & board</li>
                  <li>• Honors Scholarship: 75% of tuition</li>
                  <li>• Dean&apos;s Scholarship: 50% of tuition</li>
                </ul>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Need-Based Grants</h3>
                <p className="text-muted-foreground mb-3">
                  Determined through FAFSA analysis. Grants do not require repayment.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Federal Pell Grants</li>
                  <li>• University Need-Based Grants</li>
                  <li>• State Grant Programs</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Loans</h3>
                <p className="text-muted-foreground mb-3">
                  Borrowing options with flexible repayment schedules after graduation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Federal Stafford Loans (3.5% interest rate)</li>
                  <li>• Parent PLUS Loans</li>
                  <li>• Alternative Education Loans</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Work-Study</h3>
                <p className="text-muted-foreground mb-3">
                  Part-time employment on campus while pursuing your education.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Flexible hourly positions ($17-20/hour)</li>
                  <li>• Career-relevant experience</li>
                  <li>• Up to 20 hours per week during school</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="py-16 md:py-20 bg-white" id="scholarships">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Featured Scholarships</h2>

            <div className="space-y-4">
              <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-foreground text-lg">Merit Excellence Scholarship</h3>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    $50,000/year
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">
                  Awarded to students with exceptional academic records and test scores.
                </p>
                <p className="text-muted-foreground text-xs">Deadline: January 15, 2025</p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-foreground text-lg">Diversity Leadership Scholarship</h3>
                  <span className="px-3 py-1 bg-secondary text-primary-foreground text-xs font-bold rounded-full">
                    $35,000/year
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">
                  Supporting underrepresented students with demonstrated leadership.
                </p>
                <p className="text-muted-foreground text-xs">Deadline: February 1, 2025</p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-foreground text-lg">STEM Excellence Grant</h3>
                  <span className="px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full">
                    $40,000/year
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">
                  For students pursuing degrees in Science, Technology, Engineering, and Mathematics.
                </p>
                <p className="text-muted-foreground text-xs">Deadline: February 15, 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Financial Aid Application Process</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Complete the FAFSA</h3>
                  <p className="text-muted-foreground text-sm">
                    Submit your Free Application for Federal Student Aid (FAFSA) by February 1, 2025.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Submit CSS Profile (if required)</h3>
                  <p className="text-muted-foreground text-sm">
                    International students and those applying to specific programs must complete the CSS Profile.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Receive Your Aid Notification</h3>
                  <p className="text-muted-foreground text-sm">
                    Your personalized financial aid offer will be sent by April 1, 2025.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Accept Your Award</h3>
                  <p className="text-muted-foreground text-sm">
                    Accept your aid package through your student portal. You can decline or request adjustments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">Do I need to repay grants?</h3>
                <p className="text-muted-foreground text-sm">
                  No, grants and scholarships do not need to be repaid. They are considered &quot;free&quot; aid.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">What if my family&apos;s financial situation changes?</h3>
                <p className="text-muted-foreground text-sm">
                  Contact our financial aid office immediately. You may be eligible for additional aid through an appeal.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">Are international students eligible for aid?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we offer merit-based scholarships and some need-based aid for qualified international students.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">When do I need to apply for financial aid?</h3>
                <p className="text-muted-foreground text-sm">
                  The FAFSA deadline is February 1 for priority consideration. We process applications on a rolling basis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Financial Aid?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Our financial aid advisors are here to help. Schedule a consultation today.
            </p>

            <a
              href="mailto:financialaid@premiereuniversity.edu"
              className="inline-block px-8 py-3 bg-accent text-primary rounded-lg hover:bg-accent/90 transition-colors font-bold"
            >
              Contact Financial Aid Office
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
