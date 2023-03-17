import React from "react";
import propTypes from "prop-types";


const CheckBox = ({ label, handler, chekedState }) => {
    return (
        <>
            <div className="form-check">
                <input className="form-check-input" onClick={() => handler} cheked={chekedState} type="checkbox" />
                <label className="form-check-label">
                    {label}
                </label>
            </div>
        </>
    );
}

CheckBox.propTypes = {
    label: propTypes.string,
    handler: propTypes.string,
    chekedState: propTypes.bool
}

export default CheckBox;