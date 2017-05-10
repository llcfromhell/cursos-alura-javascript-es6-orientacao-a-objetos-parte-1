class Dragon {
    constructor(nome, raca) {
        this._nome = nome;
        this._raca = raca;
        Object.freeze(this);
    }
    
    get nome() {
        return this._nome;
    }
    
    get raca() {
        return this._raca;
    }
}