'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TeamAccordion from './components/TeamAccordion'
import Carrousel from './components/Carrousel'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const companies = [
  {
    name: 'TECNOGLASS',
    logo: '/company-logos/tecnoglass.png'
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

const slides = [
  {
    id: 1,
    image: '/press/bloomberg.jpg',
    title: "Boost Run Set to Go Public in US Via $614 Million SPAC Merger",
    description: "AI cloud infrastructure company Boost Run LLC has reached an agreement to go public on the Nasdaq through a merger with Willow Lane Acquisition Corp.",
    link: "https://www.bloomberg.com/news/articles/2025-09-16/boost-run-set-to-go-public-in-us-via-614-million-spac-merger?srnd=undefined&embedded-checkout=true",
  },
  {
    id: 2,
    image: '/press/pr2.jpg',
    title: "GPU cloud startup Boost Run to go public via de-SPAC merger",
    description: "The merger is likely to entice retail investors who are keen to get in on the AI boom. Boost Run is one of a growing number of cloud infrastructure providers that’s dedicated to AI workloads, offering access to competitively-priced servers powered by Nvidia Corp.’s graphics processing units, which support high-performance training and inference. The merger is likely to entice retail investors who are keen to get in on the AI boom. Boost Run is one of a growing number of cloud infrastructure providers that’s dedicated to AI workloads, offering access to competitively-priced servers powered by Nvidia Corp.’s graphics processing units, which support high-performance training and inference. Turn on screen reader support To enable screen reader support, press ⌘+Option+Z To learn about keyboard shortcuts, press ⌘slashMaya Hernandez has joined the document.",
    link: "https://siliconangle.com/2025/09/16/gpu-cloud-startup-boost-run-go-public-via-de-spac-merger/",
  }
];

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

const FinanceLink = ({title}) => (
  <div className="flex flex-col md:flex-row justify-between items-center border-primary border-b pb-4 pt-4">
    <div>
      <p className="text-body-mobile md:text-body text-gray-dark font-thin">
        {title}
      </p>
    </div>
    <div className="mt-4 md:mt-0 hidden lg:block">
      <span className="inline-flex items-center text-gray-800 hover:text-primary transition-colors duration-200 font-medium">
        <ChevronRightIcon className="w-4 h-4 lg:w-8 lg:h-8" />
      </span>
    </div>
  </div>
);

const GovernanceDocument = ({ title, pdfUrl }) => (
  <div className="text-gray-light border-gray-light border-b pb-4">
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between items-center"
    >
      <span className="text-body-mobile md:text-body text-gray-light font-thin">{title}</span>
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
        <div className='container mx-auto py-8 lg:py-16 relative'>
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
              <div className="relative w-[450px] h-[550px]">
                <Image
                  src="/logo_hero.png"
                  alt="Decorative background"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-3/5 text-left md:text-left space-y-6 relative z-10">
              <h1 className="text-heading-mobile md:text-heading uppercase font-haboro pb-3 text-gray-light">
                {"Boost Run to Go Public via Business Combination with Willow Lane Acquisition Corp (NASDAQ: $WLAC)"}
              </h1>
              <p className="text-body-mobile md:text-body font-light !mt-0 text-gray-light">
                {"Boost Run, a rapidly growing provider of AI Cloud Infrastructure and high-performance compute (HPC), and Willow Lane Acquisition Corp., a publicly traded special purpose acquisition company, announced on September 16, 2025, a definitive business combination agreement through which Boost Run will become publicly-listed."}
              </p>
              <p className="text-body-mobile md:text-body font-light text-gray-light">
                {"Boost Run's bare-metal platform supports complex enterprise and regulated workloads with operator-level certifications and security, to support AI compute at scale. The merger offers investors exposure to the nascent multi-cloud industry, as companies boost AI capabilities and seek secure, application-specific outsourced computing needs."}
              </p>
            </div>
        </div>
      </section>

      {/* Press Releases */}
      <section id="pr" className="relative">
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <Carrousel title="WLAC in the News" slides={slides} />
        </div>
      </section>

      {/* Team Accordion Section */}
      <section id="team" className="relative bg-primary">
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-heading-mobile md:text-heading-lg text-gray-light font-haboro mb-4">OUR TEAM</h2>
          </div>
          <TeamAccordion />
        </div>
      </section>

      <PastTransactions />

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
              <h3 className="text-heading-mobile md:text-heading font-haboro text-gray-dark mb-2 uppercase">
                Access Financial Information
              </h3>
            </div>
            <FinanceLink title="Investor Materials" />
            <FinanceLink title="View SEC fillings for WILLOW LANE ACQUISITION CORPORATION" />
            <FinanceLink title="Press Releases" />
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-center border-primary border-b pb-4 pt-4">
            <div>
              <a
              className="text-body-mobile md:text-body text-gray-dark font-thin"
              href="/documents/Willow Lane Acquisition Corp 2024 Class A PFIC Annual Information Statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              >
                View 2024 PIFC ANNUAL STATEMENT
              </a>
            </div>
            <div className="mt-4 md:mt-0 hidden lg:block">
              <span className="inline-flex items-center text-gray-800 hover:text-primary transition-colors duration-200 font-medium">
                <ChevronRightIcon className="w-4 h-4 lg:w-8 lg:h-8" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Documents Section */}
      <section id="governance" className=" bg-primary text-gray-light pb-5">
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
