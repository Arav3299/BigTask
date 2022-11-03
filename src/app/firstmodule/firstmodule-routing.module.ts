import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';

const routes : Routes = [

  {path:'first',children:[
    {
      path:'home',component:HomeComponent
    },
    {
      path:'edit',component:EditComponent
    }
  ]} 
]


@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstmoduleRoutingModule { }
