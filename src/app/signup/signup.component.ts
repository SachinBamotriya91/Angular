import { Router } from '@angular/router';
import { UserModel } from './../user/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formValue: FormGroup = new FormGroup({});
  userModelObj:UserModel=new UserModel();

  constructor(private formBuilder:FormBuilder,private api:ApiService,private route:Router) { }
  userIdPattern:any="^[0-9]{3}$";
  unamePattern :any= "^[a-zA-Z]{3,30}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
 // pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  pwdPattern="^[A-Za-z0-9]{8,15}$";
  isValidFormSubmitted = false;

  validateEmail = true;
  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      userId:new FormControl([],[Validators.required,Validators.pattern(this.userIdPattern)]),
      firstName:new FormControl([''],[Validators.required,Validators.pattern(this.unamePattern)]),
      lastName:new FormControl([''],[Validators.required,Validators.pattern(this.unamePattern)]),
      email:new FormControl([''],[Validators.required,Validators.pattern(this.emailPattern),Validators.email]),
      mobile:new FormControl([''],[Validators.required,Validators.pattern(this.mobnumPattern)]),
      password:new FormControl([''],[Validators.required,Validators.pattern(this.pwdPattern)]),

    })
  }
  get userId() {
    return this.formValue.get('userId');
 }
  get firstName() {
    return this.formValue.get('firstName');
 }
 get lastName() {
  return this.formValue.get('lastName');
}
 get password() {
    return this.formValue.get('password');
 }  
 get mobile() {
    return this.formValue.get('mobile');
 }    
 get email() {
    return this.formValue.get('email');
 }      

  signup(){
    //this.isValidFormSubmitted = false;
   // if (this.formValue.invalid) {
   //    return;
       
   // }

   // this.isValidFormSubmitted = true;
    this.userModelObj.userId=this.formValue.value.userId;
    this.userModelObj.firstName=this.formValue.value.firstName;
    this.userModelObj.lastName=this.formValue.value.lastName;
    this.userModelObj.email=this.formValue.value.email;
    this.userModelObj.mobile=this.formValue.value.mobile; 
    this.userModelObj.password=this.formValue.value.password;

    this.api.createUser(this.userModelObj).subscribe((data)=>{
      alert("Sign up successfully ");
      this.formValue.reset();   
      this.route.navigateByUrl("/login");
    })
    
  }

}
