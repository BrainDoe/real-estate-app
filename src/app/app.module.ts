import { MaterialModule } from './Modules/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { PropertyComponent } from './components/property/property.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchfiltersComponent } from './pages/searchfilters/searchfilters.component';

import { PropertyDetailsComponent } from './pages/property-details/property-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    PropertyComponent,
    PropertyListComponent,
    SearchComponent,
    SearchfiltersComponent,
    PropertyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
