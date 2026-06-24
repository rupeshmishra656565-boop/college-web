'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Search, Menu, X, GraduationCap } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const academicsMenu = [
    { label: 'All Programs', href: '/programs' },
    { label: 'Undergraduate', href: '/programs?type=undergraduate' },
    { label: 'Graduate', href: '/programs?type=graduate' },
    { label: 'Research', href: '/research' },
  ]
  const admissionsMenu = [
    { label: 'Apply Now', href: '/admissions' },
    { label: 'Admissions Process', href: '/admissions-process' },
    { label: 'Financial Aid', href: '/financial-aid' },
    { label: 'Scholarships', href: '/scholarships' },
  ]
  const aboutMenu = [
    { label: 'About Us', href: '/about' },
    { label: 'Faculty & Staff', href: '/faculty' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'Campus Map', href: '/campus-map' },
  ]

  const DropdownMenu = ({ items }: { items: typeof academicsMenu }) => (
    <div className="absolute left-0 top-full pt-3 hidden group-hover:block w-56 z-50">
      <div className="overflow-hidden rounded-xl border border-border bg-popover shadow-xl shadow-primary/10">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2.5 text-sm text-popover-foreground transition-colors hover:bg-secondary hover:text-accent"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )

  const navTextColor = isScrolled ? 'text-foreground' : 'text-background'

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground shadow-sm">
              <GraduationCap size={22} />
            </span>
            <span className="flex flex-col leading-none">
              <span className={`font-heading text-lg font-semibold tracking-tight ${navTextColor}`}>
                Aldridge
              </span>
              <span
                className={`text-[10px] font-medium uppercase tracking-[0.25em] ${
                  isScrolled ? 'text-muted-foreground' : 'text-background/70'
                }`}
              >
                University
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { label: 'Academics', items: academicsMenu },
              { label: 'Admissions', items: admissionsMenu },
              { label: 'About', items: aboutMenu },
            ].map((menu) => (
              <div key={menu.label} className="group relative px-3.5 py-2 cursor-pointer">
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent ${navTextColor}`}
                >
                  {menu.label}
                  <ChevronDown size={15} className="transition-transform group-hover:rotate-180" />
                </button>
                <DropdownMenu items={menu.items} />
              </div>
            ))}
            {['News', 'Events', 'Contact'].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                className={`px-3.5 py-2 text-sm font-medium transition-colors hover:text-accent ${navTextColor}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`rounded-full p-2 transition-colors hover:bg-foreground/10 ${navTextColor}`}
                aria-label="Search"
              >
                <Search size={19} />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-full mt-3 w-72 rounded-xl border border-border bg-popover p-3 shadow-xl">
                  <input
                    type="text"
                    placeholder="Search programs, faculty, events…"
                    className="w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              )}
            </div>
            <Link
              href="/admissions"
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-all hover:brightness-105 shadow-sm"
            >
              Apply
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden rounded-lg p-2 transition-colors hover:bg-foreground/10 ${navTextColor}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background pb-5 -mx-6 px-6">
            <div className="space-y-1 pt-3">
              {[
                { key: 'academics', label: 'Academics', items: academicsMenu },
                { key: 'admissions', label: 'Admissions', items: admissionsMenu },
                { key: 'about', label: 'About', items: aboutMenu },
              ].map((menu) => (
                <div key={menu.key}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === menu.key ? null : menu.key)}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {menu.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${activeDropdown === menu.key ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeDropdown === menu.key && (
                    <div className="space-y-1 pl-4">
                      {menu.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-accent"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {['News', 'Events', 'Contact'].map((label) => (
                <Link
                  key={label}
                  href={`/${label.toLowerCase()}`}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/admissions"
                className="mt-2 block rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
