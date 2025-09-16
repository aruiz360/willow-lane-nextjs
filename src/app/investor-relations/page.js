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
            pdfUrl="/uploads/Riveron_Investor_2025.mp4"
          />
          <LinkElement
            linkLabel="Investor Deck"
            imageSrc="/imgs/Investor-Deck.png"
            linkHref="/uploads/BoostRun_InvestorPresentation_Sep14-2025.pdf"
          />
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-heading-mobile md:text-heading font-bold text-primary font-haboro uppercase">
            SEC Filings
          </h2>
          <LinkElement
            linkLabel="8-K Merger Announcement"
            linkHref="https://www.sec.gov/ix?doc=/Archives/edgar/data/2032379/000149315225013534/form8-k.htm"
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
            WLAC in the News
          </Link>
        </div>
      </div>
    </div>
  )
}
