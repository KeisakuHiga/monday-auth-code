import React from 'react';
import './App.css';
import axios from 'axios';
import Routes from './Routes'

class App extends React.Component {
  state = {user: null, auth: null}

  login = async (body) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', body)
      localStorage.setItem('token', response.data.token)
      this.setState({
        auth: true
      })
    } catch(err) {
      console.log(err)
    }
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem('token')
      const getCountries = axios.get('https://restcountries.eu/rest/v2/all')
      const authorize = axios.get('http://localhost:5000/user/current-user', {headers: { token }})
      const apis = await Promise.all([getCountries, authorize])
      const countries = apis[0].data
      const user = apis[1].data.currentUser.name
      this.setState({
        user: user,
        countriesList: countries
      })
    } catch (err) {
      const getCountries = await axios.get('https://restcountries.eu/rest/v2/all')
      const countries = getCountries.data
      this.setState({
        user: null,
        countriesList: countries
      })
    }
  }

  render() {
    const { countriesList, user, auth } = this.state
    if (!countriesList) {
      return null
    } else {
      return <Routes countriesList={countriesList} user={user} login={this.login} auth={auth} />
    }
  }
}

export default App;