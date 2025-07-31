# Willow Lane Acquisition Corporation Website

This project is a corporate website for Willow Lane Acquisition Corporation, built using Next.js 13 with its new App Router. It showcases the company's information, team, and investor relations.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features

- Responsive design for mobile and desktop views
- Dynamic routing for team member pages
- Investor relations page with SEC filings link
- SEO-friendly with metadata for each page
- Modern UI with Tailwind CSS

## Technologies Used

- [Next.js 13](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)

## Project Structure

```
willow-lane-website/
├── public/
│   ├── logo.png
│   └── profile.webp
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── team/
│   │   │   ├── page.js
│   │   │   └── [slug]/
│   │   │       └── page.js
│   │   └── investor-relations/
│   │       └── page.js
│   └── components/
│       └── (reusable components)
├── styles/
│   └── globals.css
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/willow-lane-website.git
   cd willow-lane-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

- Start editing the page by modifying `src/app/page.js`. The page auto-updates as you edit the file.
- Add new pages in the `src/app` directory to create new routes automatically.
- Use `src/components` for reusable React components.
- Modify `src/app/layout.js` for global layout changes.
- Update styles in `styles/globals.css` and `tailwind.config.js`.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Alternatively:
use PM2 daemon
```
pm2 start npm --name "willow-lane" -- start
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

---

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

For more information about Next.js, check out the following resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js/)
