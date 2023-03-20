import React from "react";

import NavBar from "../component/NavBar.jsx";
import Hero from "../component/Hero.jsx";
import List from "../component/List.jsx";
import ListItems from "../component/ListItems.jsx";


const MyPassWords = () => {
    return (
        <>
            <Hero mainTitle={"Estas son tus contraseñas"}
                secondaryTitle={"¡Accede a todas tus contraseñas guardadas!"} />

            <div className="container m-5 p-3 border rounded-3">
                {ListItems.length === 0 ? <h2>Todavía no hay contraseñas guardadas</h2> : <h2>Contraseñas guardadas</h2>}
                <List>
                    <ListItems />
                </List>
            </div>
        </>
    );
}

export default MyPassWords;