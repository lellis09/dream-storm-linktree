/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  //   backgroundSize: {
  //     'size-200': '200% 200%',
  //   },
  // backgroundPosition: {
  //   'pos-0': '0% 0%',
  //   'pos-100': '100% 100%',
  //   },
    extend: {
      boxShadow: {
        '3xl': '2px 2px 2px 1px rgba(0, 0, 0, 0.3)',
      },
    },
    extend: {
      colors: {
        myTeal: '#00C4D4',
        lightgreen: '#a2f740',
        myindigo: '#4F56F6',
        myindigo2: '#4045C3',
        hotpink: '#F11AA8',
        lightBlue: '#C9F8F6',
        navy: '#0D052E',
        lightBlue: '#C9F8F6',
        gradient:'linear-gradient(to right, #4F56F6, #F11AA)',
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(to right, #4F56F6, #F11AA)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
