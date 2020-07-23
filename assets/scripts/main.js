const bodyElement = document.querySelector("body")

const mainElement = document.createElement("div")
const wagonImage = document.createElement("img")
wagonImage.setAttribute("src", "./assets/images/wagonImg.png")
wagonImage.setAttribute("width", "300")
bodyElement.append(mainElement)
mainElement.append(wagonImage)




const passenger = document.createElement('div')
const addTravelerButton = document.createElement("button")
addTravelerButton.append("add traveler")
passenger.append(addTravelerButton)
bodyElement.append(passenger)



addTravelerButton.addEventListener('click', function () {
    let name = prompt("Please enter the name of the new traveler joining the wagon")
    if (name !== null) {
        let newTraveler = new Traveler(name)
        wagon.join(newTraveler)
    }
})

const quarentine = document.createElement('button')
quarentine.append("quarentine")
bodyElement.append(quarentine)

quarentine.addEventListener('click', function () {
    wagon.shouldQuarantine()
    if (wagon.shouldQuarantine() === true) {
        alert('this wagon should quarentine')
    }
    else (
        alert('everyone is healthy')
    )
})
