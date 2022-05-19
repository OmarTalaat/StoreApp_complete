import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/_models/product';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { CategoryandproductService } from 'src/app/_service/categoryandproduct.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products!:Product[];



  constructor(private categoryandproductserver:CategoryandproductService , private alertify: AlertifyService , private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
     this.products = data['products'];
  });
  }


}
