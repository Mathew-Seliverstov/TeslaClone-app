import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fonts = () => Font.loadAsync({
  '500': require('./assets/fonts/Roboto-Medium.ttf'),
  'normal': require('./assets/fonts/Roboto-Regular.ttf')
})

import CarsList from "./components/CarsList";
import Header from './components/Header'


export default function App() {
  const [font, setFonts] = useState(false)

  if (font) {
    return (
        <View style={styles.container}>
          <Header />
          <CarsList />

          <StatusBar style="auto" />
        </View>
    );
  } else {
    return (
        <AppLoading startAsync={fonts} onFinish={() => setFonts(true)} onError={console.warn} />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'normal'
  },
  header: {
    position: 'absolute',
    top: 0,
    height: 50,
    width: '100%'
  },
  img: {
    width: 100,
    height: 100
  }
});
