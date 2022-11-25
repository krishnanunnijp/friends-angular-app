import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsAddComponent } from './friends-add/friends-add.component';
import { FriendsViewComponent } from './friends-view/friends-view.component';
import { FriendsNavbarComponent } from './friends-navbar/friends-navbar.component';
import { FriendsSearchComponent } from './friends-search/friends-search.component';

const myRoute: Routes=[
  {
    path: "",
    component: FriendsAddComponent
  },
  {
    path: "view",
    component: FriendsViewComponent
  },
  {
    path: "search",
    component: FriendsSearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FriendsAddComponent,
    FriendsViewComponent,
    FriendsNavbarComponent,
    FriendsSearchComponent
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
