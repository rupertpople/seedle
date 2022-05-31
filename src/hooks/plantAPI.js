import React from "react";
import { useEffect, useState } from 'react';
import PlantAPI from "../model/plantAPI";
import PlantModel from "../model/plantModel";

const usePlants= () => {
    const [plants, setPlants] = useState([]);

    const fetchPlants= async () => {
        const plants = new PlantModel(new PlantAPI('lat=51.5074&lon=0.1278'))
        const res = await plants.getPlants();
        setPlants(res);
    }

    useEffect(() => {fetchPlants()}, []);

    return [plants]
};

export default usePlants;