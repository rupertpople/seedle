const formatMyGeoLocation= () => {
    
    const formattedLocation = async (geolocation) => {
        console.log(1)
        const lat = await JSON.stringify(geolocation.coordinates.lat)
        const long = await JSON.stringify(geolocation.coordinates.lng)
        console.log(lat)
        return lat
    }    

    return {  formattedLocation }
};

export default formatMyGeoLocation;