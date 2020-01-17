import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent implements OnInit {

  emit: any;

  constructor() { }

  ngOnInit() {
  }

  emitToB(){ 
    console.log(this.emit);
    EventEmitterService.get('test').emit(this.emit);
  }

}
