class ListaNegociacao {
    
    constructor() {
        this._negociacoes = [];
    }
    
    get negociacioes() {
        return [].concat(this._negociacoes);
    }
    
    
    addNegociacao(negociacao) {
        this._negociacoes.push(negociacao);
    }
    
}