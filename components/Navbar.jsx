import React from "react"
import "../App.css"
import Logo from "../assets/Logo.svg"

export const Navbar =() => {
    return <div>
           <div className="container" style={{display:"flex",justifyContent:"space-between"}} >
            <div className="first" style={{display:"flex"}}>
                <div className="logo">
                 <img src={Logo} style={{width:"38px",width:"38px",paddingLeft:"1px"}}/>
                </div>
                <div className="links"style={{display:"flex",fontFamily: 'Poppins, sans-serif',paddingTop:"7px",paddingLeft:"10px"}}>   
                    <div style={{paddingLeft:"20px",color:"black"}}>Home</div>
                    <div style={{paddingLeft:"25px",color:"black"}}>Web designs</div>
                    <div style={{paddingLeft:"25px",color:"black"}}>Mobile designs</div>
                    <div style={{paddingLeft:"25px",color:"black"}}>Illustrations</div>
                </div>
                
            </div>
            <div className="second" style={{display:"flex",paddingTop:"7px"}}>
               <div className="search">
               <input type="text"   placeholder="Enter  email " style={{ fontFamily: 'Poppins, sans-serif',borderRadius:"15px", background:" rgba(255, 255, 255, 0)",fontSize:"12px",border:'groove',borderWidth:"2px"}}/>
               </div>
               <div className="dropdown" style={{ fontFamily: 'Poppins, sans-serif',paddingLeft:"25px"}}>
               <select style={{fontSize:"16px",borderRadius:"10px",height:"23px",border: 'none'}}>
        <option value="" style={{ fontFamily: 'Poppins, sans-serif'}}>Select an option</option>
        <option value="option2" style={{ fontFamily: 'Poppins, sans-serif'}}>Marathi (india)</option>
        <option value="option1" style={{ fontFamily: 'Poppins, sans-serif'}}>English (united states)</option>
        <option value="option3" style={{ fontFamily: 'Poppins, sans-serif'}}>Punjabi (india)</option>
        </select>
               </div>
               
               <div className="button" style={{ fontFamily: 'Poppins, sans-serif',paddingLeft:"25px"}}>
                <button  style={{ fontFamily: 'Poppins, sans-serif',color:"black",background:"white",width:"98px",borderRadius:"6px",height:"28px"}}>Log in</button>
                <button  style={{ fontFamily: 'Poppins, sans-serif',marginLeft:"10px",color:"white",background:"black",width:"98px",borderRadius:"6px",height:"28px"}}>Sign up</button>
                </div>
            </div>
           </div>
    </div>
}