import React from 'react';
import './css/App.scss';
import {spacer1, spacer2, spacer3, spacer4} from './components/constants';
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main';

import {setConfiguration} from 'react-grid-system';

import Navbar from './components/navbar';
import ContactFooter from './components/footer';

setConfiguration({
  gutterWidth: 80,
  containerWidths: [2000, 2000, 2000, 2000]
});

function App() {
  return (
    <div className="App" style={{margin: spacer3}}>
      <Navbar />
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
    <ContactFooter />
    </div>
  );
}

export default App;
