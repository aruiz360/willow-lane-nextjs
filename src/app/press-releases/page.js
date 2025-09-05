import Carrousel from '../components/Carrousel'

export const metadata = {
    title: 'Investor Relations | Willow Lane Acquisition Corporation',
    description: 'Access important financial information and SEC filings for Willow Lane Acquisition Corporation.',
}

const slides = [
  {
    id: 1,
    image: '/press/press-placeholder.jpg',
    title: "First Press Release (newest)",
    description: "This is the description for the first Press Release.",
    link: "https://google.com",
  },
  {
    id: 2,
    image: '/press/press-placeholder.jpg',
    title: "Second Press Release",
    description: "This is the description for the second Press Release.",
    link: "https://google.com",
  },
  {
    id: 3,
    image: '/press/press-placeholder.jpg',
    title: "Third Press Release (Oldest)",
    description: "This is the description for the third Press Release.",
    link: "https://google.com",
  },
];

export default function InvestorRelations() {
    return (
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <Carrousel title="All Press Releases" slides={slides} />
        </div>
    )
}
