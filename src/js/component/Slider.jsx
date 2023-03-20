import React from "react";

const Slider = ()=>{

    // $('#multi').mdbRange({
    //     single: {
    //       active: true,
    //       multi: {
    //         active: true,
    //         rangeLength: 1
    //       },
    //     }
    //   });

    $('#multi').mdbRange({
        width: '100%',
        direction: 'vertical',
        value: {
          min: 8,
          max: 18,
        },
        single: {
          active: true,
          value: {
            step: 1,
            symbol: ''
          },
          counting: false,
          countingTarget: null,
          bgThumbColor: '#4285F4',
          textThumbColor: '#fff',
          multi: {
            active: true,
            value: {
              step: 1,
              symbol: ''
            },
            counting: false,
            rangeLength: 2,
            countingTarget: null,
            bgThumbColor: '#4285F4',
            textThumbColor: '#fff'
          },
        }
      });


    return (      
      <div>
        <form className="multi-range-field my-5 pb-5">
            <input id="multi" className="multi-range" type="range" />
        </form> 
      </div>
    )
}

export default Slider;

{/* <label htmlFor="customRange1" className="form-label">Example range</label>
<input type="range" className="form-range" id="customRange1" min="8" max="18" step="1"></input> */}