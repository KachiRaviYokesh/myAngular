import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-call',
  imports: [],
  templateUrl: './api-call.html',
  styles: ``,
})
export class ApiCall implements OnInit {
  private http = inject(HttpClient);
  protected tableDatas:any = [];
  ngOnInit(): void {
    console.log(this.http);    
    const receivedData = this.http.get('https://jsonplaceholder.typicode.com/comments')
    .subscribe({
      next: (res) => {
        this.tableDatas = res;
      }
    });
  }

}
