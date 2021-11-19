import {recipes} from '../Data/data.js';
export let all;
let appliance;``

all= new Set (); 
let allFilter = [];
const data = recipes;



export function allData () {
    recipes.forEach(recipe => {
        all.add(recipe)
    });
    return all;
}



export const activeFilters = {
    appliance : [],
    ustensils  : [],
    ingredients : [],
    texts : []
}



export function addSetIngredient () { //BUG probleme général de gestion des données: pas d'actualisation des listes ingredient appareil et ustensil dans les bouton, et probleme de filtre lors ce que l'on clic sur deux tags 
    const ingredients = new Set ()
    allData().forEach(element => {
        element.ingredients.forEach(ing => {
            ingredients.add(ing.ingredient.toLowerCase())
        })
    })
    return ingredients;
}



export function addSetAppliance () {
    appliance = new Set ();
    allData().forEach(element => {
        appliance.add(element.appliance.toLowerCase());
    })
    return appliance;
}



export function addSetUstensil () {
    const ustensils = new Set ();
    allData().forEach(element => {
        element.ustensils.forEach(ust => {
            ustensils.add(ust.toLowerCase())
        })
    })
    return ustensils;
}



/**
 * [filterDataIngredient description]
 *
 * @param   {String}  value  [value description]
 *
 * @return  {void}         [return description]
 */
export function filterDataIngredient (value) { 
    allFilter = [];
    allData().forEach(recipe => {
        recipe.ingredients.forEach(ingredients => {
            if (ingredients.ingredient.toLowerCase() == value) {
                allFilter.push(recipe)
            }
        });
    });
    all = allFilter;
    if (!activeFilters.ingredients.includes(value)){
        activeFilters.ingredients.push({
            type: 'ing',
            name: value,
        })
    };
}



/**
 * [filterDataAppliance description]
 *
 * @param   {String}  value  [value description]
 *
 * @return  {void}         [return description]
 */
 export function filterDataAppliance (value) {
    allFilter = [];
    allData().forEach(recipe => {
        if (recipe.appliance.toLowerCase() == value) {
            allFilter.push(recipe)
        }
    });
    all = allFilter;
    if (!activeFilters.appliance.includes(value)){
        activeFilters.appliance.push({
            type: 'app',
            name: value.toLowerCase(),
        })
    };
}



/**
 * [filterUstensil description]
 *
 * @param   {String}  value  [value description]
 *
 * @return  {Void}         [return description]
 */
export function filterDataUstensil(value) {
    allFilter = [];
    allData().forEach(recipe => {
        recipe.ustensils.forEach(ustensil => {
            if (ustensil.toLowerCase() == value) {
                allFilter.push(recipe)
            }
        });
    });
    all = allFilter;
    if (!activeFilters.ustensils.includes(value)){
        activeFilters.ustensils.push({
            type: 'ust',
            name: value.toLowerCase(),
        })
    };
}



