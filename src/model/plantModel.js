class PlantModel{
    constructor(plantAPI){
        this.plantAPI= plantAPI
    }

    getPlants(query) {
      return this.plantAPI.fetchPlants(query)
      .then(data => this.formatPlants(data))
      }
  

    formatPlants(data){
      const plantsInfo = data.map(plant => ({ 
          commonName: plant.commonName, latinName: plant.name, kingdom: plant.kingdom, family: plant.family, count: plant.count }))
      return plantsInfo
      }
}

export default PlantModel