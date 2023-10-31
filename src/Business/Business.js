import React from 'react';
import './Business.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Business (props){
    return (
        <Card style={{ width: '19rem' , height: '20rem'}} className='business' bg='dark' text='light' >
            <Card.Img  style={{height: '12rem'}}
            className='business-pic'
            src = {props.src}
            alt = {props.alt}
            />
            <Card.Body>
                <Card.Title className='business-name'>{props.name.toUpperCase()}</Card.Title>
                <Container fluid className='business-details'>
                <Row>
                    <Col xs={8}  md={8} lg={8} xl={8} xxl={8}><Card.Text className='business-address'>{props.address}</Card.Text></Col>
                    <Col xs={4} md={4} lg={4} xl={4} xxl={4}><Card.Text className='business-category'>{props.category.toUpperCase()}</Card.Text></Col>
                </Row>
                <Row>
                    <Col xs={8}  md={8} lg={8} xl={8} xxl={8}><Card.Text className='business-city'>{props.city}</Card.Text></Col>
                    <Col xs={4} md={4} lg={4} xl={4} xxl={4}><Card.Text className='business-rating'>{props.rating} stars</Card.Text></Col>
                </Row>
                <Row>
                    <Col xs={8}  md={8} lg={8} xl={8} xxl={8} className='business-state-zip'><Card.Text className='business-state'>{props.state} </Card.Text><Card.Text className='business-zipcode'>{props.zipCode}</Card.Text></Col>
                    <Col xs={4} md={4} lg={4} xl={4} xxl={4}><Card.Text className='business-review'>{props.reviewCount} reviews</Card.Text></Col>
                </Row>
                </Container>
            </Card.Body>
        </Card>
    );

}

export default Business;