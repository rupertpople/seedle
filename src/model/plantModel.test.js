import PlantAPI from "./plantAPI";
import PlantModel from "./plantModel";
import {jest} from '@jest/globals'
require('jest-fetch-mock').enableMocks();

jest.mock("./plantAPI")
let mockAPI = new PlantAPI("lat=51.5074&lon=0.1278")


describe("PlantModel", () => {

    it('constructs with PlantAPI as input', () => {
        const model = new PlantModel(mockAPI);
        expect(model.plantAPI).toEqual(mockAPI);
    })
    
    it('#formatPlants converts JSON object to desired output', () => {
        const mockedData = [
            {commonName: "Field Maple", name: "Acer campestre", kingdom:"Plantae", family:"Sapindaceae", count:"10" }
        ]
        const model = new PlantModel(mockAPI);
        expect(model.formatPlants(mockedData)).toEqual([[{commonName: "Field Maple", latinName: "Acer campestre", kingdom:"Plantae", family:"Sapindaceae", count:"10" }]])    
    })
})