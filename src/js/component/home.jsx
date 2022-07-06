import React, {useState}from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let [selected,setSelected] = useState("")
	
	return (
		<div>
		<div id="TraficTop"></div>
		<div id="container">
			<div  className={selected === 'red'? 'red light selected' : 'red light'}onClick={()=>setSelected("red")}></div>
			<div  className={selected === 'yellow' ? 'yellow light selected' : 'yellow light'}onClick={()=>setSelected("yellow")}></div>
			<div  className={selected === 'green'? 'green light selected' : 'green light'}onClick={()=>setSelected("green")}></div>
		</div>
	</div>
	);
};

export default Home;
