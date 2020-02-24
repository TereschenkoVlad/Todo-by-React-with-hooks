import store from "../config/store"
export const CHANGE_STATE_PROP = '_CHANGE_STATE_PROP'
export const PUSH_STATE_PROP = '_PUSH_STATE_PROP'
export const SAVE_EDITED_STATE_PROP = '_SAVE_EDITED_STATE_PROP'
export const SPLICE_STATE_PROP = '_SPLICE_STATE_PROP'

export function changeStateProp (prop, value, reducer) {
    return store.dispatch({
            type: reducer.toUpperCase() + CHANGE_STATE_PROP,
            state: {
                prop: prop,
                value: value
            }
        })
}

export function pushStateProp (prop, value, reducer) {
    return store.dispatch({
            type: reducer.toUpperCase() + PUSH_STATE_PROP,
            state: {
                prop: prop,
                value: value
            }
        })
}

export function spliceStateProp (prop, value, reducer) {
    return store.dispatch({
        type: reducer.toUpperCase() + SPLICE_STATE_PROP,
        state: {
            prop: prop,
            value: value
        }
    })
}

export function saveEditedStateProp (prop, value, index, itemProp, reducer) {
    return store.dispatch({
        type: reducer.toUpperCase() + SAVE_EDITED_STATE_PROP,
        state: {
            prop: prop,
            value: value,
            index: index,
            itemProp: itemProp
        }
    })
}
