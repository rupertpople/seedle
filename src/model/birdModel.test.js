import BirdAPI from "./birdAPI";
import BirdModel from "./birdModel";
import {jest} from '@jest/globals'
require('jest-fetch-mock').enableMocks();

jest.mock("./birdAPI")
let mockAPI = new BirdAPI("lat=51.5074&lon=0.1278")


describe("BirdModel", () => {

    it('constructs with BirdAPI as input', () => {
        const model = new BirdModel(mockAPI);
        expect(model.birdAPI).toEqual(mockAPI);
    })

    it('#formatBirds converts JSON object to desired output', () => {
        const mockedData = 
            [{commonName: "Lesser Redpoll", name: "Acanthis cabaret", kingdom:"Animalia", family:"Fringillidae", count:"10" }]
        
        const model = new BirdModel(mockAPI);
        expect(model.formatBirds(mockedData)).toEqual([{commonName: "Lesser Redpoll", latinName: "Acanthis cabaret", kingdom:"Animalia", family:"Fringillidae", count:"10" }])
    })
})