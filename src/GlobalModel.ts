import { observable, action, useStrict } from 'mobx'
import Request from 'axios'
import Twitter from 'twitter-lite'

import Keys from './config/Const'

const {
  consumer_key,
  comsumer_key_secret,
  access_token,
  access_token_secret,
} = Keys

const client = new Twitter({
  subdomain: "api",
  consumer_key,
  consumer_secret: comsumer_key_secret,
  access_token_key: access_token, // from your User (oauth_token)
  access_token_secret: access_token_secret // from your User (oauth_token_secret)
});

export default class GlobalModel {
  @observable userName = 'Tim Wu Twitter Demo'
  @observable tabs = [
    { label: 'Home', active: true },
    { label: 'Explore', active: false },
    { label: 'Notifications', active: false },
    { label: 'Messages', active: false },
  ]

  // @computed
  // get unfinishedTodoCount() {
  //   return this.todos.filter(todo => !todo.finished).length
  // }

  @action updateTabActiveStatus(index: number) {
    this.tabs = this.tabs.map((tab, _index) => {
      return Object.assign({}, tab, { active: _index == index ? true : false })
    })
  }

  @action async webAuth() {
    console.log('client', client)
    client
      .get("account/verify_credentials")
      .then((results: any) => {
        console.log("results", results);
      })
      .catch(console.error);
  }
}