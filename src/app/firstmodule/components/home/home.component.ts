import { Router } from '@angular/router';
import { CommonService } from './../../../common.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : CommonService,private navi : Router) { }

  ngOnInit(): void {
    alert()
    this.getAll();
  }

  @Input() name = '';

  log=true;
object:any;
 prod:any;

  getAll(){
    this.service.getAllProducts().subscribe({
      next: (data) => {
        console.log(data)
        this.prod=data;
      },
      error: (e) => {
        console.error(e)
      },
      complete: () => 
      {
        console.info('subscription completed') 
      }
    });
  }

  route(product:any){
    alert()
    this.service.data=product;
    this.navi.navigateByUrl('gotofirstedit',product);
  }

  toadminpage(){
    this.navi.navigate(['gotoadmin']);
  }
}
