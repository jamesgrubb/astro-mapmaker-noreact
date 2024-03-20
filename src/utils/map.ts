import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = import.meta.env.PUBLIC_MAPBOX_ACCESS_TOKEN;


    const map = new mapboxgl.Map({
        container: 'map',
        style: {
            version: 8,
            sources: {},
            layers: []
        },
        center: [0, 0],
        zoom: 1,
        interactive: false,
        renderWorldCopies: false
    })
    



export default map;