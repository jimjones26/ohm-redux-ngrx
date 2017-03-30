import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Item } from './_models/item.model';
import { ItemsService } from './_services/items.service';
import { Store } from '@ngrx/store';
import { AppStore } from './_models/app-store.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  items$: Observable<Array<Item>>;
  selectedItem$: Observable<Item>;

  constructor(private itemsService: ItemsService, private store: Store<AppStore>) {
    this.items$ = itemsService.items$;
    this.selectedItem$ = store.select('selectedItem');
  }
}
