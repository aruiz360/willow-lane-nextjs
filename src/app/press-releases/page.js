import Carrousel from '../components/Carrousel'

export const metadata = {
    title: 'Investor Relations | Willow Lane Acquisition Corporation',
    description: 'Access important financial information and SEC filings for Willow Lane Acquisition Corporation.',
}

const slides = [
  {
    id: 1,
    image: '/press/bloomberg.jpg',
    title: "Bloomberg Article",
    description: "Boost Run Set to Go Public in US Via $614 Million SPAC Merger.",
    link: "https://www.bloomberg.com/news/articles/2025-09-16/boost-run-set-to-go-public-in-us-via-614-million-spac-merger?srnd=undefined&embedded-checkout=true",
  }
];

export default function InvestorRelations() {
    return (
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <Carrousel title="WLAC in the News" slides={slides} />
        </div>
    )
}
