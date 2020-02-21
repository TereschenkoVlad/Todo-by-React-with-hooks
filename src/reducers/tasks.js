import {TASKS, SHOP_LIST} from '../constants/index'
import update from 'immutability-helper'
import {CHANGE_STATE_PROP, PUSH_STATE_PROP, SPLICE_STATE_PROP, SAVE_EDITED_STATE_PROP} from '../actions/'

const REDUCER = 'TASKS'

const initialState = {
  tasks: TASKS,
  filterType: 'All',
  shoppingList : SHOP_LIST
}

export default function tasks(state = initialState, action) {
  let value = action.state && action.state.value ? action.state.value : ''
  let prop = action.state && action.state.prop ? action.state.prop : ''

  switch (action.type) {
    case REDUCER + CHANGE_STATE_PROP:
      return update(state, {
        [prop]: {
          $set: value
        }
      })
    case REDUCER + PUSH_STATE_PROP:
      return update(state, {
        [prop]: {$unshift: [value]},
      })
    case REDUCER + SPLICE_STATE_PROP:
      return update(state, {
        [prop]: {$splice: [[value, 1]]},
      })
    case REDUCER + SAVE_EDITED_STATE_PROP:
      let index = action.state.index
      let itemProp = action.state.itemProp
      let item = state[prop][index]
      let newItem = update(item, {
        [itemProp]: {$set: value}
      })

      return update(state, {
        [prop]: {$splice: [[index, 1, newItem]]},
      })

    default:
      return state
  }
}
