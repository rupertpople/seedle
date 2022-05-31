import { useEffect, useState } from 'react';
import GeocodingAPI from "../model/geocodingAPI";
import GeocodingModel from "../model/geocodingModel";

const useGeolocation = () => {
    const [geolocation, setGeolocation] = useState([]);

    const fetchGeolocation= async () => {
        const res = await GeocodingModel(new GeocodingAPI('w149ef')).getGeolocation();
        const json = await res.json();
        setGeolocation(json.geolocation);
    }

    useEffect(() => fetchGeolocation());
    
    return [geolocation]
};
