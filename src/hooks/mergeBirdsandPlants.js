import React from "react";
import { useEffect, useState } from 'react';


const mergePlantsandBirds = () => {
    const [plantsandbirds, setPlantsandBirds] = useState([]);

    const merge = async (birds, plants) => {
        const mergedarrays = birds.concat(plants)
        mergedarrays.sort(function(a, b) {
            var commonNameA = a.commonName.toUpperCase();
            var commonNameB = b.commonName.toUpperCase();
            return (commonNameA < commonNameB) ? -1 : (commonNameA > commonNameB) ? 1 : 0;
        });
        setPlantsandBirds(mergedarrays)
        return mergedarrays
    }

    useEffect(() => {merge()}, []);

    return {
        merge
    }
}

export default mergePlantsandBirds;