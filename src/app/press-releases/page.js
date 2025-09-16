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
    description: "This is the description for the first News Article.",
    link: "https://google.com",
  }
];

export default function InvestorRelations() {
    return (
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <Carrousel title="WLAC in the News" slides={slides} />
        </div>
    )
}
