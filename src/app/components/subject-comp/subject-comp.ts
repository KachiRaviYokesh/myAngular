import { Component, inject, OnInit, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { ForSubject1 } from "../for-subject1/for-subject1";
import { ForSubject2 } from "../for-subject2/for-subject2";
import { ForSubject3 } from "../for-subject3/for-subject3";
import { ForSubjectService } from '../../services/for-subject-service';
import { ForSubject4 } from "../for-subject4/for-subject4";

@Component({
  selector: 'app-subject-comp',
  imports: [ForSubject1, ForSubject2, ForSubject3, ForSubject4],
  templateUrl: './subject-comp.html',
  styles: ``,
})
export class SubjectComp implements OnInit {  
  firstSubData = signal<string>('');
  firstSubVariable$ = new Subject<string>();
  forSubject = inject(ForSubjectService);
  newComponent = signal<boolean>(false);

  ngOnInit(): void {
    this.firstSubVariable$.subscribe({
      next: (data) => {
        this.firstSubData.set(data.toUpperCase());
      },
      error: (error) => {
        console.log('Error : ', error);
      },
      complete: () => {
        console.log('Completed');
      }
    });
    // this.firstSubVariable$.next('first');
  }

  protected updateFirstSubjectData() {
    this.firstSubVariable$.next('second');
    this.forSubject.commonUpdate(['NEW', 'VALUE']);
  }
  
  protected renderNewComponent() {
    this.newComponent.set(true);
  }
}