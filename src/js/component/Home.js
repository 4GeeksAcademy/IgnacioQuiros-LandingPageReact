import React from "react";


//My importations
import Card from "./Card";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center bg-dark">
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
};


export default Home;
