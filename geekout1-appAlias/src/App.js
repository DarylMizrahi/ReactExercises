import React from 'react';
import './App.css';
import TopContent from './components/topPart'
import sun from './images/sun.png'
import MyBottomContent from './components/bottomContent'
import smallsun from './images/smallsun.png'
import leaf from './images/leaf.png'
import leafup from './images/leafup.png'
import drops from './images/drops.png'
import cloudrain from './images/cloudrain.png'
import cloudy from './images/cloudy.png'

function App() {
  return (
    <div className="BoxContent">
      <header className="App-header">
        <TopContent image={sun}></TopContent>
        <MyBottomContent
          day="Mo" date="16.02"
          logo={smallsun}
          status="Sunny"
          temperature="19°C"
          logo2={leaf}
          text2="4mph"
          logo3={leafup}
          text3="63%"
          logo4={drops}
          text4="14%">
        </MyBottomContent>
        <MyBottomContent
          day="Tu" date="17.02"
          logo={cloudrain}
          status="Rain"
          temperature="14°C"
          logo2={leaf}
          text2="4mph"
          logo3={leafup}
          text3="63%"
          logo4={drops}
          text4="14%">
        </MyBottomContent>
        <MyBottomContent
          day="We" date="18.02"
          logo={cloudy}
          status="Cloudy"
          temperature="17°C"
          logo2={leaf}
          text2="4mph"
          logo3={leafup}
          text3="63%"
          logo4={drops}
          text4="14%">
        </MyBottomContent>
      </header>
    </div>
  );
}

export default App;
