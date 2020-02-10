import { Component } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'comp-b',
  template: `
    <div class="comp comp-b">
      <h6>Componente B</h6>
      {{ content }}
    </div>
  `,
  styleUrls: []
})
export class CompBComponent {

  content: any = '[ _•_ ( -- Initial Value -- ) _•_ ]';

  constructor() { 
    EventEmitterService.get('test').subscribe(data => this.content = data);
  }

  ngOnDestroy() {
    EventEmitterService.get('test').unsubscribe();
  }

}
