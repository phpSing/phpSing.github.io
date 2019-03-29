import React, { Component } from "react"
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native"
import { Router, Route, Link } from './common/route'
import { useStrict } from 'mobx'
import { observer } from 'mobx-react'
import Helper from './common/Helper'

import Color from './config/Color'

import GlobalModel from './GlobalModel'

const Store = new GlobalModel()

function Home(route: any) {
  // a list of tweets
  return <Text style={{ fontSize: 55 }}>Home Page</Text>
}

function Search(route: any) {
  return <Text style={{ fontSize: 55 }}>Search Page</Text>
}

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/search",
    component: Search
  }
]

@observer
class App extends Component {
  componentDidMount () {
    Helper.isWeb() && Store.webAuth() // web use web auth
    // !Helper.isWeb() && Store.nativeAuth() // native use native auth
  }

  handleTabSwitch = (index: number) => {
    Store.updateTabActiveStatus(index)
  }

  render() {
    return (
      <Router store={Store}>
        <View>
          <View style={[styles.flex, styles.topbar]}>
            <Text style={styles.userName}>{Store.userName}</Text>
          </View>
          <View style={[styles.flex, styles.tab]}>
            {Store.tabs.map((tab, index) => {
              const { label, active } = tab
              return (
              <TouchableOpacity onPress={() => this.handleTabSwitch(index)} key={index} style={[styles.flex, styles.tabItem, active && styles.tabItemActive]}>
                <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{label}</Text>
              </TouchableOpacity>
              )
            })}
          </View>
          {
            routes.map((v, index) => (
              <Route key={index} path={v.path} component={v.component} />
            ))
          }
        </View>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  topbar: {
    height: 49,
  },
  tab: {
    height: 49,
  },
  tabItem: {
    flex: 1,
    height: 49,
  },
  tabItemActive: {
    borderBottomColor: Color.twitter_blue,
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  tabLabel: {
    fontSize: 14,
  },
  tabLabelActive: {
    color: Color.twitter_blue,
  },
  copy: {},
})

export default App
