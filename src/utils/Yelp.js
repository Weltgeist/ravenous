//Class Implementation
export class YelpApiConnector{
  constructor(API_HOST = "https://api.yelp.com",SEARCH_PATH = "/v3/businesses/search"){
    // When using express to fix CORS issue. Optional, if CORS doesn't work for Yelp call.
    // API_HOST= http://localhost:3001
    // SEARCH_PATH = /yelp/businesses/search
    //End Point Data
    this.API_HOST = API_HOST;
    this.SEARCH_PATH = SEARCH_PATH;
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
    this.sort = '&sort_by=';
    this.filteredSearch = {
      best_match: 'best_match&limit=24',
      rating:'rating&limit=24',
      review_count:'review_count&limit=24'

    }
    this.locationSearch  = 'location='
    this.term = '&term='
  }

  getYelpSearch(search,location,filterOption){
    
    console.log( `${this.API_HOST}${this.SEARCH_PATH}?${this.locationSearch}${location}${this.term}${search}${this.sort}${this.filteredSearch[filterOption]}`)

    // fetch Call
    return fetch(`${this.API_HOST}${this.SEARCH_PATH}?${this.locationSearch}${location}${this.term}${search}${this.sort}${this.filteredSearch[filterOption]}`, this.options)
        .then(response => response.json())
        .then((response) => { 
              if (response){
                console.log(response)
                return response.businesses.map( (business) => {
                  return {         
                    src: business.image_url,
                    alt:business.alias,
                    name:business.name,
                    address:business.location.address1,
                    city:business.location.city,
                    state:business.location.state,
                    zipCode:business.location.zip_code,
                    category:business.categories[0]?.title,
                    rating:business.rating,
                    reviewCount:business.review_count
                  }
                }
              )
            } 
          }
        )
        .catch(err => console.error(err));

  }

}

//Functional Implementation
export function getYelpSearch(search,location,filterOption) {

  
    //End Point Data
    const API_HOST = "https://api.yelp.com";
    const SEARCH_PATH = "/v3/businesses/search";
    const LOCATION_SEARCH = 'location=';
    const TERM_SEARCH = '&term=';
    const SORT_SEARCH = '&sort_by=';
    const API_KEY = process.env["REACT_APP_YELP_API_KEY"]; // https://dev.to/deammer/loading-environment-variables-in-js-apps-1p7p

    
    // Yelp REST API filtering option
    const filteredSearch = {
        best_match: 'best_match&limit=20',
        rating:'rating&limit=20',
        review_count:'review_count&limit=20'

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
    const data = fetch(`${API_HOST}${SEARCH_PATH}?${LOCATION_SEARCH}${location}${TERM_SEARCH}${search}${SORT_SEARCH}${filteredSearch[filterOption]}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return data;

}

