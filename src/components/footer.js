import React from 'react'
import { Row, Col } from 'react-grid-system'
import { spacer2 } from './constants';

class ContactFooter extends React.Component{
    render(){
        return(
            <div>
                <Row style={{marginTop: spacer2}}>
                    <Col md={6}>
                        <h5> Made by Paridhi 👽</h5>
                    
                    </Col>
                    <Col md={2}>
                    <a href="mailto:paridhi4699@gmail.com" target="blank">
                        <h5>E-Mail</h5></a>
                    </Col>
                    <Col md={2}>
                    <a href='https://www.linkedin.com/in/paridhi4699/'><h5>LinkedIn</h5></a>
                    </Col>
                    <Col md={2}>
                    <a href='https://github.com/paridhikhaitan'><h5>Github</h5></a>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ContactFooter;