import './art-item.js';
 
class ArtList extends HTMLElement {
   set arts(arts) {
       this._arts = arts;
       this.render();
   }
 
   renderError(message) {
       this.innerHTML = "";
       this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
 
   render() {
       this.innerHTML = "";
       this._arts.forEach(art => {
           const artItemElement = document.createElement("art-item");
           artItemElement.art = art
           this.appendChild(artItemElement);
       })
   }
}
 
customElements.define("art-list", ArtList);