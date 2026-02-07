import Link from 'next/link'
import Image from "next/image"
import DownloadWithForm from "../components/DownloadWithForm"

export const metadata = {
  title: 'Investor Relations | Willow Lane Acquisition Corp II',
  description: 'Access important financial information and SEC filings for Willow Lane Acquisition Corp II.',
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
          <h2 className="text-xl md:text-2xl font-bold text-primary font-arsenal uppercase">
            Corporate Governance Documents
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-heading-mobile md:text-heading font-bold text-primary font-arsenal uppercase">
            SEC Filings
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-heading-mobile md:text-heading font-bold text-primary font-arsenal uppercase">
            PRESS RELEASES
          </h2>
        </div>
      </div>
      {/* Temp Placeholder */}
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
    </div>
  )
}
