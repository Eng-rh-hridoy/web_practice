import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    let {countryName} = useParams();
    const [details, setDetails] = useState([]);

    useEffect(()=>{
        fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(response => response.json())
        .then(Details => setDetails(Details))
    },[countryName]);
    return (
        <div>
            <p>Country details coming soon...</p>
            {
                details.map(data=> <div key={data.alpha2Code}>
                    <p>Name: <strong>{data.name}</strong></p>
                    <p>Area: <strong>{data.area}</strong></p>
                    <p>Population: <strong>{data.population}</strong></p>
                    </div>)
            }
            
                
        </div>
    );
};

export default CountryDetails;