import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { ForSubjectService } from '../../services/for-subject-service';
import { ForBehaviorSubjectService } from '../../services/for-behavior-subject-service';

@Component({
  selector: 'app-for-subject3',
  imports: [],
  templateUrl: './for-subject3.html',
  styles: ``,
})
export class ForSubject3 implements OnInit {
  @Input() from!:string;
  forSubject3 = inject(ForSubjectService);
  forSubject3Data = signal<string[]>([]);
  forBehaviorSubject3 = inject(ForBehaviorSubjectService);
  forBehaviorSubject3Data = signal<string[]>([]);
  ngOnInit(): void {
    this.forSubject3.copyOfCommonSubject$.subscribe({
      next: (data) => {
        this.forSubject3Data.set(data);
      }
    });
    this.forBehaviorSubject3.copyOfCommonBehaviorSubject$.subscribe({
      next: (data) => {
        this.forBehaviorSubject3Data.set(data);
      }
    });
  }
  thirdRight(from:string) {
    if(from === 'sub') {
      this.forSubject3.commonSubject$.next(['THIRD', 'RIGHT']);
    }
    else if(from === 'besub') {
      this.forBehaviorSubject3.commonBehaviorSubject$.next(['THIRD', 'RIGHT']);
    }
  }
}