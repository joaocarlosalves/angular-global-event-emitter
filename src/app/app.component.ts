import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <comp-a></comp-a>
    <comp-b></comp-b>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'global-event-emitter';
}
