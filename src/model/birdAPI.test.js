import BirdAPI from "./birdAPI";
require('jest-fetch-mock').enableMocks();

describe("BirdAPI", () => {
    it('Constructs with longititude and latitude as an argument', () => {
        const API = new BirdAPI('lat=51.5074&lon=0.1278');
        expect(API.geolocation).toEqual('lat=51.5074&lon=0.1278');
    })

    it('#Returns list of birds in JS object', () => {
        const API = new BirdAPI('lat=51.5074&lon=0.1278');
        fetch.mockResponseOnce(
            JSON.stringify({
                response: { results: "test"}
            }))
        API.fetchBirds("", (data) => {
            expect(data).toEqual("test")
        })
    })

})