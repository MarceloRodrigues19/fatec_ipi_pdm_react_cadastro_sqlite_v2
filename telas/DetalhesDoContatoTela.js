import React from  'react';

import {
    View,
    Text,
    StyleSheet
}
from 'react-native';

const DetalhesDoContatoTela = (props) => {
    return (
        <View>
            <Text>DetalhesDoContatoTela</Text>
        </View>
    )
};

DetalhesDoContatoTela.navigationOptions = (dadosNav) => {
    return {
        headerTitle: dadosNav.navigation.getParam ('tituloContato')
    }
}

const estilos = StyleSheet.create ({

});

export default DetalhesDoContatoTela;