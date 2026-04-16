import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { map, debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-playground',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './playground.html',
  styles: ``,
})
export class Playground implements OnInit {
  apiUrl:string = 'https://dummyjson.com/users';
  apiData = signal<any[]>([]);
  backUpApiData = signal<any[]>([]);
  searchableVal: FormControl = new FormControl();
  constructor(
    private _http: HttpClient,
  ) { }
  ngOnInit(): void {
    this._http.get(this.apiUrl)
    .pipe(
      map((res:any)=>res.users),
    )
    .subscribe({
      next: (mRes:any) => {
        this.backUpApiData.set(mRes);
        this.apiData.set(mRes);
      }
    });

    this.searchableVal.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(res=>{
        console.log(res, 'RESP');        
        if(res) {
          return this.backUpApiData().filter(data=>data.eyeColor.toLowerCase().includes(res.toLowerCase()))
        }
        return this.backUpApiData();
      }),
    ).subscribe({
      next: (fRes) => {
        this.apiData.set(fRes);
      }
    })
  }
  // ngOnInit(): void {
  //   this.check()
  //   .subscribe({
  //     next: (mRes:any) => {
  //       this.apiData.set(mRes);
  //       console.log('mRes', this.apiData());
  //     }
  //   });
  //   this.searchableVal.valueChanges.pipe(
  //     debounceTime(300),
  //     switchMap((value:string)=>{
  //       console.log(value, 'value');
  //       if(value) {
  //         return this._http.get(this.apiUrl+'/'+String(value))
  //       }
  //       return this.check()
  //     }),
  //   ).subscribe({
  //     next: (sRes:any) => {
  //       if(Array.isArray(sRes)){
  //         this.apiData.set(sRes);
  //       }else{
  //         this.apiData.set([sRes]);
  //       }
  //       console.log('sRes', sRes);
  //     }
  //   });
  // }
  // check() {
  //   return this._http.get(this.apiUrl)
  //   .pipe(
  //     map((res:any)=>res.users),
  //   )
  // }
}