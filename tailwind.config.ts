
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
      fontFamily: {
        'pixel': ['Press Start 2P', 'cursive'],
        'tactical': ['Oswald', 'sans-serif'],
        'modern': ['Montserrat', 'sans-serif'],
      },
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        r6: {
          'blue': '#4287F5',
          'orange': '#FF6B00',
          'red': '#F04747',
          'dark': '#121212',
          'darker': '#0A0A0A',
          'gray': '#333333',
          'light': '#E9E9E9',
          'yellow': '#FFD700',
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				},
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(66, 135, 245, 0.5), 0 0 10px rgba(66, 135, 245, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 15px rgba(66, 135, 245, 0.8), 0 0 20px rgba(66, 135, 245, 0.5)' 
          },
        },
        'tactical-scan': {
          '0%': { 
            transform: 'translateY(0)',
            opacity: '0.1',
          },
          '50%': { 
            opacity: '0.5',
          },
          '100%': { 
            transform: 'translateY(100%)',
            opacity: '0.1',
          },
        },
        'drone-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(-5deg)' },
          '75%': { transform: 'translateY(10px) rotate(5deg)' },
        },
        'breach-flash': {
          '0%, 100%': { opacity: '0' },
          '5%, 15%': { opacity: '0.8' },
          '30%': { opacity: '0' },
        },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 3s infinite',
        'tactical-scan': 'tactical-scan 3s linear infinite',
        'drone-float': 'drone-float 6s ease-in-out infinite',
        'breach-flash': 'breach-flash 8s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
