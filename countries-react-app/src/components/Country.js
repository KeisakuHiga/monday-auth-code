import React from 'react';
import '../styles/Countries.css' 

const Country = (props) => {
  const { country } = props
  return (
    <div className="country-container">
      <img src={country.flag} alt="flag" className="image-size" />
      <h1>Name</h1>
      <h2>{country.name}</h2>
      <h1>Region</h1>
      <h2>{country.region}</h2>
      <h1>Population</h1>
      <h2>{country.population} people</h2>
    </div>
  )
}

export default Country;