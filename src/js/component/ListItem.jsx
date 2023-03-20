import React from "react";

const ListItem = ({children})=>{

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

export default ListItem;