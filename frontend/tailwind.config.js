/** @type {import('tailwindcss').Config} */
module.exports = {
  blocklist: ["overline"],
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      sm: '600px',
      md: '905px',
      lg: '1280px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        serif: ['"Roboto Serif"', 'Georgia', 'serif'],
        sans: ['"Roboto Flex"', 'Roboto', 'Arial', 'sans-serif']
      },
      colors: {
        primary: { DEFAULT: '#006D44', container: '#91F7BD', dim: '#75DAA3' },
        onprimary: { fixedvariant: '#005232', container: '#002111' },
        secondary: { DEFAULT: '#4E6355', container: '#D0E8D6', dim: '#B5CCBB' },
        surface: {
          DEFAULT: '#FBF9F1',
          dim: '#DCDAD2',
          lowest: '#FFFFFF',
          low: '#F6F4EB',
          container: '#F0EEE6',
          high: '#EAE8E0',
          highest: '#E4E3DB',
          variant: '#DCE5DC'
        },
        onsurface: { DEFAULT: '#1B1C17', variant: '#404942' },
        outline: { DEFAULT: '#717972', variant: '#C0C9C0' },
        inverse: { DEFAULT: '#30312B', on: '#F3F1E9' },
        banner: '#0B1810',
        trustpilot: '#00B67A',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
