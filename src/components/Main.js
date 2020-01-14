import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About'
import FBUCodepath from '../pages/FBUCodepath'
import InfoPost from '../pages/InfoPost'
import Miscellaneous from '../pages/Misc'

class Main extends React.Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route path='/fbu' component={FBUCodepath}/>
                    <Route path='/infopost' component={InfoPost}/>
                    <Route path='/miscellaneous' component={Miscellaneous}/>
                </Switch>
            </main>
        );

    }
}

export default Main;