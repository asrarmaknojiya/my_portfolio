import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-sans)', 'sans-serif'],
  			heading: ['var(--font-heading)', 'sans-serif'],
  			mono: ['var(--font-mono)', 'monospace'],
  		},
  		colors: {
			primary: 'var(--primary)',
			secondary: 'var(--secondary)',
			accent: {
				DEFAULT: 'var(--accent)',
				light: 'var(--accent-light)',
				dark: 'var(--accent-dark)',
			},
			background: 'var(--bg-light)',
			foreground: 'var(--text-primary)',
			darkBg: 'var(--dark-bg)',
			lightBg: 'var(--bg-light)',
			title: 'var(--title-color)',
			textMuted: 'var(--text-muted)',
			cardBg: 'var(--card-bg)',
			border: 'var(--border-color)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
            custom: 'var(--radius)',
  		},
        boxShadow: {
            glass: 'var(--shadow-glass)',
            premium: 'var(--shadow-premium)',
        },
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
