
// LONGITUDE -180 to + 180
function generateRandomLong() {
    var num = (Math.random()*360 - 180).toFixed(3);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
}

// LATITUDE -90 to +90
function generateRandomLat() {
    var num = (Math.random()*180 - 90).toFixed(3);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
}

// Coordinate Generation
function generateRandomCoords() {
    let lat = generateRandomLat()
    let long = generateRandomLong()

    return {
        lat: lat,
        lng: long,
    }
}

export {generateRandomCoords}