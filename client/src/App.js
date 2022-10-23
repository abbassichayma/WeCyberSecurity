import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './components/Home/Home'
import Header from './components/Header/Header';
import { useState } from 'react';
import ReactCalander from './components/Calander';

function App() {
  const [test,setTest]=useState(false)
  const [naissance,setNaissance]=useState(new Date())
  
  return (
    <div className="App">
 <TopBar/>
 <div className='container'>
 <Header/>
 <Home setTest={setTest}/>
 {<ReactCalander setNaissance={setNaissance}/> && test}
 </div>
 
 
    </div>
  );
}

export default App;
