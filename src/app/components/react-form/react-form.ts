import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  imports: [ReactiveFormsModule],
  templateUrl: './react-form.html',
  styles: ``,
})
export class ReactForm implements OnInit {
  public customReactiveForm!: FormGroup;
  public rolesList = ['Batsman', 'Bowler', 'Captain', 'Wicket Keeper'];

  ngOnInit(): void {
    this.customReactiveForm = new FormGroup({
      playerName: new FormControl(null),
      email: new FormControl(null),
      mobileNumber: new FormControl(null),
      dateOfBirth: new FormControl(null),
      country: new FormControl(null),
      gender: new FormControl(null),
      extraDetail: new FormControl(false),
      // rolePreference: new FormArray([
      //   new FormControl(false),
      //   new FormControl(false),
      //   new FormControl(false),
      //   new FormControl(false),
      // ]),
      recordDate: new FormControl(null),
      record: new FormControl(null),
      oppenentCountry: new FormControl(null),
    });
  }
  formSubmission() {
    console.log(this.customReactiveForm.value);    
  }
}
