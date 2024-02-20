<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/customSeparator';
	import { redirect } from '@sveltejs/kit';
</script>

<main>
	<div class="flex h-screen w-full flex-col items-center justify-center">
		<img src="/images/illuminati.png" class="mx-4 min-w-16" alt="" />
		<h1 class="mx-auto mb-20 mt-4 text-4xl"><b>real-incognito</b></h1>
	</div>
	<Separator class="h-1 bg-[#ed613d]" />
	<div class="mt-4 flex h-auto w-full flex-col items-center gap-6 p-6">
		<img
			src="/images/iteration3.png"
			class="mx-auto aspect-video w-full max-w-4xl rounded-md object-cover"
			alt=""
		/>
		<div class="flex w-full max-w-2xl flex-col items-center lg:items-start">
			<div class="text-justify lg:text-left">
				This is the architecture used by the real-incognito project. Further details can be found in
				the documentation linked below!
			</div>

			<a class="mt-4" href="https://real-incognito-docs.vercel.app"><Button>Docs</Button></a>
		</div>
	</div>
</main>

<style>
</style>
