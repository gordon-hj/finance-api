<script>
    export let title, longitude, latitude

    console.log("test load")
</script>

<div name="map">
    <img src="https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=200&h=200&center={longitude}%20{latitude}&level=13&X-NCP-APIGW-API-KEY-ID=wnc6juf448&markers=type:t|label:{title}|pos:{longitude}%20{latitude}&scale=2">
</div>
