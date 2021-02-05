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
    circles,
    recenter = false,
    scrollWheelZoom = true,
    tilelayers = [
      {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
    ],
    controls = {
      zoomControl: true,
      position: "topleft",
      scale: false,
    },
  } = options;

  let icon;
  let markersArray = [];
  let circleArray = [];
  let bounds;
  let defaultIcon = {
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [1, -34],
    shadowSize: [41, 41],
  };

  function initialise() {
    setTimeout(() => {
      L = window["L"];

      createMap();

      dispatch("ready");
    }, 1);
  }
  function makePopup(marker, options) {
    marker
      .bindPopup(options.text, {
        closeOnClick: false,
        autoClose: false,
        ...options,
      })
      .addTo(map);
    if (options.isOpen) {
      marker.openPopup();
    }
  }
  function makeTooltip(marker, options) {
    marker.bindTooltip(options.text, { ...options }).addTo(map);
    if (options.isOpen) {
      marker.openTooltip();
    }
  }
  let m = [];

  export const addMarker = (obj) => {

    obj.markers.map((e, i) => {
      if (e.icon) {
        icon = L.icon(e.icon);
      }

      m[i] = new L.marker([e.lat, e.lng], { icon }).addTo(map);
      if (e.popup) {
        makePopup(m[i], e.popup);
      }
      if (e.tooltip) {
        makeTooltip(m[i], e.tooltip);
      }
    });
  };

  let added = false;

  export const getMap = () => {
    return map;
  };

  export const updateMarkers = (obj) => {
    if (!added) {
      addMarker(obj);
      added = true;
    }

    obj.markers.map((i, k) => {
      m[k].setLatLng(i).update();
      m[k].addTo(map);
    });

  };

  export const setZoom = (x = 5) => {
    map.setZoom(x);
  };
  function createMap() {
    map = L.map(mapID, {
      attributionControl,
      zoomControl: controls.zoomControl,
      minZoom,
      maxZoom,
    }).setView(center, zoom);
    m = L.marker([0, 0]);

    if (tilelayers) {
      tilelayers.map((e) => {
        L.tileLayer(e.url, {
          ...e,
        }).addTo(map);
      });
    }

    if (!scrollWheelZoom) {
      map.scrollWheelZoom.disable();
    }

    let controlElement = L.control;
    if (!controls.zoomControl) {
      controlElement().remove();
    }
    if (controls.scale) {
      controlElement.scale({ position: controls.position }).addTo(map);
    }
    if (controls.zoomControl && controls.position) {
      map.removeControl(map.zoomControl);
      controlElement
        .zoom({
          position: controls.position,
        })
        .addTo(map);
    }

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
          makePopup(marker, e.popup);
        }
        if (e.tooltip) {
          makeTooltip(marker, e.tooltip);
        }
        marker.addTo(map);
      });
    }
    if (circles) {
      circles.map((e) => {
        circleArray.push([e.lat, e.lng]);
        let circle = new L.circle([e.lat, e.lng], { ...e });
        if (e.popup) {
          makePopup(circle, e.popup);
        }
        if (e.tooltip) {
          makeTooltip(circle, e.tooltip);
        }
        circle.addTo(map);
      });
    }

    if (recenter) {
      if (markersArray.length == 1) {
        map.panTo(L.latLng(markersArray[0][0], markersArray[0][1]));
        map.setZoom(zoom);
      } else {
        bounds = new L.LatLngBounds(markersArray);
        map.fitBounds(bounds);
      }
    }
    return map;
  }

  function resizeMap() {
    if (map) {
      map.invalidateSize();
    }
  }
</script>

<svelte:window on:resize={resizeMap} />

<div class="map" id={mapID} bind:this={mapID} />

<LoadSdk on:ready={initialise} />

<style>
  .map {
    height: inherit;
    width: inherit;
  }
</style>
