'use strict';

import { cardObjs } from "../../index.js"
import { createCardObj, postCard } from "../createCard.js";
import { fetchImageUrl, genericRequest } from "../genericRequest.js";

// Selectors
export const form = document.vacationform
export const divWishList = document.getElementById("div-wishlist")
const titleBanner = document.getElementById("title-banner")

// Handlers
const handleFormSubmit = ( e ) => {
    e.preventDefault()

    const query = form.destination.value
    const server_query = `http://localhost:4000/unsplash/${query}`
    const response = fetchImageUrl( server_query )

    response
        .then( result => {
            const { destination, description, location } = form
            const url = result.imgURL
            const newCardObj = createCardObj( { destination: destination.value, description:description.value, location: location.value, url } )
            postCard( newCardObj )
        })
        .catch( err => console.log(err))
        .finally( () => form.reset() )
}
export const handleUpdateTitleBanner = () => {
    let newText = document.createTextNode("My WishList")
    let oldText = titleBanner.childNodes[0]
    if( oldText !== null ) titleBanner.replaceChild( newText, oldText)
}

// Listeners
form.addEventListener( "submit", handleFormSubmit)
