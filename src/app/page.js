// src/app/page.js
import HomeContent from './HomeContent'

export const metadata = {
  title: 'Willow Lane Acquisition Corporation | Home',
  description: 'Willow Lane Acquisition Corporation is a blank check company formed for the purpose of effecting a merger, amalgamation, share exchange, asset acquisition, share purchase, reorganization or similar business combination.',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
}

export default function Home() {
  return <HomeContent />
}