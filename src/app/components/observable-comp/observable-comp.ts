import { Component, OnInit } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-comp',
  imports: [],
  templateUrl: './observable-comp.html',
  styles: ``,
})
export class ObservableComp implements OnInit {
  firstReceivedData!:number[];
  firstObsVariable$ = new Observable<number[]>((firstData)=>{
    firstData.next([1,3,5,7,9]);
    // data.error('Error1');
    firstData.complete();
  });

  secondReceivedData!:number[];
  secondObsVariable$ = new Observable<number[]>((secondData)=>{
    secondData.next([2,4,6,8,10]);
    // secondData.error('Error2');
    secondData.complete();
  });

  thirdReceivedData!:string[];
  thirdObsVariable$ = new Observable<string[]>((thirdData)=> {
    thirdData.next(['A','B','C','D','E']);
    // thirdData.error('Error3');
    thirdData.complete();
  });

  ngOnInit(): void {
    this.firstObsVariable$.subscribe({
      next: (firstRes) => {
        this.firstReceivedData = firstRes;
        console.log(firstRes);        
      },
      error: (e) => {
        console.log('Error');
      },
      complete: () => {
        console.log('First Completed');
        this.secondObsVariable$.subscribe({
          next: (secondRes) => {
            this.secondReceivedData = secondRes;
            console.log(secondRes);
          },
          complete: () => {
            console.log('Second Completed');
          }
        });
      }
    });
  }

  protected thirdRespondData() {
    this.thirdObsVariable$.subscribe({
      next:(thirdRes)=>{
        this.thirdReceivedData = thirdRes;
        console.log(thirdRes);        
      },
      complete:()=> {
        console.log('Third Completed');
      }
    });
  }

  firstOfObsData:number[] = [];
  firstOfObs$ = of([1,2,3,4],[5,6,7,8]);
  protected firstOfRespondData() {
    this.firstOfObsData = [];
    this.firstOfObs$.subscribe({
      next:(firstOfRes) => {
        firstOfRes.forEach((d)=>{
          this.firstOfObsData.push(d);
        });
        console.log(firstOfRes);
      },
      complete: () => {
        console.log('First Of Completed');
      }
    })
  }

  firstFromObsData:string[] = [];
  firstFromObs$ = from('YOKESH');
  protected firstFromRespondData() {
    this.firstFromObsData = [];
    this.firstFromObs$.subscribe({
      next:(firstFromRes) => {
        this.firstFromObsData.push(firstFromRes);
        console.log(firstFromRes);        
      },
      complete:() => {
        console.log('First From Completed');        
      }
    });
  }
}