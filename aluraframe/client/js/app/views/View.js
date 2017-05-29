class View {

    constructor(elementoQuery) {
        this._elemento = document.querySelector(elementoQuery);
    }

    template(model) {
         throw new Error('Você deve sobrescrever este método em seu template');
    }

   update(model) {
       this._elemento.innerHTML = this.template(model);
   }
   
}