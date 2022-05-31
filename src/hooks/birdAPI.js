import React from "react";
import { useEffect, useState } from 'react';
import BirdAPI from "../model/birdAPI";
import BirdModel from "../model/birdModel";

const useBirds= () => {
    const [birds, setBirds] = useState([]);

    const fetchBirds= async () => {
        const birds= new BirdModel(new BirdAPI('lat=51.5074&lon=0.1278'))
        const res = await birds.getBirds();
        setBirds(res.geolocation);
    }

    useEffect(() => {fetchBirds()}, []);

    return [birds]
};

export default useBirds;