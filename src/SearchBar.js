import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';
import { Container } from 'react-bootstrap';
import './SearchBar.css'
import Nav from 'react-bootstrap/Nav';

function SearchBar (){

    const API_HOST = "https://api.yelp.com";
    const SEARCH_PATH = "/v3/businesses/search";
    const BUSINESS_PATH = "/v3/businesses/"
    const API_KEY = process.env["REACT_APP_YELP_API_KEY"]; // https://dev.to/deammer/loading-environment-variables-in-js-apps-1p7p

    const filteredSearch = {
        best_match: 'sort_by=best_match&limit=20',
        rating:'sort_by=rating&limit=20',
        review_count:'sort_by=review_count&limit=20'

    }

    function getYelpSearch( selectedSearch) {

        let searchAdd = '';

        // Select a filter use case
        if (selectedSearch === 'best_match'){
            searchAdd = filteredSearch.best_match;
        } else if (selectedSearch === 'rating') {
            searchAdd = filteredSearch.rating;
        } else if (selectedSearch === 'review_count') {
            searchAdd = filteredSearch.review_count;
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
        const data = fetch(`${API_HOST}${SEARCH_PATH}?${searchAdd}`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        return data;

    }

    function handleSelect(selectedKey){
        alert(`selected ${selectedKey}`)
    }

    return (
        <Container className = 'nav-bar-container'>
            <Navbar className=".bg-transparent  nav-bar-item">{/* justify-content-between */}
                <Stack gap={3} className='form-stack-container'>
                    <Stack direction="horizontal" gap={3} className='form-stack-container'>
                    <Form inline>
                        <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Search Business"
                            aria-label="Search Business"
                            aria-describedby="basic-addon1"
                        />
                        </InputGroup>
                    </Form>
                    <Form inline> 
                        <InputGroup>
                            <Form.Control
                            type="text"
                            placeholder="Where?"
                            aria-label="Where?"
                            className=" mr-sm-2"
                            />
                        </InputGroup>
                    </Form>
                    </Stack>
                    <Stack direction="horizontal" gap={3} className='form-stack-container'>
                        <Button type="submit" className = 'navbar-button'>Submit</Button>
                    </Stack>
                        <Nav fill variant="tabs"  onSelect={handleSelect}>
                            <Nav.Item>
                                <Nav.Link eventKey="best_match">Best Match</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="rating">Highest Rated</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="review_count">Most Reviewed</Nav.Link>
                            </Nav.Item>
                        </Nav>
                </Stack>
            </Navbar>
        </Container>
      );
    }

export default SearchBar;