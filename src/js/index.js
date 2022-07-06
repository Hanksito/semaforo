//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
const list = document.querySelectorAll(".light")
function activelink(){
list.forEach((item)=>{
    item.classList.remove("selected")})
    this.classList.add("selected")}
    list.forEach((item) =>{
        item.addEventListener("click",activelink)})


//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
