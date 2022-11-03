import { FormsModule } from '@angular/forms';
import { FirstmoduleModule } from './../firstmodule/firstmodule.module';
import { NgModule } from '@angular/core';
import { SecondmoduleRoutingModule } from './secondmodule-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { EditComponent } from './components/edit/edit.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    
    AdminComponent,
    EditComponent
  ],
  imports: [
   SecondmoduleRoutingModule,FirstmoduleModule,CommonModule,FormsModule
  ]
})
export class SecondmoduleModule { }
