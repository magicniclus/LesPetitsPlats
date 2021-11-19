
import { addSetIngredient, addSetAppliance, addSetUstensil, allData, activeFilters, all, filterDataAppliance, filterDataIngredient, filterDataUstensil} from "../Data/dataManager.js";
import { FiltreButton } from "../Components/filtreButton.js"; 
import { AddTag } from "../Components/addTag.js"
import { SearchBar } from "../Components/searchBar.js";
import { Vignette } from "../Components/vignettes.js";

let textArrea;
let addTagBar;
/**
 * [async description]
 *
 * @param   {HTMLElement}  domTarget  [domTarget description]
 *
 */

export async function init (domTarget) {
    domTarget.innerHTML = '';
    await addLogo(domTarget);
    await new SearchBar(domTarget, 'Rechercher un ingrédient, appareil, ustensiles ou une recette');
    addTagBar = document.createElement('aside');
    addTagBar.setAttribute('class', 'tagBar');
    await domTarget.appendChild(addTagBar)
    await updateTagBar();
    await btnContainer(domTarget);
    textArrea = document.createElement('aside');
    textArrea.setAttribute('class', 'vignette__container')
    await domTarget.appendChild(textArrea);
    await updateMain();
}



/**
 * [addLogo description]
 *
 * @param   {HTMLElement}  domTarget  [parent description]
 *
 * @return  {void}          [return description]
 */
 function addLogo(domTarget) {
    const topLogo = document.createElement('div');
    topLogo.setAttribute('class', 'topLogo');
    const text = document.createElement('h1');
    text.innerText = 'Les Petits Plats'
    topLogo.innerHTML += `<img src="Images/Vector.png">`;
    topLogo.appendChild(text);
    domTarget.appendChild(topLogo);
 }



 /**
  * [updateTagBar description]
  *
  */
 function updateTagBar () {
    addTagBar.innerHTML = '';
    new AddTag(addTagBar, activeFilters);
 }



 /**
 * [async description]
 *
 * @param   {HTMLElement}  domTarget  [domTarget description]
 *
 */
async function btnContainer(domTarget) {
    const filterContainer = document.createElement('div');
    filterContainer.setAttribute('class', 'filterContainer');

    //Add Ingreédients Btn
    await new FiltreButton(filterContainer, addSetIngredient(), 'Ingrédients', filterDataIngredient, ()=> { updateTagBar(); updateMain()}, 'Ingredients', 'Recherche un ingrédient');  

    // //Add Appareil Btn 
    await new FiltreButton(filterContainer, addSetAppliance(), 'Appareil',  filterDataAppliance, ()=> {updateMain(); updateTagBar()}, 'Appareil', 'Rechercher un appareil');

    // //Add Ustensils Btn
    await new FiltreButton(filterContainer, addSetUstensil(), 'Ustensiles', filterDataUstensil, ()=> {updateMain(); updateTagBar()}, 'Ustensiles', 'Rechercher un ustensil');

    domTarget.appendChild(filterContainer);
}



/**
 * [updateMain description]
 *
 * @return  {void}  [return description]
 */
 export function updateMain (){
    textArrea.innerHTML = '';
    all.forEach(recipe => {
        new Vignette (textArrea, recipe);
    }); 
}










