import wikipediaDescriptionAPI from "./wikipediaDescriptionAPI";
require('jest-fetch-mock').enableMocks();

describe("wikipediaDescriptionAPI", () => {
    it('Constructs with bird or plant as an argument', () => {
        const API = new wikipediaDescriptionAPI('plant');
        expect(API.name).toEqual('plant');
    })

    it('#Returns description in JS object', () => {
        const API = new wikipediaDescriptionAPI('plant');
        fetch.mockResponseOnce(
            JSON.stringify({
                response: { results: "test"}
            }))
        API.fetchDescription("", (data) => {
            expect(data).toEqual("test")
        })
    })

})