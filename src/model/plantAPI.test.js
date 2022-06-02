import PlantAPI from "./plantAPI";
require('jest-fetch-mock').enableMocks();

describe("PlantAPI", () => {
    it('Constructs with longititude and latitude as an argument', () => {
        const API = new PlantAPI('lat=51.5074&lon=0.1278');
        expect(API.geolocation).toEqual('lat=51.5074&lon=0.1278');
    })

    it('#Returns list of plants in JS object', () => {
        const API = new PlantAPI('lat=51.5074&lon=0.1278');
        fetch.mockResponseOnce(
            JSON.stringify({
                response: { results: "test"}
            }))
        API.fetchPlants("", (data) => {
            expect(data).toEqual("test")
        })
    })

})