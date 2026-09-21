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
        serif: ['"Bricolage Grotesque"', 'Inter', 'sans-serif'],
        sans: ['Inter', '"Instrument Sans"', 'Arial', 'sans-serif'],
        ui: ['"Instrument Sans"', 'Inter', 'sans-serif']
      },
      colors: {
        primary: { DEFAULT: '#E75E26', hover: '#C84D1B', container: '#F4B49A', dim: '#FB7F26' },
        onprimary: { fixedvariant: '#174358', container: '#002131' },
        secondary: { DEFAULT: '#174358', container: '#FADDD1', dim: '#F4B49A' },
        surface: {
          DEFAULT: '#FBF9F1',
          dim: '#DCDAD2',
          lowest: '#FFFFFF',
          low: '#F6F4EB',
          container: '#F0EEE6',
          high: '#EAE8E0',
          highest: '#E4E3DB',
          variant: '#FBEADB'
        },
        onsurface: { DEFAULT: '#002131', variant: '#174358' },
        outline: { DEFAULT: '#6F777C', variant: '#C4CBD0' },
        inverse: { DEFAULT: '#30312B', on: '#F3F1E9' },
        banner: '#002131',
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
