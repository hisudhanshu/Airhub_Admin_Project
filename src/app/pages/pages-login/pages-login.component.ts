import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent {

  constructor(private userService:UserService)
  {}

  userLogin(data:any){
    console.warn(data)
    this.userService.login(data)
  }

}
