import { Component } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'comp-a',
  template: `
    <div class="comp comp-a">
      <h6>Component A</h6>
      <input type="text" [(ngModel)]="emit" />
      <button type="button" (click)="emitToB()">EMIT</button>
    </div>
  `,
  styleUrls: []
})
export class CompAComponent {

  emit: any;

  constructor() { }

  emitToB(){ 
    EventEmitterService.get('test').emit(this.emit);
  }

}
