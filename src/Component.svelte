<script>
  import LoadSdk from "./LoadSdk.svelte";
  import { createEventDispatcher } from "svelte";

  let L = {};
  let map = "";
  const dispatch = createEventDispatcher();

  export let options;

  let {
    zoom = 13,
    maxZoom = 19,
    minZoom = 1,
    mapID = "map",
    attributionControl = true,
    center = [0, 0],
    markers,
    recenter = false,
    scrollWheelZoom = true,
    tileLayer = {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
    controls = {
      zoomControl: true,
      position: "topleft",
      scale: false,
    },
  } = options;

  function initialise() {
    setTimeout(() => {
      L = window["L"];

      createMap();
      dispatch("ready");
    }, 1);
  }

  function createMap() {
    map = L.map(mapID, {
      attributionControl,
      zoomControl: controls.zoomControl,
      minZoom,
      maxZoom,
    }).setView(center, zoom);
    L.tileLayer(tileLayer.url, {
      attribution: tileLayer.attribution,
    }).addTo(map);

    if (!scrollWheelZoom) {
      map.scrollWheelZoom.disable();
    }
   
    let controlElement = L.control;
    if(!controls.zoomControl){
      controlElement().remove()
    }
    if (controls.scale) {
      controlElement.scale({ position: controls.position }).addTo(map);
    }
    if (controls.zoomControl && controls.position) {
      map.removeControl(map.zoomControl)
      controlElement
        .zoom({
          position: controls.position,
        })
        .addTo(map);
      
    }

  

   
    let marker;
    let icon;
    let markersArray = [];
    let bounds;
    let defaultIcon = {
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    };
    if (markers) {
      markers.map((e) => {
        markersArray.push([e.lat, e.lng]);
        if (e.icon) {
          icon = L.icon(e.icon);
        } else {
          icon = L.icon(defaultIcon);
        }
        let marker = new L.marker(
          [e.lat, e.lng],

          { icon }
        );
        if (e.popup) {
          marker
            .bindPopup(e.popup.text, { closeOnClick: false, autoClose: false })
            .addTo(map);
          if (e.popup.isOpen) {
            marker.openPopup();
          }
        }
        marker.addTo(map);
      });
      if (recenter) {
        if (markersArray.length == 1) {
          map.panTo(L.latLng(markersArray[0][0], markersArray[0][1]));
          map.setZoom(zoom);
        } else {
          bounds = new L.LatLngBounds(markersArray);
          map.fitBounds(bounds);
        }
      }
    }
  }

  function resizeMap() {
    if (map) {
      map.invalidateSize();
    }
  }
</script>

<style>
  .map {
    height: inherit;
    width: inherit;
  }
</style>

<svelte:window on:resize={resizeMap} />

<div class="map" id={mapID} bind:this={mapID} />
<LoadSdk on:ready={initialise} />
