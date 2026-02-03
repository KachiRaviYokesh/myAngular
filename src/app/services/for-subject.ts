import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForSubject implements OnInit {
  commonSubject$ = new Subject<string[]>();
  // ngOnInit(): void {
  //   this.commonSubject$.next(['update']);
  // }
  commonUpdate(receivedString:string[]) {
    this.commonSubject$.next(receivedString);
  }
}