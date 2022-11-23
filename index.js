
const form = document.vacationform
const button = document.getElementById("list-btn")
const div = document.getElementById("div-wishlist")
const titleBanner = document.getElementById("title-banner")

// const destInput = document.getElementById("destination-inp")
// destInput.addEventListener("input", ()=>{
//     console.log("listening to input")
//     destInput.setCustomValidity("")
//     destInput.checkValidity()
// })
// destInput.addEventListener("invalid", ()=>{
//     console.log("invalid input")
//     if( destInput.value === "" ) destInput.setCustomValidity("please fill out this field")
//     else {
//         destInput.setCustomValidity("Please lengthen this text to 2 characters or more (your are curently using 1 character)")
//         isValid = false
//     }
// })    

// form.addEventListener("submit", handleFormSubmit) 
button.addEventListener( "click", handleClick )

function handleClick(e){
    e.preventDefault()
    let nodes = []    
    
    updateH2ChildNodes(titleBanner)
    createCardNode( form , nodes )
    div.append(...nodes)
    form.reset()
}

function createCardNode(form, nodes){
    let placeHolder = "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg"
    let { destination,location, photo, description } = form
    placeHolder = ( photo.value < 1 )? placeHolder: photo.value

    let newDiv = document.createElement("div")
    newDiv.setAttribute("class","new-card card-item")

    let editButton = document.createElement("input")
    editButton.setAttribute("type","button")
    editButton.setAttribute("class","button-edit button")
    editButton.setAttribute("value","Edit")
    
    let removeButton = document.createElement("button")
    removeButton.setAttribute("class","button-rm button")
    removeButton.textContent = "Remove"

    let destinationHeading = document.createElement( "h3")
    destinationHeading.setAttribute("class","dest-header")
    let locationHeading = document.createElement( "h4")
    locationHeading.setAttribute("class","loc-header")
    let descriptionParagraph = document.createElement( "p")
    descriptionParagraph.setAttribute("class","desc-header")
    
    let img = document.createElement( "img")
    img.setAttribute("src", placeHolder)
    img.setAttribute("alt", "shows destination")
    destinationHeading.textContent = destination.value
    locationHeading.textContent = location.value
    descriptionParagraph.textContent = description.value

    removeButton.addEventListener("click", ()=> div.removeChild(newDiv))

    editButton.addEventListener("click",()=>{
        const updatedDestination = prompt("Enter new name")
        form.destination.value = updatedDestination
        const updatedLocation = prompt("Enter new location")
        form.location.value = updatedLocation
        const udpatedPhotoURL = prompt("Enter new photo url")
        form.photo.value = udpatedPhotoURL

        destinationHeading.innerText = updatedDestination
        locationHeading.innerText = updatedLocation
        descriptionParagraph.innerText = udpatedPhotoURL

        form.reset()
    })

    newDiv.appendChild( img )
    newDiv.appendChild( destinationHeading )
    newDiv.appendChild( locationHeading )
    newDiv.appendChild( descriptionParagraph )
    newDiv.appendChild( editButton )
    newDiv.appendChild( removeButton )

    nodes.push( newDiv )
}
function updateH2ChildNodes( parentNode ){
    let newText = document.createTextNode("My WishList")
    let oldText = parentNode.childNodes[0]
    if( oldText !== null ) parentNode.replaceChild( newText, oldText)
}

