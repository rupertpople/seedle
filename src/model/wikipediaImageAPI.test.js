import wikipediaImageAPI from "./wikipediaImageAPI";
require('jest-fetch-mock').enableMocks();

describe("wikipediaImageAPI ", () => {
    it('Constructs with bird or plant as an argument', () => {
        const API = new wikipediaImageAPI ('plant');
        expect(API.name).toEqual('plant');
    })

    it('#Returns image source in JS object', () => {
        const API = new wikipediaImageAPI ('plant');
        fetch.mockResponseOnce(
            JSON.stringify({
                response: { results: "test"}
            }))
        API.fetchImage("", (data) => {
            expect(data).toEqual("test")
        })
    })

})