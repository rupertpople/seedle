//import React from "react";
import GeocodingAPI from "../model/geocodingAPI";
import GeocodingModel from "../model/geocodingModel";

const useGeolocation = () => {
    
    const fetchGeolocation = async (postcode) => {
        const geocode = new GeocodingModel(new GeocodingAPI(postcode))
        const res = await geocode.getGeolocation();
        return res;
    }

    return {
        fetchGeolocation        
    }
};

export default useGeolocation;

