<script>
    import Table from './Table.svelte' 

    let regions = []
    let selectedRegionId

    let locals = []
    let selectedLocalId

    let stores = []

    let tableName = '지역을 입력하세요'
    const tableField = ['id', 'name']
    let tableValues = []

    let getStores = (async () => {
        let temp = [
            [{id:0, storeName:"region1Local1store0"}, {id:4, storeName:"region1Local1store1"}],
            [{id:1, storeName:"region1Local2store0"}, {id:5, storeName:"region1Local2store1"}],
            [{id:2, storeName:"region2Local3store0"}, {id:6, storeName:"region2Local3store1"}],
            [{id:3, storeName:"region2Local4store0"}, {id:7, storeName:"region2Local4store1"}],
        ];
        stores = temp[selectedLocalId]
        tableName = regions.find((it) => it.id == selectedRegionId).regionName + " " + locals.find((it) => it.id == selectedLocalId).localName
        tableValues = stores.map((it) => [it.id, it.storeName])
    });

    let getLocals = (async () => {
        let temp = [
            [{id:0, localName:"region1Local1"},
            {id:1, localName:"region1Local2"}],
            [{id:2, localName:"region2Local3"},
            {id:3, localName:"region2Local4"}],

        ];
        locals = temp[selectedRegionId]
        selectedLocalId = locals[0].id
        tableName = regions.find((it) => it.id == selectedRegionId).regionName + " " + locals[0].localName
        getStores()
    });

    let getRegions = (async () => {
        let temp = [
            {id:0, regionName:"region1"},
            {id:1, regionName:"region2"}
        ];
        regions = temp
        selectedRegionId = regions[0].id
        getLocals()
    })();
</script>

<div class="container-fluid">
    <select name="region" bind:value={selectedRegionId} on:change={getLocals}>
        {#each regions as region,i}
        <option value={region.id}>{region.regionName}</option>
        {/each}
    </select>
    <select name="local" bind:value={selectedLocalId} on:change={getStores}>
        {#each locals as local,i}
        <option value={local.id}>{local.localName}</option>
        {/each}
    </select>
    <Table title={tableName} fields={tableField} values={tableValues}/>
</div>