class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
        this._lista = new ListaNegociacao();
        
    }
    
    adiciona(event) {
        
        event.preventDefault();
        
        this._lista.addNegociacao(this._criaNegociacao());
        
        console.log(this._lista);
        
        this._limpaFormulario();
        
    }
    
    _criaNegociacao() {
        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value), 
            this._inputQuantidade.value, 
            this._inputValor.value
        );
    }
    
    
    _limpaFormulario() {
        this._inputData.value = null;
        this._inputQuantidade.value = null
        this._inputValor.value = null;
        this._inputData.focus();
    }
}