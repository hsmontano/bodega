import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {
    
    notifications: number = 0;

    constructor(private cartService: CartService,
                private router: Router,
                private authService: AuthService) {
        
    }
    ngOnInit(): void {
        this.cartService.products.subscribe({
            next: (products: Product[]) => {
                this.notifications = products.length;
            },
            error: (error) => console.log(error)
        });
    }
    
    goCart(): void {
        this.router.navigate(['dashboard/cart']);
    }

    goCatalog(): void {
        this.router.navigate(['dashboard/catalog']);
    }

    signOut(): void {
        this.authService.SignOut();
        this.router.navigate(['auth']);
    }
}