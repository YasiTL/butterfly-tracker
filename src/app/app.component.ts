import { Component } from '@angular/core';
import { FirstPageComponentComponent } from './first-page-component/first-page-component.component';

@Component({
  selector: 'app-root',
  template: `
  <ons-navigator [page]="initialPage"></ons-navigator>
`
})
export class AppComponent {
  title = 'butterfly-site';
  initialPage = FirstPageComponentComponent;
}
