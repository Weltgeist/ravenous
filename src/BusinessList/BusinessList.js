import React from "react";
import Business from '../Business/Business'
import Container from 'react-bootstrap/Container/';
import Row from 'react-bootstrap/Row/';
import Col from 'react-bootstrap/Col/';
import {chunk} from 'lodash';
import './BusinessList.css';

function BusinessList ({businessList}){

    //Mapping all items as Columns
    const listItems = businessList.map( businessItem =>  {
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