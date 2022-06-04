class WikipediaImageModel{
    constructor(pixabayAPI){
        this.pixabayAPI = pixabayAPI
    }

    getImage(query) {
        return this.pixabayAPI.fetchImage(query)
        .then(data => this.formatImage(data))
    }

    formatImage(data){
      const image = data.hits[1].largeImageURL
      return image
  }
      
}

export default WikipediaImageModel