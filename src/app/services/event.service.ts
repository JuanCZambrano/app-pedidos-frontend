import { EventEmitter, Injectable } from '@angular/core';
import { MenuModel } from '../models/menuModel';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  NombreMenuEvent = new EventEmitter<string>();
  ListadoMenusEvent = new EventEmitter<MenuModel[]>();

  constructor() { }
}
