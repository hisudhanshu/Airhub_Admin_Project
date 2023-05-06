import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  router: any;

  constructor(private http: HttpClient, router:Router) { }

  login(data:any)
  {
    this.http.post("http://localhost:4200/login",data).subscribe((result:any)=>{
      console.warn(result);
       localStorage.setItem("token",result.token);
       this.router.navigate(['/user-profile'])

  })
  }

profile()
{
  let hearders=new HttpHeaders()
  .set("Authorizations",`bearer ${localStorage.getItem('token')}`)
  this.http.post("http://localhost:4200/user-profile",{}).subscribe((result:any)=>{
    console.warn(result); })
  }

  }
