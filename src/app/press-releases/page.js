import Carrousel from '../components/Carrousel'
import slides from '../data/slides'

export const metadata = {
    title: 'News | Willow Lane Acquisition Corp II',
    description: 'Access important financial information and SEC filings for Willow Lane Acquisition Corp II.',
}

export default function InvestorRelations() {
    return (
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <Carrousel title="WLAC in the News" slides={slides} />
        </div>
    )
}
