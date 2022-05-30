import GeocodingAPI from "./geocodingAPI";
import GeocodingModel from "./geocodingModel";

describe("formatAPIChain", () => {
    it('test', async () => {
        const model= new GeocodingModel(new GeocodingAPI('w149ef'));
        const geolocation = await model.displayGeolocation(model.postcode);
        console.log(typeof geolocation)
        expect(geolocation).toEqual('lat=51.4889&lon=0.1278')
    })
    // it('#getBirds', () => {
    //     const object = new formatAPIChain(new GeocodingAPI('w149ef'), new BirdAPI('lat=51.4889&lon=0.1278'));
    //     console.log(object.getBirds());
    // })
})
