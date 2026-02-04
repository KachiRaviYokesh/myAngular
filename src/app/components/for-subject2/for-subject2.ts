import { Component, inject, OnInit, signal } from '@angular/core';
import { ForSubjectService } from '../../services/for-subject-service';

@Component({
  selector: 'app-for-subject2',
  imports: [],
  templateUrl: './for-subject2.html',
  styles: ``,
})
export class ForSubject2 implements OnInit {
  forSubject2 = inject(ForSubjectService);
  forSubject2Data = signal<string[]>([]);
  ngOnInit(): void {
    this.forSubject2.commonSubject$.subscribe({
      next: (data) => {
        this.forSubject2Data.set(data);
      }
    });
  }
}
