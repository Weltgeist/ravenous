import React from "react";
import Business from './Business'

function BusinessList (){

    const items = []
    for (let index = 0; index < 12; index++) {
         items.push('Business')
    }
    const listItems = items.map( item =>  {
        return ( <Business/>)
    });


    return (<div>{listItems}</div>)

}

export default BusinessList;