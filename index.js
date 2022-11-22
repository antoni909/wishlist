const form = document.vacationform
const button = document.getElementById("list-btn")

const div = document.getElementById("div-wishlist")


button.addEventListener( "click", handleClick )

function handleClick(e){
    e.preventDefault()
    
    let nodes = []    
    createCardNode( form , nodes )

    div.append(...nodes)
}

function createCardNode(form, nodes){
    const count = nodes.length
    let placeHolder = "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg"
    let { destination,location, photo, description } = form
    placeHolder = ( photo.value < 1 )? placeHolder: photo.value

    let newDiv = document.createElement("div")
    newDiv.setAttribute("class",`new-card-${count}`)

    let editButton = document.createElement("input")
    editButton.setAttribute("type","button")
    editButton.setAttribute("id","edit-button")
    editButton.setAttribute("class","edit-button")
    editButton.setAttribute("name","edit-btn")
    editButton.setAttribute("value","Edit")
    
    let removeButton = document.createElement("button")
    removeButton.setAttribute("id","edit-button")
    removeButton.setAttribute("name","delete-btn")
    removeButton.setAttribute("class","button remove-btn")
    removeButton.textContent = "Remove"

    let img = document.createElement( "img")
    let destinationHeading = document.createElement( "h3")
    let locationHeading = document.createElement( "h4")
    let descriptionParagraph = document.createElement( "p")


    img.setAttribute("src", placeHolder)
    img.setAttribute("alt", "shows destination")
    destinationHeading.textContent = destination.value
    locationHeading.textContent = location.value
    descriptionParagraph.textContent = description.value

    newDiv.appendChild( img )
    newDiv.appendChild( destinationHeading )
    newDiv.appendChild( locationHeading )
    newDiv.appendChild( descriptionParagraph )
    newDiv.appendChild( editButton )
    newDiv.appendChild( removeButton )

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

    })
    removeButton.addEventListener("click", ()=> div.removeChild(newDiv))

    nodes.push( newDiv )

}

// loom record screen talk about hmwk/assignment/something where can show code
// talk through the code you wrote
// 5 mins total

