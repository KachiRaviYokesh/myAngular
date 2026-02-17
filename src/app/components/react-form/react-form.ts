import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface mainFormTypes {
  personFirstName: FormControl<string | null>,
  personEmail: FormControl<string | null>,
  personNumber: FormControl<number | null>,
  personDOB: FormControl<string | null>,
  personCountry: FormControl<string | null>,
  personGender: FormControl<string | null>,
  personExtraDetails: FormControl<boolean>,
  personRoles?: FormArray<FormControl<boolean>>,
  personRecords?: FormArray<FormGroup<recordsControl>>,
}

interface recordsControl {
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
  rolesList = ['Batsman', 'Bowler', 'Captain', 'Wicket-Keeper'];
  mainReactiveForm = new FormGroup<mainFormTypes>({
    personFirstName: new FormControl(null, {validators: Validators.required}),
    personEmail: new FormControl(null, {validators: [Validators.required, Validators.email]}),
    personNumber: new FormControl(null, {validators: Validators.required}),
    personDOB: new FormControl(null, {validators: Validators.required}),
    personCountry: new FormControl(null, {validators: Validators.required}),
    personGender: new FormControl(null, {validators: Validators.required}),
    personExtraDetails: new FormControl(false, {nonNullable:true}),
  });
  ngOnInit(): void {
    this.mainReactiveForm.controls.personExtraDetails.valueChanges.subscribe((value)=>{
      if(value) {
        this.mainReactiveForm.addControl('personRoles', new FormArray(this.rolesList.map(()=>new FormControl(false, {nonNullable:true}))));
      }
      else {
        this.mainReactiveForm.removeControl('personRoles');
      }
    });
  }
  addRecords() {
    if(!this.mainReactiveForm.controls.personRecords) {
      this.mainReactiveForm.addControl('personRecords', new FormArray<FormGroup<recordsControl>>([]));
      this.pushGroup();
    }
    else {
      this.pushGroup();
    }
  }
  pushGroup() {
    this.mainReactiveForm.controls.personRecords?.push(
      new FormGroup<recordsControl>({
        recordDate: new FormControl(null, {validators: Validators.required}),
        record: new FormControl(null, {validators: Validators.required}),
        opponentCountry: new FormControl(null, {validators: Validators.required}),
      })
    );
  }
  removeRecords(index:number) {
    this.mainReactiveForm.controls.personRecords?.removeAt(index);
    if(!this.mainReactiveForm.controls.personRecords?.length) {
      this.mainReactiveForm.removeControl('personRecords');
    }
  }
  formSubmission() {
    console.log(this.mainReactiveForm.value);        
  }
}