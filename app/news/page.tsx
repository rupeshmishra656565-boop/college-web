import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HeroSection, NewsCard } from '@/components/Cards'

export const metadata = {
  title: 'News & Stories - Premier University',
  description: 'Stay updated with the latest news and stories from Premier University.',
}

export default function NewsPage() {
  const allNews = [
    {
      title: 'New $50M Research Center Opens',
      excerpt: 'Premier University inaugurates state-of-the-art research facility for sustainable energy.',
      date: 'November 15, 2024',
      category: 'Research',
      image: '/research-bg.png',
      href: '/news/research-center',
    },
    {
      title: 'Student Team Wins International Competition',
      excerpt: 'Our engineering students take first place at the Global Innovation Summit.',
      date: 'November 10, 2024',
      category: 'Achievement',
      image: '/programs-bg.png',
      href: '/news/competition-win',
    },
    {
      title: 'Campus Sustainability Initiative Launched',
      excerpt: 'University commits to carbon neutrality by 2030 with new green initiatives.',
      date: 'November 5, 2024',
      category: 'Sustainability',
      image: '/campus-bg.png',
      href: '/news/sustainability',
    },
    {
      title: 'Distinguished Alumni Returns as Guest Lecturer',
      excerpt: 'Tech industry pioneer shares insights on innovation and entrepreneurship.',
      date: 'October 28, 2024',
      category: 'Alumni',
      image: '/programs-bg.png',
      href: '/news/alumni-lecture',
    },
    {
      title: 'New Scholarship Program Expands Access',
      excerpt: '100 additional full-ride scholarships now available for underrepresented students.',
      date: 'October 20, 2024',
      category: 'Scholarships',
      image: '/campus-bg.png',
      href: '/news/scholarship-program',
    },
    {
      title: 'Faculty Publication Recognized Internationally',
      excerpt: 'Groundbreaking research on climate change featured in top-tier journals.',
      date: 'October 15, 2024',
      category: 'Research',
      image: '/research-bg.png',
      href: '/news/faculty-publication',
    },
  ]

  return (
    <>
      <Navbar />

      <main className="bg-background">
        <HeroSection
          title="News & Stories"
          subtitle="Latest Updates from Premier University"
          backgroundImage="/programs-bg.png"
          ctas={[
            { label: 'Subscribe', href: '#newsletter' },
            { label: 'All Stories', href: '#news', variant: 'secondary' },
          ]}
        />

        {/* News Grid */}
        <section className="py-16 md:py-20" id="news">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover what&apos;s happening at Premier University and stay informed about our latest achievements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allNews.map((article, index) => (
                <NewsCard key={index} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 md:py-20 bg-white" id="newsletter">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-primary-foreground/90 mb-6">
                Subscribe to our newsletter to receive the latest news, updates, and stories from Premier University.
              </p>

              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent text-primary rounded-lg hover:bg-accent/90 transition-colors font-semibold whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-primary-foreground/70 text-xs mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Browse by Category</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Research', 'Achievement', 'Sustainability', 'Alumni', 'Scholarships', 'Events'].map((category) => (
                <button
                  key={category}
                  className="px-4 py-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium text-foreground"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
