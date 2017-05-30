import { Component } from '@angular/core';

@Component({
  selector: 'ay-root',
  template: `
    <h1>
      {{title}}
    </h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VR Demo!';
}
