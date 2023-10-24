import React, { useState } from 'react';
import SearchBar from '../component/SearchBar';


function SearchBarContainer ({onYelpSearch}){
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [filterOption, setFilterOption] = useState("");

    const API_HOST = "https://api.yelp.com";
    const SEARCH_PATH = "/v3/businesses/search";
    const BUSINESS_PATH = "/v3/businesses/"
    const API_KEY = process.env["REACT_APP_YELP_API_KEY"]; // https://dev.to/deammer/loading-environment-variables-in-js-apps-1p7p

    const filteredSearch = {
        best_match: 'sort_by=best_match&limit=20',
        rating:'sort_by=rating&limit=20',
        review_count:'sort_by=review_count&limit=20'

    }

    function getYelpSearch() {

        // Yelp REST API Search
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: API_KEY
            }
          };     

        // fetch Call
        const data = fetch(`${API_HOST}${SEARCH_PATH}?${filteredSearch[filterOption]}`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        return data;

    }

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
        //onYelpSearch(getYelpSearch())
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