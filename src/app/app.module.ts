import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsermoodinfoComponent } from './usermoodinfo/usermoodinfo.component';
import { VendorComponent } from './vendor/vendor.component';

@NgModule({
  declarations: [
    AppComponent,
    UsermoodinfoComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
