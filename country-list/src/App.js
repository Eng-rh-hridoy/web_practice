import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
// import Detail from './CountryDetail/Detail';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
      fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        console.log(data);
      })
      .catch(error => console.log(error))
  }, [])
  const [detail, setDetail] = useState([]);
  const handleDetails =(coun)=>{
    setDetail(coun);
    // console.log("clicked", countries);
  }
  return (
    <div>
      <Header></Header>
      <Main countryData ={countries} key={countries.alpha3Code} handleDetails = {handleDetails} detailData = {detail}>
        
      </Main>
      
    </div>
  );
}

export default App;
