import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-friends-view',
  templateUrl: './friends-view.component.html',
  styleUrls: ['./friends-view.component.css']
})
export class FriendsViewComponent {
  constructor(api:ApiService){
    api.fetchCourses().subscribe(
      (readValue)=>{
        this.data=readValue
      }
    )

  }
  data : any =[]

}
