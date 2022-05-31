class WikipediaImageModel{
    constructor(wikiAPI){
        this.wikiAPI= wikiAPI
    }

    getImage(query) {
        this.wikiAPI.fetchImage(
            query,
            (data) => {
              this.formatImage(data);
              this.viewImage();
            },
            () => {
              this.displayError();
            }
          );
    }

    formatImage(data){
      console.log(data)
      }
      

    viewImage(){
      return this.image
    }

    displayError(){
        console.log('Request Failed')
    }
}

export default WikipediaImageModel