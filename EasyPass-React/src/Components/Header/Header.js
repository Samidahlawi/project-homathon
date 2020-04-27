import React, {Component} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import logo from './logo.png';
class Header extends Component{
    render(){
        return(
            <Container className="logo">
                <Row xs={6} md={6} lg={6}>
                <Col>
                    <img className="App-logoo" src={logo} alt="logo" width="120px" height="100px"/>
                 </Col>
                </Row>
            </Container>
        )
    }
}


export default Header;