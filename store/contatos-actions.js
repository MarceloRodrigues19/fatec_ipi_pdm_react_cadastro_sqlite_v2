export const ADD_CONTATO = 'ADD_CONTATO';
export const LISTA_CONTATOS = 'LISTA_CONTATOS';

import * as FileSystem from 'expo-file-system';
import { inserirContato, buscarContatos } from '../helpers/db';

export const listarContatos = () => {
    return async dispatch => {
        try {
            const resultadoDB = await buscarContatos();
            console.log (resultadoDB);
            dispatch ({type: LISTA_CONTATOS, contatos: resultadoDB.rows._array || []})
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const addContato = (horaContato, nomeContato, imagemURI) => {
    return async dispatch => {
        //file://diretorioTemporario/nome.png
        const nomeArquivo = imagemURI.split('/').pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try {
            await FileSystem.moveAsync ({
                from: imagemURI,
                to: novoPath
            });

            const resultadoDB = await inserirContato (horaContato, nomeContato, novoPath, telefone, 48.8584, 2.2945);
            console.log (resultadoDB);

            dispatch({type: ADD_CONTATO, dadosContato: {id: resultadoDB.insertId, horaContato: horaContato, nomeContato: nomeContato, imagemURI: novoPath}})
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}

