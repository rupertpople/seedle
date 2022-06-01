import React from "react";
import { useEffect, useState } from 'react';
import WikipediaImageAPI from "../model/wikipediaImageAPI";
import WikipediaImageModel from "../model/wikipediaImageModel";

const useImage = () => {
    const [image, setImage] = useState([]);

    const fetchImage= async () => {
        const images = new WikipediaImageModel (new WikipediaImageAPI('tiger'))
        const res = await images.getImage();
        setImage(res);
    }

    useEffect(() => {fetchImage()}, []);

    return [image]
};

export default useImage;