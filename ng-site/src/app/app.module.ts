import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpTreeviewModule } from "sp-treeview-v2";


import { AppComponent } from './app.component';
import { MatIconModule, MatCheckboxModule, MatRadioModule, MatProgressBarModule, MatToolbar, MatToolbarModule, MatButtonModule, MatTabsModule, MatSelectModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { TreeviewComponent } from './treeview/treeview.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', redirectTo: '/sp-treeview', pathMatch: 'full' },
  { path: 'sp-treeview', component: TreeviewComponent }
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '**', component: PageNotFoundComponent }
];

const material = [
  MatIconModule,
  MatCheckboxModule,
  MatRadioModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatButtonModule,
  MatTabsModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    TreeviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    material,
    FormsModule,
    SpTreeviewModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
