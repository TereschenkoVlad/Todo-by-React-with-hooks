import {TASKS, SHOP_LIST} from '../../constants/index'
import {CHANGE_STATE_PROP, PUSH_STATE_PROP, SPLICE_STATE_PROP, SAVE_EDITED_STATE_PROP} from '../../actions/'
import tasks from '../../reducers/tasks'

const REDUCER = 'TASKS'
const shopList = [
  {
    id: 1,
    value: 'Test Shop',
    isEdit: false,
    isChecked: false,
    price: 0
  },
  {
    id: 3,
    value: 'Second Shop',
    isEdit: false,
    isChecked: false,
    price: 12
  },
  {
    id: 5,
    value: 'Tomato Shop',
    isEdit: false,
    isChecked: false,
    price: 7.65
  }
]

const initialState = {
  tasks: TASKS,
  filterType: 'All',
  shoppingList : shopList
}

describe('test of Tasks reducer', () => {
  test('CHANGE_STATE_PROP', () => {
    const action = {
      type: REDUCER + CHANGE_STATE_PROP,
      state: {
        prop: 'filterType',
        value: 'Active'
      }
    }
    expect(tasks(initialState, action)).toEqual({
      tasks: TASKS,
      filterType: 'Active',
      shoppingList : shopList
    })
  })

  test('PUSH_STATE_PROP', () => {
    const action = {
      type: REDUCER + PUSH_STATE_PROP,
      state: {
        prop: 'tasks',
        value: {
          id: 18,
          isEdit: false,
          isChecked: false,
          value: 'Super Duper'
        }
      }
    }
    expect(tasks(initialState, action)).toEqual({
      tasks: [
        {
          id: 18,
          isEdit: false,
          isChecked: false,
          value: 'Super Duper'
        },
        {
          id: 1,
          value: 'Learn JS',
          isEdit: false,
          isChecked: false,
        },
        {
          id: 2,
          value: 'Learn Drupal',
          isEdit: false,
          isChecked: false,
        },
        {
          id: 3,
          value: 'do nothing',
          isEdit: false,
          isChecked: false,
        },
        {
          id: 4,
          value: 'Learn PHP',
          isEdit: false,
          isChecked: false,
        },
      ],
      filterType: 'All',
      shoppingList : shopList
    })
  })

  test('SPLICE_STATE_PROP', () => {
    const action = {
      type: REDUCER + SPLICE_STATE_PROP,
      state: {
        prop: 'tasks',
        value: 1
      }
    }
    expect(tasks(initialState, action)).toEqual({
      tasks: [
        {
          id: 1,
          value: 'Learn JS',
          isEdit: false,
          isChecked: false,
        },
        {
          id: 3,
          value: 'do nothing',
          isEdit: false,
          isChecked: false,
        },
        {
          id: 4,
          value: 'Learn PHP',
          isEdit: false,
          isChecked: false,
        },
      ],
      filterType: 'All',
      shoppingList : shopList
    })
  })

  test('SPLICE_STATE_PROP', () => {
    const action = {
      type: REDUCER + SPLICE_STATE_PROP,
      state: {
        prop: 'shoppingList',
        value: 2
      }
    }
    expect(tasks(initialState, action)).toEqual({
      tasks: TASKS,
      filterType: 'All',
      shoppingList : [
        {
          id: 1,
          value: 'Test Shop',
          isEdit: false,
          isChecked: false,
          price: 0
        },
        {
          id: 3,
          value: 'Second Shop',
          isEdit: false,
          isChecked: false,
          price: 12
        }
      ]
    })
  })

  test('SAVE_EDITED_STATE_PROP', () => {
    const action = {
      type: REDUCER + SAVE_EDITED_STATE_PROP,
      state: {
        prop: 'shoppingList',
        value: 'Baraban and toys',
        index: 1,
        itemProp: 'value'
      }
    }

    const actionSecond = {
      type: REDUCER + SAVE_EDITED_STATE_PROP,
      state: {
        prop: 'shoppingList',
        value: 18.90,
        index: 1,
        itemProp: 'price'
      }
    }

    expect(tasks(initialState, action)).toEqual({
      tasks: TASKS,
      filterType: 'All',
      shoppingList: [
        {
          id: 1,
          value: 'Test Shop',
          isEdit: false,
          isChecked: false,
          price: 0
        },
        {
          id: 3,
          value: 'Baraban and toys',
          isEdit: false,
          isChecked: false,
          price: 12
        },
        {
          id: 5,
          value: 'Tomato Shop',
          isEdit: false,
          isChecked: false,
          price: 7.65
        }
      ]
    })

    expect(tasks(initialState, actionSecond)).toEqual({
      tasks: TASKS,
      filterType: 'All',
      shoppingList: [
        {
          id: 1,
          value: 'Test Shop',
          isEdit: false,
          isChecked: false,
          price: 0
        },
        {
          id: 3,
          value: 'Second Shop',
          isEdit: false,
          isChecked: false,
          price: 18.90
        },
        {
          id: 5,
          value: 'Tomato Shop',
          isEdit: false,
          isChecked: false,
          price: 7.65
        }
      ]
    })
  })
})