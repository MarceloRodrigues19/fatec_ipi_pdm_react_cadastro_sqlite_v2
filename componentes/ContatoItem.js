import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import cores from '../constantes/cores';

const ContatoItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.contatoItem}>
            <Image 
                style={styles.imagem}
                source={{uri: props.imagem}}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.id}>{props.id}</Text>
                <Text style={styles.nomeContato}>{props.nomeContato}</Text>
                <Text style={styles.telefone}>{props.telefone}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contatoItem: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC',
        borderColor: cores.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 28,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    nomeContato: {
        color: 'black',
        fontSize: 18,
        marginBottom: 8
    },
    telefone: {
        color: '#555',
        fontSize: 16
    },
    id: {
        color: 'black',
        fontSize: 12
    }
   });

export default ContatoItem;