class ArtItem extends HTMLElement {
   set art(art) {
       this._art = art;
       this.render();
   }
 
   render() {
       this.innerHTML = `
           <style>
               * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .fan-art-art {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .art-info {
                   padding: 24px;
               }
              
               .art-info > h2 {
                   font-weight: lighter;
               }
              
               .art-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }
           </style>
		   
		   
		   <img class="fan-art-art" src="${this._art.strMealThumb}" alt="Fan Art">
           <div class="art-info">
               <h2>${this._art.strMeal}</h2>
           </div>`;
   }
}
 
customElements.define("art-item", ArtItem);