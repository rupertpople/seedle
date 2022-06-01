import fetch from "node-fetch";

class WikipediaDescriptionAPI{
    constructor(name) {
        this.name = name
    }

    fetchDescription(query = this.name) {
       return fetch(`https://en.wikipedia.org/w/api.php?format=xml&action=query&format=json&prop=extracts&exintro&explaintext&redirects=1&titles=${query}&origin=*`)
        .then((response) => response.json())
    }    
}
   
export default WikipediaDescriptionAPI;