import '../component/art-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
const main = () => {
    const searchElement = document.querySelector("search-bar");
    const artListElement = document.querySelector("art-list");
	const contentElement = document.querySelector("#contentElement");

    
	const onButtonSearchClicked = () => {
        DataSource.searchArt(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
};

     const renderResult = results => {
        artListElement.arts = results;
    };


    const fallbackResult = message => {
        artListElement.renderError(message);
    };

   searchElement.clickEvent = onButtonSearchClicked;
};

export default main;