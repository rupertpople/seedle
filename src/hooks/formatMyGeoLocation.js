const formatMyGeoLocation= () => {
    
    const formattedLocation = async (geolocation) => {
        console.log(1)
        const lat = await JSON.stringify(geolocation.coordinates.lat)
        const long = await JSON.stringify(geolocation.coordinates.lng)
        const lat4 = parseInt(lat).toFixed(4)
        const long4 = parseInt(long).toFixed(4)
        const location = await `lat=${lat4}&lon=${long4}`
        return location
    }    

    return {  formattedLocation }
};

export default formatMyGeoLocation;