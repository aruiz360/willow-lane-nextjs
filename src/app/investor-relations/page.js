import { DocumentTextIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Investor Relations | Willow Lane Acquisition Corporation',
  description: 'Access important financial information and SEC filings for Willow Lane Acquisition Corporation.',
}

// Add new component for governance documents
const DownloadDocument = ({ title, pdfUrl }) => (
  <a 
  href={pdfUrl}
    target="_blank" 
    rel="noopener noreferrer"
    className="text-body-mobile md:text-body text-gray-dark font-thin hover:font-bold hover:text-primary py-3 px-6 transition-all duration-200 font-source"  >
    {title}
  </a>
);

// Links
// text-body-mobile md:text-body text-gray-dark font-thin
const LinkElement = ({ linkLabel, linkHref }) => (
    <a 
      href={linkHref}
      target="_blank"
      rel="noopener noreferrer"
      className="text-body-mobile md:text-body text-gray-dark font-thin hover:font-bold hover:text-primary py-3 px-6 transition-all duration-200 font-source"    >
      {linkLabel}
    </a>
)

export default function InvestorRelations() {
  return (
    <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
      {/* <header className="mb-12 text-center">
        <h1 className="text-heading-mobile md:text-heading-lg font-bold text-primary mb-4 font-haboro uppercase">Investor Relations</h1>
        <p className="text-heading-mobile md:text-heading text-gray-dark max-w-2xl mx-auto font-thin">
          Access and review the company&apos;s SEC filings for more details about WILLOW LANE ACQUISITION CORPORATION and its recent activities.
        </p>
      </header> */}

      {/* Three-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-primary font-haboro uppercase">
            Investor Materials
          </h2>
          <LinkElement
            linkLabel="Investor Presentation"
            linkHref="/about"
          />
          <LinkElement
            linkLabel="Investor Deck"
            linkHref="/about"
          />
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-heading-mobile md:text-heading font-bold text-primary font-haboro uppercase">
            SEC Filings
          </h2>
          <LinkElement
            linkLabel="Post-Merger Filings"
            linkHref="/about"
          />
          <LinkElement
            linkLabel="8-K Merger Announcement"
            linkHref="/about"
          />
          <LinkElement
            linkLabel="All SEC Filings for WLAC SPAC"
            linkHref="/about"
          />
          <LinkElement
            linkLabel="View SEC Filings"
            linkHref="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002032379&owner=include&count=40"
          />
          <DownloadDocument
            title="View 2024 PIFC ANNUAL STATEMENT" 
            pdfUrl="/documents/Willow Lane Acquisition Corp 2024 Class A PFIC Annual Information Statement.pdf" 
          />
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-heading-mobile md:text-heading font-bold text-primary font-haboro uppercase">
            PRESS RELEASES
          </h2>
          <LinkElement
            linkLabel="All Press Releases"
            linkHref="/about"
          />
          <LinkElement
            linkLabel="Merger Announcement Press Release"
            linkHref="/about"
          />
        </div>
      </div>
    </div>
  )
}