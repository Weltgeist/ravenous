import React from "react";
import Business from '../Business/Business'
import Container from 'react-bootstrap/Container/';
import Row from 'react-bootstrap/Row/';
import Col from 'react-bootstrap/Col/';
import _ from 'lodash';
import './BusinessList.css';

function BusinessList (){

    //Creating Items 
    const items = []
    for (let index = 0; index < 12; index++) {
         items.push('Business')
    }
    //Mapping all items as Columns
    const listItems = items.map( item =>  {
        return ( <Col className={'business-items'}><Business/></Col>)
    });

    //Splitting Columns into a grid
    const gridItems = _.chunk(listItems,Math.floor((listItems.length)/3));

    const gridComponent = gridItems.map( items => {
        return (<Row>{items}</Row>);
    })



    return (
    <Container fluid={'lg'}>{gridComponent}
    </Container>
    )

}

export default BusinessList;