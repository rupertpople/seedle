class WikipediaImageModel{
    constructor(wikiAPI){
        this.wikiAPI= wikiAPI
    }

    getImage(query) {
        return this.wikiAPI.fetchImage(query)
        .then(data => this.formatImage(data))
    }

    formatImage(data){
      const object = Object.assign(
        {}, 
        ...function _flatten(o) { 
          return [].concat(...Object.keys(o)
            .map(k => 
              typeof o[k] === 'object' ?
                _flatten(o[k]) : 
                ({[k]: o[k]})
            )
          );
        }(data)
      )
      const image = object.source
      return image
  }
      
}

export default WikipediaImageModel