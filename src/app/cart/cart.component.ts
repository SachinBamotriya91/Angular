import { Component, OnInit ,TemplateRef} from '@angular/core';
import { CartService } from '../shared/cart.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal : number=500;
  modalRef!: BsModalRef;
  constructor(private cartService : CartService,private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
 }
  
  ngOnInit(): void {
    this.cartService.getCart()
    .subscribe(res=>{
      this.products = res;  
      this.totalPrice();
  
  //  this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  deleteProduct(item:any){
    const userId=localStorage.getItem('userId');
   alert(item.id);
   this.cartService.deleteProduct(item.id)
   .subscribe((data)=>{
     
   this.cartService.getCart().
   subscribe(data=>{
    this.products=data;
    this.totalPrice();
   })

   
     console.log(data);
   })
   alert("Product Deleted from Cart");
  }
  /*removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  */
  
  totalPrice(){
    this.grandTotal=this.cartService.getTotalPrice(this.products)
  }
  
  deleteCart(){
   this.cartService.deleteCart()
   .subscribe(data=>{
     this.products=[];
     console.log(data);
     
   });
   
     }
  
  
    
}
