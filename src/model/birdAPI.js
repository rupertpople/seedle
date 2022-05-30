import fetch from "node-fetch";

class BirdAPI {
    constructor(geolocation) {
        this.geolocation = geolocation
    }

    fetchBirds(query = this.geolocation, callback, errorCallback) {
        fetch(`https://records-ws.nbnatlas.org/explore/group/Birds?${query}&radius=5.0&start=0`)
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
   
export default BirdAPI;