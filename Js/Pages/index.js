import { addSetIngredient, addSetAppliance, addSetUstensil, allData, activeFilters, all} from "../Data/dataManager.js";
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
    // await new AddTag(domTarget, )
    await btnContainer(domTarget);
    textArrea = document.createElement('aside');
    textArrea.setAttribute('class', 'vignette__container')
    await domTarget.appendChild(textArrea);
    await updateMain();
}

/**
 * [updateMain description]
 *
 * @return  {void}  [return description]
 */
export function updateMain (){
    textArrea.innerHTML = '';
    allData().forEach(recipe => {
        new Vignette (textArrea, recipe);
    });
    console.log(activeFilters);
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
    await new FiltreButton(filterContainer, addSetIngredient(), 'Ingrédients', filterDataIngredient, 'Ingredients', 'Recherche un ingrédient');

    // //Add Appareil Btn 
    await new FiltreButton(filterContainer, addSetAppliance(), 'Appareil', filterDataAppliance, 'Appareil', 'Rechercher un appareil');

    // //Add Ustensils Btn
    await new FiltreButton(filterContainer, addSetUstensil(), 'Ustensiles', filterUstensil, 'Ustensiles', 'Rechercher un ustensil');

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


/**
 * [filterDataIngredient description]
 *
 * @param   {String}  value  [value description]
 *
 * @return  {void}         [return description]
 */
function filterDataIngredient (value) {
    let all = [];
    allData().forEach(recipe => {
        recipe.ingredients.forEach(ingredients => {
            if (ingredients.ingredient.toLowerCase() == value) {
                all.push(recipe);
            }
        });
    });
    if (!activeFilters.ingredients.includes(value)){
        activeFilters.ingredients.push({
            type: 'ing',
            name: value,
        })
    };
    updateMain();
}


/**
 * [filterDataAppliance description]
 *
 * @param   {String}  value  [value description]
 *
 * @return  {void}         [return description]
 */
function filterDataAppliance (value) {
    let all = [];
    allData().forEach(recipe => {
            if (recipe.appliance.toLowerCase() == value) {
                all.push(recipe);
            }
    });
    if (!activeFilters.appliance.includes(value)){
        activeFilters.appliance.push({
            type: 'app',
            name: value.toLowerCase(),
        })
    };
    updateMain();
}


/**
 * [filterUstensil description]
 *
 * @param   {String}  value  [value description]
 *
 * @return  {Void}         [return description]
 */
function filterUstensil(value) {
    let all = [];
    allData().forEach(recipe => {
        recipe.ustensils.forEach(ustensil => {
            if (ustensil.toLowerCase() == value) {
                all.push(recipe);
            }
        });
    });

    if (!activeFilters.ustenils.includes(value)){
        activeFilters.ustenils.push({
            type: 'ust',
            name: value.toLowerCase(),
        })
    };
    updateMain();
}
