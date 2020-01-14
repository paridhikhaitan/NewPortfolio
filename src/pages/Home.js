import React, { Component } from 'react';
import {Row, Col, Container} from 'react-grid-system';
import {work} from '../components/work';
import {spacer1, spacer2, spacer3, spacer4} from '../components/constants';
import Tilt from 'react-tilt';
import Navbar from '../components/navbar';


const workList= work.map(tile=>(
    <Col md={5} style={{marginBottom: spacer3, marginTop: tile.margin}}>
        <Tilt>
                <a href={tile.web}>
                <img src={require(`../images/workImages/${tile.imgLink}.png`)} alt={tile.company} />
                </a>
                
        
                <h2 style={{marginTop: spacer2}}> {tile.position} </h2>
                <h3 style={{marginTop: spacer1}}> {tile.company} </h3>
                </Tilt>
        
    </Col>
));

class Home extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col md={9}>
                            <div style={{}}>
                            <h1>
                                Hi! I'm <span className="stroke">Paridhi</span>.
                            </h1>
                            <h1> 
                                I'm a <span className="stroke">developer</span> + <span className="stroke">designer </span> 
                                 who is passionate about diversity, inclusion and accessibility!
                            </h1>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="center" style={{marginTop: spacer4}}>
                        {workList}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;