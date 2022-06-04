import React from "react";
import { useState } from 'react';
import WikipediaDescriptionAPI from "../model/wikipediaDescriptionAPI";
import WikipediaDescriptionModel from "../model/wikipediaDescriptionModel";
import WikipediaImageAPI from "../model/wikipediaImageAPI";
import WikipediaImageModel from "../model/wikipediaImageModel";
import PixabayImageAPI from "../model/pixabayImageAPI";
import PixabayImageModel from "../model/pixabayImageModel";

const addWikiDescriptionandImage = () => {
    
    const fetchDescription = async (species) => {
        const plants = new WikipediaDescriptionModel (new WikipediaDescriptionAPI(species))
        const res = await plants.getDescription();
        return(res);
    }

    const fetchWikiImage = async (species) => {
        const images = new WikipediaImageModel (new WikipediaImageAPI(species))
        const res = await images.getImage();
        return(res);
    }

    const fetchPixabayImage = async (species) => {
        const images = new PixabayImageModel (new PixabayImageAPI(species))
        const res = await images.getImage();
        return(res);
    }

    const addDescriptionandImage = async (birdsandplants) => {
        const array = await Promise.all(birdsandplants.map( async species => ({
            commonName: species.commonName, latinName: species.latinName, kingdom: species.kingdom, family: species.family, count: species.count,
            image: await fetchWikiImage(species.commonName), description: await fetchDescription(species.commonName)})))
            console.log(array)
        await Promise.all(array.forEach(async species => {
            if (species.image === undefined) {
                species.image = await fetchPixabayImage(species.commonName)
            }
        }))
        return [array]
    }
    
    return {
        addDescriptionandImage
    }
}

export default addWikiDescriptionandImage;
