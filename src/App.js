
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';



function App() {

    const[mode,setMode]=useState('light');

    const [alert,setAlert] = useState(null);

    const  showAlert=(message, type) =>{

      setAlert({
        msg:message,
        type:type
       })
    
       setTimeout(() => {

        setAlert(null);
        
       }, 3000);



    }

    const toggleMode= ()=>{
       
      if (mode==='light'){

        setMode('dark')

        document.body.style.background ='#2525ad';

        showAlert(" darkmode has been enablled", "success")

      }
      else{
        setMode('light')
        document.body.style.background ='white';
        showAlert(" lightmode has been enablled", "success")
      }
      
    }

  return (
    <>
     <BrowserRouter>
    <Navbar  title="TextUtils"  about=" about "  mode={mode}   toggleMode={toggleMode}/>

    <Alert alert={alert}  />

    <div className="container my-3">

    </div>


     <Routes>
      
    < Route path ="/"  element= {< TextForm    showAlert={showAlert}  heading=" Enter text to analize  "  mode={mode}/>}>

    </Route>

    <Route path="/about" element={<About/>} >
      
      
      </Route> 

      <Route path="/about" element={<About/>} >
      
      
      </Route> 

      <Route path="/contact" element={<Contact mode={mode}/>} >
      
      
      </Route> 


    </Routes>


        

        

        </BrowserRouter> 
    
    </>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;