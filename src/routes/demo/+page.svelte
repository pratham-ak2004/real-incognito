<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import * as Table from '$lib/components/ui/table';
	// import { Label } from "$lib/components/ui/label";
	import { Button } from '$lib/components/ui/button';
	import csvtojson from 'csvtojson';

	// to do
	let features: string[];
	let userData: any[] = [];
	let anonymizedStringArray: any[] = [];
	let anonymizedData: any[] = [];
	let jsonArray: object[] = [];

	let originalCSV: string | Blob;
	let anonymizedCSV: string | Blob;

	function readFile(file: Blob) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onerror = reject;
			reader.readAsText(file);
		});
	}

	function objectToStringArray(objectArray: object[]) {
		return objectArray.map((obj) => {
			return Object.values(obj);
		});
	}

	function getFeatures(objectArray: object[]) {
		if (objectArray.length > 0) {
			return Object.keys(objectArray[0]);
		}
	}

	const handleGetFile = async (e: any) => {
		const file = e.target.files[0];
		originalCSV = file;

		try {
			const csvData = await readFile(file);
			jsonArray = await csvtojson().fromString(csvData as string);
			userData = objectToStringArray(jsonArray);
			features = getFeatures(jsonArray) as string[];
			// console.log(userData);
		} catch (err) {
			console.error(err);
		}
	};

	async function convertStringToCSV(file: string) {
		const lines = file.split('\n');
		const headers = lines[0].split(',');
		const data = [];

		for (let i = 1; i < lines.length; i++) {
			const values = lines[i].split(',');
			const obj = JSON.parse(
				JSON.stringify(
					headers.reduce((prev, header, i) => {
						(prev as { [key: string]: any })[header] = values[i];
						return prev;
					}, {})
				)
			);
			data.push(obj);
		}
		return data;
	}

	function convertJsonToCsv(dataObject: object[]) {
		// Get the headers (object keys)
		const headers = features;

		// Map each object in the array to a CSV row
		const rows = jsonArray.map((obj) => {
			return headers.map((header: string) => obj[header as keyof typeof obj]).join(',');
		});

		// Combine the headers and rows into a single CSV string
		const csv = [headers.join(',')].concat(rows).join('\n');

		return csv;
	}

	const handleAnonymizeData = (e: any) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('file', originalCSV);

		const url = 'https://anonymizer-mwnxl4smaa-el.a.run.app';

		fetch(url, {
			method: 'POST',
			body: formData
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				return response.json();
			})
			.then(async (data) => {
				console.log(typeof data);
				console.log(data);

				anonymizedData = await convertStringToCSV(data);
				console.log(anonymizedData);

				anonymizedCSV = convertObjectToCSV(await anonymizedData);
				console.log(anonymizedCSV);

				anonymizedStringArray = objectToStringArray(anonymizedData);
				console.log(anonymizedStringArray);
			})
			.catch((error) => {
				console.error('There was a problem with your fetch operation:', error);
			});
	};

	$: featureName = '';

	const handleFeatureSelect = (e: any) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('', featureName);
		formData.append('', originalCSV);
		formData.append('', anonymizedCSV);

		const url = 'https://trend-predictor-mwnxl4smaa-el.a.run.app';

		fetch(url, {
			method: 'POST',
			body: formData
		}).then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			return response.json();
		});
	};
</script>

<main class="flex flex-col items-center">
	<div class="mx-4 mt-8 flex min-h-fit w-11/12 flex-col items-center border p-4">
		<div class="mb-4 flex w-full flex-row items-center justify-between gap-1.5">
			<!-- <Label for="Dataset">Click here to upload your dataset</Label> -->
			<Input id="picture" type="file" accept=".csv" on:input={handleGetFile} class="max-w-80" />
			<Button on:click={handleAnonymizeData} class=" w-44">Anonymize data</Button>
		</div>
		{#if userData.length !== 0}
			<form class="flex w-full items-center space-x-2">
				<Input type="text" placeholder="feature" class="w-full" bind:value={featureName} />
				<Button type="submit" class="w-48">Subscribe</Button>
			</form>
			<h1 class="mb-4 mt-6 w-full text-center font-bold">Raw Data</h1>
			<div class="max-h-96 w-full overflow-y-scroll border-2 border-slate-200 object-cover p-4">
				<Table.Root class="overflow-x-visible">
					<Table.Caption>A list of your recent invoices.</Table.Caption>
					<Table.Header>
						<Table.Row>
							{#each features as feature, i (i)}
								<Table.Head class="font-bold text-black">{feature}</Table.Head>
							{/each}
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each userData as tuple, i (i)}
							<Table.Row>
								{#each features as feature, j (j)}
									<Table.Cell>{jsonArray[i][feature]}</Table.Cell>
								{/each}
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</div>
		{:else}
			<p class="text-center">No data to display</p>
		{/if}
		{#if anonymizedData.length > 0}
			<!-- to do -->
			<h1 class="mb-4 mt-6 w-full text-center font-bold">Anonymized Data</h1>
			<div class="max-h-96 w-full overflow-y-scroll border-2 border-slate-200 object-cover p-4">
				<Table.Root class="overflow-x-visible">
					<Table.Caption>A list of your recent invoices.</Table.Caption>
					<Table.Header>
						<Table.Row>
							{#each features as feature, i (i)}
								<Table.Head class="font-bold text-black">{feature}</Table.Head>
							{/each}
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each anonymizedData as tuple, i (i)}
							<Table.Row>
								{#each features as feature, j (j)}
									<Table.Cell>{anonymizedData[i][feature]}</Table.Cell>
								{/each}
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</div>
		{/if}
	</div>
</main>
