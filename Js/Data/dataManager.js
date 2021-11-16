import {recipes} from '../Data/data.js';

export let all = [];

export const activeFilters = {
    appliance : [],
    ustenils  : [],
    ingredients : [],
    texts : []
}

export function addSetIngredient () {
    recipes.forEach(element => {
        element.ingredients.forEach(ing => {
            activeFilters.ingredients.push(ing.ingredient.toLowerCase())
        })
    })
    return activeFilters.ingredients;
}

export function addSetAppliance () {
    recipes.forEach(element => {
        activeFilters.appliance.push(element.appliance.toLowerCase());
    })
    return activeFilters.appliance;
}

export function addSetUstensil () {
    recipes.forEach(element => {
        element.ustensils.forEach(ust => {
            activeFilters.ustenils.push(ust.toLowerCase())
        })
    })
    return addSetIngredient;
}

export function filterIngredient (value) {
}

export function allData () {
    recipes.forEach(recipe => {
        all.push(recipe)
    });
    return all;
}



