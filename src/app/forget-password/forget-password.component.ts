import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  formValue: FormGroup = new FormGroup({});
  emailPattern = "([A-Za-z0-9]@gmail.com)";
  
  flag=false;
  userNotFound=false;
  

  constructor(private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
  
    this.formValue=this.formBuilder.group({
     
      email:new FormControl([''],[Validators.required,Validators.pattern(this.emailPattern)]),
    })
  }
  get email() {
    return this.formValue.get('email');
 }  

  async resetPassword(){
    this.flag=false;
    this.userNotFound=false;
   const data= await this.api.forgetPassword(this.formValue.value.email)
   /* .subscribe((data:any)=>{
    //  var test=data;
     // console.log(data[0].email);
      this.flag=true;
      this.userNotFound=false;
      },
    error=>{
      this.flag=false;
      this.userNotFound=true;
      console.log(error);
    })
   */
   
}
}
