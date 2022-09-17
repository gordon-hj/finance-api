<script>
	import { afterUpdate } from 'svelte';

    export let regionCode
    let locals = []
	
	afterUpdate(() => { getLocals() })

    let testLocalData = [
        [
            {id:0, localName:"local_test"},
            {id:1, localName:"local_temp"}
        ],
        [
            {id:2, localName:"local_test1"},
            {id:3, localName:"local_temp1"}
        ]
    ]

    let getLocals = () => {
        locals = testLocalData[regionCode];
    };
</script>

<div class="container-fluid">
    <table>
        <tbody>
            <tr>
                <th>ID</th>
                <th>이름</th>
            </tr>
            {#each locals as local,i}
            <tr>
                <td>{local.id}</td>  
                <td>{local.localName}</td>  
            </tr>    
            {/each}
        </tbody>
    </table>
</div>