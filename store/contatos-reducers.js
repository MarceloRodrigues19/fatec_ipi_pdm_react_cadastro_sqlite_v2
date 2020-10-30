import { ADD_CONTATO, LISTA_CONTATOS } from "./contatos-actions";
import Contato from '../modelo/Contato';

const estadoInicial = {
    contatos: []
};

var contador = 10;

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_CONTATO:
            const contato = new Contato (
                (contador).toString(),
                new Date.toLocaleTimeString(),
                action.dadosContato.nomeContato, 
                action.dadosContato.telefone,
                action.dadosContato.imagemURI
            );
            contador = contador + 2;
            return {
                contatos: estado.contatos.concat(contato)
            }
        case LISTA_CONTATOS:
            return {
                lugares: action.contatos.map(contato => Lugar(contato.id.toString(), contato.nome, contato.imagemURI))
            }    
        default:
            return estado;
    }
}
