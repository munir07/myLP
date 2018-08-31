import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input()
  myList: any[];

  @ViewChild('myLPForm')
  theForm: NgForm;

  // Following variables for slider
  max = 10;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 5;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    if (this.theForm.value.rating == null) {
       this.theForm.value.rating = 5;  
    }
    // if (this.theForm.value.image == null) {
    //   this.theForm.value.image = "random";  
    // }
    this.myList.push(this.theForm.value);
    this.theForm.resetForm();
  }
}
