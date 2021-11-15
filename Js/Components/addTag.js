export class AddTag {
    constructor (domTarget, tag, value, callback){
        this.callback = callback;
        this.tag = tag;
        this.value = value;
        this.DOM = document.createElement('div');
        this.DOM.setAttribute('class', 'tagBar');
        this.render ();
        domTarget.appendChild(this.DOM);
    }

    render(){
        this.addTag();
    }

    addTag () {
        this.tag.forEach(tag => {
            this.tagContainer = document.createElement('div');
            this.tagContainer.setAttribute('class', 'tagContainer');
            const tags = document.createElement('span');
            tags.innerHTML += tag;
            this.tagContainer.appendChild(tags);
            this.DOM.appendChild(this.tagContainer);
            this.addArrow();
        
        });
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