import { Component, OnInit, ViewChild } from '@angular/core';

import { ApiService } from './../shared/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  @ViewChild('closebutton') closebutton:any;

  userModelObj:UserModel=new UserModel();
  constructor(private formBuilder:FormBuilder,private api:ApiService) { }
  
  userIdPattern:any="^[0-9]{3}$";
  unamePattern :any= "^[a-zA-Z]{3,30}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
 // pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  pwdPattern="^[A-Za-z0-9]{8,15}$";
  
  formValue: FormGroup = new FormGroup({});
  
  userData:any=[];
  showAdd !:boolean;
  showUpdate !:boolean;
  userObj={};
  ngDoCheck(){
      if(this.searchById==null){
        this.getAllUser();
      }
  }
  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      userId:new FormControl([],[Validators.required,Validators.pattern(this.userIdPattern)]),
      firstName:new FormControl([''],[Validators.required,Validators.pattern(this.unamePattern)]),
      lastName:new FormControl([''],[Validators.required,Validators.pattern(this.unamePattern)]),
      email:new FormControl([''],[Validators.required,Validators.pattern(this.emailPattern)]),
      mobile:new FormControl([''],[Validators.required,Validators.pattern(this.mobnumPattern)]),
      password:new FormControl([''],[Validators.required,Validators.pattern(this.pwdPattern)]),
    })
    
    
    this.getAllUser();
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

  clickAddUser(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  } 
  createUser(){
    this.userModelObj={
      userId:this.formValue.value.userId,
      firstName:this.formValue.value.firstName,
      lastName:this.formValue.value.lastName,
      email:this.formValue.value.email,
      mobile:this.formValue.value.mobile,
      password:this.formValue.value.password
    }
   
   /* this.userModelObj.userId=this.formValue.value.userId;
    this.userModelObj.firstName=this.formValue.value.firstName;
    this.userModelObj.lastName=this.formValue.value.lastName;
    this.userModelObj.email=this.formValue.value.email;
    this.userModelObj.mobile=this.formValue.value.mobile; 
    this.userModelObj.password=this.formValue.value.password;
    */

    this.api.createUser(this.userModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("User Added ");
      this.formValue.reset();
    },
    err=>{
      alert("error")
    }
    )
  }

  getAllUser(){
    this.api.getAllUser()
    .subscribe(res=>{
    console.log(res);
      this.userData=res;
    },
      (error)=> console.log(error)
    )
  }
  deleteUser(row:any){
    this.api.deleteUser(row.userId)
    .subscribe(res=>{
      this.getAllUser();

      alert("user Deleted ")    },
    err=>{
      console.log(err)
    })
  }

  onEdit(row:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.formValue.controls['userId'].setValue(row.userId);
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['password'].setValue(row.password);
  }
  
  updateUser(){
    this.userModelObj.userId=this.formValue.value.userId;    
    this.userModelObj.firstName=this.formValue.value.firstName;
    this.userModelObj.lastName=this.formValue.value.lastName;
    this.userModelObj.email=this.formValue.value.email;
    this.userModelObj.mobile=this.formValue.value.mobile; 
    this.userModelObj.password=this.formValue.value.password;
    console.log(this.userModelObj)
    this.api.updateUser(this.userModelObj)
    .subscribe(res=>{
      console.log(res);
      this.formValue.reset();
      this.getAllUser();
    },
    err=>{
      console.log(err);
      }
    )
    let ele:HTMLElement=document.getElementById('exampleModal') as HTMLElement;
    ele.click()
  }
  
  
  searchById:string='';
  searchByName='';
  getUserById(){
    this.api.getUserById(this.searchById)
    .subscribe(res=>{
      var employeeObj=res;
      this.userData=[];
      this.userData.push(employeeObj);
      
    },
  ) 
   
    
    }
    getUserByName(){
      this.api.getUserByName(this.searchByName)
      .subscribe(res=>{
        var employeeObj=res
        this.userData=[];
        this.userData.push(employeeObj);
        
      })
      }
}
