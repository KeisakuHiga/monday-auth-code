import React from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';

class Search extends React.Component {
  state = {}
  
  displaySearchedCountries = (e) => {
    const { countriesList } = this.props
    const search = _.capitalize(e.target.value)
    const result = countriesList.filter((country) => {
      return country.name.includes(search)
    })
    this.setState({
      countries: result
    })
  }

  render() {
    const { user } = this.props
    if (!user) {
      return (
        <Redirect to="/" />
      )
    }
    const { countries } = this.state
    if (!countries) {
      return (
        <>
          <h1>Search</h1>
          <input type="text" name="country" id="country" onChange={this.displaySearchedCountries} />
        </>
      )
    } else {
      return (
        <>
          <h1>Search</h1>
          <input type="text" name="country" id="country" onChange={this.displaySearchedCountries} />
          <ul>
            {countries.map((country, index) => {
              return (
                <li key={index}>{country.name}</li>
              )
            })}
          </ul>
        </>
      )
    }
  }
}

export default Search;