import React from "react";
import propTypes from "prop-types";


const CheckBox = ({ label = "You forgot the text", handler, checkedState = false }) => {

    const handlerToggleStateHook = () => {
        handler( prev => prev ? false : true);
    }

    return (
        <>
            <div className="form-check">
                <input className="form-check-input" onChange={handlerToggleStateHook} type="checkbox" checked={checkedState} />
                <label className="form-check-label">
                    {label}
                </label>
            </div>
        </>
    );
}

CheckBox.propTypes = {
    label: propTypes.string,
    handler: propTypes.func,
    checkedState: propTypes.bool
}

export default CheckBox;