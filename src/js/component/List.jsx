import React from "react";
import ListItem from "./ListItem";

const List = ()=>{

    return (
        <ul class="list-group">
            {children}
        </ul>
    )
}

export default List;