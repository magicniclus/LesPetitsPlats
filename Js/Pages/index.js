import {initDataManager} from "../Data/dataManager.js";
import { FiltreButton } from "../Components/filtreButton.js"; 
import { AddTag } from "../Components/addTag.js";
import { SearchBar } from "../Components/searchBar.js";


/**
 * [export description]
 *
 * @param   {HTMLElement}  domTarget  [domTarget description]
 *
 */
export async function init (domTarget) {
    await addLogo(domTarget);
    await new SearchBar(domTarget, 'Rechercher un ingrédient, appareil, ustensiles ou une recette');
}

/**
 * [addLogo description]
 *
 * @param   {HTMLElement}  parent  [parent description]
 *
 * @return  {void}          [return description]
 */
function addLogo(parent) {
    const topLogo = document.createElement('div');
    topLogo.setAttribute('class', 'topLogo');
    const text = document.createElement('h1');
    text.innerText = 'Les Petits Plats'
    topLogo.innerHTML += `<img src="Images/Vector.png">`;
    topLogo.appendChild(text);
    parent.appendChild(topLogo);
};
