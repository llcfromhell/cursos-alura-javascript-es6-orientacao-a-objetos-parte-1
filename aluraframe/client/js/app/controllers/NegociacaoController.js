class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
    }
    
    adiciona(event) {
        
        console.log(this._inputData.value)
        
        event.preventDefault();
        
        let negociacao = new Negociacao(
            this.getInputDataValueAsDate(), 
            this._inputQuantidade.value, 
            this._inputValor.value
        );
        
        console.log(negociacao);
        this.limpaFormulario();
        
    }
    
    getInputDataValueAsDate() {
        
        return new Date(...
            this._inputData.value
            .split('-')
            // tem que tirar -1 do mes o JS armazena o mes a partir de 0 (0 = janeiro)
            .map((item, indice) => item - indice % 2))
    }
    
    limpaFormulario() {
        this._inputData.value = null;
        this._inputQuantidade.value = null
        this._inputValor.value = null;
        this._inputData.focus();
    }
}