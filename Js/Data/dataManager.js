import {recipes} from '../Data/data.js';

export let all = [];

export const activeFilters = {
    appliance : [],
    ustenils  : [],
    ingredients : [],
    texts : []
}

export function addSetIngredient () {
    const ingredients = []
    recipes.forEach(element => {
        element.ingredients.forEach(ing => {
            ingredients.push(ing.ingredient.toLowerCase())
        })
    })
    return ingredients;
}

export function addSetAppliance () {
    const appliance = [];
    recipes.forEach(element => {
        appliance.push(element.appliance.toLowerCase());
    })
    return appliance;
}

export function addSetUstensil () {
    const ustensils = [];
    recipes.forEach(element => {
        element.ustensils.forEach(ust => {
            ustensils.push(ust.toLowerCase())
        })
    })
    return ustensils;
}

export function allData () {
    recipes.forEach(recipe => {
        all.push(recipe)
    });
    return all;
}

