"use strict";
import { defaultPlaceholder } from "./urls.js"
import { cardObjs } from "../index.js"
import { divWishList } from "./elements/form.js";
import { fetchImageUrl } from "../js/genericRequest.js"

export const createCardObj = ( obj ) => {
    const cardObj = {
        _id: (obj._id)? obj._id: "",
        destination: (obj.destination)? obj.destination : "",
        description: (obj.description)? obj.description : "",
        location: (obj.location)? obj.location : "",
        url: (obj.url)? obj.url : defaultPlaceholder,
    }
    return cardObj;
}
const createCardNode = ( obj ) => {

    const { description, destination, location, url, _id } = obj

    const div_newCard = document.createElement( "div" )
    div_newCard.setAttribute("class","new-card card-item")
    
    const h3_destination = document.createElement( "h3")
    h3_destination.setAttribute("class","dest-header")
    const h4_location = document.createElement( "h4")
    h4_location.setAttribute("class","loc-header")
    const p_description = document.createElement( "p")
    p_description.setAttribute("class","desc-header")
    
    const button_edit = document.createElement("input")
    button_edit.setAttribute("type","button")
    button_edit.setAttribute("class","button-edit button")
    button_edit.setAttribute("value","Edit")
    
    const button_remove = document.createElement("button")
    button_remove.setAttribute("class","button-rm button")
    button_remove.textContent = "Remove"

    const img = document.createElement( "img")
    img.setAttribute( "src", url )
    img.setAttribute( "alt", "shows destination" )
    h3_destination.textContent = destination
    h4_location.textContent = location
    p_description.textContent = description

    button_remove.addEventListener("click", ()=> {
        deleteCard( _id )
        divWishList.removeChild( div_newCard )
    })

    button_edit.addEventListener("click",()=> {
        const updatedDestination = prompt("Enter new name")
        const updatedLocation = prompt("Enter new location")
        const updatedDescription = prompt("Enter new description")
        updateCard({ _id, updatedDestination, updatedLocation, updatedDescription })
    })

    div_newCard.appendChild( img )
    div_newCard.appendChild( h3_destination )
    div_newCard.appendChild( h4_location )
    div_newCard.appendChild( p_description )
    div_newCard.appendChild( button_edit )
    div_newCard.appendChild( button_remove )

    return div_newCard;
}
export const renderCards = () =>  {
    cardObjs.forEach( cardObj => {
        const div_newCard = createCardNode( cardObj )
        divWishList.appendChild(div_newCard)
    })
}
export const postCard = (obj) => {

    fetch(`http://localhost:4000/destinations/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({...obj})
    })    
    .then( res => {
        return res.json()
    })
    .then( (data) => {
        location.reload()
    })

}
const updateCard = ( updatedObj ) => {

    const query = updatedObj.destination
    const server_query = `http://localhost:4000/unsplash/${query}`
    const response = fetchImageUrl( server_query )

    response
    .then( result => {
        const url = result.imgURL
        // const { destination, description, location, _id  } = updatedObj
        fetch(`http://localhost:4000/destinations/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...updatedObj, url})
        })
        .then( res => res.json() )
        .then( data => {
            console.log(data)
            location.reload()
        })
        .catch( err => console.log( err ) )
    })
    .catch( err => console.log(err))


}
const deleteCard = ( _id ) => {

    fetch( `http://localhost:4000/destinations/${_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then( res => res.json() )
    .then( data => {
        location.reload()
    })
    .catch( err => console.log( err ))

}

``