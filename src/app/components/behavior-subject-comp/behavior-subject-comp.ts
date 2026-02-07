import { Component, OnInit, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ForSubject1 } from "../for-subject1/for-subject1";
import { ForSubject2 } from "../for-subject2/for-subject2";
import { ForSubject3 } from "../for-subject3/for-subject3";
import { ForSubject4 } from "../for-subject4/for-subject4";

@Component({
  selector: 'app-behavior-subject-comp',
  imports: [ForSubject1, ForSubject2, ForSubject3, ForSubject4],
  templateUrl: './behavior-subject-comp.html',
  styles: ``,
})
export class BehaviorSubjectComp implements OnInit {
  firstBehaviorSubData = signal<string>('');
  firstBehaviorSubVariable$ = new BehaviorSubject<string>('first');
  copyOfFirstBehaviorSubVariable$ = this.firstBehaviorSubVariable$.asObservable();
  newComponent = signal<boolean>(false);
  ngOnInit(): void {
    this.copyOfFirstBehaviorSubVariable$.subscribe({
      next: (data) => {
        this.firstBehaviorSubData.set(data.toUpperCase());
      }
    });    
  }
  protected updateFirstBehaviorSubjectData() {
    this.firstBehaviorSubVariable$.next('second');
  }
  protected renderNewComponent() {
    this.newComponent.set(true);
  }
}
