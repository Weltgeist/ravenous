//Class Implementation
export class YelpApiConnector{
  constructor(){

    //End Point Data
    this.API_HOST = "https://api.yelp.com";
    this.SEARCH_PATH = "/v3/businesses/search";
    this.BUSINESS_PATH = "/v3/businesses/"
    this.API_KEY = process.env["REACT_APP_YELP_API_KEY"]; // https://dev.to/deammer/loading-environment-variables-in-js-apps-1p7p
    // Yelp REST API Search
    this.options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.API_KEY}`
      }
    }; 
    // Yelp REST API filtering option
    this.filteredSearch = {
      best_match: 'sort_by=best_match&limit=20',
      rating:'sort_by=rating&limit=20',
      review_count:'sort_by=review_count&limit=20'

    }
  }

  getYelpSearch(search,location,filterOption){
    // fetch Call
    const data = fetch(`${this.API_HOST}${this.SEARCH_PATH}?${this.filteredSearch[filterOption]}`, this.options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return data;
  }

}

//Functional Implementation
export function getYelpSearch(search,location,filterOption) {

  
    //End Point Data
    const API_HOST = "https://api.yelp.com";
    const SEARCH_PATH = "/v3/businesses/search";
    const BUSINESS_PATH = "/v3/businesses/"
    const API_KEY = process.env["REACT_APP_YELP_API_KEY"]; // https://dev.to/deammer/loading-environment-variables-in-js-apps-1p7p

    
    // Yelp REST API filtering option
    const filteredSearch = {
        best_match: 'sort_by=best_match&limit=20',
        rating:'sort_by=rating&limit=20',
        review_count:'sort_by=review_count&limit=20'

    }

    // Yelp REST API Search
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };     

    // fetch Call
    const data = fetch(`${API_HOST}${SEARCH_PATH}?${filteredSearch[filterOption]}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return data;

}

