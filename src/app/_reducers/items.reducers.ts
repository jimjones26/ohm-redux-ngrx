// The "items" reducer performs actions on our list of items
import { Action } from '@ngrx/store';

export function itemsReducer(state: any = [], action: Action) {
  switch (action.type) {
    case 'ADD_ITEMS':
      return action.payload;
    case 'CREATE_ITEM':
      return [...state, action.payload];
    case 'UPDATE_ITEM':
      return state.map(item => {
        return item.id === action.payload.id ? Object.assign({}, item, action.payload) : item;
      });
    case 'DELETE_ITEM':
      return state.filter(item => {
        return item.id !== action.payload.id;
      });
    default:
      return state;
  }
};

// The "selectedItem" reducer handles the currently selected items
export function selectedItemReducer(state: any = null, action: Action) {
  switch (action.type) {
    case 'SELECT_ITEM':
      return action.payload;
    default:
      return state;
  }
};
