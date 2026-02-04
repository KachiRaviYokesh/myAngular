import { Component, inject, OnInit, signal } from '@angular/core';
import { ForSubjectService } from '../../services/for-subject-service';

@Component({
  selector: 'app-for-subject3',
  imports: [],
  templateUrl: './for-subject3.html',
  styles: ``,
})
export class ForSubject3 implements OnInit {
  forSubject3 = inject(ForSubjectService);
  forSubject3Data = signal<string[]>([]);
  ngOnInit(): void {
    this.forSubject3.commonSubject$.subscribe({
      next: (data) => {
        this.forSubject3Data.set(data);
      }
    });
  }
}
