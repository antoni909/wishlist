"use strict";

const titleBanner = document.getElementById("title-banner")

function updateH2ChildNodes( parentNode ){

    let newText = document.createTextNode("My WishList")
    let oldText = parentNode.childNodes[0]
    if( oldText !== null ) parentNode.replaceChild( newText, oldText)

}

export { titleBanner, updateH2ChildNodes }