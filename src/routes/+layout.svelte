<script>
	import SiteHeader from '$lib/components/site-header.svelte';
	import '../app.pcss';
</script>

<div class="relative flex min-h-screen flex-col" id="page">
	<SiteHeader />
	<div class="flex-1">
		<slot />
	</div>
</div>
