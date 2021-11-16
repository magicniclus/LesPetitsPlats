import { addSetIngredient, addSetAppliance, filterIngredient, addSetUstensil, allData, activeFilters, all} from "../Data/dataManager.js";
import { FiltreButton } from "../Components/filtreButton.js"; 
import { AddTag } from "../Components/addTag.js";
import { SearchBar } from "../Components/searchBar.js";
import { Vignette } from "../Components/vignettes.js";

let textArrea;

/**
 * [export description]
 *
 * @param   {HTMLElement}  domTarget  [domTarget description]
 *
 */
export async function init (domTarget) {
    await addLogo(domTarget);
    await new SearchBar(domTarget, 'Rechercher un ingrédient, appareil, ustensiles ou une recette');
    await btnContainer(domTarget);
    textArrea = document.createElement('aside');
    textArrea.setAttribute('class', 'vignette__container')
    await domTarget.appendChild(textArrea);
    updateMain();
}

/**
 * [updateMain description]
 *
 * @return  {void}  [return description]
 */
function updateMain (){
    textArrea.innerHTML = '';
    allData().forEach(recipe => {
        new Vignette (textArrea, recipe);
    });
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
    await new FiltreButton(filterContainer, addSetIngredient(), 'Ingrédients', filterData, 'Ingredients', 'Recherche un ingrédient');

    // //Add Appareil Btn 
    await new FiltreButton(filterContainer, addSetAppliance(), 'Appareil', filterIngredient, 'Appareil', 'Rechercher un appareil');

    // //Add Ustensils Btn
    await new FiltreButton(filterContainer, addSetUstensil(), 'Ustensiles', filterIngredient, 'Ustensiles', 'Rechercher un ustensil');

    domTarget.appendChild(filterContainer);
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

function filterData (value) {
    all = []
    allData().forEach(recipe => {
        recipe.ingredients.forEach(ingredients => {
            if (ingredients.ingredient.toLowerCase() == value) {
                all.push(recipe);
            }
        });
    });
    updateMain();
}
