import React from "react";
import { useEffect, useState } from 'react';
import GeocodingAPI from "../model/geocodingAPI";
import GeocodingModel from "../model/geocodingModel";

const useGeolocation = () => {
    const [geolocation, setGeolocation] = useState([]);

    const fetchGeolocation = async () => {
        const geocode = new GeocodingModel(new GeocodingAPI('w149ef'))
        const res = await geocode.getGeolocation();
        setGeolocation(res.geolocation);
    }

    useEffect(() => {fetchGeolocation()}, []);

    return [geolocation]
};

export default useGeolocation;

