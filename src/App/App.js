import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBarContainer from '../SearchBar/container/SearchBarContainer'
import business from './BusinessData' ;
import  { useState } from 'react';
import  { useEffect } from 'react';
import { YelpApiConnector } from '../utils/Yelp';

function App() {

  const[debug,setDebug] = useState(false);
  const[searchData,setsearchData] = useState([]);

  function handleSearchData(data){
    console.log(data)
    setsearchData(data);
  }

 //Creating Default Items, useful for debugging 
  const businessList = []
  for (let index = 0; index < 12; index++) {
    businessList.push(business)
  }

  function startUpdate() {
    // start search
    const search = "africain"
    const location = "charlotte,NC"
    const filterOption ="review_count"
    // Make Yelp Connector
    const  yelpCall = new YelpApiConnector("http://localhost:3001","/yelp/businesses/search"); //using express server to fix cors issue

    // Get initial Yelp Call
    const data = yelpCall.getYelpSearch(search,location,filterOption);
    //Updating App with Yelp Search result.
    data.then( responseStructured => setsearchData(responseStructured))
    .catch(err => console.error(err));
    
  }
  // Init call to startUpdate. Makes sure, yelp is called once to get a not empty page. 
  useEffect(() => {
    startUpdate()
  },[])//only run on 1st render.
  

  return (
    <div className="App">
      <header className="App-header">
      <h1 id="site-title">Ravenous</h1>
      <SearchBarContainer onYelpSearch= {handleSearchData}/>
      {!debug&&<BusinessList businessList = {searchData}/>} 
      {debug&&<BusinessList businessList = {businessList}/>}           
      </header>
    </div>
  );
}

export default App;
