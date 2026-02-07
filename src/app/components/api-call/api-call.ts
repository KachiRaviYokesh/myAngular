import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader-service';

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
  public isLoaderVisible = inject(LoaderService);
  constructor(
    private http: HttpClient,
  ) {
    this.isLoaderVisible.isLoaderShowing.set(true);
  }
  ngOnInit(): void {
    this.receivedComments = this.commentFun().subscribe({
      next: (data) => {
        this.receivedDatas.set(data);
        this.isLoaderVisible.isLoaderShowing.set(false);
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