mapboxgl.accessToken = 'pk.eyJ1Ijoic2FsdGlrYWxwYWdhIiwiYSI6ImNscmx5eXFjbDBocncya24xNGRzNHpkbnoifQ.E5LLPNFvdVEqHzYbtxyNSA';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
var marker = new mapboxgl.Marker()
    .setLngLat([-74.5, 40])
    .addTo(map);

var popup = new mapboxgl.Popup({ offset: 25 })
    .setText('Bu konum hakkında daha fazla bilgi.');

marker.setPopup(popup); // Marker'a Popup bağlayın.
