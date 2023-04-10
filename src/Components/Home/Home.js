import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Countries from '../Countries/Countries';

const Home = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h1 className='text-3xl p-4'>This is home page.</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    countries.map(country => <Countries
                        country={country}
                    ></Countries>)
                }
            </div>
        </div>
    );
};

export default Home;