import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(countries => setCountries(countries))
    }, []);
    
    return (
        <div className='home-container'>
            {
                countries.map(country => <Country data={country} key={country.alpha2Code} />)
            }
        </div>
    );
};

export default Home;