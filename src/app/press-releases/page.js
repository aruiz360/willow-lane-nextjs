import Carrousel from '../components/Carrousel'
import slides from '../data/slides'

export const metadata = {
    title: 'Investor Relations | Willow Lane Acquisition Corporation',
    description: 'Access important financial information and SEC filings for Willow Lane Acquisition Corporation.',
}

export default function InvestorRelations() {
    return (
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <Carrousel title="WLAC in the News" slides={slides} />
        </div>
    )
}
