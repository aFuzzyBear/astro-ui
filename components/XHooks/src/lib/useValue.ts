/** 
 * @function useValue - Event based State utility function
 * @param {EventTarget} target - to retrieve the state from. 
 * @param {any} state -  Initial value for the state. 
 * @param {string} type -  of state to retrieve. 
 * @returns state, conditionally initializing a reusable state.
 */
   
export default function useValue<Value>(
    target: EventTarget,
    string: string,
    state:Value
    ){
        /** State details: a tuple representing a value [0] and a value setter [1]. */
        const detail = [state,setter] as [Value, <NewValue extends Value>(next:NewValue)=>NewValue]
        // attempt to update the State with an existing event listener
        target.dispatchEvent(
            new CustomEvent(`value:${string}`,{
            detail,
            bubbles:true
        }))
    // if the state was not updated by the dispatch
    if(!detail[1]){
        // initialize the state [0] and create the state setter [1]
        detail[1] = next => detail[0] = next
            // listen for future requests, and update state accordingly
        target.addEventListener(
            `value:${string}`,
            (event) => event.detail.splice(0,2,...detail)
        )
    }
    return detail
}