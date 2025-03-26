import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);

    return (
        <div>
            <h2>Traveling Countries: {countries.length}</h2>
            <div className='countries'>
                {
                    countries.map((country, index) => <Country key={index} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;