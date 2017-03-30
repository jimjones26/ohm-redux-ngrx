import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ItemsService } from './_services/items.service';

import 'rxjs/add/operator/map';

import { selectedItemReducer, itemsReducer } from './_reducers/items.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({itemsReducer, selectedItemReducer})
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
