import fetch from "node-fetch";

class BirdAPI {
    constructor(geolocation) {
        this.geolocation = geolocation
    }

    fetchBirds(query = this.geolocation) {
        return fetch(`https://records-ws.nbnatlas.org/explore/group/Birds?${query}&radius=5.0&start=0&pageSize=20`)
        .then((response) => response.json())
    }

}    

   
export default BirdAPI;