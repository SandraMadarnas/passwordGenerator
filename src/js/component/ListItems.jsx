import React from "react";

const ListItems = ({children})=>{

    return (
        children.map((element)=>{
            return (
                <li className="list-group-item">
                    {element}
                </li>
            )
        })

    )
}

export default ListItems;