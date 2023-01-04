import { ServiceForm } from "./ServiceForm.js"
import { Requests, Completions } from "./Requests.js"


export const ButtonsTheClown = () => {
    return `
        <h1>Get Clowned</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="partyRequests">
            <h2>Party Requests</h2>
            ${Requests()}
        </section>
        <section class="completed">
        <h2>Completed Parties</h2>
            ${Completions()}
        </section>
    `
}



