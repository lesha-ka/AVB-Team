document.addEventListener('DOMContentLoaded', () => {
    if ($('#map').length) {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYXBtZWRpYSIsImEiOiJjbDc0YXBqMnUxZzd1M29veWNzc3VsYTVxIn0.DcWO19SF7jrcnxwzR_41YQ';
            const point = [9.9107958696649, 53.559283789852294];
            const map = new mapboxgl.Map({
                container: 'map',
                // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
                style: 'mapbox://styles/mapbox/light-v10',
                center: point,
                zoom: 12
            });
            
            // create the popup
            const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML("<h4>Friedensallee 271</h4><p>Friedensallee 271, 22763 Hamburg, Германия</p>")
            
            // create DOM element for the marker
            const el = document.createElement('div');
            el.id = 'map-pin';
            
            // create the marker
            new mapboxgl.Marker(el)
            .setLngLat(point)
            .setPopup(popup) // sets a popup on this marker
            .addTo(map);
    };
});