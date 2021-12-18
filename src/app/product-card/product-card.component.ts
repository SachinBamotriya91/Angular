import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        
        Object.assign(a,{quantity:1,total:a.price});
      });
    });

   /* this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
   */
  }
  
  addItem(productid:number){

    this.cartService.addItem(productid)
    .subscribe((data)=>{
      console.log(data);
    });
  }
  
  /*addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  */
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}

