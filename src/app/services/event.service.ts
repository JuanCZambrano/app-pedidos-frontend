import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  MenusEvent = new EventEmitter<string>();

  constructor() { }
}
