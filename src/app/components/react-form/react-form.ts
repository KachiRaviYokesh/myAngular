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

@Component({
  selector: 'app-react-form',
  imports: [ReactiveFormsModule],
  templateUrl: './react-form.html',
  styles: ``,
})
export class ReactForm implements OnInit {

  public customReactiveForm: FormGroup<mainFormGroup> = new FormGroup<mainFormGroup>({
    playerName: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>(null, { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
    mobileNumber: new FormControl<number | null>(null, Validators.required),
    dateOfBirth: new FormControl<string | null>(null, Validators.required),
    country: new FormControl<string | null>(null, Validators.required),
    gender: new FormControl<string | null>(null, Validators.required),
    extraDetail: new FormControl<boolean>(false, { nonNullable:true }),
  });

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

  get recordsFormArray(): FormArray<FormGroup<formGroupObj>> {
    return this.fieldsControlObj.records!;
  }

  ngOnInit(): void {

    this.fieldsControlObj.extraDetail.valueChanges.subscribe((value)=>{
      if(value) {
        this.customReactiveForm.addControl('rolePreference', new FormArray(this.rolesList.map(() => new FormControl(false, { nonNullable:true }))));
      }
      else {
        this.customReactiveForm.removeControl('rolePreference');
      }
    });

  }

  formSubmission() {
    console.log(this.customReactiveForm);
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

    if(!this.fieldsControlObj.records) {
      this.customReactiveForm.addControl('records', new FormArray<FormGroup<formGroupObj>>([]));
      this.pushRecords();
    }
    else {
      this.pushRecords();
    }

  }
  
  pushRecords() {

    this.recordsFormArray.push(
      new FormGroup<formGroupObj>({
        recordDate: new FormControl<string | null>(null, Validators.required),
        record: new FormControl<string | null>(null, Validators.required),
        opponentCountry: new FormControl<string | null>(null, Validators.required),
      }),      
    );

  }
  
  removeRecords(index:number) {

    this.recordsFormArray.removeAt(index);
    
    if(!this.recordsFormArray.length) {
      this.customReactiveForm.removeControl('records');
    }

  }

}