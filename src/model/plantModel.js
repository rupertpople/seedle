class PlantModel{
    constructor(birdAPI){
        this.birdAPI= birdAPI
    }

    getPlants(query) {
        this.birdAPI.fetchPlants(
            query,
            (data) => {
              this.formatPlants(data);
              this.viewPlants();
            },
            () => {
              this.displayError();
            }
          );
    }

    formatPlants(data){
      this.plants = data
    }

    viewPlants(){
      return this.plants
    }
}

export default PlantModel