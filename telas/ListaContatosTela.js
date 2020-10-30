import React, { useEffect } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet, 
  Platform, 
  Alert 
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import * as contactsActions from '../store/contatos-actions';
import ContatoItem from '../components/ContatoItem';
import BotaoCabecalho from '../components/BotaoCabecalho';
import Colors from '../constantes/Cores';

const ListaContatosTela = () => {
  const contatos = useSelector(state => state.contatos.contatos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsActions.getContacts());
  })

  const removeContact = (id) => {
    Alert.alert(
      'Confirmação',
      `Tem certeza que deseja excluir o contato ${contatos.find(contato => contato.id === id)?.name}?`,
      [
        {
          text: 'Sim',
          onPress: () => {
            dispatch(contatosActions.removeContact(id));
          }
        },
        {
          text: 'Cancelar'
        }
      ],
      {cancelable: false}
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Contatos</Text>
      <View style={styles.contactListContainer}>
        {!contatos.length && <Text style={styles.contactListEmpty}>Nenhum contato salvo</Text>}
        <FlatList
          data={contatos}
          keyExtractor={contato => contato.id}
          renderItem={
            (contato) => (
              <ContactItem
                contato={contato.item}
                onDelete={removeContact}
              />
            )
          }
        />
      </View>
    </View>
  );
}

ListaContatosTela.navigationOptions = options => {
  return {
    headerTitle: 'Contatos',
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={ButtonHeader}>
          <Item 
            title="Adicionar"
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            onPress={() => {
              options.navigation.navigate('NewContact');
            }}
          />
        </HeaderButtons>
      );
    }
  }
}

export default ListaContatosTela;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.background
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 38,
    color: Colors.titlePrimary,
    marginBottom: 24,
    textAlign: 'center'
  },
  contactListContainer: {
    flex: 1
  },
  contactListEmpty: {
    fontFamily: 'Archivo_400Regular',
    fontSize: 18,
    color: '#6A6180',
    textAlign: 'center'
  }
}); 

