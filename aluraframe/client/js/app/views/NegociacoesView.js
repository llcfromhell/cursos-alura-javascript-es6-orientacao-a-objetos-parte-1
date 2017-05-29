class NegociacoesView extends View {

    template(model) {
        return ` 
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                     ${model.map(m => `
                        <tr>
                            <td>${DataHelper.dataParaTexto(m.data)}</td>
                            <td>${m.quantidade}</td>
                            <td>${m.valor}</td>
                            <td>${m.volume}</td>
                        </tr>
                    `).join('')}
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `
    }

}
