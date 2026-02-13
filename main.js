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
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});
