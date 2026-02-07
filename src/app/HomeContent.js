'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TeamAccordion from './components/TeamAccordion'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

// Data
import companies from './data/companies'

const CompanyCard = ({ name, logo }) => (
  <div className="aspect-[4/2] relative flex w-full md:w-auto md:flex-1 items-center justify-center">
    <Image
      src={logo}
      alt={`${name} logo`}
      width={800}
      height={314}
      className="object-contain past-transaction"
      priority
    />
  </div>
);

function PastTransactions() {
  return (
    <section className="relative overflow-hidden">
      <div className='container mx-auto py-8 lg:py-16 px-4 lg:px-0'>
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-heading-mobile md:text-heading-lg font-arsenal font-thin text-primary mb-4">PAST TRANSACTIONS</h2>
        </div>

        <div className="relative mx-auto">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-8 px-16 lg:px-0">
            {companies.map((company) => (
              <CompanyCard
                key={company.name}
                name={company.name}
                logo={company.logo}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

const FinanceLink = ({title}) => (
  <div className="flex flex-col md:flex-row justify-between items-center border-primary border-b pb-4 pt-4">
    <div>
      <p className="text-body-mobile md:text-body text-primary font-thin">
        {title}
      </p>
    </div>
    <div className="mt-4 md:mt-0 hidden lg:block">
      <span className="inline-flex items-center text-primary transition-colors duration-200 font-medium">
        <ChevronRightIcon className="w-4 h-4 lg:w-8 lg:h-8" />
      </span>
    </div>
  </div>
);

const GovernanceDocument = ({ title, pdfUrl }) => (
  <div className="text-primary border-gray-light border-b pb-4">
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between items-center"
    >
      <span className="text-body-mobile md:text-body text-gray-light font-thin">{title}</span>
      <ChevronDownIcon className="w-4 h-4 lg:w-14 lg:h-14 text-gray-light hover:text-gray-400 [stroke-width:1]" />
    </a>
  </div>
);

export default function Home() {
  // Add scroll handling for hash links
  useEffect(() => {
    // Check if there's a hash in the URL when the component mounts
    if (window.location.hash === '#governance') {
      const element = document.getElementById('governance')
      if (element) {
        // Add a slight delay to ensure smooth scrolling after page load
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary px-4 lg:px-0">
        <div className="container mx-auto py-8 lg:py-16">
          <div className="grid grid-cols-1 items-center">
            {/* Left Column (Content) */}
            <div className="order-1 space-y-6 text-left">
              <h1 className="text-heading-mobile md:text-heading uppercase font-arsenal pb-3 text-gray-light">
                {"WILLOW LANE ACQUISITION CORPORATION II"}
              </h1>
              <p className="text-body-mobile md:text-body font-light !mt-0 text-gray-light">
                {"is a blank check company formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination with one or more businesses."}
              </p>
              <br />
              <p className="text-body-mobile md:text-body font-light !mt-0 text-gray-light">
                {"We have collectively identified and closed six SPAC business combinations, creating value for shareholders. We intend to focus on businesses with valuations above $400 million with positive EBITDA, sustainable cash flow, and experienced management teams."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <PastTransactions />

      {/* Team Accordion Section */}
      <section id="team" className="relative bg-primary">
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-heading-mobile md:text-heading-lg text-gray-light font-arsenal mb-4">OUR TEAM</h2>
          </div>
          <TeamAccordion />
        </div>
      </section>

      {/* Investor Relations Section - Modernized */}
      <section id="ir-home" className="bg-white">
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-heading-mobile md:text-heading-lg font-arsenal text-primary mb-4">INVESTOR RELATIONS</h2>
          </div>

          <Link
            href="https://www.sec.gov/edgar/browse/?CIK=2083946&owner=exclude" target='_blank'
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-primary pb-4">
              <h3 className="text-heading-mobile md:text-heading font-arsenal mb-2 uppercase">
                Access Financial Information
              </h3>
            </div>
            <FinanceLink title="View SEC fillings for Willow Lane Acquisition Corp II" />
          </Link>
        </div>
      </section>

      {/* Governance Documents Section */}
      <section id="governance" className="bg-primary text-gray-light pb-5">
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-heading-mobile md:text-heading-lg font-arsenal text-gray-light mb-4">GOVERNANCE DOCUMENTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-4">
            <GovernanceDocument
              title="Regulation FD Policy"
              pdfUrl="/documents/Willow Lane - Regulation FD Policy.pdf"
            />
            <GovernanceDocument
              title="Related Person Transactions Policy"
              pdfUrl="/documents/Willow Lane - Related Person Transactions Policy.pdf"
            />
            <GovernanceDocument
              title="Clawback Compensation Policy"
              pdfUrl="/documents/Willow Lane - Clawback Compensation Policy.pdf"
            />
            <GovernanceDocument
              title="Insider Trading Policy"
              pdfUrl="/documents/Willow Lane - Insider Trading Policy.pdf"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
