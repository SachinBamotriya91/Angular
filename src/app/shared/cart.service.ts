import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //public productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }
  
  deleteProduct(productId:number){
    this.userId=localStorage.getItem('userId');
    return this.http.delete('http://localhost:8080/cart/deleteProduct/'+this.userId+"/"+productId, {responseType: 'text'});
  }
 
  //getting all cart products of c
  
  getCart(){
    this.userId=localStorage.getItem('userId');
    return this.http.get("http://localhost:8080/cart/getCart/"+this.userId);
  }

  userId=localStorage.getItem("userId");
  
  addItem(productId:number){
    
    var obj={ userId:Number(this.userId),productId:productId }
      return this.http.post("http://localhost:8080/cart/addToCart",obj);
      
  }
  
  deleteCart(){
    this.userId=localStorage.getItem("userId");
    return this.http.delete("http://localhost:8080/cart/deleteCart/"+this.userId);
  }

 
  // calculating total price
  getTotalPrice(product:any) : number{
    let grandTotal = 0;
    
    for(var i=0;i<product.length;i++){
      grandTotal+=product[i].price;
    }    
    return grandTotal;
  }
  
  
  /*removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  */
  
  
}
