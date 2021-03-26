import React from "react"


function Header({name,title}){
    return(
        <div>
            <h1 className={"box shadow"}>welcome to {name}</h1>
        </div>
    )
}



export default Header;