import { Component } from '@angular/core';

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
    let data:any = {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.friendNickName}
    console.log(data)
  }

}
