import { Component, inject, OnInit, signal } from '@angular/core';
import { ForSubject } from '../../services/for-subject';

@Component({
  selector: 'app-for-subject3',
  imports: [],
  templateUrl: './for-subject3.html',
  styles: ``,
})
export class ForSubject3 implements OnInit {
  forSubject3 = inject(ForSubject);
  forSubject3Data = signal<string[]>([]);
  ngOnInit(): void {
    this.forSubject3.commonSubject$.subscribe({
      next: (data) => {
        this.forSubject3Data.set(data);
      }
    });
  }
}
