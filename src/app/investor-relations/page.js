import Link from 'next/link'

export const metadata = {
  title: 'Investor Relations | Willow Lane Acquisition Corporation',
  description: 'Access important financial information and SEC filings for Willow Lane Acquisition Corporation.',
}

const LinkElement = ({ linkLabel, linkHref }) => (
    <a 
      href={linkHref}
      target="_blank"
      rel="noopener noreferrer"
      className="text-body-mobile md:text-body text-gray-dark font-thin hover:font-bold hover:text-primary py-3 px-6 transition-all duration-200 font-source">
      {linkLabel}
    </a>
)

export default function InvestorRelations() {
  return (
    <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
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
            linkHref="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002032379&owner=include&count=40"
          />
          <LinkElement
            linkLabel="8-K Merger Announcement"
            linkHref="/about"
          />
          <LinkElement
            linkLabel="All SEC Filings for WLAC SPAC"
            linkHref="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002032379&owner=include&count=40"
          />
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-heading-mobile md:text-heading font-bold text-primary font-haboro uppercase">
            PRESS RELEASES
          </h2>
          <Link 
            href={`/press-releases`}
            className="text-body-mobile md:text-body text-gray-dark font-thin hover:font-bold hover:text-primary py-3 px-6 transition-all duration-200 font-source"
          >
            All Press Releases
          </Link>
          <LinkElement
            linkLabel="Merger Announcement Press Release"
            linkHref="/about"
          />
        </div>
      </div>
    </div>
  )
}