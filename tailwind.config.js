/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundSize:{
        '50%': '50%',
        '75%': '75%',
        '100%': '100%',
      },
      backgroundPosition:{
        'r-t': '500px 55%',
      },
      
      colors:{
        'Dark-Blue': 'hsl(233, 26%, 24%)',
        'Lime-Green': 'hsl(136, 65%, 51%)',
        'Bright-Cyan': 'hsl(192, 70%, 51%)',
        'Grayish-Blue': 'hsl(233, 8%, 62%)',
        'Light-Grayish-Blue': 'hsl(220, 16%, 96%)',
        'Very-Light-Gray': 'hsl(0, 0%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg-intro-desktop.svg')",
        'mock-background ': "url('/images/image-mockups.png')"
        
      }
    },
  },
  plugins: [],
}
