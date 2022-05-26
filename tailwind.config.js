


  const tailwindConfig = {
  // mode: 'jit',
  // purge: ['./src/**/*.{html,ts}'],
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      primary:"#116780",

      gray:'#949494',
      white:"#fff",
      secondary:"#4d708e",
      black:"#000",
      danger:'#f35050',
      main:"#fbfbfb;"
    },
    extend: {
      screens:{
        xxl: '1680px',
        lg:'1024px',
        xl:'1280px',
        md:'768px',
        sm:'640px'
      }
    },
  },
  // variants: {
  //       extend: {},
  //    },
  plugins: [
    require('tailwindcss-rtl'),
    require('@tailwindcss/forms')
  ],
}

module.exports = tailwindConfig;