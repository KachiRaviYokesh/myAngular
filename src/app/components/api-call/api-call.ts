import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-api-call',
  imports: [],
  templateUrl: './api-call.html',
  styles: ``,
})
export class ApiCall implements OnInit, OnDestroy {
  public apiUrl = 'https://jsonplaceholder.typicode.com/comments';
  public receivedDatas = signal<any[]>([]);
  public receivedComments?:Subscription;
  constructor(
    private http: HttpClient,
  ) {}
  ngOnInit(): void {
    this.receivedComments = this.commentFun().subscribe({
      next: (data) => {
        this.receivedDatas.set(data);
        console.log('next: ', data);
      },
      error: (e) => {
        console.log('Error: ', e.message);
      },
      complete: () => {
        console.log('Complete');
      }
    });    
  }
  commentFun(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((comments:any) => {
        return comments.filter((val:any) => {
          return val.postId === 1;
        });
      }),
    );
    // return this.http.get(this.apiUrl);
  }
  ngOnDestroy(): void {
    if(this.receivedComments) {
      this.receivedComments?.unsubscribe();
    }    
  }
}