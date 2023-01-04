import { getRequests, getClowns, getCompletions, saveCompletion, deleteRequest } from "./dataAccess.js";

export const Requests = () => {
    const requests = getRequests()
    const dateSorted = requests.sort((a, b) => Number(a.neededBy) - Number(b.neededBy),)
    let html = `
        <ul>
            ${dateSorted.map(convertRequestToListElement).join("")}
        </ul>
    `
    return html
}

export const convertRequestToListElement = (request) => {
    const clowns = getClowns()
    const dateObj = new Date(request.neededBy).toLocaleDateString(undefined, {timeZone:"UTC"})
    return `
    <li>${dateObj}
        ${request.parent}
        <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${clowns.map(clown => {
        return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
    }).join("")
        }
</select>
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>
`
}

export const Completions = () => {
    const completed = getCompletions()
    return completed.map((complete) => {
        return `<li>Party ${complete.id} was performed by ${complete.completedDate}.</li>`
    })
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId,] = event.target.value.split("--")

            const request = requestId
            const clown = clownId
            const date = new Date().toLocaleString()
            const completion = {
                requestId: request,
                clownId: clown,
                completedDate: date
            }
            saveCompletion(completion)
        }
    }
)

