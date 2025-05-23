import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: ["var(--font-inter)", "system-ui", "sans-serif"],
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			  apple: {
				blue: "#007aff",
				green: "#34c759",
				lightblue: "#5ac8fa",
				gray: {
				  light: "#f5f5f7",
				  text: "#86868b",
				  dark: "#1d1d1f",
				},
			  },
			  yellow: {
				light: "#FFF9C4",
				DEFAULT: "#FFEB3B",
				dark: "#FBC02D",
				darker: "#F57F17",
			  },
			  darkblue: {
				light: "#4A6572",
				DEFAULT: "#344955",
				dark: "#232F34",
			  },
			  pink: {
				100: "#fce7f3",
				200: "#fbcfe8",
				300: "#f9a8d4",
				400: "#f472b6",
				500: "#ec4899",
				600: "#db2777",
			  },
			  blue: {
				100: "#dbeafe",
				200: "#bfdbfe",
				300: "#93c5fd",
				400: "#60a5fa",
				500: "#3b82f6",
				600: "#2563eb",
			  },
			  green: {
				100: "#d1fae5",
				200: "#a7f3d0",
				300: "#6ee7b7",
				400: "#34d399",
				500: "#10b981",
				600: "#059669",
			  },
			  red: {
				100: "#fee2e2",
				200: "#fecaca",
				300: "#fca5a5",
				400: "#f87171",
				500: "#ef4444",
				600: "#dc2626",
			  },
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
