import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-react-form',
  imports: [ReactiveFormsModule],
  templateUrl: './react-form.html',
  styles: ``,
})
export class ReactForm implements OnInit {
  public customReactiveForm!: FormGroup;
  public recordsFormArray!: FormArray;
  public stableRecordsArray: any[] = []; 
  public rolesList =  [
    {
      key: 'batsman',
      label: 'Batsman',
    },
    {
      key: 'bowler',
      label: 'Bowler',
    },
    {
      key: 'captain',
      label: 'Captain',
    },
    {
      key: 'wicket-keeper',
      label: 'Wicket Keeper',
    },
  ];

  ngOnInit(): void {

    this.customReactiveForm = new FormGroup({
      playerName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobileNumber: new FormControl(null, Validators.required),
      dateOfBirth: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      extraDetail: new FormControl(false),
    });

    this.customReactiveForm.get('extraDetail')?.valueChanges.subscribe((value)=>{
      console.log(value, 'VALUE');
      if(value) {
        const roleArray = new FormArray(
          this.rolesList.map(() => new FormControl(false))
        );
        this.customReactiveForm.addControl('rolePreference', roleArray);
      }
      else {
        this.customReactiveForm.removeControl('rolePreference');
      }
    });

    this.customReactiveForm.get('records')?.valueChanges.subscribe((val: any) => {
      this.stableRecordsArray = val;
    });
  }

  formSubmission() {
    console.log(this.customReactiveForm.value);
  }

  // mapRolePrefer() {
  //   this.customReactiveForm.value.rolePreference = this.customReactiveForm.value.rolePreference
  //   .map((status: boolean , index:number)=>{
  //     return status ? this.rolesList[index] : null;
  //   })
  //   .filter((val: string | null)=>{
  //     return val !== null;
  //   });
  // }

  addRecords() {
    if(!(this.customReactiveForm.contains('records'))) {
      const recordsArray = new FormArray([]);
      this.customReactiveForm.addControl('records', recordsArray);
      this.recordsFormArray = this.customReactiveForm.get('records') as FormArray;
      this.pushRecords();
    }
    else {
      this.pushRecords();
    }
  }
  
  pushRecords() {
    this.recordsFormArray.push(
      new FormGroup({
        recordDate: new FormControl(null, Validators.required),
        record: new FormControl(null, Validators.required),
        opponentCountry: new FormControl(null, Validators.required),
      }),      
    );
    this.updateStableRecordsArray()
  }
  
  removeRecords(index:number) {
    this.recordsFormArray.removeAt(index);
    this.updateStableRecordsArray()
  }

  private updateStableRecordsArray() {
    this.stableRecordsArray = this.recordsFormArray.value;
  }
}