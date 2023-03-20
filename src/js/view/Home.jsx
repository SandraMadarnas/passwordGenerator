import React from "react";
import NavBar from "../component/NavBar.jsx";
import Hero from "../component/Hero.jsx";
import Options from "../component/Options.jsx";
import CheckBox from "../component/CheckBox.jsx";


//create your first component
const Home = () => {
	return (
		<>
			<Hero mainTitle={"Generador de Contraseñas"}
				secondaryTitle={"¡Genera tus contraseñas seguras en cuestión de segundos!"} />
			<Options />
		</>
	);
};

export default Home;
