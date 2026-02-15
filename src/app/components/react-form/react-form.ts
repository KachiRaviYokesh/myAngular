import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { filter } from 'rxjs';

export interface formGroupObj {
  recordDate: FormControl<string | null>,
  record: FormControl<string | null>,
  opponentCountry: FormControl<string | null>,
}

export interface mainFormGroup {
  playerName: FormControl<string | null>,
  email: FormControl<string | null>,
  mobileNumber: FormControl<number | null>,
  dateOfBirth: FormControl<string | null>,
  country: FormControl<string | null>,
  gender: FormControl<string | null>,
  extraDetail: FormControl<boolean>,
  rolePreference?: FormArray<FormControl<boolean>>,
  records?: FormArray<FormGroup<formGroupObj>>,
}

export interface stableRecordsObj {
  recordDate: FormControl<string | null>,
  record: FormControl<string | null>,
  opponentCountry: FormControl<string | null>,
}

@Component({
  selector: 'app-react-form',
  imports: [ReactiveFormsModule],
  templateUrl: './react-form.html',
  styles: ``,
})
export class ReactForm implements OnInit {
  public customReactiveForm: FormGroup<mainFormGroup> = new FormGroup<mainFormGroup>({
    playerName: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    mobileNumber: new FormControl<number | null>(null, Validators.required),
    dateOfBirth: new FormControl<string | null>(null, Validators.required),
    country: new FormControl<string | null>(null, Validators.required),
    gender: new FormControl<string | null>(null, Validators.required),
    extraDetail: new FormControl<boolean>(false, { nonNullable:true }),
  });
  public recordsFormArray!: FormArray;
  public stableRecordsArray: stableRecordsObj[] | null = []; 
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
  get fieldsControlObj() {
    return this.customReactiveForm.controls;
  }

  ngOnInit(): void {

    this.customReactiveForm.get('extraDetail')?.valueChanges.subscribe((value)=>{
      if(value) {
        const roleArray = new FormArray(
          this.rolesList.map(() => new FormControl(false, { nonNullable:true }))
        );
        this.customReactiveForm.addControl('rolePreference', roleArray);
      }
      else {
        this.customReactiveForm.removeControl('rolePreference');
      }
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
      const recordsArray = new FormArray<FormGroup<formGroupObj>>([]);
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
    if(!this.recordsFormArray.length) {
      this.customReactiveForm.removeControl('records');
    }
    this.updateStableRecordsArray();
  }

  private updateStableRecordsArray() {
    if(this.recordsFormArray.value.length) {
      this.stableRecordsArray = this.recordsFormArray.value;
    }
    else {
      this.stableRecordsArray = null;
    }
  }
}