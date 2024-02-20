<script>
	import SiteHeader from '$lib/components/site-header.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { siteConfig } from '$lib/config/site';
	import { Icons } from '$lib/icons';
	import { cn } from '$lib/utils';
	import '../app.pcss';
</script>

<div class="relative flex min-h-screen flex-col" id="page">
	<SiteHeader />
	<div class="flex-1">
		<slot />
	</div>
</div>
<footer
	class="flex h-32 w-full flex-col items-center justify-center gap-y-2 border border-t-2 bg-muted p-2"
>
	<p>Made with &lt3 by <span class="font-bold text-red-600">Nitte </span>Students!</p>
	<div class="font-medium">
		© {new Date().getFullYear()} real-incognito
	</div>
	<div class="flex">
		<a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
			<div
				class={cn(
					buttonVariants({
						size: 'sm',
						variant: 'ghost'
					}),
					'w-9 px-0'
				)}
			>
				<Icons.gitHub class="h-4 w-4" />
				<span class="sr-only">GitHub</span>
			</div>
		</a>
		<a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
			<div
				class={cn(
					buttonVariants({
						size: 'sm',
						variant: 'ghost'
					}),
					'w-9 px-0'
				)}
			>
				<Icons.twitter class="h-3 w-3 fill-current" />
				<span class="sr-only">X (formerly known as Twitter)</span>
			</div>
		</a>
	</div>
</footer>
