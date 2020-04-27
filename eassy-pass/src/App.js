import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer/Timer.js';
import Header from './Components/Header/Header'
import Qrcode from './Components/Qrcode/Qrcode'
import Profile from './Components/Profile/Profile'
import { Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
  
      <Route exact path='/' render={() => (
       <React.Fragment>
        <header className="App-header">
              <Header  />
        </header>
          
          <main className="main">
              <Timer />
          </main>
          
          
          <main >
          
          </main>
          <main >
          
          </main>
          
          <footer className="footer">
              <Qrcode />
          </footer>
        </React.Fragment>
      )}/>

        
    

      
        <Route exact path='/profile' render={() => (
            <Profile/>
        )} />     
        
    </div>
   
  );
}

export default App;
