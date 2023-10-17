import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';
import { Container } from 'react-bootstrap';
import './SearchBar.css'

function SearchBar (){
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
                </Stack>
            </Navbar>
        </Container>
      );
    }

export default SearchBar;