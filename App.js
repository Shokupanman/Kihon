import * as React from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import logo from './img/logo.png'

export default function App() {
  return (
    <View style={styles.header}>
      <Image source={logo} sytle={styles.tinyLogo} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D01C30',
    height: '25%',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
})
