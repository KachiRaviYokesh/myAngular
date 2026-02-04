import { Component, inject, OnInit, signal } from '@angular/core';
import { ForSubjectService } from '../../services/for-subject-service';

@Component({
  selector: 'app-for-subject1',
  imports: [],
  templateUrl: './for-subject1.html',
  styles: ``,
})
export class ForSubject1 implements OnInit {
  forSubject1 = inject(ForSubjectService);
  forSubject1Data = signal<string[]>([]);
  ngOnInit(): void {
    // this.forSubject1.initialUpdate();
    this.forSubject1.commonSubject$.subscribe({
      next: (data) => {
        this.forSubject1Data.set(data);
      }
    })
  }
  firstLeft() {
    this.forSubject1.commonSubject$.next(['FIRST', 'LEFT']);
  }
}
