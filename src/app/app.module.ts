import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsAddComponent } from './friends-add/friends-add.component';

const myRoute: Routes=[
  {
    path: "",
    component: FriendsAddComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FriendsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
