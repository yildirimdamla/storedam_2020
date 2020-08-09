import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BurgerNavComponent } from './home/burger-nav/burger-nav.component';
import { FooterComponent } from './home/footer/footer.component';
import { ProductsComponent } from './home/products/products.component';
import { HeaderComponent } from './home/header/header.component';
import { HeroComponent } from './home/hero/hero.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { BlogComponent } from './home/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BurgerNavComponent,
    FooterComponent,
    ProductsComponent,
    HeaderComponent,
    HeroComponent,
    CategoriesComponent,
    BlogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
