import React, { Component } from "react";
import { Platform, Button, StyleSheet, Text, View } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>page 3</Text>
        </View>
        <Button onPress={() => {}} title="Example button" />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to App2"
          onPress={() => this.props.navigation.navigate('App2')}
        />
        <Button
          title="Go to App3"
          onPress={() => this.props.navigation.navigate('App3')}
        />
      </View>
    );
  }
}

const styles = Platform.OS === 'web' ? StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "Arial"
  }
})
:
StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80,
    width: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 4,
    textAlign: "center"
  },
  text: {
    fontSize: 14,
    marginVertical: 4,
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "Arial"
  }
})

export default App;
