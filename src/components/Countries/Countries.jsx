import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])

    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) => {
        // console.log("Clicked Handle Visited Countries!", country.name.common);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        // console.log("Clicked Flag", flag);
        const addedFlags = [...visitedFlags, flag];
        setVisitedFlags(addedFlags);
    }
    return (
        <div>
            <h2>Traveling Countries: {countries.length}</h2>
            <p>Travelled So Far: {visitedCountries.length}</p>
            <div className='visited-flag'>
                {
                    visitedFlags.map((flag, index)=><img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map((country, index) =>
                        <Country
                            key={index}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedFlags={handleVisitedFlags}
                            country={country}>
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;