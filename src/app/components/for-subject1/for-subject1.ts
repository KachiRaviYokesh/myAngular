import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { ForSubjectService } from '../../services/for-subject-service';
import { ForBehaviorSubjectService } from '../../services/for-behavior-subject-service';

@Component({
  selector: 'app-for-subject1',
  imports: [],
  templateUrl: './for-subject1.html',
  styles: ``,
})
export class ForSubject1 implements OnInit {
  @Input() from!:string;
  forSubject1 = inject(ForSubjectService);
  forSubject1Data = signal<string[]>([]);
  forBehaviorSubject1 = inject(ForBehaviorSubjectService);
  forBehaviorSubject1Data = signal<string[]>([]);
  ngOnInit(): void {
    // this.forSubject1.initialUpdate();
    this.forSubject1.copyOfCommonSubject$.subscribe({
      next: (data) => {
        this.forSubject1Data.set(data);
      }
    });
    this.forBehaviorSubject1.copyOfCommonBehaviorSubject$.subscribe({
      next: (data) => {
        this.forBehaviorSubject1Data.set(data);
      }
    });
  }
  firstLeft(from:string) {
    if(from === 'sub') {
      this.forSubject1.commonSubject$.next(['FIRST', 'LEFT']);
    }
    else if(from === 'besub') {
      this.forBehaviorSubject1.commonBehaviorSubject$.next(['FIRST', 'LEFT']);
    }
  }
}
