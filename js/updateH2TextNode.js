'use strict';
export function updateH2ChildNodes( parentNode ){
    let newText = document.createTextNode("My WishList")
    let oldText = parentNode.childNodes[0]
    if( oldText !== null ) parentNode.replaceChild( newText, oldText)
}
