import apiKey from "../API/geocodingAPIKey.js";
import fetch from "node-fetch";


class GeocodingAPI {
    constructor(postcode) {
        this.postcode = postcode
    }

    fetchGeolocation(query = this.postcode) {
        console.log(query)
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${apiKey}`)
        .then((response) => response.json())
    }
}

   
export default GeocodingAPI;