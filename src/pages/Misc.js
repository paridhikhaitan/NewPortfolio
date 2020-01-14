import React from 'react'
import Navbar from '../components/navbar'
import { Row, Col } from 'react-grid-system'
import { spacer3, spacer2 } from '../components/constants';

class Misc extends React.Component{
    render(){
        return(
            <div>

                <h1 style={{marginTop: spacer3, marginBottom: spacer3 }}>
                    MISCELLANEOUS
                </h1>
                <Row justify="center" className="misc">
                    <Col md={5}>
                    <img src={require('../images/misc/Gazette.jpg')} alt='Gazette'/>
                    
                    <img src={require('../images/misc/GDOPoster.png')} alt='GDO Poster'/>
                    <img src={require('../images/misc/cosctachLogo.jpg')} alt='COSTACH'/>
                    </Col>
                    <Col md={5}>
                    <img src={require('../images/misc/SilverJubilee.jpg')} alt='Silver Jubilee' />  
                    <img src={require('../images/misc/ShadowDay.jpg')} alt='Shadow Day'/>
                    </Col>
                </Row>

                <p>I really do avoid Serif Fonts. Does it show hehe!</p>
                
            </div>
        );
    }
}

export default Misc