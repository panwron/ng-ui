import { Component, OnInit } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})

export class AssetListComponent implements OnInit {
  public assetCategoriesElements = [ 'Asset 1', 'Asset 2', 'Asset 3', 'Asset 4', 'Asset 5'];
  constructor() { }

  ngOnInit() {
  }
  
}
