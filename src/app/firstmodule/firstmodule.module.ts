import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { FirstmoduleRoutingModule } from './firstmodule-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomeComponent,
    EditComponent,
     
  ],
  imports: [ 
    RouterModule, FirstmoduleRoutingModule,FormsModule,BrowserModule,CommonModule
  ],
  exports:[HomeComponent]
})
export class FirstmoduleModule { }
