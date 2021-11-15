const activeFilters = {
    appliance : null,
    ustenils  : [],
    ingredients : [],
    texts : []
}

const arrayAll = [];
const arrayId = [];
const arrayName = [];
const arrayAppliance = [];
const arrayUstensils = [];
const arrayIngredients = [];

let data, ingredient, appliance, ustenils, array, all;

export function initDataManager() {


    arrayAll.forEach(recipe => {
        arrayAll.push(recipe);
        arrayId.push(recipe.id);
        arrayName.push(recipe.name);
        arrayAppliance.push(recipe.appliance);
        arrayUstensils.push(recipe.ustensils);
        arrayIngredients.push(recipe.ingredients);
    });

    all = new Set();
    ingredient = new Set();
    appliance = new Set();
    ustenils = new Set();
    array = [];

    console.log('initData');
}

export default {
    initDataManager
}
