function getLocation() {
    const output = document.getElementById("locationOutput");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                output.innerHTML = 
                "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;
            },
            function() {
                output.innerHTML = "Unable to retrieve location.";
            }
        );
    } else {
        output.innerHTML = "Geolocation not supported.";
    }
}
