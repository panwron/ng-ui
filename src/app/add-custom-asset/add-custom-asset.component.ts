import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-custom-asset',
  templateUrl: './add-custom-asset.component.html',
  styleUrls: ['./add-custom-asset.component.css']
})
export class AddCustomAssetComponent implements OnInit {
public assetElements = [];
newAssetName = '';
newAssetCategory: number = 0;
  // @Output() assetCreated = new EventEmitter<{assetName: string, assetCategory: number}>();
  // newAssetCategory = 0;
  // @Input() customAsset: {name: string, number: number};
 

  constructor() { }

  ngOnInit() {
  }

  onAddAsset() {
    this.assetElements.push({
      name: this.newAssetName,
      category: this.newAssetCategory += 1
    });
  }

  // onAddAsset() {
  //   this.assetCreated.emit({assetName: this.newAssetName, assetCategory: this.newAssetCategory});
  // }

}
