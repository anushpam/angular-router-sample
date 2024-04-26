// shared.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }
}
