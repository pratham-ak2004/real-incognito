import type { NavItem, SidebarNavItem } from '$lib/types/nav';

interface DocsConfig {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: 'Demonstration',
			href: '/demo'
		},
		{
			title: 'Documentation',
			href: 'https://real-incognito-docs.vercel.app',
			external: true
		},
		{
			title: 'GitHub',
			href: 'https://github.com/prathwik0/real-incognito',
			external: true
		}
	],
	sidebarNav: [
		{
			title: 'Demonstration',
			items: [
				{
					title: 'Upload Data (csv)',
					href: '/demo',
					items: []
				},
				{
					title: 'Get Anonymized Data',
					href: '/demo',
					items: []
				},
				{
					title: 'Download Anonymized Data',
					href: '/demo',
					items: []
				}
			]
		},
		{
			title: 'Documentation',
			items: [
				{
					title: 'Documentation',
					href: 'https://real-incognito-docs.vercel.app',
					items: []
				}
			]
		}
	]
};
