class BirdAPI {
    constructor(lat, long) {
        this.location = `lat=${lat}&lon=${long}`
    }

    fetchBirds(query, callback, errorCallback) {
        fetch(`https://records-ws.nbnatlas.org/explore/group/Birds?${this.location}&radius=5.0&start=0`)
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