import React from 'react';
import { useNavigate } from 'react-router-dom';

const Countries = ({country}) => {
    const countryName = country.name.common;
    const navigate = useNavigate();
    const countryDetails = () => {
        navigate(`/details/${countryName}`)
    }
    return (
        <div className='border-2 m-auto p-4'>
            <img src={country.flags.png} alt="" />
            <h1>Country name: {country.name.common}</h1>
            <button onClick={() => countryDetails(countryName)} className="bg-green-300 rounded-full p-2 m-2 text-white font-bold">See details</button>
        </div>
    );
};

export default Countries;