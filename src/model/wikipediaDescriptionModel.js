class WikipediaDescriptionModel{
    constructor(wikiAPI){
        this.wikiAPI= wikiAPI
    }

    getDescription(query) {
        this.wikiAPI.fetchDescription(
            query,
            (data) => {
              this.formatDescription(data);
              this.viewDescription();
            },
            () => {
              this.displayError();
            }
          );
    }

    formatDescription(data){
      const description = data
      }
      

    viewDescription(){
      return this.birdsInfo
    }

    displayError(){
        console.log('Request Failed')
    }
}

export default WikipediaDescriptionModel