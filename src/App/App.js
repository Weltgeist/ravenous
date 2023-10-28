import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBarContainer from '../SearchBar/container/SearchBarContainer'
import business from './BusinessData' ;
import  { useState } from 'react';
import  { useEffect } from 'react';

function App() {

  const[searchData,setsearchData] = useState([]);

  function handleSearchData(data){
    console.log(data)
    setsearchData(data);
  }

 //Creating Items 
  const businessList = []
  for (let index = 0; index < 12; index++) {
    businessList.push(business)
}

  return (
    <div className="App">
      <header className="App-header">
        <SearchBarContainer onYelpSearch= {handleSearchData}/>
        <BusinessList businessList = {searchData}/>
      </header>
    </div>
  );
}

export default App;
