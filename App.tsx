import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from "redux";
import Form from './src/components/Form';
import Card from './src/components/Card';
import Home from './src/screens/Home';
import indexReducer from './src/store/reducers/index.reducer';
import Resources from './src/screens/Ressources';
import Bugs from './src/screens/Bugs';

const store = createStore(indexReducer)


export default function App() {
  return (
    <Provider store={store}>
      <Form formType='ressource'/>
      <View style={styles.container}>
        {/* <Home /> */}
        <Resources />
      <StatusBar hidden />
    </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Montserrat',
  },
});

