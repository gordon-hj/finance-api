<script>
	let menu = ['우리동네 예적금 금리'];
</script>

<div class="list-group list-group-flush">
    {#each menu as m, i}
    <button class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">{m}</button>
    {/each}
</div>