import React,{useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle]=useState(

        {
            color:'white',
            backgroundColor:' black '
         }

    )

    const [btnText, setBtnText]=useState('Enable dark mode')
   
   
   
     const toggleStyle = ()=>{
        
        if(myStyle.color==='white'){

            setMyStyle(
                {
                    color:'black',
                    backgroundColor:' white '
                 }

            )
            setBtnText('Enable dark mode')
        }

        else{

            setMyStyle(
                {
                    color:'white',
                    backgroundColor:' black '
                 }

            )
            setBtnText('Enable light mode')
        }

    }


     


  return (
    <div className='container' style={myStyle}>

           <h2>  About Us   </h2>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button"  style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>  Analyze your text   </strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body " style={myStyle}>
                   TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count , character count or uppercase and lowercase conversion.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                 <strong>   Free to use   </strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    TextUtils is a free character counter tool that proviodes instant character count & word count statisrics for a given textS
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               
                 <strong> Browser Compatible    </strong>
               
                </button>   
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle} >
                   This word coubter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Opera. It suits to count characterss in Facebook, blog, books , pdf document , essays etc
                </div>
                </div>
            </div>
            </div>


            <div  className='container my-3 '>

            <button   onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
         
            </div>

            


    </div>
  )
}
