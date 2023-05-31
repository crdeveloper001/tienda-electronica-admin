import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProducts } from 'src/app/interfaces/Products';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedInformationUtils {

  productSelectedInfo: EventEmitter<IProducts> = new EventEmitter<IProducts>();

  constructor() { }
}
