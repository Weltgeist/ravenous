export function getYelpSearch(search,location,filterOption) {

    const API_HOST = "https://api.yelp.com";
    const SEARCH_PATH = "/v3/businesses/search";
    const BUSINESS_PATH = "/v3/businesses/"
    const API_KEY = process.env["REACT_APP_YELP_API_KEY"]; // https://dev.to/deammer/loading-environment-variables-in-js-apps-1p7p

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

