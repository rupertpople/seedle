import PlantAPI from "../model/plantAPI";
import PlantModel from "../model/plantModel";

const usePlants = () => {

    const fetchPlants= async (geolocation) => {
        const plants = new PlantModel(new PlantAPI(geolocation))//'lat=51.5074&lon=0.1278'))
        const res = await plants.getPlants();
        return res;
    }

    return { fetchPlants }
};

export default usePlants;
