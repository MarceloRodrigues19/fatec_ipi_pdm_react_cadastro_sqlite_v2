import React, { useEffect } from  'react';

import {
    View,
    Text,
    StyleSheet,
    Platform,
    FlatList
}
from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../componentes/BotaoCabecalho';

import { useDispatch, useSelector } from 'react-redux';
import ContatoItem from '../componentes/ContatoItem';

import * as contatosActions from '../store/contatos-actions';

const ListaDeContatosTela = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch((contatosActions.listarContatos()))
    });

    const contatos = useSelector (estado => estado.contatos.contatos);

    return (
        <FlatList 
            data={contatos}
            keyExtractor={contato => contato.id}
            renderItem={
                contato => (
                    <ContatoItem 
                        nomeContato={contato.item.titulo}
                        onSelect={() => {
                            props.navigation.navigate('DetalhesDoContato', {
                                tituloContato: contato.item.titulo, 
                                idContato: contato.item.id,
                                telefoneContato: contato.item.telefone
                            })
                        }}
                        imagem={contato.item.imagemURI}
                        telefone={contato.item.telefone}
                        id={contato.item.id}
                    />
                )
            }
        />
    )
};

ListaDeContatosTela.navigationOptions = dadosNavegacao => {
    return {
        headerTitle: "Lista de contatos",
        headerRight: () => {
            return (
                <HeaderButtons 
                    HeaderButtonComponent={BotaoCabecalho}>
                    <Item
                        title="Adicionar"
                        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                        onPress={() => {
                            dadosNavegacao.navigation.navigate ("NovoContato");
                        }}
                    />
                </HeaderButtons>
            )
        }
    }
}

const estilos = StyleSheet.create ({

});

export default ListaDeContatosTela;