import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    MdButtonModule
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
