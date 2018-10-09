import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BiggerPicture';
  serviceElements = [ ];
  // assetsElements = [ ];


  onServiceAdded(serviceData: {serviceName: string}) {
    console.log('lol');
    this.serviceElements.push({
      name: serviceData.serviceName
    });
  }

//   onAssetAdded(assetData: {assetName: string, assetNumber: number}) {
//     console.log('lol');
//     this.assetsElements.push({
//       name: assetData.assetName,
//       // number: assetData.assetNumber + 1
//   });
// }


}
