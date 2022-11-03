import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product:any;
  constructor(private service:CommonService) { }

  ngOnInit(): void {

    this.product=this.service.data;
    
  }

 

}
