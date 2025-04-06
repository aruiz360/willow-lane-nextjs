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
    className="text-heading-mobile md:text-heading text-gray-dark hover:text-primary font-bold py-3 px-6 transition-colors duration-200 font-haboro uppercase"
  >
    {title}
  </a>
);

export default function InvestorRelations() {
  return (
    <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
      <header className="mb-12 text-center">
        <h1 className="text-heading-mobile md:text-heading-lg font-bold text-primary mb-4 font-haboro uppercase">Investor Relations</h1>
        <p className="text-heading-mobile md:text-heading text-gray-dark max-w-2xl mx-auto font-thin">
          Access and review the company&apos;s SEC filings for more details about WILLOW LANE ACQUISITION CORPORATION and its recent activities.
        </p>
      </header>

      <div className="text-center">
        <a 
          href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002032379&owner=include&count=40" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-heading-mobile md:text-heading text-gray-dark hover:text-primary font-bold py-3 px-6 transition-colors duration-200 font-haboro uppercase"
        >
          View SEC Filings
        </a>
        <hr className="py-4 my-4"></hr>
        <DownloadDocument
          title="View 2024 PIFC ANNUAL STATEMENT" 
          pdfUrl="/documents/Willow Lane Acquisition Corp 2024 Class A PFIC Annual Information Statement.pdf" 
        />
      </div>
    </div>
  )
}