import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AddCustomAssetComponent } from './add-custom-asset/add-custom-asset.component';
import { AssetListComponent } from './asset-list/asset-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiceComponent,
    AddServiceComponent,
    AddCustomAssetComponent,
    AssetListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
