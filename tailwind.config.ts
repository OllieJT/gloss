import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['sg-dark'],
	prefix: 'sg-',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--sg-border) / <alpha-value>)',
				input: 'hsl(var(--sg-input) / <alpha-value>)',
				ring: 'hsl(var(--sg-ring) / <alpha-value>)',
				background: 'hsl(var(--sg-background) / <alpha-value>)',
				foreground: 'hsl(var(--sg-foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--sg-primary) / <alpha-value>)',
					foreground: 'hsl(var(--sg-primary-foreground) / <alpha-value>)',
				},
				secondary: {
					DEFAULT: 'hsl(var(--sg-secondary) / <alpha-value>)',
					foreground: 'hsl(var(--sg-secondary-foreground) / <alpha-value>)',
				},
				destructive: {
					DEFAULT: 'hsl(var(--sg-destructive) / <alpha-value>)',
					foreground: 'hsl(var(--sg-destructive-foreground) / <alpha-value>)',
				},
				muted: {
					DEFAULT: 'hsl(var(--sg-muted) / <alpha-value>)',
					foreground: 'hsl(var(--sg-muted-foreground) / <alpha-value>)',
				},
				accent: {
					DEFAULT: 'hsl(var(--sg-accent) / <alpha-value>)',
					foreground: 'hsl(var(--sg-accent-foreground) / <alpha-value>)',
				},
				popover: {
					DEFAULT: 'hsl(var(--sg-popover) / <alpha-value>)',
					foreground: 'hsl(var(--sg-popover-foreground) / <alpha-value>)',
				},
				card: {
					DEFAULT: 'hsl(var(--sg-card) / <alpha-value>)',
					foreground: 'hsl(var(--sg-card-foreground) / <alpha-value>)',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))',
				},
			},
			borderRadius: {
				xl: 'calc(var(--sg-radius) + 4px)',
				lg: 'var(--sg-radius)',
				md: 'calc(var(--sg-radius) - 2px)',
				sm: 'calc(var(--sg-radius) - 4px)',
			},
			fontFamily: {
				sans: [...fontFamily.sans],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--bits-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--bits-accordion-content-height)' },
					to: { height: '0' },
				},
				'caret-blink': {
					'0%,70%,100%': { opacity: '1' },
					'20%,50%': { opacity: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'caret-blink': 'caret-blink 1.25s ease-out infinite',
			},
		},
	},
	plugins: [tailwindcssAnimate],
};

export default config;
