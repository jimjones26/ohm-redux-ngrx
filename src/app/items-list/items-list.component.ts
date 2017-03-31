import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../_models/item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  @Input() items: Item[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() {
    console.log('items list component items: ', this.items);
  }
}
