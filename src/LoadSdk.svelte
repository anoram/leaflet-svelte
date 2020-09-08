<script>
  import loader from "@beyonk/async-script-loader";
  import { createEventDispatcher, onMount } from "svelte";

  import { mapsLoaded, mapsLoading } from "./stores.js";

  const dispatch = createEventDispatcher();

  $: $mapsLoaded && dispatch("ready");
  let L = {};
    let map = "";
  onMount(() => {
  
    if ($mapsLoaded) {
      dispatch("ready");
    }
    if (!$mapsLoading) {
      mapsLoading.set(true);
      loader(
        [
          {
            type: "style",
            url: `https://unpkg.com/leaflet@1.7.1/dist/leaflet.css`,
          },
          {
            type: "script",
            url: `https://unpkg.com/leaflet@1.7.1/dist/leaflet.js`,
          },
        ],
        () => {
          return false;
        },
        () => {
  
          L = window.L;
          map = L.map;
          mapsLoaded.set(true);
          return true;
        }
      );
    }
  });
</script>

