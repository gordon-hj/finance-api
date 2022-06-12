<script>
    import SvelteTable from "../../node_modules/svelte-table";
	export let regionCode, baseAt

    const columns = [
        {
            key: "localName",
            title: "지역",
            value: v => v.localCode,
            sortable: false
        },
    ]

    let pGetLocals = getLocals();
    async function getLocals() {
        const url = `/api/finance/credit_union/locals?region_code=` + regionCode + `&base_at=` + baseAt
        const response = await fetch(`/api/finance/credit_union/locals?region_code=` + regionCode + `&base_at=` + baseAt);
        const locals = await response.text();

        console.log(locals)

        if (response.ok) {
            return JSON.parse(locals);
        } else {
            throw new Error(response);
        }
    }
</script>

<div class="container-fluid">
    {#await pGetLocals}
        <p>...waiting</p>
    {:then locals}
        <SvelteTable columns="{columns}" rows="{locals}"></SvelteTable>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>