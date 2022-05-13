import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from "redux";
import Card from './src/components/Card';
import indexReducer from './src/store/reducers/index.reducer';

const store = createStore(indexReducer)

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <Card title='Test' paragraph='Blablabla' tags={['cat1']} author='John Doe' url="http://" ></Card>
      <Text>Open up App.tsx to start working on your app!</Text>
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

