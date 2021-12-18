import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  condition: boolean =false;
  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private cartService : CartService,private router:Router) { }

  ngOnInit(): void {
   
  }
  
  ngDoCheck(){
    this.condition=localStorage.getItem('condition')=='true'?true:false;
  }


  logout(){
    this.condition=false;
    localStorage.setItem('isLoggedIn','false');
    localStorage.setItem('condition','false');

    this.router.navigate(['/login']);
  }

}
