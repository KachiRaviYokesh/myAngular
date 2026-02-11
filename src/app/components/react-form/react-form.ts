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
  public recordss!: FormArray;
  public rolePreferencee!: FormArray;
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
      rolePreference: new FormArray([]),
      records: new FormArray([]),
    });
    this.recordss = this.customReactiveForm.get('records') as FormArray;
    this.rolePreferencee = this.customReactiveForm.get('rolePreference') as FormArray;
    this.rolesList.forEach((item)=>{
      this.rolePreferencee.push(
        new FormControl(false, Validators.required)
      );
    });
  }
  formSubmission() {
    this.mapRolePrefer();    
    console.log(this.customReactiveForm.value);
  }
  mapRolePrefer() {
    this.customReactiveForm.value.rolePreference = this.customReactiveForm.value.rolePreference
    .map((status: boolean , index:number)=>{
      return status ? this.rolesList[index] : null;
    })
    .filter((val: string | null)=>{
      return val !== null;
    });
  }
  addRecords() {
    this.recordss.push(
      new FormGroup({
        recordDate: new FormControl(null, Validators.required),
        record: new FormControl(null, Validators.required),
        opponentCountry: new FormControl(null, Validators.required),
      }),
    );
  }
  removeRecords(index: number) {
    this.recordss.removeAt(index);
  }
}
