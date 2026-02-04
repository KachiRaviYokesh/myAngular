import { Injectable } from '@angular/core';
import { isObservable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForSubjectService {
  commonSubject$ = new Subject<string[]>();
  // initialUpdate() {
  //   setTimeout(()=>{
  //     this.commonSubject$.next(['INITIAL', 'VALUE'])
  //   }, 0);
  // }
  commonUpdate(receivedString:string[]) {
    this.commonSubject$.next(receivedString);
  } 
}