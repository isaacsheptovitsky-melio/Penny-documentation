// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://USERNAME.github.io',
	// base: '/REPOSITORY_NAME', // Commented out for local development
	integrations: [
		starlight({
			title: 'Penny Design System',
			customCss: [
				'./src/styles/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/USERNAME/REPOSITORY_NAME' }],
			sidebar: [
				{
					label: 'Foundation',
					items: [
						{ label: 'Accessibility', slug: 'foundation/accessibility' },
						{ label: 'Typography', slug: 'foundation/typography' },
						{ label: 'Color Tokens', slug: 'foundation/color-tokens' },
						{ label: 'Spacing', slug: 'foundation/spaces' },
						{ label: 'Layout System', slug: 'foundation/layout-system' },
						{ label: 'Breakpoints', slug: 'foundation/breakpoints' },
						{ label: 'Icons', slug: 'foundation/icons' },
						{ label: 'Illustrations', slug: 'foundation/illustrations' },
						{ label: 'Shadows', slug: 'foundation/shadows' },
						{ label: 'Border Radius', slug: 'foundation/border-radius' },
						{ label: 'Borders', slug: 'foundation/borders' },
						{ label: 'Status Icons', slug: 'foundation/status-icon-solid' },
						{ label: 'Loader', slug: 'foundation/loader' },
						{ label: 'Mobile Patterns', slug: 'foundation/mobile-patterns' },
						{ label: 'Partnerships', slug: 'foundation/partnerships' },
						{ label: 'Values & Principles', slug: 'foundation/values-principles' },
						{ label: 'Archive', slug: 'foundation/archive' },
					],
				},
				{
					label: 'UX Patterns',
					items: [
						{ label: 'Overview', slug: 'ux-patterns/overview' },
						{ label: 'Navigation Patterns', slug: 'ux-patterns/navigation' },
						{ label: 'Form Patterns', slug: 'ux-patterns/forms' },
						{ label: 'Data Display', slug: 'ux-patterns/data-display' },
						{ label: 'Feedback Patterns', slug: 'ux-patterns/feedback' },
						{ label: 'Loading States', slug: 'ux-patterns/loading-states' },
						{ label: 'Empty States', slug: 'ux-patterns/empty-states' },
						{ label: 'Error Handling', slug: 'ux-patterns/error-handling' },
					],
				},
				{
					label: 'Components',
					items: [
						// Placeholder for future Components content
					],
				},
			],
		}),
	],
});
