import { Component, OnInit } from '@angular/core';
import { Category, FilteringOperations } from 'src/models/product_model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  categoryObject: Category[];
  searchText: string;
  defaultAllCategories = 'Bütün Kategoriler';

  showFilteredCategory() {
    this.categoryObject = FilteringOperations.getCommonCategoryList();
  }

  selectFilteredCategory(selected) {
    console.log(selected);
    if (selected != this.defaultAllCategories) {
      document.getElementById('selectedCategory').innerHTML = selected.label;
    } else if (selected == this.defaultAllCategories) {
      document.getElementById(
        'selectedCategory'
      ).innerHTML = this.defaultAllCategories;
    }
  }
  searchFunction() {
    if (
      this.searchText != null &&
      this.searchText != '' &&
      this.searchText != ' '
    ) {
      document.getElementById('filteringRow').style.display = 'none';
    } else {
      document.getElementById('filteringRow').style.display = 'inline';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
