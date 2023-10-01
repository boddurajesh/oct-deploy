import React,{useState} from 'react'



export default function TextForm(props) {

    const handleUpCLick =()=>{
        console.log(" upper case was  clicked");
          
       let  newText=text.toUpperCase();

        setText(newText);

        props.showAlert(" Converted to upper case", " success");
       
       

    }

     const  handleLoCLick =( ) =>{

      let newText= text.toLowerCase();
      setText(newText);

      props.showAlert(" Converted to lower case", " success");
      
    }

    const handleOnchange =(event)=>{
        console.log(" handled");
        setText(event.target.value);
    }

    const  handleClear =()=>{
      let  newText='';

      setText(newText);
      props.showAlert(" Text cleared", " success")
    }


    const[ text, setText]=useState("Enter your text here");

    

  return (

    <>
    <div className=" container " style={{color:props.mode==='light'?'black':'white'}} >

         <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text}  onChange={handleOnchange}  style={{backgroundColor:props.mode==='light'?'white':'#5252a5',color:props.mode==='light'?'black':'white' }}   id="myBox" rows="8"></textarea>

        </div>

        <button type="button" className="btn btn-primary" onClick={handleUpCLick}>Convert to upper case </button>
        <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleLoCLick}>Convert to lower case </button>

        <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear text</button>


  </div>




   <div className=" container my-3 " style={{color:props.mode==='light'?'black':'white'}} > 

    <h2> your text summary</h2> 

    <p> {text.split(" ").filter((element) => {return element.length!==0}).length } words and {text.length} charcters</p>

    <p> {0.008*text.split(" ").filter((element) => {return element.length!==0}).length } minutes to read  </p>

    <h2> Preview </h2>
    <p> {text}</p>


   </div>

</>
  )
}