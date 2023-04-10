import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CountryDetails.css';

const CountryDetails = () => {
    const countryDetails = useLoaderData();
    const details = countryDetails[0];
    return (
        <div className='country-details'>
            <h1>This page is details of country</h1>
            <img className='m-auto p-5' src={details.flags.png} alt="" />
            <h1>Country name: {details.name.common}</h1>
            <p>Capital: {details.capital[0]}</p>
            <p>Population: {details.population} </p>
        </div>
    );
};

export default CountryDetails;