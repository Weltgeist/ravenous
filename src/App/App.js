import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar'
import business from './BusinessData' ;
import  { useState } from 'react';
import  { useEffect } from 'react';

function App() {

 //Creating Items 
  const businessList = []
  for (let index = 0; index < 12; index++) {
    businessList.push(business)
}

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
        <BusinessList businessList = {businessList}/>
      </header>
    </div>
  );
}

export default App;
