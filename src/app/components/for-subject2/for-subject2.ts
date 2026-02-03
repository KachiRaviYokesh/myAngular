import { Component, inject, OnInit, signal } from '@angular/core';
import { ForSubject } from '../../services/for-subject';

@Component({
  selector: 'app-for-subject2',
  imports: [],
  templateUrl: './for-subject2.html',
  styles: ``,
})
export class ForSubject2 implements OnInit {
  forSubject2 = inject(ForSubject);
  forSubject2Data = signal<string[]>([]);
  ngOnInit(): void {
    this.forSubject2.commonSubject$.subscribe({
      next: (data) => {
        this.forSubject2Data.set(data);
      }
    });
  }
}
