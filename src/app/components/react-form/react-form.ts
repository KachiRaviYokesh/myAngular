import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  imports: [ReactiveFormsModule],
  templateUrl: './react-form.html',
  styles: ``,
})
export class ReactForm implements OnInit {
  mainForm!: FormGroup;
  a!: FormGroup;

  constructor( private _formBuilder: FormBuilder) {}

  rolesArray = [
    {
      Label: 'Batsman',
      key: 'batsman',
      isChecked: false
    },
    {
      Label: 'Bowler',
      key: 'bowler',
      isChecked: false
    },
    {
      Label: 'All-Rounder',
      key: 'all-rounder',
      isChecked: false
    },
  ];
  ngOnInit(): void {

    this.a = this._formBuilder.group({
      name: ['', [Validators.required]],
    });

    this.mainForm = new FormGroup({
      name: new FormControl('', { validators: [Validators.required, this.noSpaceCheck] }),
      moreDetails: new FormControl(false),
      roles: new FormArray(
        this.rolesArray.map(()=>new FormControl(false)),
      ),
    });

    this.mainForm.get('moreDetails')?.valueChanges.subscribe(value => {
      if(value) {
        this.mainForm.addControl('mDtl', new FormGroup({
          email: new FormControl('', { validators: [Validators.email] }),
          dob: new FormControl('', { validators: [Validators.required] })
        }, { validators: this.customValid() }))
      }
      else {
        this.mainForm.removeControl('mDtl');
      }
    });

    this.mainForm.get('roles')?.valueChanges.subscribe(value => {
      console.log(value);      
    });

  }

  noSpaceCheck(control: AbstractControl): ValidationErrors | null {
    const nameVal = control.value;
    if(nameVal.includes(' ')) {
      return {spaceExist : true};
    }
    return null;
  }

  customValid() {
    return null;
  }

  formSubmission() {
    console.log(this.mainForm);    
  }
}