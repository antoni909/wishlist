"use strict";
  
export function genericRequest(url, options){
    return fetch( url, options )
        .then(response => response.json())
        .then( data => {
            return data
        })
        .catch( err => console.log(err) )
}

export function fetchImageUrl( url ){
    return fetch( url )
        .then( response => response.json())
        .then( data => {
            return data
        })
        .catch( err => console.log(err))
}