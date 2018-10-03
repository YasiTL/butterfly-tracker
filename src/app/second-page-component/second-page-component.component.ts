import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { FirstPageComponentComponent } from '../first-page-component/first-page-component.component';

@Component({
  selector: 'ons-page[second]',
  template: `
  <ons-toolbar>
    <div class="center">Second</div>
  </ons-toolbar>
  <div class="background"></div>
  <div class="content">
    Second page <br>
    <ons-button (click)="pop()">Pop</ons-button>
  </div>
`,
})
export class SecondPageComponentComponent implements OnInit {

  constructor(private navagator: OnsNavigator, private params: Params) {
    console.log(JSON.stringify(params.data)); // gets {foo: 1234} from first page
  }

  ngOnInit() {
  }

  pop() {
    this.navagator.element.popPage();
  }


}
