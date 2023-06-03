import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProducts } from 'src/app/interfaces/Products';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedInformationUtils {

  private dataSubject: BehaviorSubject<IProducts> = new BehaviorSubject<IProducts>(null!);
  data$: Observable<IProducts> = this.dataSubject.asObservable();

  sendData(data: IProducts) {
    this.dataSubject.next(data);
  }

  constructor() { }
}
