import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
hii='aravindh'

  constructor(private route : Router) { }

  user:any;
  ngOnInit(): void {
  
    this.user=history.state.data;
  console.log(this.user);
  
  }

}
