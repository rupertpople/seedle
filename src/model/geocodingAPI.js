import apiKey from "../API/geocodingAPIKey.js";

class GeocodingAPI {
    constructor(postcode) {
        this.postcode = postcode
    }

    fetchGeolocation(query, callback, errorCallback) {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.postcode},+CA&key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            console.log("Load", data);
            callback(data.response.results);
        })
        .catch(() => {
            console.error("Error");
            errorCallback();
        });
    }
}
   
export default GeocodingAPI;