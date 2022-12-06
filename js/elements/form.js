'use strict';

import { genericRequest } from "../genericRequest.js"
import { updateH2ChildNodes, titleBanner } from "./h2_title.js"
import { createCardNode } from "../createCards.js"
import { baseURL } from "../urls.js"

const form = document.vacationform
export const divWishList = document.getElementById("div-wishlist")
// const baseUrl = "https://jsonplaceholder.typicode.com/albums/1/photos"

form.addEventListener( "submit", (e) => {
    e.preventDefault()
    let nodesArray = []    
    console.log(form)
    updateH2ChildNodes( titleBanner )
    createCardNode( form , nodesArray )
    divWishList.append(...nodesArray)
    form.reset()
    genericRequest( baseURL, {} )

})
