import React, { useState } from  'react';

import {
    View,
    Text,
    StyleSheet, 
    Button,
    TextInput,
    ScrollView
}
from 'react-native';
import { useDispatch } from 'react-redux';
import TiraFoto from '../componentes/TiraFoto';

import cores from '../constantes/cores';
import * as contatosActions from '../store/contatos-actions';

const NovoContatoTela = (props) => {

    const dispatch = useDispatch(); 

    const[novoContato, setNovoContato] = useState('');
    const[novoTelefone, setNovoTelefone] = useState('');
    const [imagemURI, setImagemURI] = useState('');
    
    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }


    const novoContatoAlterado = (texto) => {
        setNovoContato(texto);
    }

    const novoTelefoneAlterado = (texto) => {
        setNovoTelefone(texto);
    }

    const adicionarContato = () => {
        dispatch (contatosActions.addContato(novoContato, novoTelefone, imagemURI));
        setNovoContato('');
        setNovoTelefone('');
        props.navigation.goBack();
    }

    return (
        <ScrollView>
            <View style={estilos.form}>
                <Text style={estilos.titulo}>Novo Contato</Text>
                <TextInput 
                    placeholder="Nome"
                    style={estilos.textInput}
                    onChangeText={novoContatoAlterado}
                    value={novoContato}
                />
                <TextInput
                    placeholder="Telefone"
                    style={estilos.textInput}
                    onChangeText={novoTelefoneAlterado}
                    value={novoTelefone}
                />
                <TiraFoto onFotoTirada={fotoTirada}/>
                <Button
                    title="Salvar contato"
                    color={cores.primary}
                    onPress={adicionarContato}
                />
            </View>
        </ScrollView>

    )
};

const estilos = StyleSheet.create ({
    form: {
        margin: 30
    },
    titulo: {
        fontSize: 18,
        marginBottom: 16,
        textAlign: 'center'
    },
    textInput: {
        borderBottomColor: '#CCC',
        borderBottom: 2,
        marginBottom: 16,
        paddingVertical: 12
    }
});

export default NovoContatoTela;