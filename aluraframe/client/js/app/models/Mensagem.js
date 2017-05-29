class Mensagem {
    
    constructor(mensagem="Mensagem padrão") {
        this._mensagem = mensagem;
    }
    
    get mensagem() {
        return this._mensagem;
    }
    
}