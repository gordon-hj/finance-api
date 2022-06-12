<script>
    import SvelteTable from "../../node_modules/svelte-table";
import CreditUnionLocal from "./CreditUnionLocal.svelte";

    const columns = [
        {
            key: "regionName",
            title: "광역",
            value: v => v.regionName,
            sortable: false
        },
    ]

    function handleClick(event) {
        console.log(event.detail.row)
        regionCode = event.detail.row.regionCode
	}

    let pGetRegions = getRegions();
    async function getRegions() {
        const response = await fetch(`/api/finance/credit_union/regions`);
        const regions = await response.text();

        if (response.ok) {
            return JSON.parse(regions);
        } else {
            throw new Error(regions);
        }
    }

    $: regionCode = "sido01"
    let baseAt = "2022-04-11" // TODO now() - 1
</script>

<div class="container-fluid">
    {#await pGetRegions}
        <p>...waiting</p>
    {:then regions}
        <SvelteTable columns="{columns}" rows="{regions}" on:clickRow="{handleClick}"></SvelteTable>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

    <CreditUnionLocal regionCode={regionCode} baseAt={baseAt} />
</div>