import WikiAPI from "./wikipediaImageAPI";
import WikiModel from "./wikipediaImageModel";
import {jest} from '@jest/globals'
require('jest-fetch-mock').enableMocks();

jest.mock("./wikipediaImageAPI")
let mockAPI = new WikiAPI("plant")

describe("WikiImageModel", () => {

    it('constructs with wikiDescriptionAPI as input', () => {
        const model = new WikiModel(mockAPI);
        expect(model.wikiAPI).toEqual(mockAPI);
    })

    it('#formatDescription converts JSON object to image source url', () => {
        const mockedData = [
            {query: {pages: {"300075":{ thumbnail: { source: 'url'}}}}}
        ]
        const model = new WikiModel(mockAPI);
        expect(model.formatImage(mockedData)).toEqual('url')    
    })
})