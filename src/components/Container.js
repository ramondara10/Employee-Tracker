import React from "react";
import Sort from './Sort'

const Container = ({sortState,employees}) =>{
    return(
        <div>
            <Sort sortState={sortState} employees={employees} />
            <div className = "conatiner">

            </div>
        </div>
    )
}

export default Container;