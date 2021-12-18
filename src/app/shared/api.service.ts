import { UserModel } from './../user/user.model';
import { Injectable } from '@angular/core';
import{HttpClient,HttpClientModule, HttpParams} from '@angular/common/http';
import { map} from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public loginForm!:FormGroup;
  flag:boolean=false;
  constructor(private http: HttpClient) { 
  }
   URL="http://localhost:8010/";

   //let header={'contenet-type':'application/json'};
   //return this.http.post (URL, empObj,{"headers":header , responseType: 'text'});
   
   forgetPassword(email:any){
  
    return this.http.get("http://localhost:8080/users/forgetPassword/"+email).toPromise();
  }
   
   login(email:any,password:any){
     return this.http.get("http://localhost:8080/users/findByEmail/"+email+"/"+password);
   }
   
  createUser(data:any){
    return this.http.post("http://localhost:8080/users/create",data, {responseType: 'text'});
  }
   getUserById(id:string):Observable<UserModel>{
     return this.http.get<UserModel>("http://localhost:8080/users/getById/"+id);
   }
   
   getUserByName(name:string):Observable<UserModel>{
    return this.http.get<UserModel>("http://localhost:8080/users/getByName/"+name);
  }
   
  getAllUser():Observable<UserModel>{

    return this.http.get<UserModel>("http://localhost:8080/users/getAll");
  }

  deleteUser(id:number){
    return this.http.delete("http://localhost:8080/users/delete/"+id, {responseType: 'text'})
    
  }
  updateUser(data:UserModel){
    return this.http.put("http://localhost:8080/users/update/"+data.userId, data ,{responseType: 'text'});
  }


  getProduct(){
    return this.http.get<any>("http://localhost:8080/products/getAll")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
} 