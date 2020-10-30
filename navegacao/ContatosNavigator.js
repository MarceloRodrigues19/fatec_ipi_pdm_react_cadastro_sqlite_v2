import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Cores from '../constantes/cores';
import DetalhesDoContatoTela from '../telas/DetalhesDoContatoTela';
import ListaDeContatosTela from '../telas/ListaDeContatosTela';
import NovoContatoTela from '../telas/NovoContatoTela';

const ContatosNavigator = createStackNavigator ({
    ListaDeContatos: ListaDeContatosTela,
    DetalhesDoContato: DetalhesDoContatoTela,
    NovoContato: NovoContatoTela
});

export default createAppContainer (ContatosNavigator);