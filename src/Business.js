import React from 'react';
import './Business.css';
import business from './BusinessData' ;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Business (){
    return (
        <Card style={{ width: '19rem' }} className='business'>
            <Card.Img  
            className='business-pic'
            src = {business.src}
            alt = {business.alt}
            />
            <Card.Body>
                <Card.Title className='business-name'>{business.name.toUpperCase()}</Card.Title>
                <Container fluid className='business-details'>
                <Row>
                    <Col xs={8}  md={8} lg={8} xl={8} xxl={8}><Card.Text className='business-address'>{business.address}</Card.Text></Col>
                    <Col xs={4} md={4} lg={4} xl={4} xxl={4}><Card.Text className='business-category'>{business.category.toUpperCase()}</Card.Text></Col>
                </Row>
                <Row>
                    <Col xs={8}  md={8} lg={8} xl={8} xxl={8}><Card.Text className='business-city'>{business.city}</Card.Text></Col>
                    <Col xs={4} md={4} lg={4} xl={4} xxl={4}><Card.Text className='business-rating'>{business.rating} stars</Card.Text></Col>
                </Row>
                <Row>
                    <Col xs={8}  md={8} lg={8} xl={8} xxl={8} className='business-state-zip'><Card.Text className='business-state'>{business.state} </Card.Text><Card.Text className='business-zipcode'>{business.zipCode}</Card.Text></Col>
                    <Col xs={4} md={4} lg={4} xl={4} xxl={4}><Card.Text className='business-review'>{business.reviewCount} reviews</Card.Text></Col>
                </Row>
                </Container>
            </Card.Body>
        </Card>
    );

}

export default Business;