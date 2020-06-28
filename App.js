import * as React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper'
import Constants from 'expo-constants'
import { ScrollView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.iphoneTop}></View>
          <View style={styles.greeter}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Kiso (Logo will go here)</Text>
            </View>
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
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  iphoneTop: {
    backgroundColor: '#FBFEF9',
    height: 18,
  },
  greeter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E43A4D',
    height: '60%',
    width: '94%',
  },
  headerText: {
    color: '#FBFEF9',
    fontSize: 20,
  },
  card: {
    margin: 10,
  },
})
