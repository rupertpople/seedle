import React from "react";
import { useEffect, useState } from 'react';
import WikipediaDescriptionAPI from "../model/wikipediaDescriptionAPI";
import WikipediaDescriptionModel from "../model/wikipediaDescriptionModel";
import WikipediaImageAPI from "../model/wikipediaImageAPI";
import WikipediaImageModel from "../model/wikipediaImageModel";

const addWikiDescriptionandImage = () => {

    const fetchDescription = async (species) => {
        const plants = new WikipediaDescriptionModel (new WikipediaDescriptionAPI(species))
        const res = await plants.getDescription();
        return(res);
    }

    const fetchImage= async (species) => {
        const images = new WikipediaImageModel (new WikipediaImageAPI(species))
        const res = await images.getImage();
        return(res);
    }

    const addDescriptionandImage = async (birdsandplants) => {
        const array = await Promise.all(birdsandplants.map( async species => ({
            commonName: species.commonName, latinName: species.name, kingdom: species.kingdom, family: species.family, count: species.count,
            image: await fetchImage(species.commonName), description: await fetchDescription(species.commonName)})))
        return [array]
    }
    

    useEffect(() => {addDescriptionandImage}, []);

    return {
        addDescriptionandImage
    }
}

export default addWikiDescriptionandImage;
