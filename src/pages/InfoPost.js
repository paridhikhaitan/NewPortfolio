import React from 'react';
import Navbar from '../components/navbar';
import { Row, Col } from 'react-grid-system';
import { spacer2, spacer3 } from '../components/constants';

const mainImage={
    width: '75%',
    height: 'auto',
    display: 'block', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    marginTop: '3vw',
    marginBottom: '3vw',
}


const oldInfo={
    width:'45%',
    height: 'auto',
    margin: '2vw',
    alignItems: 'center',
    justifyContent: 'center',
}

class InfoPost extends React.Component{
    render(){
        return(
            <div>
                <div style={{marginTop: spacer3}}>
                    <h1>
                    INFOPOST
                    </h1>
                    <p>
                        <b>Overview: </b>  A San Diego based startup, InfoPost is your personal AI which checks the 
                        news you read for credibility. We give trust scores to your news so that you don't consume 
                        fake news. Our advanced artificial intelligence checks your articles for political bias, 
                        misleading headlines, source accuracy and more so that you trust what you read. 
                        <br />
                        
                    </p>
                    <br />

                    <Row style={{marginTop: spacer2}}>
                        <Col md={4}>
                            <h5>Role: Web Developer</h5>
                        </Col>
                        <Col md={4}>
                            <h5>Tools: React, HTML/CSS, JavaScript</h5>
                        </Col>
                        <Col md={4}>
                            <h5>Date: Jan 2019- Present</h5>
                        </Col>
                    </Row>
                
                    <img src={require('../images/infopost/SplashPage.gif')} alt='Class Photo' style={mainImage}/>

                    <br />
                    <br />
                    <p>
                        <b>Process: </b>  In February, when I started this position, I was completely unfamiliar with 
                        React. To create a preliminary website for potential investors and users, I tried bringing the vision 
                        of the UI/UX Designers to life by creating a Single Page Website using basic HTML and CSS. I also added
                        Google Analytics to this site to get data on the regions and demographic of our potential investors. Using bootstrap
                        studio, we also successfully made the website responsive for Laptops, Tablets and iPhone.  
                        <br />
                        <br />
                    </p>
                    <div style={{display: 'flex'}}>
                        <img src={require('../images/infopost/oldInfo1.png')} alt='Old InfoPost' style={oldInfo}/>
                        <img src={require('../images/infopost/oldInfo2.png')} alt='Old InfoPost' style={oldInfo}/>
                    </div>
                    <p>
                        While the old site was running for 4 months, we redesigned our application. In light of this change, 
                        I developed a new website, this time using React. Along with this, I worked on the Web Application for 
                        InfoPost wherein we used React along with it's several libraries to create the Timeline View, Profile View and 
                        Political Information page. Through this experience I was able to get a very hands-on experience with React, as 
                        well as see a startup grow from a single person to a team of ten. Our app is available for download at both &nbsp;
                        <a href='https://play.google.com/store/apps/details?id=com.InfoPost.InfoPostMain' target='blank'>Google PlayStore</a>
                        &nbsp; and&nbsp; <a href='https://apps.apple.com/us/app/infopost/id1471442391?ls=1' target='blank'>AppStore</a>.
                        <br />
                        <br />
                        Visit our website at <a href='https://theinfopost.com' target='blank'>www.theinfopost.com</a>
                    </p>
        

                </div>
            </div>
        );
    }
}

export default InfoPost;