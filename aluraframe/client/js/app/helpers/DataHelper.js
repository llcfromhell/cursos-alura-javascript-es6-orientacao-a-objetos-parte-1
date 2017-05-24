class DataHelper {
    
    constructor() {
        throw new Error('Você não pode criar uma instância dessa classe');
    }
    
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth+1}/${data.getFullYear}`
    }

    static textoParaData(texto) {
        
        if ( ! /\d{4}-\d{2}-\d{2}/.test(texto) ) {
            throw ('Texto não está no padrão yyyy-mm-dd');
        }
        
        return new Date(...
            texto
            .split('-')
            // tem que tirar -1 do mes o JS armazena o mes a partir de 0 (0 = janeiro)
            .map((item, indice) => item - indice % 2))
        
    }
  
    
}