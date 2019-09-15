import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './app.component';
import { EventListComponent } from './event-list.component';

@NgModule({
  /*add all components */
  declarations: [
    EventsAppComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule
  ],
  /*add all services */
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
