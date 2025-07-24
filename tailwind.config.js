module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sanctuary-navy": "#2E4257",
        "sanctuary-teal": "#577C8E",
        "sanctuary-light-blue": "#C7D9E5",
        "sanctuary-off-white": "#F4EFEB",
        "sanctuary-sky-blue": "#CBD5DE",
        "sanctuary-dark-blue": "#004674",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "prata": ["Prata", "serif"],
        "jacques": ["Jacques Francois", "serif"],
      },
      borderRadius: {
        "30": "30px",
        "20": "20px",
      },
    },
  },
  plugins: [],
}
