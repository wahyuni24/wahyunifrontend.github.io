class SearchBar extends HTMLElement {
   connectedCallback(){
       this.render();
   }
  
   set clickEvent(event) {
       this._clickEvent = event;
       this.render();
   }
   
   get value() {
   return this.querySelector("#searchElement").value;
}
  
   render() {
       this.innerHTML = `
      <p style="line-height:2em;" align="justify">Selain Gallery Seni Digital, WCS Gallery juga terdapat inspirasi mengenai seni dari masakan modern<br></p>
	  <p style="line-height:2em;" align="justify">Berikut Gallery Insipirasi WCS Design dibawah ini.<br><br> Contoh Kata Kunci : Pancakes <br><br></p>
	  <div id="search-container" class="search-container"> 
		<input placeholder="Ketik Keyword untuk melihat Gallery Inspirasi WCS Design Lainnya" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit"><font face="Tahoma">OK</font></button>
    </div>
       `;
	   this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
   }
}

customElements.define("search-bar", SearchBar);