import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-friends-add',
  templateUrl: './friends-add.component.html',
  styleUrls: ['./friends-add.component.css']
})
export class FriendsAddComponent {
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""
  readValue=()=>
  {
    let data:any = {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)
    this.api.addFriends(data).subscribe(
      (Status1:any)=>{
        if(Status1.status=="success"){
          alert("success")
          this.name=""
          this.friendName=""
          this.friendNickName=""
          this.DescribeYourFriend=""
        }else{
          alert("failed")
        }
      }
    )
  }
  constructor(private api:ApiService){
  }

}
