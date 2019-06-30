import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './components/List'
import GetCountryData from './components/GetCountryData'
import Search from './components/Search'
import Home from './components/Home'
import Login from './components/Login'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/country/:name" component={GetCountryData} />
        <Route path="/search" render={() => {
          return <Search countriesList={this.props.countriesList} user={this.props.user} />
        }}
        />
        <Route path="/list" render={() => {
          return <List countriesList={this.props.countriesList} />
        }} />
        <Route path="/login" render={() => {
          return <Login login={this.props.login} auth={this.props.auth} user={this.props.user} />
        }} />
        <Route exact path="/" component={Home} />
    </Switch>
    )
  }
}

export default Routes;