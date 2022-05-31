class GeocodingModel{
    constructor(geocodingAPI){
        this.geocodingAPI = geocodingAPI
        this.postcode = geocodingAPI.postcode
        this.geolocation = ""
    }

    getGeolocation(query) {
      return this.geocodingAPI.fetchGeolocation(query)
      .then((data => {
        this.formatGeolocation(data);
        return this.viewGeolocation();
      }))
    }

    formatGeolocation(data){
      const geometry = data.results[0].geometry
      const lat = geometry.location.lat
      const lat4 = lat.toFixed(4)
      const long = geometry.location.lng
      const long4 = long.toFixed(4)
      this.geolocation = `lat=${lat4}&lon=${long4}`
    }

    viewGeolocation(){
      return this.geolocation
    }

    displayError(){
      console.log('Failed request')
    }
}

export default GeocodingModel