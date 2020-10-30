import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import cores from '../constantes/cores';

const BotaoCabecalho = (props) => {
    return (
        <HeaderButton 
            {...props}
            IconComponent={Ionicons}
            iconSize={25}
            color={Platform.OS === 'android' ? 'black' : cores.primary}
        />
    )
}

export default BotaoCabecalho;