import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

   

   
    
  currentRow:any;
  users:any;

  color : boolean = false;

  constructor(private service : CommonService,private route : Router){}

  ngOnInit(){
    
    this.getAllUser();
    

  }
  
 

  getAllUser(){

    this.service.getAllUsers().subscribe((data: any)=>{
       this.users = data;
      //  this.users.users.map((r: any) =>{
      //   r.isActive = true;
      //   console.log(r);
      //  });
      
      console.log(data)
    },(err)=>{
      alert()
      console.log(err)
    },()=>{
      console.log();
    })
  }
   
  gotosecondedit(user:any){

    this.route.navigate(['goto-second-edit'],{state:{data:user}})


  }

  }

 

 