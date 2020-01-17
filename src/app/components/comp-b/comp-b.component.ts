import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit {

  content: any = '234234';

  constructor() { 
    EventEmitterService.get('test').subscribe(data => this.content = data);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    EventEmitterService.get('test').unsubscribe();
  }

}
