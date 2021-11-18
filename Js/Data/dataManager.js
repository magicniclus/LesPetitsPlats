import {recipes} from '../Data/data.js';

export let all = new Set();

export const activeFilters = {
    appliance : [],
    ustensils  : [],
    ingredients : [],
    texts : []
}

export function addSetIngredient () {
    const ingredients = new Set ()
    recipes.forEach(element => {
        element.ingredients.forEach(ing => {
            ingredients.add(ing.ingredient.toLowerCase())
        })
    })
    return ingredients;
}

export function addSetAppliance () {
    const appliance = new Set ();
    recipes.forEach(element => {
        appliance.add(element.appliance.toLowerCase());
    })
    return appliance;
}

export function addSetUstensil () {
    const ustensils = new Set ();
    recipes.forEach(element => {
        element.ustensils.forEach(ust => {
            ustensils.add(ust.toLowerCase())
        })
    })
    return ustensils;
}

export function allData () {
    recipes.forEach(recipe => {
        all.add(recipe)
    });
    return all;
}

