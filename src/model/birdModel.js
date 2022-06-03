class BirdModel{
    constructor(birdAPI){
        this.birdAPI= birdAPI
    }

    getBirds(query) {
      return this.birdAPI.fetchBirds(query)
      .then(data => this.formatBirds(data));
      }

    formatBirds(data){
      const birdsInfo = data.map(bird => ({ 
          commonName: bird.commonName, latinName: bird.name, kingdom: bird.kingdom, family: bird.family, count: bird.count }))
      return birdsInfo
      }
}

export default BirdModel