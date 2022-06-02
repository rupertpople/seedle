import GeocodingAPI from "./geocodingAPI";
require('jest-fetch-mock').enableMocks();

describe("GeocodingAPI", () => {
    it('Constructs with postcode as an argument', () => {
        const API = new GeocodingAPI('w149ef');
        expect(API.postcode).toEqual('w149ef');
    })

    it('#fetchGeolocation returns geolocation based on postcode', () => {
        const API = new GeocodingAPI('w149ef');
        fetch.mockResponseOnce(
            JSON.stringify({
                response: { results: "test"}
            }))
        API.fetchGeolocation("", (data) => {
            expect(data).toEqual("test")
        })
    })

})