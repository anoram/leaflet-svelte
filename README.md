## Quick Start

Install `npm i @anoram/leaflet-svelte`

```html
<script>
import Map from '@anoram/leaflet-svelte'
let options={
  center: [13,80],
  markers: [
    {
      lat: 13,
      lng: 80
    }
  ],
  mapID: "map"
}
</script>
<style>
  .map {
    height: 600px;
    width: auto;
  }
</style>
<div class="map">
  <Map {options} />
</div>

```

## Demo and other instructions

[https://leaflet.anoram.com](https://leaflet.anoram.com)



