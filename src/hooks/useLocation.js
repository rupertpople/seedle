import GeocodingAPI from "../model/geocodingAPI";
import GeocodingModel from "../model/geocodingModel";

const useLiveLocation = () => {

    // const [location, setLocation] = useState(null)

    const getLiveLocation = () => {
        navigator.geolocation.getCurrentPosition(function(position){
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            console.log(latitude)
            console.log(longitude)
            console.log(position)
            
        })
    }
    return {
        getLiveLocation
    }
}
    
export default useLiveLocation;