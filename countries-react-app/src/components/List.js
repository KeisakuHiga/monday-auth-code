import React from 'react';
import { Link } from 'react-router-dom';

const renderCountries = (countriesList) => {
  return countriesList.map((country, index) => {
    return <Link key={index} to={`country/${country.name}`}><h1 className="country-links">{country.name}</h1></Link>
  })
}

const List = (props) => {
  const countries = renderCountries(props.countriesList)
  return (
    <>
      {countries}
    </>    
  )
}

export default List;