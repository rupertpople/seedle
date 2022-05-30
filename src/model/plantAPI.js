class PlantAPI {
    constructor(geolocation) {
        this.geolocation = geolocation
    }

    fetchPlants(query = this.geolocation, callback, errorCallback) {
        fetch(`https://records-ws.nbnatlas.org/explore/group/Plants?${query}&radius=5.0&start=0`)
        .then((response) => response.json())
        .then((data) => {
            console.log("Load", data);
            callback(data);
        })
        .catch(() => {
            console.error("Error");
            errorCallback();
        });
    }    
}
   
export default PlantAPI;