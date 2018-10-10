import { Component, OnInit } from '@angular/core';
import {OnsNavigator} from 'ngx-onsenui';
import { SecondPageComponentComponent } from '../second-page-component/second-page-component.component';
import { Params } from 'ngx-onsenui';

@Component({
  selector: 'ons-page[first]',
  templateUrl: 'first-page-component.component.html',
  styleUrls: ['first-page-component.component.css']
})
export class FirstPageComponentComponent implements OnInit {
  // Get a way to access `ons-navigator` by Dependency Injection (DI)
  constructor(private navagator: OnsNavigator) {
  }

  ngOnInit() {
  }

  push() {
    // Push SecontPageComponent to `ons-navigator
    this.navagator.element.pushPage(SecondPageComponentComponent, {data: {foo: 1234}});
  }

}
