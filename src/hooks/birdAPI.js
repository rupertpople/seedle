//import React from "react";
import BirdAPI from "../model/birdAPI";
import BirdModel from "../model/birdModel";

const useBirds= () => {
    
    const fetchBirds= async (geolocation) => {
        const birds= new BirdModel(new BirdAPI(geolocation))//'lat=51.5074&lon=0.1278'))
        const res = await birds.getBirds();
        return res;
    }    

    return {  fetchBirds }
};

export default useBirds;