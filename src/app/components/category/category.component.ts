import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category;

  dataLoaded = false;

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCategories();

    // this.activatedRoute.params.subscribe(params => {
    //   if (params["categoryId"]){
    //     this.currentCategory={categoryId: params["categoryId"], categoryName: 'Category'};
    //     console.log(this.currentCategory);
    //   }else{
    //     this.cleanCurrentCategory();
    //     console.log('bos param');
    //   }
    // })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  cleanCurrentCategory() {
    this.currentCategory = { categoryId: 0, categoryName: 'All' }; //{} as any;
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllCategoryClass() {
    if(!this.currentCategory){
      return 'list-group-item active';
    }

    if (this.currentCategory.categoryId == 0) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
