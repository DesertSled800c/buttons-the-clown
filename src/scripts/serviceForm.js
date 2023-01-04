import { sendRequest } from "./dataAccess.js";


export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numOfChild">Number of Children</label>
            <input type="text" name="numOfChild" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Party Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationDate">Reservation Date</label>
            <input type="date" name="reservationDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservingHours">Reserving Hours</label>
            <input type="number" name="reservingHours" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `
    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userNumOfChild = document.querySelector("input[name='numOfChild']").value
        const userPartyAddress = document.querySelector("input[name='partyAddress']").value
        const userReservationDate = document.querySelector("input[name='reservationDate']").value
        const userReservingHours = document.querySelector("input[name='reservingHours']").value
        const userDate = Math.floor(new Date(`${userReservationDate}`).getTime())
        const dataToSendToAPI = {
            parent: userParentName,
            child: userChildName,
            numOfChildren: userNumOfChild,
            address: userPartyAddress,
            neededBy: userDate,
            hours: userReservingHours
        }
        sendRequest(dataToSendToAPI)
    }
})
