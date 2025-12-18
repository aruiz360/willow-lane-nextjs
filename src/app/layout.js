'use client'

import { useState } from 'react'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { GoogleAnalytics } from "nextjs-google-analytics";

// Navigation Items Component
const NavItems = ({ mobile }) => (
  <>
    <li className="mb-5 xl:mb-0">
      <Link href="/" className="whitespace-nowrap xl:text-[1.4rem] text-[1.3rem]">HOME</Link>
    </li>
    <li className="mb-5 xl:mb-0">
      <Link href="/investor-relations" className="whitespace-nowrap xl:text-[1.4rem] text-[1.3rem]">INVESTOR RELATIONS</Link>
    </li>
    <li className="mb-5 xl:mb-0">
      <Link href="/#governance" className="whitespace-nowrap xl:text-[1.4rem] text-[1.3rem]">GOVERNANCE DOCUMENTS</Link>
    </li>
    <li className="mb-5 xl:mb-0">
      <Link href="/#team" className="whitespace-nowrap xl:text-[1.4rem] text-[1.3rem]">OUR TEAM</Link>
    </li>
    <li className="mb-5 xl:mb-0">
      <Link href="/#disclaimer" className="whitespace-nowrap xl:text-[1.4rem] text-[1.3rem]">DISCLAIMER</Link>
    </li>
  </>
)

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <html lang="en" >
      <head>
        <GoogleAnalytics trackPageViews gaMeasurementId="G-CPNPD7RYR3" />
      </head>
      <body className="flex flex-col min-h-screen bg-white font-source-sans">
        <div id="app-root">
          <header className="w-full bg-white border-b border-primary">
            <nav className="container mx-auto">
              <div className="flex justify-between lg:justify-start px-4 lg:px-2 gap-24 items-center h-[120px] lg:h-[160px]">
                {/* Logo */}
                <Link href="/" className="relative">
                  <div className="relative w-[200px] md:w-[280px] aspect-[16/9]">
                    <Image
                      src="/logo_sin_margenes.png"
                      alt="Company Logo"
                      fill
                      sizes="(max-width: 768px) 160px, 220px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden xl:flex xl:flex-wrap items-center gap-4 text-heading w-full justify-between font-haboro text-primary">
                  <NavItems />
                </ul>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="xl:hidden px-2 text-primary ml-auto"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="w-6 h-6" />
                  ) : (
                    <Bars3Icon className="w-6 h-6" />
                  )}
                </button>
              </div>

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="xl:hidden bg-white border-t">
                  <ul className="flex flex-col py-5 px-4 font-haboro text-heading-mobile text-primary">
                    <NavItems mobile={true} />
                  </ul>
                </div>
              )}
            </nav>
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer className="bg-white text-primary border-t border-primary border-t-2">
            <div className="container mx-auto py-8 flex items-center justify-between flex-col md:flex-row md:justify-between">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-right">
                  <p className="font-haboro uppercase text-heading-mobile md:text-heading mb-2">Contact Information:</p>
                  <p className="flex flex-colitems-center justify-center md:justify-start mb-1 font-source-sans">
                    <span className="text-contact-mobile md:text-contact">(646) 565-3861</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start font-source-sans text-contact-mobile md:text-contact">
                    <a href="mailto:info@willowac.com" className="hover:underline">info@willowac.com</a>
                  </p>
                </div>
              </div>
              <Image src="/logo_nav.png" alt="Company Logo" width={250} height={200} className="logo-footer hidden md:block" />
              <Image src="/logo_nav.png" alt="Company Logo" width={180} height={100} className="logo-footer block md:hidden mt-6" />
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
