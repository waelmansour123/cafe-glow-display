// TypeScript configuration type for Tailwind CSS
import type { Config } from "tailwindcss";

/**
 * Tailwind CSS Configuration
 * 
 * Configures the utility-first CSS framework
 * Includes custom theme extensions, fonts, and colors
 */
export default {
	// Dark mode configuration - uses class-based toggling
	darkMode: ["class"],
	
	// Content paths for Tailwind to scan for class usage
	content: [
		"./pages/**/*.{ts,tsx}",      // Pages directory
		"./components/**/*.{ts,tsx}", // Components directory  
		"./app/**/*.{ts,tsx}",        // App directory
		"./src/**/*.{ts,tsx}",        // Source directory (main one used)
	],
	
	// No prefix for utility classes
	prefix: "",
	
	// Theme configuration
	theme: {
		// Container settings for responsive layouts
		container: {
			center: true,           // Center containers
			padding: '2rem',        // Default padding
			screens: {
				'2xl': '1400px'     // Max width for 2xl breakpoint
			}
		},
		
		// Extend default Tailwind theme
		extend: {
			// Custom font families
			fontFamily: {
				// Elegant serif font for headings and display text
				display: ["Playfair Display", "serif"],
				// Clean sans-serif for body text
				sans: ["Inter", "system-ui", "sans-serif"],
			},
			
			// Custom color system using CSS variables
			// This allows for easy theme switching and customization
			colors: {
				// Border and form colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',           // Focus rings
				
				// Background colors
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Primary brand colors (gold theme)
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				
				// Secondary colors
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				
				// Error/destructive colors
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				
				// Muted colors for less prominent text
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				
				// Accent colors for highlights
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				// Accordion Animations
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				// Fade
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				// Scale
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				// Slide
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'scale-out': 'scale-out 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-out',
				enter: 'fade-in 0.3s ease-out, scale-in 0.2s ease-out',
				exit: 'fade-out 0.3s ease-out, scale-out 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
