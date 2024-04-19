import React from "react"
import home from "../assets/home.svg"
export const Homepage=()=>{
    return <div style={{margin:"0px"}}>
            <div className="contain"  style={{zIndex:"-1", position:"fixed"}}>
                <img src={home} style={{width:"1680px" }}/>
            </div>
            <div className="subcontain" style={{ marginLeft: "250px",zIndex: "1", margin: "0px", background: "", alignContent: "center", justifyContent: "center", width: "700px", height: "872px" }}>
    <div style={{ paddingTop:"150px",paddingBottom:"150px",paddingLeft:"45px",marginRight:"0px",background: "rgba(255, 255, 255, 0.4)", border:" 1px solid #ccc",borderRadius:"18px"}}>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: "48px", fontWeight: "600" }}>Design with us <br /> Explore with us</h1>
        <h5 style={{ fontFamily: 'Poppins, sans-serif', fontSize: "24px", fontWeight: "300" }}>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit. Morbi lobortis maximus nunc, ac rhoncus odio <br />congue quis. Sed ac semper orci, eu porttitor lacus. </h5>
        <div>
        <input type="text"   placeholder="Enter your email address" style={{ fontFamily: 'Poppins, sans-serif',borderRadius:"15px", background:" rgba(255, 255, 255, 0)",width:"426px",height:"47px",fontSize:"16px"}}/>
        <button  style={{ fontFamily: 'Poppins, sans-serif',marginLeft:"10px",color:"white",background:"black",height:"56px",width:"176px",borderRadius:"30px",marginLeft:"5px"}}>Sign up</button>
        </div>
    </div>


            </div>
    </div>
}