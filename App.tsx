import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from "redux";
import indexReducer from './src/store/reducers/index.reducer';
import MainContainer from "./src/routes/MainNavigation";

const store = createStore(indexReducer)


export default function App() {
  return (
    <Provider store={store}>
       <>
       <View style={styles.container}>
        <MainContainer />
      <StatusBar hidden />
    </View>
      <StatusBar style="auto" />
    </>
      
    </Provider>
  )
}
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Montserrat',
  },
});

