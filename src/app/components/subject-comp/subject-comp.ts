import { Component, inject, OnInit, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { ForSubject1 } from "../for-subject1/for-subject1";
import { ForSubject2 } from "../for-subject2/for-subject2";
import { ForSubject3 } from "../for-subject3/for-subject3";
import { ForSubject } from '../../services/for-subject';

@Component({
  selector: 'app-subject-comp',
  imports: [ForSubject1, ForSubject2, ForSubject3],
  templateUrl: './subject-comp.html',
  styles: ``,
})
export class SubjectComp implements OnInit {  
  firstSubData = signal<string>('');
  firstSubVariable$ = new Subject<string>();
  forSubject = inject(ForSubject);

  ngOnInit(): void {
    this.firstSubVariable$.subscribe({
      next: (data) => {
        this.firstSubData.set(data.toUpperCase());
        console.log('Data :', data);        
      },
      error: (error) => {
        console.log('Error : ', error);        
      },
      complete: () => {
        console.log('Completed');
      }
    });
    this.firstSubVariable$.next('first');
  }

  protected updateFirstSubjectData() {
    this.firstSubVariable$.next('second');
    this.forSubject.commonUpdate(['NEW','-','UPDATE']);
  }
}