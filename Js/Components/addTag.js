export class AddTag {

    appliance;
    ustensils;
    ingredients;
    texts;

    constructor (domTarget, tag, callback){
        this.DOM = domTarget;
        this.callback = callback;
        this.tag = tag;
        for (const [key, value] of Object.entries(this.tag)) {
            this[key] = value;
        }
        this.render (this.DOM);
    }

    render(domTarget){
        this.addTag(domTarget);
        console.log(this.DOM);
    }

    addTag (domTarget) {
        Object.values(this.appliance).forEach(element =>{
            console.log(element.name);
        })
    }

    addArrow () {
        const arrow = document.createElement('i');
        arrow.setAttribute('class', 'far fa-times-circle')
        arrow.onclick = () => {
            this.callback(this.tag);
        }
        this.tagContainer.appendChild(arrow);
    }
}