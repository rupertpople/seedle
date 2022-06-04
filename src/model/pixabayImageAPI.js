import fetch from "node-fetch";


class pixabayImageAPI{
    constructor(name) {
        this.name = name
    }

    fetchImage(query = this.name) {
        return fetch(`https://pixabay.com/api/?key=4741945-6b9c5691104e48cec7b9a96d6=${query}&image_type=photo&pretty=true`)
        .then((response) => response.json())
    }    
}
   
export default pixabayImageAPI;