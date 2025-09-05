import Link from 'next/link'
import Image from "next/image"
import DownloadWithForm from "../components/DownloadWithForm"

export const metadata = {
  title: 'Investor Relations | Willow Lane Acquisition Corporation',
  description: 'Access important financial information and SEC filings for Willow Lane Acquisition Corporation.',
}

const LinkElement = ({ linkLabel, linkHref, imageSrc }) => (
    <div className="text-center items-center">
      <a
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-body-mobile md:text-body text-gray-dark font-thin hover:font-bold hover:text-primary py-3 px-6 transition-all duration-200 font-source"
      >
        {linkLabel}

        {imageSrc && (
          <div className='text-center'>
            <Image
              src={imageSrc}
              alt={linkLabel}
              width={360}
              height={170}
              className="pt-5 mx-auto"
            />
          </div>
        )}
      </a>
    </div>
)

export default function InvestorRelations() {
  return (
    <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-primary font-haboro uppercase">
            Investor Materials
          </h2>
          <DownloadWithForm
            title="Investor-Presentation"
            imageSrc="/imgs/Investor-Presentation.png"
            pdfUrl="/documents/Investor-Presentation.pdf"
          />
          <LinkElement
            linkLabel="Investor Deck"
            linkHref="/documents/Investor-Deck.pdf"
            imageSrc="/imgs/Investor-Deck.png"
          />
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-heading-mobile md:text-heading font-bold text-primary font-haboro uppercase">
            SEC Filings
          </h2>
          <LinkElement
            linkLabel="8-K Merger Announcement"
            linkHref="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002032379&count=10"
          />
          <LinkElement
            linkLabel="All SEC Filings for WLAC SPAC"
            linkHref="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002032379&count=10"
          />
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-heading-mobile md:text-heading font-bold text-primary font-haboro uppercase">
            PRESS RELEASES
          </h2>
          <LinkElement
            linkLabel="Merger Announcement Press Release"
            linkHref="https://google.com"
          />
          <Link
            href={`/press-releases`}
            className="text-body-mobile md:text-body text-gray-dark font-thin hover:font-bold hover:text-primary py-3 px-6 transition-all duration-200 font-source"
          >
            All Press Releases
          </Link>
        </div>
      </div>
    </div>
  )
}
