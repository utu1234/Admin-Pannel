module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',   // deep navy
        accent: '#06b6d4',    // teal
        card: '#ffffff',
        soft: '#f1f5f9',
        muted: '#64748b'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: [],
}
