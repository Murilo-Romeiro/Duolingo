import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./assets/duolingo-logo.png')} />
        <Text style={styles.headerText}>Aprenda idiomas de graça. Para sempre.</Text>
      </View>
      <View style={styles.form}>
        <TouchableOpacity style={[styles.button, styles.greenButton]}>
          <Text style={styles.buttonText}>Começar agora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.whiteButton]}>
          <Text style={[styles.buttonText, { color: '#5bbf00' }]}>Já tenho uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  headerText: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'none',
    textAlign: 'center',
    marginTop: 10,
    width: 200
  },
  form: {
    width: '80%',
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  greenButton: {
    backgroundColor: '#5bbf00',
    borderBottomColor: '#448d00',
    borderBottomWidth: 4,
    shadowColor: '#448d00',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.89,
    shadowRadius: 4.65,
    elevation: 7,
  },
  whiteButton: {
    backgroundColor: '#fff',
    borderBottomWidth: 4,
    borderBottomColor: '#aaa',
    shadowColor: '#d9d9d9',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.89,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
