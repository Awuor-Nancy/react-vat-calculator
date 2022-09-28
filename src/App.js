
import './App.css';
import Taxcalculator from './Taxcalculator';
import Billmanager from './Billmanager';
import Navbar from './Navbar';
import Footer from './Footer'
import {useState, useEffect} from 'react'

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Taxcalculator />
      <Billmanager />
      <Footer />
 
    </div>
  );
}

export default App;
