import { Component, OnInit } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})

export class AssetListComponent implements OnInit {
  public assetCategoriesElements = [ 'Asset 1', 'Asset 2', 'Asset 3', 'Asset 4', 'Asset 5'];
  public assetCategories = [
    {
     name: "category1",
     asset: [ 'Asset 1 1', 'Asset 2 1', 'Asset 3 1', 'Asset 4 1', 'Asset 5 1']
    },
    {
      name: "category3",
      asset: [ 'Asset 1 2', 'Asset 2 2', 'Asset 3 2', 'Asset 4 2', 'Asset 5 2']
     },
     {
      name: "category2",
      asset: [ 'Asset 1 3', 'Asset 2 3', 'Asset 3 3', 'Asset 4 3', 'Asset 5 3']
     }
  ];

  public activeCategoryItems = null;
  constructor() { }

  getactiveCategory(categoryName){
    
    const activeCat = this.assetCategories.filter((category) => category.name == categoryName )
    return activeCat[0].asset

  }

  ngOnInit() {

    this.activeCategoryItems =  this.getactiveCategory("category1");

  }
  
}
