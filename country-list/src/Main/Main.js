import React from 'react';
import Detail from '../CountryDetail/Detail';
import './Main.css'

const Main = (props) => {
    const countries = props.countryData;
    const handleDetails = props.handleDetails;
    return (
        <div className ="main-container">
            <h1>Listed Items</h1>
            <p>Massive collection of {countries.length} countries</p>
            {
                countries.map(country =>
                    <div className = "country-container">
                        <h2>{country.name}</h2>
                        <img src={country.flag} alt="" /> <br />
                        <Detail data = {props.detailData}></Detail>
                        <button onClick = {()=> handleDetails(country)}>See Details</button>
                    </div>)
            }
        </div>
    );
};

export default Main;