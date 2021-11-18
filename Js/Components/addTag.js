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
        this.render ();
    }

    render(){
        this.addTag();
    }

    addTag () {
        Object.values(this.appliance).forEach(element =>{
            this.tagContainer = document.createElement('div');
            this.tagContainer.setAttribute('class', element.type);
            const tags = document.createElement('span');
            tags.innerHTML = element.name;
            this.tagContainer.appendChild(tags);
            this.DOM.appendChild(this.tagContainer);
            this.addArrow();
            console.log(element);
        })

        Object.values(this.ustensils).forEach(element =>{
            this.tagContainer = document.createElement('div');
            this.tagContainer.setAttribute('class', 'tagContainer');
            this.tagContainer.setAttribute('class', element.type);
            const tags = document.createElement('span');
            tags.innerHTML = element.name;
            this.tagContainer.appendChild(tags);
            this.DOM.appendChild(this.tagContainer);
            this.addArrow();
            console.log(element);
        })

        Object.values(this.ingredients).forEach(element =>{
            this.tagContainer = document.createElement('div');
            this.tagContainer.setAttribute('class', 'tagContainer');
            this.tagContainer.setAttribute('class', element.type);
            const tags = document.createElement('span');
            tags.innerHTML = element.name;
            this.tagContainer.appendChild(tags);
            this.DOM.appendChild(this.tagContainer);
            this.addArrow();
            console.log(element);
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