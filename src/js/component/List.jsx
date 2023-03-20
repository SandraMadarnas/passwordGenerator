import React from "react";
import ListItems from "./ListItems.jsx";

const List = ()=>{

    return (
        <>
        <ul class="list-group">
            {children}
        </ul>
        </>
    )
}

export default List;