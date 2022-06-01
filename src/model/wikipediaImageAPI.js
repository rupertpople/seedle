// import fetch from "node-fetch";


class WikipediaImageAPI{
    constructor(name) {
        this.name = name
    }

    fetchImage(query = this.name) {
        return fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&format=json&prop=pageimages&titles=${query}&pithumbsize=500`)
        .then((response) => response.json())
    }    
}
   
export default WikipediaImageAPI;