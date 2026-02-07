import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForBehaviorSubjectService {
  commonBehaviorSubject$ = new BehaviorSubject<string[]>(['INITIAL']);
  copyOfCommonBehaviorSubject$ = this.commonBehaviorSubject$.asObservable();
}
