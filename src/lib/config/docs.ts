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
			href: 'https://dual-gan-anonymizer.vercel.app',
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
					title: 'GAN',
					href: '/demo',
					items: []
				},
				{
					title: 'Uploading Data',
					href: '/upload',
					items: []
				}
			]
		},
		{
			title: 'Documentation',
			items: [
				{
					title: 'Documentation',
					href: 'https://dual-gan-anonymizer.vercel.app',
					items: []
				}
			]
		}
	]
};
