import { fetchRequests, fetchCompletions, fetchClowns } from "./dataAccess.js"
import { ButtonsTheClown } from "./buttonsTheClown.js"


const render = () => {
    fetchRequests()
        .then(() => fetchCompletions())
        .then(() => fetchClowns())
        .then(
            () => {
                mainContainer.innerHTML = ButtonsTheClown()
            }
        )
}

render()


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)