<script>
    import CreditUnionLocal from "./CreditUnionLocal.svelte";

    let regionCode = 0
    let regions = []

    let getRegions = (async () => {
        let temp = [
            {id:0, regionName:"test"},
            {id:1, regionName:"temp"}
        ];
        regions = temp
        regionCode = temp[0].id;
    })();
</script>

<div class="container-fluid">
    <table>
        <tbody>
            <tr>
                <th>ID</th>
                <th>이름</th>
            </tr>
            {#each regions as region,i}
            <tr on:click={() => {regionCode = region.id}}>
                <td>{region.id}</td>  
                <td>{region.regionName}</td>  
            </tr>    
            {/each}
        </tbody>
    </table>
    <CreditUnionLocal regionCode={regionCode} />
</div>