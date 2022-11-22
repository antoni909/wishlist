
const form = document.vacationform
const button = document.getElementById("list-btn")
const div = document.getElementById("div-wishlist")
const oldTitle = document.getElementById("h2-instructions")

button.addEventListener( "click", handleClick )

function handleClick(e){
    e.preventDefault()
    let nodes = []    
    createCardNode( form , nodes )

    div.append(...nodes)
    form.reset()
    console.log("done")
}

// TODO - Refactor: hard code, DRY, add helper methods
// TODO - Replace: use regex for conditional
function createCardNode(form, nodes){
    let placeHolder = "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg"
    let { destination,location, photo, description } = form``
    placeHolder = ( photo.value < 1 )? placeHolder: photo.value

    let newDiv = document.createElement("div")
    newDiv.setAttribute("class","new-card")

    // let newH2Title = document.createElement("h2")
    // newH2Title.setAttribute("class","h2-new-title")
    // const newNode = document.createTextNode("My WishList")

    // oldTitle.append(newNode)
    // oldTitle.replaceChild( oldTitle, newNode )

    let editButton = document.createElement("input")
    editButton.setAttribute("type","button")
    editButton.setAttribute("class","button-edit")
    editButton.setAttribute("value","Edit")
    
    let removeButton = document.createElement("button")
    removeButton.setAttribute("class","button-rm")
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

// 
