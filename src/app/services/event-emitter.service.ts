import { EventEmitter } from '@angular/core';

export class EventEmitterService {
    private static emitters: { [event: string]: EventEmitter<any> } = {}

    static get (event: string): EventEmitter<any> {
        if (!this.emitters[event]) this.emitters[event] = new EventEmitter<any>();
        return this.emitters[event];
    }
}