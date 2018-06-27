import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GroupsComponent } from './groups/groups.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


//Router
const appRoute: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: '', redirectTo: 'settings', pathMatch: 'full' },
  { path: '**', redirectTo: 'settings', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
