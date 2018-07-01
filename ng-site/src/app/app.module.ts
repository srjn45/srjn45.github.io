import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpTreeviewModule } from "sp-treeview-v2";
// import { SpTreeviewModule } from "sp-treeview";

import { AppComponent } from './app.component';
import { MatIconModule, MatCheckboxModule, MatRadioModule, MatProgressBarModule, MatToolbar, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressBarModule,
    MatToolbarModule,
    SpTreeviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
