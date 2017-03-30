import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Item } from '../_models/item.model';
import { Http } from '@angular/http';
import { AppStore } from '../_models/app-store.model';
import { Store } from '@ngrx/store';

const BASE_URL = '';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ItemsService {
  items$: Observable<Array<Item>>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.items$ = store.select('items');
  }

  loadItems() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({ type: 'ADD_ITEMS', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  saveItem(item: Item) {
    return (item.id) ? this.updateItem(item) : this.createItem(item);
  }

  createItem(item: Item) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(item))
      .map(res => res.json())
      .map(payload => ({ type: 'CREATE_ITEM', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateItem(item: Item) {
    return this.http.put(`${BASE_URL}${item.id}`, JSON.stringify(item))
      .subscribe(action => this.store.dispatch({ type: 'UPDATE_ITEM', payload: item }));
  }

  deleteItem(item: Item) {
    this.http.delete(`${BASE_URL}${item.id}`)
      .subscribe(action => this.store.dispatch({ type: 'DELETE_ITEM', payload: item }));
  }

}
