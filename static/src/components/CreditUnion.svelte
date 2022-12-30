<script>
    import Map from './Map.svelte';
    import Table from './Table.svelte' 

    let selectedLatitude, selectedLongtitude, selectedTitle

    let regions = []
    let selectedRegionId

    let locals = []
    let selectedLocalId

    let stores = []
    let selectedStoreId

    let tableName = '지역을 입력하세요'
    const tableField = ['id', 'name']
    let tableValues = []

    let getLocation = (async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleLocation);
        } else {
            console.log("Geolocation is not supported by this browser.");
            alert("내 위치 확인이 지원되지 않는 브라우저입니다.");
        }
    })

    let handleLocation = (location) => {
        console.log("Latitude: " + location.coords.latitude + "Longitude: " + location.coords.longitude);
        getAddress(location.coords.longitude, location.coords.latitude)
    }

    let getAddress = (async (longitude, latitude) => {
        // naver cors 미허용 -> FINANCE-API 옮기기
        // let uri = "https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=" + longitude + "," + latitude + "&output=json"
        // fetch(
        //     uri, {
        //         headers : {
        //             'X-NCP-APIGW-API-KEY-ID': 'wnc6juf448',
        //             'X-NCP-APIGW-API-KEY': 'XWZg0FnF7zr9tHINeSC1QrGIKN1x9g1sQkeluC0Q'
        //         }
        //     }
        // ).then ((response) => {
        //     console.log(response)
        // })
    })

    let selectStore = (async () => {
        let selectedStore = stores.find(store => store.id == selectedStoreId)
        selectedTitle = selectedStore.storeName
        selectedLatitude = selectedStore.latitude
        selectedLongtitude = selectedStore.longitude
        console.log(selectedTitle)
    })

    let tempStores = [
        [{id:0, storeName:"region1Local1store0", longitude:126.8788277, latitude:37.5285568}, {id:4, storeName:"region1Local1store1", longitude:127.1107116, latitude:37.3956535}],
        [{id:1, storeName:"region1Local2store0", longitude:127.1107116, latitude:37.3956535}, {id:5, storeName:"region1Local2store1", longitude:126.8788277, latitude:37.5285568}],
        [{id:2, storeName:"region2Local3store0", longitude:127.1107116, latitude:37.3956535}, {id:6, storeName:"region2Local3store1", longitude:126.8788277, latitude:37.5285568}],
        [{id:3, storeName:"region2Local4store0", longitude:127.1107116, latitude:37.3956535}, {id:7, storeName:"region2Local4store1", longitude:126.8788277, latitude:37.5285568}],
    ];

    let getStores = (async () => {
        stores = tempStores[selectedLocalId]
        tableName = regions.find((it) => it.id == selectedRegionId).regionName + " " + locals.find((it) => it.id == selectedLocalId).localName
        tableValues = stores.map((it) => [it.id, it.storeName])
        selectedStoreId = stores[0].id
        selectStore()
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
    <button class="btn btn-primary" on:click={getLocation}>현재 위치</button>
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
    {#key selectedTitle}
        <Map title={selectedTitle} longitude={selectedLongtitude} latitude={selectedLatitude} />
    {/key}
    <Table title={tableName} fields={tableField} values={tableValues}/>
</div>