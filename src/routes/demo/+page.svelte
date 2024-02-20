<script lang="ts">
    import * as Table from "$lib/components/ui/table";
    import { Input } from "$lib/components/ui/input";
    // import { Label } from "$lib/components/ui/label";
    import { Button } from "$lib/components/ui/button";
    import csvtojson from "csvtojson";
    
    // to do
    let features:string[]
    let userData: any[] = [];
    let anonymizedData: object[] = [];
    let jsonArray: object[] = [];

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
    };

    function getFeatures(objectArray: object[]) {
      if(objectArray.length > 0) {
        return Object.keys(objectArray[0]);
      }
    }

    const handleGetFile = async(e:any) => {
      const file = e.target.files[0];
      console.log(file);
      try {
        const csvData = await readFile(file);
        jsonArray = await csvtojson().fromString(csvData as string);
        userData = objectToStringArray(jsonArray);
        features = getFeatures(jsonArray) as string[];
        console.log(userData);
        
      } catch (err) {
          console.error(err);
      }
    }
   /*
    userData = [
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
    ];
    anonymizedData = userData
    */
  </script>
  
  <main>
    <div class="mx-4 mt-8 border p-4 min-w-fit min-h-fit">
      <div class="flex flex-row w-full items-center gap-1.5 mb-4 justify-between">
        <!-- <Label for="Dataset">Click here to upload your dataset</Label> -->
        <Input id="picture" type="file" accept=".csv" on:input={handleGetFile} class="max-w-80"/>
        <Button>Anonymize data</Button>
      </div>
      {#if userData.length !== 0}  

        <h1 class="w-full mt-6 mb-4 font-bold text-center max-w-screen-lg">Raw Data</h1>
        <div class="max-h-96 overflow-y-scroll overflow-x-scroll border-2 border-slate-200 p-4">
          <Table.Root>
            <Table.Caption>A list of your recent invoices.</Table.Caption>
            <Table.Header>
              <Table.Row>
                {#each features as feature, i (i)}
                  <Table.Head class="font-bold text-black">{feature}</Table.Head>
                {/each}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <!-- to do -->
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
      <h1 class="w-full mt-6 mb-4 font-bold text-center">Anonymized Data</h1>
        <div class="max-h-96 overflow-y-scroll overflow-x-scroll border-2 border-slate-200 p-4">
          <Table.Root>
            <Table.Caption>A list of your recent invoices.</Table.Caption>
            <Table.Header>
              <Table.Row>
                {#each features as feature, i (i)}
                  <Table.Head class="font-bold text-black">{feature}</Table.Head>
                {/each}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <!-- to do -->
              {#each userData as tuple, i (i)}
                <Table.Row>
                  <Table.Cell>{tuple.invoice}</Table.Cell>
                  <Table.Cell>{tuple.paymentStatus}</Table.Cell>
                  <Table.Cell>{tuple.paymentMethod}</Table.Cell>
                  <Table.Cell>{tuple.totalAmount}</Table.Cell>
                </Table.Row>
              {/each}
            </Table.Body>
          </Table.Root>
        </div>
      {/if}
    </div>
  </main>