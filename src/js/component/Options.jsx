import React from "react";
import CheckBox from "./CheckBox.jsx";
import { useState } from "react";
import Slider from "./Slider.jsx";


const Options = () => {

    const [passCapitals, setPassCapitals] = useState(true); //callback props
    const [passNumbers, setPassNumbers] = useState(true);
    const [passSymbols, setPassSymbols] = useState(false);

    return (<>
        <div className="container m-5 p-3 border rounded-3">
            <h3 className="mb-3">Selecciona tus opciones:</h3>
            <CheckBox label="Incluir Mayúsculas" handler={setPassCapitals} checkedState={passCapitals} />
            <CheckBox label="Incluir Números" handler={setPassNumbers} checkedState={passNumbers} />
            <CheckBox label="Incluir Símbolos" handler={setPassSymbols} checkedState={passSymbols} />

            <button type="button" className="btn btn-primary m-3">Generar Contraseña</button>

            <h3>Esta es tu contraseña</h3>
            <h4 id="password"> Contraseña </h4>
        </div>
    </>
    );
}


export default Options;