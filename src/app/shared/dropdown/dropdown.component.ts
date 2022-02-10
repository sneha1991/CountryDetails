import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DropdownData } from '../../models/country';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit  {
  selectedFW = new FormControl();
  @Input() dropdownData:DropdownData[]=new Array<DropdownData>() ;
  @Input()
  label: string ='';
  @Output() emitSelected = new EventEmitter();
  constructor() { }
  

  ngOnInit(): void {
  }
 

}

