import {init} from "./Pages/index.js";

const body = document.querySelector('body');
export const main = document.createElement('main');

body.appendChild(main);

init(main);