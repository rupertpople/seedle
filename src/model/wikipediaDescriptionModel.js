class WikipediaDescriptionModel{
    constructor(wikiAPI){
        this.wikiAPI= wikiAPI
    }

    getDescription(query) {
        return this.wikiAPI.fetchDescription(query)
        .then((data => {
          return this.formatDescription(data)
        }))
    }

    formatDescription(data){
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
      const description = object.extract
      return description
      }
    
}

export default WikipediaDescriptionModel