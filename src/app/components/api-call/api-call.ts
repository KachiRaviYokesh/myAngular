import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, filter, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-api-call',
  imports: [],
  templateUrl: './api-call.html',
  styles: ``,
})
export class ApiCall implements OnInit {
  apiUrl = 'https://jsonplaceholder.typicode.com/comments';
  receivedDatas:any;
  constructor(
    private http: HttpClient,
  ) {}
  ngOnInit(): void {
    this.commentFun().subscribe({
      next: (data) => {
        this.receivedDatas = data;
        console.log('next: ', data);
      },
      error: (e) => {
        console.log('Error: ', e.message);
      },
      complete: () => {
        console.log('Complete');
      }
    })
  }
  commentFun(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(      
      map((comments:any) => {
        return comments.filter((val:any) => {
          return val.postId === 1;
        });
      }),
    );
  }
}