// import fetch from "node-fetch";


class WikipediaImageAPI{
    constructor(name) {
        this.name = name
    }

    fetchImage(query = this.name, callback, errorCallback) {
        fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&prop=pageimages&titles=${query}&pithumbsize=500`)
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
   
export default WikipediaImageAPI;