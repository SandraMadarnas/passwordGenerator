import React from "react";
import CheckBox from "./CheckBox.jsx";

const Options = ({ props }) => {
    return (<>
        <div className="container m-5 p-3 border rounded-3">
            <h3 className="mb-3">Selecciona tus opciones:</h3>
            <CheckBox label="Incluir mayúsculas" handler="" initiallyChecked="" chekedState={false} />
            <CheckBox label="Incluir Números" handler="" initiallyChecked="" chekedState={false} />
            <CheckBox label="Incluir Símbolos" handler="" initiallyChecked="" chekedState={false} />

            <button type="button" className="btn btn-primary m-3">Generar Contraseña</button>
        </div>
    </>
    );
}

export default Options;