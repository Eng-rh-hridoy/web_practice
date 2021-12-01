import React from 'react';
import {Link} from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const {name, region, flag} = props.data;
    return (
        <div className='country-container'>
            <img src={flag} alt="Flag" />
            <p>Name: <strong>{name}</strong></p>
            <p>Region: <strong>{region}</strong></p>
            <Link to={`/country/${name}`}>
                <button>See Details</button>
            </Link>
        </div>
    );
};

export default Country;