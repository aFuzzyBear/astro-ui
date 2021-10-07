/** Returns state, conditionally initializing a reusable state. */
export default function useState(
    /** @type {EventTarget} Target to retrieve the state from. */
    target,
    /** @type {string} Type of state to retrieve. */
    type,
    /** @type {any} Initial value for the state. */
    value
){
    /** State details: a tuple representing a value [0] and a value setter [1]. */
    const detail = [value]

    // attempt to update the State with an existing event listener
    target.dispatchEvent(new CustomEvent(`value:${type}`, { detail, bubbles: true }))

    // if the state was not updated by the dispatch
    if (!detail[1]) {
        // initialize the state [0] and create the state setter [1]
        detail[1] = newValue => detail[0] = newValue

        // listen for future requests, and update state accordingly
        target.addEventListener(`value:${type}`, event => event.detail.splice(0, 2, ...detail))
    }

    return detail
}