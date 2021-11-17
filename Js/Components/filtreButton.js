// Création du bouton de filtre 

import { updateMain } from "../Pages/index.js";

export class FiltreButton {

    constructor (domTarget, props, title, callback, className, phrasing) {
        this.title = title;
        this.className = className;
        this.DOM = document.createElement('div');
        this.DOM.classList.add('filtreButton');
        this.DOM.classList.add(this.className);
        this.phrasing = phrasing;
        this.list = props;
        this.callback = callback;
        domTarget.appendChild(this.DOM)
        this.clickValue = false;
        this.render();
        // console.log(this.list);
    }

    render(){
        this.DOM.innerHTML = "";
        const filterTop = document.createElement('div');
        filterTop.setAttribute('class', 'filtreBoutton__filterTop');
        this.DOM.appendChild(filterTop);
        this.addInput(filterTop);
        this.addArrow(filterTop, this.DOM, this.callback);
    }

    addInput (parent){
        const input = document.createElement('input');
        input.setAttribute('type', "text");
        input.setAttribute("id", this.className);
        input.setAttribute("name", this.className);
        input.setAttribute('value', this.clickValue ? "": this.title);
        input.setAttribute('placeholder', this.clickValue ?this.phrasing : "");
        parent.appendChild(input);

        input.addEventListener('keyup', e => {
            e.preventDefault();
            console.log(input.value);
        })
    }

    addArrow (parent, container, callback) {
        const arrow__container = document.createElement('div');
        arrow__container.setAttribute('class', 'filtreButton__Arrow')
        arrow__container.innerHTML += `<i class="fas fa-chevron-${this.clickValue == false ? 'down' : 'up' }"></i>`;
        arrow__container.style.cursor='pointer';
        parent.appendChild(arrow__container)
        arrow__container.onclick = () => {
            this.clickValue =! this.clickValue;
            if (this.clickValue){
                this.render();
                this.addTag(container, callback);
                this.DOM.classList.add('click');
            }else{
                this.DOM.classList.remove('click');
                this.render();
            };
        }
    }

    addTag (parent, callback) {
        const tagContainer = document.createElement("div");
        tagContainer.setAttribute('class', 'tagContainer');
        tagContainer.style.cursor = 'pointer';
        this.list.forEach(element => {
            const tagContainer__tag = document.createElement('span');
            tagContainer__tag.setAttribute('class', 'tagContainer__tag');

            tagContainer__tag.innerHTML = element;
            tagContainer.appendChild(tagContainer__tag);
            tagContainer__tag.onclick = () => {
                this.clickValue =! this.clickValue;
                this.DOM.classList.remove('click');
                callback(element);
                this.render();
            }
        });

        parent.appendChild(tagContainer);
    }
} 