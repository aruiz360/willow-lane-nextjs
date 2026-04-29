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
          <Image
            src="/imgs/Investor-Deck.png"
            alt="Investor-Presentation"
            width={360}
            height={170}
            className="pt-5 mx-auto"
          />
          <DownloadWithForm
            title="View Webcast"
            mode = "player"
            videoUrl="/uploads/Riveron_Investor_2025.mp4"
          />
          <DownloadWithForm
            title="View Investor Presentation"
            mode = "download"
            fileUrl="/uploads/BoostRun_InvestorPresentation_Sep14-2025.pdf"
          />
          <LinkElement
            linkLabel="PFIC Annual Statement 2024"
            linkHref="uploads/Willow Lane Acquisition Corp 2024 Class A PFIC Annual Information Statement.pdf"
          />
          <LinkElement
            linkLabel="PFIC Annual Statement 2025 Class A"
            linkHref="uploads/Willow Lane Acquisition Corp. 2025 Class A PFIC Annual Information Statement.pdf"
          />
          <LinkElement
            linkLabel="PFIC Annual Statement 2025 Class B"
            linkHref="uploads/Willow Lane Acquisition Corp. 2025 Class B PFIC Annual Information Statement.pdf"
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
            linkHref="/uploads/BCAPressRelease.pdf"
          />
          <LinkElement
            linkLabel="Boost Run Expands AI Infrastructure Ecosystem as it Prepares to Merge with Willow Lane Acquisition Corp"
            linkHref="https://www.prnewswire.com/news-releases/boost-run-expands-ai-infrastructure-ecosystem-with-additional-gpu-data-center-financing-and-customer-partnerships-as-it-prepares-to-merge-with-willow-lane-acquisition-corp-302642687.html"
          />
          <LinkElement
            linkLabel="Willow Lane Announces Rescheduling of Extraordinary General Meeting of Shareholders to Approve Business Combination with Boost Run"
            linkHref="https://www.prnewswire.com/news-releases/willow-lane-announces-rescheduling-of-extraordinary-general-meeting-of-shareholders-to-approve-business-combination-with-boost-run-302734954.html"
          />
          <LinkElement
            linkLabel="Boost Run and Willow Lane Announce Effectiveness of Registration Statement in Connection with Proposed Business Combination"
            linkHref="https://www.prnewswire.com/news-releases/boost-run-and-willow-lane-announce-effectiveness-of-registration-statement-in-connection-with-proposed-business-combination-302737695.html"
          />
          <LinkElement
            linkLabel="Boost Run Achieves NVIDIA Exemplar Cloud on NVIDIA Blackwell Architecture™, Joining an Elite Tier of Global AI Infrastructure Leaders"
            linkHref="https://www.prnewswire.com/news-releases/boost-run-achieves-nvidia-exemplar-cloud-on-nvidia-blackwell-architecture-joining-an-elite-tier-of-global-ai-infrastructure-leaders-302740029.html?tc=eml_cleartime"
          />
          <LinkElement
            linkLabel="Boost Run Announces $1.44 Billion Agreement with Dell Technologies to Further Facilitate Enterprise Demand for AI Compute and Storage Infrastructure"
            linkHref="https://www.prnewswire.com/news-releases/boost-run-announces-1-44-billion-agreement-with-dell-technologies-to-further-facilitate-enterprise-demand-for-ai-compute-and-storage-infrastructure-302750194.html?tc=eml_cleartime"
          />
          <LinkElement
            linkLabel="Willow Lane Acquisition Corp. Announces No Redemptions in Connection with Business Combination with Boost Run Holdings, LLC"
            linkHref="https://www.prnewswire.com/news-releases/willow-lane-acquisition-corp-announces-no-redemptions-in-connection-with-business-combination-with-boost-run-holdings-llc-302757171.html?tc=eml_cleartime"
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
