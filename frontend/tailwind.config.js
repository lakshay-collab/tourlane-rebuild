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
        primary: { DEFAULT: '#174358', hover: '#113141', container: '#F4B49A', dim: '#308BB6' },
        accent: { DEFAULT: '#E75E26', amber: '#FB7F26', terracotta: '#812F0E', rust: '#491B08', soft: '#FADDD1' },
        onprimary: { fixedvariant: '#002131', container: '#002131' },
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
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))'
      },
      backgroundImage: {
        'sunset-run': 'linear-gradient(135deg, #FB7F26 0%, #E75E26 55%, #812F0E 100%)',
        'sunset-line': 'linear-gradient(90deg, #FB7F26 0%, #E75E26 100%)',
        'dawn-haze': 'linear-gradient(135deg, #FADDD1 0%, #F4B49A 60%, #FB7F26 100%)',
        'deep-water': 'linear-gradient(90deg, #002131 0%, #113141 50%, #174358 100%)',
        'harbor-sky': 'linear-gradient(135deg, #174358 0%, #308BB6 100%)',
        'sky-mist': 'linear-gradient(180deg, #E0F7FF 0%, #FBF9F1 100%)',
        'warm-mist': 'linear-gradient(135deg, #FBEADB 0%, #FADDD1 100%)'
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
