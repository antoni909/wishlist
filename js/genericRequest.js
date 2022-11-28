"use strict";
  
function genericRequest(url, options){
    return fetch( url, options )
        .then(response => response.json())
        .then( json => {
            // console.log(json)
            const url = json[0].url
            console.log(url)
        })
        .catch( err => console.log(err) )
}

export { genericRequest }