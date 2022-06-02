import WikiAPI from "./wikipediaDescriptionAPI";
import WikiModel from "./wikipediaDescriptionModel";
import {jest} from '@jest/globals'
require('jest-fetch-mock').enableMocks();

jest.mock("./wikipediaDescriptionAPI")
let mockAPI = new WikiAPI("plant")

describe("WikiDescriptionModel", () => {

    it('constructs with wikiDescriptionAPI as input', () => {
        const model = new WikiModel(mockAPI);
        expect(model.wikiAPI).toEqual(mockAPI);
    })
    
    it('#formatDescription converts JSON object to image source url', () => {
        const mockedData = [
            {pages: {"300075":{ extract:'description'}}}
        ]
        const model = new WikiModel(mockAPI);
        console.log(model)
        expect(model.formatDescription(mockedData)).toEqual('description')    
    })
})