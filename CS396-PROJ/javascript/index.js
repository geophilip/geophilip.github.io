  function initMap() {
    // Specify the location for the map's center
    const location = { lat: 37.7749, lng: -122.4194 }; // Example: San Francisco

    // Create a new map and attach it to the 'map' div
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,  // Zoom level
      center: location,  // Center of the map
    });

    // Add a marker to the map at the specified location
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
