import GeocodingAPI from "./geocodingAPI";
import GeocodingModel from "./geocodingModel";
import {jest} from '@jest/globals'
require('jest-fetch-mock').enableMocks();

jest.mock("./geocodingAPI")
let mockAPI = new GeocodingAPI('w149ef')

describe("GeocodingModel", () => {
    beforeEach(() => {
        GeocodingAPI.mockClear();
    })

    it('constructs with geocodingAPI as input and stores the geocoding API and geolocation as "" ', () => {
        const model = new GeocodingModel(mockAPI);
        expect(model.geocodingAPI).toEqual(mockAPI)
        expect(model.geolocation).toEqual("")
    })

    it("#formatGeolocation converts geolocation into usable longitude and latitude string", () => {
        const mockedData = {
            results: [ {geometry: {location: {lat: 1, lng: 2}}}]
        }
        const model = new GeocodingModel(mockAPI);
        model.formatGeolocation(mockedData)
        expect(model.geolocation).toEqual(`lat=1.0000&lon=2.0000`)
    })

    it('#viewGeolocation returns this geolocation', ()=> {
        const mockedData = {
            results: [ {geometry: {location: {lat: 1, lng: 2}}}]
        }
        const model = new GeocodingModel(mockAPI);
        model.formatGeolocation(mockedData)
        expect(model.viewGeolocation()).toEqual(`lat=1.0000&lon=2.0000`)
    } )

})

