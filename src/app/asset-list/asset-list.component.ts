import { Component, OnInit } from '@angular/core';
import { DragulaModule, dragula } from 'ng2-dragula';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})

export class AssetListComponent implements OnInit {


  private activeCategoryName =  "Category 1"
  public activeCategoryItems = null;

  public assetCategories = [
    {
     name: "Category 1",
     asset: [ 'Asset 1 from cat 1', 'Asset 2 from cat 1', 'Asset 3 from cat 1', 'Asset 4 from cat 1', 'Asset 5 from cat 1']
    },
    {
      name: "Category 2",
      asset: [ 'Asset 1 from cat 2', 'Asset 2 from cat 2', 'Asset 3 from cat 2', 'Asset 4 from cat 2', 'Asset 5 from cat 2']
     },
     {
      name: "Category 3",
      asset: [ 'Asset 1 from cat 3', 'Asset 2 from cat 3', 'Asset 3 from cat 3', 'Asset 4  from cat3', 'Asset 5 from cat 3']
     }
  ];

  

  constructor() {
   }

  getCategoryItems = (categoryName : string) => 
      this.assetCategories.filter((category) => 
      category.name == categoryName )[0].asset;

  

  selectOnChange(selectedCategoryName) {
    console.log(`category name =>  ${selectedCategoryName}`);
    console.log(`category items =>  ${this.getCategoryItems(selectedCategoryName)}`);

    this.activeCategoryItems = this.getCategoryItems(selectedCategoryName);
    this.activeCategoryName = selectedCategoryName
  }

  ngOnInit() {
    this.activeCategoryItems =  this.getCategoryItems(this.activeCategoryName);
  }
  
}
