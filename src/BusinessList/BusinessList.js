import React from "react";
import Business from '../Business/Business'
import Container from 'react-bootstrap/Container/';
import Row from 'react-bootstrap/Row/';
import Col from 'react-bootstrap/Col/';
import {chunk} from 'lodash';
import './BusinessList.css';
import business from './BusinessData' ;

function BusinessList (){

    //Creating Items 
    const items = []
    for (let index = 0; index < 12; index++) {
         items.push('Business')
    }
    //Mapping all items as Columns
    const listItems = items.map( item =>  {
        return ( <Col className={'business-items'}><Business
        src = {business.src}
        alt = {business.alt}
        name = {business.name}
        address = {business.address}
        city = {business.city}
        state = {business.state}
        zipCode = {business.zipCode}
        category = {business.category}
        rating = {business.rating}
        reviewCount = {business.reviewCount}
        /></Col>)
    });

    //Splitting Columns into a grid
    const gridItems = chunk(listItems,Math.floor((listItems.length)/3));

    const gridComponent = gridItems.map( items => {
        return (<Row>{items}</Row>);
    })



    return (
    <Container fluid={'lg'}>{gridComponent}
    </Container>
    )

}

export default BusinessList;