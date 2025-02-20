'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TeamAccordion from './components/TeamAccordion'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const CompanyCard = ({ name, logo }) => (
  <div className="aspect-[3/2] relative flex w-full md:w-auto md:flex-1 items-center justify-center">
    <Image
      src={logo}
      alt={`${name} logo`}
      fill
      className="object-contain"
      priority
    />
  </div>
);

const companies = [
  {
    name: 'TECNOGLASS',
    logo: '/company-logos/tecnoglass-1.png'
  },
  {
    name: 'INSPIRED',
    logo: '/company-logos/inspired.png'
  },
  {
    name: 'LAZYDAYS RV',
    logo: '/company-logos/lazydays.png'
  },
  {
    name: 'STRYVE',
    logo: '/company-logos/stryve.png'
  },
  {
    name: 'ENSYSCE',
    logo: '/company-logos/ensysce.png'
  }
];

function PastPerformanceSection() {
  return (
    <section className="relative overflow-hidden">
      <div className='container mx-auto py-8 lg:py-16 px-4 lg:px-0'>
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-heading-mobile md:text-heading-lg font-haboro font-thin text-primary mb-4">PAST TRANSACTIONS</h2>
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

// Add new component for governance documents
const GovernanceDocument = ({ title, pdfUrl }) => (
  <div className="text-gray-light border-gray-light border-b pb-4">
    <a 
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between items-center"
    >
      <span className="text-doc-mobile md:text-doc text-gray-light font-thin uppercase">{title}</span>
      <ChevronDownIcon className="w-4 h-4 lg:w-14 lg:h-14 text-gray-light [stroke-width:1]" />
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
        {/* Background Icon */}
        <div className='container mx-auto py-8 lg:py-16 relative'>
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
              <Image
                src="/logo_hero.png"
                alt="Decorative background"
                width={450}
                height={550}
                priority
              />
            </div>
            {/* Content */}
            
            <div className="w-full md:w-3/5 text-left md:text-left space-y-6 relative z-10">
              <h1 className="text-heading-mobile md:text-heading uppercase font-haboro text-gray-light">
                Willow Lane Acquisition Corporation
              </h1>
              <p className="text-body-mobile md:text-body font-light !mt-0 text-gray-light">
                is a blank check company formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination with one or more businesses.
              </p>
              <p className="text-body-mobile md:text-body font-light text-gray-light">
                Our team has broad sector knowledge and brings a combination of operating, investing, financial and transactional experience. 
              </p>
              <p className="text-body-mobile md:text-body font-light text-gray-light">
                We have collectively identified and closed five SPAC business combinations, creating value for shareholders. We intend to focus on businesses with valuations of at least $500 million with positive EBITDA, sustainable cash flow, and experienced management teams.
              </p>
            </div>
            

        </div>

      </section>

      <PastPerformanceSection />

      {/* Team Accordion Section */}
      <section id="team" className="relative bg-primary">
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-heading-mobile md:text-heading-lg text-gray-light font-haboro mb-4">OUR TEAM</h2>
          </div>
          <TeamAccordion /> 
        </div>
      </section>

      {/* Investor Relations Section - Modernized */}
      <section className="bg-white">
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-heading-mobile md:text-heading-lg font-haboro text-primary mb-4">INVESTOR RELATIONS</h2>
          </div>
          
          <Link 
            href="/investor-relations" 
          >
            <div className="flex flex-col md:flex-row justify-between items-center border-primary border-b pb-4">
              <div>
                <h3 className="text-heading-mobile md:text-heading font-haboro text-gray-dark mb-2 uppercase">
                  Access Financial Information
                </h3>
                <p className="text-body-mobile md:text-body text-gray-dark font-thin">
                    View SEC fillings for WILLOW LANE ACQUISITION CORPORATION
                </p>
              </div>
              <div className="mt-4 md:mt-0 hidden lg:block">
                <span className="inline-flex items-center text-gray-800 hover:text-primary transition-colors duration-200 font-medium">
                  <ChevronRightIcon className="w-4 h-4 lg:w-8 lg:h-8" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Governance Documents Section */}
      <section id="governance" className=" bg-primary text-gray-light">
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-heading-mobile md:text-heading-lg font-haboro text-gray-light mb-4">GOVERNANCE DOCUMENTS</h2>
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
            <GovernanceDocument 
              title="Code of Ethics" 
              pdfUrl="/documents/Willow Lane - Code of Ethics.pdf" 
            />
            <GovernanceDocument 
              title="Compensation Committee Charter" 
              pdfUrl="/documents/Willow Lane - Compensation Committee Charter.pdf" 
            />
            <GovernanceDocument 
              title="Audit Committee Charter" 
              pdfUrl="/documents/Willow Lane - Audit Committee Charter.pdf" 
            />
          </div>
        </div>
      </section>
    </div>
  )
}