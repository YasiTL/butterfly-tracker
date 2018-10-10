import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { FirstPageComponentComponent } from './first-page-component/first-page-component.component';
import { SecondPageComponentComponent } from './second-page-component/second-page-component.component';
import { ButterfliesComponent } from './butterflies/butterflies.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponentComponent,
    SecondPageComponentComponent,
    ButterfliesComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    FirstPageComponentComponent,
    SecondPageComponentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
