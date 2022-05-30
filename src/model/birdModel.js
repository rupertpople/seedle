class BirdModel{
    constructor(birdAPI){
        this.birdAPI= birdAPI
    }

    getBirds(query) {
        this.birdAPI.fetchBirds(
            query,
            (data) => {
              this.formatBirds(data);
              this.viewBirds();
            },
            () => {
              this.displayError();
            }
          );
    }

    formatBirds(data){
      this.birds = data
    }

    viewBirds(){
      return this.birds
    }

    displayError(){
        console.log('Request Failed')
    }
}

export default BirdModel