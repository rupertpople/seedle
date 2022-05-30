class GeocodingModel{
    constructor(geocodingAPI){
        this.geocodingAPI = geocodingAPI
        this.postcode = geocodingAPI.postcode
    }

    getGeolocation(query) {
      this.geocodingAPI.fetchGeolocation(
            query,
            (data) => {
              this.formatGeolocation(data);
              this.viewGeolocation();
            },
            () => {
              this.displayError();
            }
          );
    }

    formatGeolocation(data){
      const geometry = data[0].geometry
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