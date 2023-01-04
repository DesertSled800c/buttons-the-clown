const applicationState = {
    requests: [],
    clowns: [],
    completions: []
}

const API = "http://localhost:9099"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then((partyRequests) => {
            applicationState.requests = partyRequests
        })
}
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then((clowns) => {
            applicationState.clowns = clowns
        })
}
export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then((completions) => {
            applicationState.completions = completions
        })
}

fetchRequests()
fetchClowns()
fetchCompletions()

export const getRequests = () => {
    return [...applicationState.requests]
}
export const getClowns = () => {
    return [...applicationState.clowns]
}
export const getCompletions = () => {
    return [...applicationState.completions]
}


export const sendRequest = (userPartyRequest) => {
    const mainContainer = document.querySelector("#container")
    const fetchOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(userPartyRequest)
    }
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const saveCompletion = (serviceReciept) => {
    const mainContainer = document.querySelector("#container")
    const fetchOptions = {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify((serviceReciept))
    }
    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteRequest = (id) => {
    const mainContainer = document.querySelector("#container")
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

