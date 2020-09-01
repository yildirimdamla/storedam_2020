import { Component, OnInit } from '@angular/core';
import { Category, FilteringOperations } from 'src/models/product_model';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  categoryObject: Category[];
  searchText: string;
  defaultAllCategories = 'Bütün Kategoriler';
  defaultSelectedCetagories = 'all';
  selectedC: String = this.defaultSelectedCetagories;

  showFilteredCategory() {
    this.categoryObject = FilteringOperations.getCommonCategoryList();
  }

  selectFilteredCategory(selected) {
    console.log(selected);
    if (selected != this.defaultAllCategories) {
      document.getElementById('selectedCategory').innerHTML = selected.label;
      FilteringOperations.filterbyCategory(selected.category);
      this.selectedC = selected.category;
    } else if (selected == this.defaultAllCategories) {
      document.getElementById(
        'selectedCategory'
      ).innerHTML = this.defaultAllCategories;
      FilteringOperations.filterbyCategory(this.defaultSelectedCetagories);
      this.selectedC = this.defaultSelectedCetagories;
    }
  }
  searchFunction() {
    console.log(this.selectedC);
    if (
      this.searchText != null &&
      this.searchText != '' &&
      this.searchText != ' '
    ) {
      document.getElementById('filteringRow').style.display = 'none';
      FilteringOperations.filterbySearch(this.searchText, this.selectedC);
    } else {
      document.getElementById('filteringRow').style.display = 'inline';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
