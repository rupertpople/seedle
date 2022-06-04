import fetch from "node-fetch";

class PlantAPI {
    constructor(geolocation) {
        this.geolocation = geolocation
    }

    fetchPlants(query = this.geolocation) {
        return fetch(`https://records-ws.nbnatlas.org/explore/group/Plants?${query}&radius=5.0&start=0&pageSize=20`)
        .then((response) => response.json())
    }

}
   
export default PlantAPI;