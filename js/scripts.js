$('#report-button').on('click', function() {
alert('https://www1.nyc.gov/site/immigrants/about/annual-report.page');
});

mapboxgl.accessToken = 'pk.eyJ1IjoibWVhZ2FuYmVlIiwiYSI6ImNqdWQ5NWNjYTBmZTQzeXJ5YTdoZmo2ZnIifQ.2QCTx5st31pRF3nT1mZDjQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v9',
center: [-73.907089,40.739844],
zoom: 10

});

var marker = new mapboxgl.Marker()
  .setLngLat([-73.8523193, 40.7362691])
  .addTo(map);
