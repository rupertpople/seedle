import apiKey from "../API/geocodingAPIKey.js";
import fetch from "node-fetch";


class GeocodingAPI {
    constructor(postcode) {
        this.postcode = postcode
    }

    fetchGeolocation(query = this.postcode, callback, errorCallback) {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            console.log("Load", data);
            callback(data.results);
        })
        .catch(() => {
                console.error("Error");
                errorCallback();
              });
        }
}

   
export default GeocodingAPI;