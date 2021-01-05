import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [ 
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
      Validators.email
    ]);
    // this.emailField.valueChanges
    //   .subscribe(value => {
    //     console.log(value);
    //   })
  }

  ngOnInit(): void {
  }

  sendEmail() {
    if(this.emailField.valid){
      console.log(this.emailField.value);
    }
  }

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

}
