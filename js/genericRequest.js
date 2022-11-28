"use strict";
  
export function genericRequest(url, options){
    return fetch( url, options )
        .then(response => response.json())
        .then( json => {
            const url = json[0].url
        })
        .catch( err => console.log(err) )
}
