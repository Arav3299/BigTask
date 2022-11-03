import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arav',
  templateUrl: './arav.component.html',
  styleUrls: ['./arav.component.css']
})
export class AravComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()arav:any;


}
