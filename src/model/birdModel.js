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
      const birdsInfo = data.map(bird => ({ 
          commonName: bird.commonName, latinName: bird.name, kingdom: bird.kingdom, family: bird.family }))
      this.birdsInfo = birdsInfo
      }
      

    viewBirds(){
      return this.birdsInfo
    }

    displayError(){
        console.log('Request Failed')
    }
}

export default BirdModel