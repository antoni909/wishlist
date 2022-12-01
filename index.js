'use strict';

import "./js/elements/form.js"
import { createCardObj, renderCards } from "./js/createCard.js";
import { genericRequest } from "./js/genericRequest.js";
import { handleUpdateTitleBanner } from "./js/elements/form.js";
export let cardObjs = []

const handleDocumentLoad = (e) => {

    const data = genericRequest( "http://localhost:4000/destinations"  )
    data
        .then( response => {
            response.forEach( obj => {
                const cardObj = createCardObj( obj )
                cardObjs.push( cardObj )
            })
            if( cardObjs.length ) handleUpdateTitleBanner()
            renderCards()
        })
        .catch( err => console.log(err))

}

window.addEventListener("load", handleDocumentLoad)
