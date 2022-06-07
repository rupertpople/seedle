import WikipediaDescriptionAPI from "../model/wikipediaDescriptionAPI";
import WikipediaDescriptionModel from "../model/wikipediaDescriptionModel";
import WikipediaImageAPI from "../model/wikipediaImageAPI";
import WikipediaImageModel from "../model/wikipediaImageModel";

const addWikiDescriptionandImage = () => {
    
    const fetchDescription = async (species) => {
        const plants = new WikipediaDescriptionModel (new WikipediaDescriptionAPI(species))
        const res = await plants.getDescription();
        return(res);
    }

    const fetchWikiImage = async (species) => {
        const images = new WikipediaImageModel (new WikipediaImageAPI(species))
        const res = await images.getImage();
        return(res);
    }

    const addDescriptionandImage = async (birdsandplants) => {

        const array = await Promise.all(birdsandplants.map(async species => ({
            commonName: species.commonName, latinName: species.latinName, kingdom: species.kingdom, family: species.family, count: species.count,
            description: await fetchDescription(species.commonName.toLowerCase()), wikiLink: `https://en.wikipedia.org/wiki/${species.commonName}`, wikiLink2: `https://en.wikipedia.org/wiki/${species.latinName}`})));
            
        const images = await Promise.all(birdsandplants.map(async species => ({
            image: await fetchWikiImage(species.commonName.toLowerCase()), image2: await fetchWikiImage(species.latinName.toLowerCase())})));

        const map = (a,b) => a.map((x,i) => [x, b[i]])
  
        const result = await Promise.all(map(array, images).map(o => Object.assign({}, ...o)))
        const filteredresults = await Promise.all(result.filter(function (species) {
            return species.image != undefined ||
                    species.image2 != undefined    
          }));

        const editedresults = []
        await Promise.all(filteredresults.filter(species => {
            Object.keys(species).forEach((key) => {
                if (species[key] === undefined) {
                  delete species[key];
                  editedresults.push(species)
                }
              })}))
        
        return[editedresults]
        
    }
    
    
    return {
        addDescriptionandImage
    }
}

export default addWikiDescriptionandImage;
