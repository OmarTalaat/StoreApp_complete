import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { CategoryandproductService } from 'src/app/_service/categoryandproduct.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Input()  categories!: Category[];

  constructor(private categoryandproductserver:CategoryandproductService , private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadcategories();
  }


  loadcategories() {
    this.categoryandproductserver.getAllcategoriesforuser().subscribe((categories:Category[])=>{
      this.categories =categories
    }, error => {
      this.alertify.error(error);
    });
  }

}
