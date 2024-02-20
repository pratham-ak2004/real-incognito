<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Separator } from "$lib/components/ui/customSeparator";
</script>

<main>
	<div class="w-full h-screen flex flex-col">
		<div class="flex justify-center">
			<img src="/images/illuminati.png" class=" max-w-5xl min-w-40 mt-10 mx-4" alt="">
		</div>
		<h1 class="text-4xl mx-auto mt-6"><b>real-incognito</b></h1>
	</div>
	<Separator class="h-1 bg-[#ed613d]"/>
	<div class="w-full h-auto p-6 mt-4 flex flex-col items-center gap-6">
		<img src="https://picsum.photos/200/300" class="w-full mx-auto max-w-4xl aspect-video object-cover rounded-md" alt="">
		<div class="w-full max-w-4xl flex flex-col lg:items-start items-center">
			<div class="text-justify lg:text-left">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatibus sint maiores quaerat quisquam recusandae atque voluptas laborum dolore, praesentium voluptate distinctio earum eos quasi. Animi, dolore. Temporibus, eos voluptate.
			</div>
			<Button class="mt-4">click me</Button>
		</div>
	</div>
</main>

<style>
</style>