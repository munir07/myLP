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

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    this.myList.push(this.theForm.value);
    this.theForm.resetForm();
  }
}
