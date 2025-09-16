/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        haboro: ['Haboro Contrast', 'sans-serif'],
        'source-sans': ['"Source Sans 3"', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': ['28px', { lineHeight: '1.2' }],
        'heading': ['24px', { lineHeight: '1.2' }],
        'body': ['24px', { lineHeight: '1.4' }],
        'doc': ['22px', { lineHeight: '1.3' }],
        'contact': ['26px', { lineHeight: '1.3' }],
        'heading-mobile': ['20px', { lineHeight: '1.2' }],
        'body-mobile': ['16px', { lineHeight: '1.4' }],
        'doc-mobile': ['14px', { lineHeight: '1.3' }],
        'contact-mobile': ['16px', { lineHeight: '1.3' }],
      },
      colors: {
        primary: '#094B30',
        secondary: '#297D56',
        accent: '#45A378',
        tertiary: '#64C79A',
        'gray-dark': "#464746",
        'gray-light': "#EFEFEF"
      },
    },
  },
  plugins: [],
}
