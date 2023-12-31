import React, { useState } from 'react';
import SearchBar from '../component/SearchBar';
//import { getYelpSearch } from '../../utils/Yelp';
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

    // handle tab selection
    function handleSelect(selectedKey){
        setFilterOption(selectedKey)
        alert(`selected ${selectedKey}`)
    }
    
    //handle location input
    function handleSubmit(e){
        e.preventDefault();
        if (search === "") {
            alert(`search term is missing, please add  `)
        } 
        else if (location === "") {
            alert(`location term is missing, please add  `)
        }
        else if  (filterOption === "") {
            alert(`filtering option not selected, please select one `)
        }else {
            alert(`searching ${filterOption} ${search} around ${location}  `)
            console.log(`searching ${filterOption} ${search} around ${location}  `)
            const data = yelpCall.getYelpSearch(search,location,filterOption);
            //Updating App with Yelp Search result.
            data.then( responseStructured => onYelpSearch(responseStructured))
            .catch(err => console.error(err));
        } 

        
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
