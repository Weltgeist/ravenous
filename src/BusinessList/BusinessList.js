import React from "react";
import Business from '../Business/Business'
import Container from 'react-bootstrap/Container/';
import Row from 'react-bootstrap/Row/';
import Col from 'react-bootstrap/Col/';
import {chunk} from 'lodash';
import './BusinessList.css';
import  { useLayoutEffect } from 'react';
import  { useState } from 'react';

function BusinessList ({businessList}){

    //Mapping all items as Columns
    const listItems = businessList.map( (businessItem,index) =>  {
        return ( <Col className={'business-items'}><Business
        src = {businessItem.src}
        alt = {businessItem.alt}
        name = {businessItem.name}
        address = {businessItem.address}
        city = {businessItem.city}
        state = {businessItem.state}
        zipCode = {businessItem.zipCode}
        category = {businessItem.category}
        rating = {businessItem.rating}
        reviewCount = {businessItem.reviewCount}
        key={`${businessItem.name}-${index}`}
        /></Col>)
    });

    //Splitting Columns into a grid
    const gridItems = chunk(listItems,4);

    const gridComponent = gridItems.map( items => {
        return (<Row>{items}</Row>);
    })



    return (
    <Container fluid={'lg'}>{gridComponent}
    </Container>
    )

}

export default BusinessList;