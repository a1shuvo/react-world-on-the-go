import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) => {
        console.log("Clicked Handle Visited Countries!", country.name.common);
    }
    return (
        <div>
            <h2>Traveling Countries: {countries.length}</h2>
            <p>Travelled So Far: </p>
            <div className='countries'>
                {
                    countries.map((country, index) =>
                        <Country
                            key={index}
                            handleVisitedCountries={handleVisitedCountries}
                            country={country}>
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;