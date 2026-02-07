import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { ForSubjectService } from '../../services/for-subject-service';
import { ForBehaviorSubjectService } from '../../services/for-behavior-subject-service';

@Component({
  selector: 'app-for-subject2',
  imports: [],
  templateUrl: './for-subject2.html',
  styles: ``,
})
export class ForSubject2 implements OnInit {
  @Input() from!:string;
  forSubject2 = inject(ForSubjectService);
  forSubject2Data = signal<string[]>([]);
  forBehaviorSubject2 = inject(ForBehaviorSubjectService);
  forBehaviorSubject2Data = signal<string[]>([]);
  ngOnInit(): void {
    this.forSubject2.copyOfCommonSubject$.subscribe({
      next: (data) => {
        this.forSubject2Data.set(data);
      }
    });
    this.forBehaviorSubject2.copyOfCommonBehaviorSubject$.subscribe({
      next: (data) => {
        this.forBehaviorSubject2Data.set(data);
      }
    });
  }
  secondMiddle(from:string) {
    if(from === 'sub') {
      this.forSubject2.commonSubject$.next(['SECOND', 'MIDDLE']);
    }
    else if(from === 'besub') {
      this.forBehaviorSubject2.commonBehaviorSubject$.next(['SECOND', 'MIDDLE']);
    }
  }
}
