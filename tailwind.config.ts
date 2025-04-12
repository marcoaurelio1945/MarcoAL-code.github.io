
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
        'gaming': ['Orbitron', 'sans-serif'],
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
        gamer: {
          'purple': '#8B5CF6',
          'orange': '#F97316',
          'blue': '#0EA5E9',
          'dark': '#121212',
          'darker': '#0A0A0A',
          'gray': '#333333',
        },
        fortnite: {
          'blue': '#1EAEDB',
          'yellow': '#FAC800',
          'purple': '#9D4EDD',
          'pink': '#FF6B81',
          'turquoise': '#00B4D8',
          'dark': '#1A1F2C',
          'darker': '#13161F',
          'light': '#F5F5F5',
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
            boxShadow: '0 0 5px rgba(30, 174, 219, 0.5), 0 0 10px rgba(30, 174, 219, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 15px rgba(30, 174, 219, 0.8), 0 0 20px rgba(30, 174, 219, 0.5)' 
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'text-flicker': {
          '0%, 100%': { opacity: '1' },
          '10%, 30%': { opacity: '0.9' },
          '20%': { opacity: '0.8' },
          '25%': { opacity: '0.7' },
        },
        'battle-bus': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'llama-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px) scale(1.05)' },
        },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'text-flicker': 'text-flicker 3s linear infinite',
        'battle-bus': 'battle-bus 15s linear infinite',
        'llama-bounce': 'llama-bounce 2s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
