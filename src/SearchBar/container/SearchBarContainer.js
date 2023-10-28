import React, { useState } from 'react';
import SearchBar from '../component/SearchBar';
//import { getYelpSearch } from '../../utils/Yelp';
import { YelpApiConnector } from '../../utils/Yelp';


function SearchBarContainer ({onYelpSearch}){
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [filterOption, setFilterOption] = useState("");

    const  yelpCall = new YelpApiConnector("http://localhost:3001","/yelp/businesses/search"); //using express server to fix cors issue

    //handle search input
    function handleSearch(e){
        setSearch(e.target.value);
    }

    //handle location input
    function handleLocation(e){
        setLocation(e.target.value);
    }
    
    //handle location input
    function handleSubmit(e){
        e.preventDefault();
        alert(`searching ${filterOption} ${search} around ${location}  `)
        console.log(`searching ${filterOption} ${search} around ${location}  `)
        //onYelpSearch(getYelpSearch(search,location,filterOption))
        yelpCall.getYelpSearch(search,location,filterOption);
    }

    // handle tab selection
    function handleSelect(selectedKey){
        setFilterOption(selectedKey)
        alert(`selected ${selectedKey}`)
    }

    return (
        <SearchBar 
        onSearch={handleSearch}
        onLocation={handleLocation}
        onSubmit={handleSubmit}
        onSelect={handleSelect}
        />
      );
    }

export default SearchBarContainer;