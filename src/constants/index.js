export const TASKS = [
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
]

export const SHOP_LIST = [
  {
    id: 1,
    value: 'Test Shop',
    isEdit: false,
    isChecked: false,
    price: NaN
  }
]

export const TranslateTexts = (language) => {
  switch (language) {
    case 'UA' :
      const TRANSLATES_UA = {
        todoTitle: 'Збірник Справ На Кожен День',
        shoppingListTitle: 'Збірник омріяних покупок',
        addItemBtn: 'Ок +',
        addItemLabel: 'Новий пункт',
        placeholderName: 'Назва',
        placeholderPrice: 'Ціна',
        allFilter: 'Всі',
        activeFilter: 'Активні',
        completedFilter: 'Виконані',
        totalPriceLabel: 'Всього',
        todoTextLink: 'Збірник Справ',
        shoppingListTextLink: 'Збірник Покупків',
        saveItemBtn: 'Ok'
      }
      return TRANSLATES_UA
    default :
      const TRANSLATES_EN = {
        todoTitle: 'ToDo On Every Day',
        shoppingListTitle: 'Shopping List On Every Day',
        addItemBtn: 'Add +',
        addItemLabel: 'New Item',
        placeholderName: 'Name',
        placeholderPrice: 'Price',
        allFilter: 'All',
        activeFilter: 'Active',
        completedFilter: 'Completed',
        totalPriceLabel: 'Total',
        todoTextLink: 'ToDo List',
        shoppingListTextLink: 'ShoppingList',
        saveItemBtn: 'Save'
      }
      return TRANSLATES_EN
  }
}
