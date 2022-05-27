import GeocodingAPI from "./geocodingAPI";

describe("GeocodingAPI", () => {
    it('test', () => {
        const geocode = new GeocodingAPI('w149ef');
        console.log(geocode.fetchGeolocation())
    })
})
