import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { ForSubjectService } from '../../services/for-subject-service';
import { ForBehaviorSubjectService } from '../../services/for-behavior-subject-service';

@Component({
  selector: 'app-for-subject4',
  imports: [],
  templateUrl: './for-subject4.html',
  styles: ``,
})
export class ForSubject4 implements OnInit {
  @Input() from!:string;
  forSubject4 = inject(ForSubjectService);
  forSubject4Data = signal<string[]>([]);
  forBehaviorSubject4 = inject(ForBehaviorSubjectService);
  forBehaviorSubject4Data = signal<string[]>([]);
  ngOnInit(): void {
    this.forSubject4.copyOfCommonSubject$.subscribe({
      next: (data) => {
        this.forSubject4Data.set(data);
      }
    });
    this.forBehaviorSubject4.copyOfCommonBehaviorSubject$.subscribe({
      next: (data) => {
        this.forBehaviorSubject4Data.set(data);
      }
    });
  }
  bottomCenter(from:string) {
    if(from === 'sub') {
      this.forSubject4.commonSubject$.next(['BOTTOM', 'CENTER']);
    }
    else if(from === 'besub') {
      this.forBehaviorSubject4.commonBehaviorSubject$.next(['BOTTOM', 'CENTER']);
    }
  }
}