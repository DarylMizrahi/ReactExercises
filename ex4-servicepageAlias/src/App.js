import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LogoPhone from './images/navbarlogo.png'
import Content from './components/content'
import Content2 from './components/Content2'
import user from './images/user.png'
import pens from './images/pens.png'
import envelop from './images/envelop.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar name1="SERVICE" name2="WORK" name3="THE TEAM" image={LogoPhone}></Navbar>
        <Content title="SERVICE"></Content>
        <div className="middlePart">
          <Content2 image={user} subtitle="USER INTERFACE DESIGN" info="Wireframing Prototyping Usability Testing"></Content2>
          <Content2 image={pens} subtitle="CONCEPT AND IDEAS" info="Conceptualization Digital Branding Product Strategy"></Content2>
          <Content2 image={envelop} subtitle="DESIGN AND BRANDING" info="Interaction Design Graphic Design Identity Design"></Content2>
        </div>
      </header>
    </div >
  );
}

export default App;
