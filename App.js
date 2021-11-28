// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

// set up redux


export default function App() {
  return (
    // need to wrap the app in the provider for react-redux to work
    // also need to wrap the app in the store for redux to work
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Lets Build Uber 2.0!</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
