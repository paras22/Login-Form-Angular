import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
	// TODO 5: Implement the 'onSubmit' function which will be called on form submition.
  // This function should reset the form.
constructor(){}

ngOnInit(): void{}

onSubmit(entireForm: NgForm)
  {
    console.log(entireForm);
/*     entireForm.reset;
 */  }

}



