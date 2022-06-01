import React from "react";
import { useEffect, useState } from 'react';
import WikipediaDescriptionAPI from "../model/wikipediaDescriptionAPI";
import WikipediaDescriptionModel from "../model/wikipediaDescriptionModel";

const useDescription= () => {
    const [description, setDescription] = useState([]);

    const fetchDescription= async () => {
        const plants = new WikipediaDescriptionModel (new WikipediaDescriptionAPI('tiger'))
        const res = await plants.getDescription();
        setDescription(res);
    }

    useEffect(() => {fetchDescription()}, []);

    return [description]
};

export default useDescription;