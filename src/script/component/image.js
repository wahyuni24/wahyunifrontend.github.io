class Img extends HTMLElement {
 
 connectedCallback() {
   this.src = this.getAttribute("src") || null;
   this.alt = this.getAttribute("alt") || null;
   this.render();
 }
 
  constructor() {
   super();
   this._shadowRoot = this.attachShadow({mode: "open"});
 }
 
  render() {
   this._shadowRoot.innerHTML = `
   <style>
	 .featured-image {
   padding:10px;
   width: 100%;
   max-height: 900px;
   object-fit: cover;
   object-position: center;
	}
	 </style>
	 
	 <figure>
       <img src="${this.src}"
           alt="${this.alt}">
     </figure>
   `;
 }
attributeChangedCallback(name, oldValue, newValue) {
   this[name] = newValue;
   this.render();
 }
}
customElements.define("img", Img);