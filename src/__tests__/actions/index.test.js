import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as Actions from '../../actions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({})

describe('testing of action creators', () => {
  afterEach(() => {
    store.clearActions()
  })

  test('change filter type or other property in the store action', () => {
    store.dispatch(Actions.changeStateProp('filterType', 'Active', 'TASKS'))
    const actions = store.getActions()
    const expectedActions = [
      { type: 'TASKS_CHANGE_STATE_PROP',
        state: {
          prop: 'filterType', value: 'Active'
        }
      },
    ]
    expect(actions).toEqual(expectedActions)
  })

  test('save edited item to the store action (value)', () => {
    store.dispatch(Actions.saveEditedStateProp('tasks', 'Learn math and an other homework', 2, 'value', 'TASKS'))
    const actions = store.getActions()
    const expectedActions = [
      { type: 'TASKS_SAVE_EDITED_STATE_PROP',
        state: {
          prop: 'tasks',
          value: 'Learn math and an other homework',
          index: 2,
          itemProp: 'value'
        }
      },
    ]
    expect(actions).toEqual(expectedActions)
  })

  test('push a new item to the store action', () => {
    store.dispatch(Actions.pushStateProp('shoppingList', {
      isEdit: false,
      isChecked: false,
      value: 'Super Man',
      price: NaN,
      id: 63
    }, 'TASKS'))
    const actions = store.getActions()
    const expectedActions = [
      { type: 'TASKS_PUSH_STATE_PROP',
        state: {
          prop: 'shoppingList',
          value: {
            isEdit: false,
            isChecked: false,
            value: 'Super Man',
            price: NaN,
            id: 63
          }
        }
      },
    ]
    expect(actions).toEqual(expectedActions)
  })

  test('remove tasks or shoppingList item from store action', () => {
    store.dispatch(Actions.spliceStateProp('tasks', 1, 'TASKS'))
    const actions = store.getActions()
    const expectedActions = [
      { type: 'TASKS_SPLICE_STATE_PROP',
        state: {
          prop: 'tasks',
          value: 1
        }
      },
    ]
    expect(actions).toEqual(expectedActions)
  })
})