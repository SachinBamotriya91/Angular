import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formValue: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private api: ApiService, private router: Router) { }

  loggedIn = "isLoggedIn";
  condition = 'condition';

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  
  

  
 
  login() {
    this.api.login(this.formValue.value.email, this.formValue.value.password)
      .subscribe((data: any) => {
        alert("logged in");
        var test = data;
        localStorage.setItem(this.loggedIn,'true');
       localStorage.setItem(this.condition,'true');
      var userId:string=data[0].userId;
       localStorage.setItem('userId',userId);
     //   console.log(data[0].email +":"+data[0].password +" :"+data[0].userId);
       this.router.navigate(['product'])
      },
        error => {
          alert("Please Enter Valid Credentials");
          localStorage.setItem(this.loggedIn,'false');
          localStorage.setItem(this.condition,'false');
          console.log(error);
        })
  }
  
  }