import fetch from "node-fetch";

class PlantAPI {
    constructor(geolocation, radius = 10) {
        this.geolocation = geolocation
        this.radius = radius
    }

    fetchPlants(query = this.geolocation) {
        return fetch(`https://records-ws.nbnatlas.org/explore/group/Plants?${query}&radius=${this.radius}&start=0&pageSize=20`)
        .then((response) => response.json())
    }

}
   
export default PlantAPI;