// The "items" reducer performs actions on our list of items
import { Action } from '@ngrx/store';

export function itemsReducer(state: any = [], action: Action) {
  switch (action.type) {
    default:
      return state;
  }
};

// The "selectedItem" reducer handles the currently selected items
export function selectedItemReducer(state: any = null, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
};
