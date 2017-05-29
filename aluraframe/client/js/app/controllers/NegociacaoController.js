class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
        this._lista = new ListaNegociacao();
        
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._mensagemvView = new MensagemView("#mensagemView");
    }
    
    adiciona(event) {
        
        event.preventDefault();
        
        this._lista.addNegociacao(this._criaNegociacao());
        
        this._limpaFormulario();
        
        this._mensagemvView.update({texto:"Negociação adicionada com sucesso."})
        this._negociacoesView.update(this._lista.negociacoes);
        
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