import Carrousel from '../components/Carrousel'
import slides from '../data/slides'

export async function generateMetadata({ params }) {

  return {
    title: 'Press Releases | Willow Lane Acquisition Corp II',
    description: 'Access important financial information and SEC filings for Willow Lane Acquisition Corp II.',
    icons: {
    icon: [
      { url: './favicon/favicon.ico' },
      { url: './favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: './favicon/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: './favicon/apple-touch-icon.png',
  },
  manifest: './favicon/site.webmanifest',
  }
}

export default function PressReleases() {
    return (
        <div className="container mx-auto py-8 lg:py-16 px-4 lg:px-0">
          <Carrousel title="WLII in the News" slides={slides} />
        </div>
    )
}
