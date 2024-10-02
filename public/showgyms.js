let map;
let service;
let infowindow;

function initMap() {
    // Create the map centered at a default location
    const defaultLocation = new google.maps.LatLng(-33.867, 151.195);
    map = new google.maps.Map(document.getElementById('map'), {
        center: defaultLocation,
        zoom: 15
    });

    // Try HTML5 geolocation to get the user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(pos);
                findGyms(pos);
            },
            () => {
                handleLocationError(true, map.getCenter());
            }
        );
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos) {
    infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: browserHasGeolocation
            ? 'Error: The Geolocation service failed.'
            : 'Error: Your browser doesn\'t support geolocation.'
    });
}

function findGyms(location) {
    const request = {
        location: location,
        radius: '5000',
        type: ['gym']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    });
}

function createMarker(place) {
    const placeLoc = place.geometry.location;
    const marker = new google.maps.Marker({
        map: map,
        position: placeLoc
    });

    google.maps.event.addListener(marker, 'click', () => {
        infowindow.setContent(place.name);
        infowindow.open(map, marker);
    });
}

// Initialize the map when the window loads
window.onload = initMap;
