import * as React from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper'

export default function App() {
  return (
    <View>
      <View style={styles.iphoneTop}></View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Kiso (Logo will go here)</Text>
      </View>
      <Card style={styles.card}>
        <Card.Title title="Testi Card" subtitle="How developement feels" />
        <Card.Content></Card.Content>
        <Card.Cover
          source={{
            uri:
              'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
          }}
        />
        <Card.Actions>
          <Button>Start Lesson</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  iphoneTop: {
    backgroundColor: '#e74b5e',
    height: 18,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E43A4D',
    height: 45,
  },
  headerText: {
    color: '#FBFEF9',
    fontSize: 20,
  },
  card: {
    margin: 10,
  },
})
