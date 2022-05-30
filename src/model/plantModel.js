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
        const plantsInfo = data.map(plant => ({ 
            commonName: plant.commonName, latinName: plant.name, kingdom: plant.kingdom, family: plant.family }))
        this.plantsInfo = plantsInfo
        console.log('1')
        console.log(this.plantsInfo)
        }

    viewPlants(){
      return this.plantsInfo
    }

    displayError(){
        console.log('Request Failed')
    }
}

export default PlantModel