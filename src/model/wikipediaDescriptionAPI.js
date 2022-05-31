import fetch from "node-fetch";

class WikipediaDescriptionAPI{
    constructor(name) {
        this.name = name
    }

    fetchDescription(query = this.name, callback, errorCallback) {
        fetch(`https://en.wikipedia.org/w/api.php?format=xml&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${query}&origin=* `)
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
   
export default WikipediaDescriptionAPI;