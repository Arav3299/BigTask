import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'firstmodule',component:FirstmoduleComponent,children:[
  //  {path:'home',component:HomeComponent},
  //  {path:'edit',component:EditComponent},
  // ]}

  {path:'',redirectTo:"first/home",pathMatch:'full'},
  {path:"gotofirstedit",redirectTo:"first/edit",pathMatch:'full'},
  {path:"gotoadmin",redirectTo:"second/admin",pathMatch:'full'},
  {path:"goto-second-edit",redirectTo:"second/edit",pathMatch:'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
