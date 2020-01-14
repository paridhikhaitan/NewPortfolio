import React from 'react'
import { deflate } from 'zlib';
import { Row, Col } from 'react-grid-system';
import Navbar from '../components/navbar';
import { spacer3 } from '../components/constants';

class About extends React.Component{
    render(){
        return(
            <div>
                <Row style={{marginTop: spacer3}}>

                    <Col md={4}>
                        <img src={require("../images/aboutPagePhoto.jpg")} />
                    </Col>
                    <Col xs={0} md={1}></Col>

                
                <Col md={7}>
                <div >
                        <p >
                            Hi, I'm Paridhi. I'm currently pursuing a B.S. in Computer Science with a minor in Design at the 
                            University of California, San Diego. 
                            <br />
                            <br />
                            This summer, I served as a Tutor for Android Development at <a href='/fbu'>Facebook University</a>. I currently intern 
                            at a San Deigo based startup, <a href='/infopost'>InfoPost</a>, as a Web Developer and also serve on the board of <a href='/comingsoon'>Design Co. at UCSD</a>. 
                            <br />
                            <br />
                            I'm interested in the intersection of code and design. I work with <a href='https://girlswhocode.com'>Girls' Who Code</a> and <a href='http://wic.ucsd.edu'>Women in Computing @UCSD </a>
                             to promote female representation in Computer Science through outreach events, mentorship and workshops. 
                            <br/>
                            <br />
                            I consume copious amounts of Netflix, coffee and room-decor videos and, on the left, I'm featured holding a Kaddu!
                        </p>
                    </div>
                    </Col>
                    </Row>
            </div>
        );
    }
}

export default About