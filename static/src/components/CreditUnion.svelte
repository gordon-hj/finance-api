<script>
    let regions = []
    let selectedRegionId

    let locals = []
    let selectedLocalId

    let getLocals = (async () => {
        let temp = [
            [{id:0, localName:"region1Local1"},
            {id:1, localName:"region1Local2"}],
            [{id:2, localName:"region2Local3"},
            {id:3, localName:"region2Local4"}],
        ];
        locals = temp[selectedRegionId]
        selectedLocalId = locals[0].id
    });

    let getRegions = (async () => {
        let temp = [
            {id:0, regionName:"region1"},
            {id:1, regionName:"region2"}
        ];
        regions = temp
        selectedRegionId = regions[0].id
        getLocals(selectedRegionId)
    })();
</script>

<div class="container-fluid">
    <select name="region" bind:value={selectedRegionId} on:change={getLocals}>
        {#each regions as region,i}
            <option value={region.id}>{region.regionName}</option>
        {/each}
    </select>
    <select name="local" bind:value={selectedLocalId}>
        {#each locals as local,i}
            <option value={local.id}>{local.localName}</option>
        {/each}
    </select>
</div>