import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BurgerNavComponent } from './home/burger-nav/burger-nav.component';
import { FooterComponent } from './home/footer/footer.component';
import { ProductsComponent } from './home/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BurgerNavComponent,
    FooterComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
