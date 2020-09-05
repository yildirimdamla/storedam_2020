export class product_schema {
  _id: string;
  creatingDate: Date;
  updatedDate: Date;
  isDeleted: Date;
  name: String;
  category: String;
  categoryDescription: String;
  price: Number;
  stockNumber: Number;
  pictures: [];
  description: String;
  tag: [];
  size: String;
  sort: Number;
  code: String;
}

export class Category {
  category: String;
  label: String;
}

export const columnlist = [
  {
    sortAscending: true,
    key: 'updatedDate',
    value: 'Updated Date',
  },
  { sortAscending: true, key: 'name', value: 'Name' },
  {
    sortAscending: true,
    key: 'category',
    value: 'Category',
  },
  { sortAscending: true, key: 'price', value: 'Price' },
  {
    sortAscending: true,
    key: 'stockNumber',
    value: 'Stock',
  },

  {
    sortAscending: true,
    key: 'description',
    value: 'Description',
  },
  { sortAscending: true, key: 'tag', value: 'Tag' },
  { sortAscending: true, key: 'size', value: 'Size' },
  { key: 'edit', value: 'Değiştir' },
  { key: 'delete', value: 'Sil' },
];

export class tableoperations {
  static sortbyString(item: any, rows) {
    function dynamicsort(property) {
      var sort_order = 1;
      if (item.sortAscending == false) {
        var sort_order = -1;
        item.sortAscending = true;
      } else {
        item.sortAscending = false;
      }
      return function (a, b) {
        // a should come before b in the sorted order
        if (a[property] < b[property]) {
          return -1 * sort_order;
          // a should come after b in the sorted order
        } else if (a[property] > b[property]) {
          return 1 * sort_order;
          // a and b are the same
        } else {
          return 0 * sort_order;
        }
      };
    }
    rows.sort(dynamicsort(item.key));
  }
}

export var commonCategoryList: Category[];

export class FilteringOperations {
  static getCommonCategoryList() {
    return commonCategoryList;
  }

  static addingCategory(product_list, categoryObject) {
    // Adding Category
    var thisCategoryAdded = false;
    for (var i = 0; i < product_list.length; i++) {
      var newC = new Category();
      newC.category = product_list[i].category;
      newC.label = product_list[i].categoryDescription;

      for (let index = 0; index < categoryObject.length; index++) {
        if (categoryObject[index].category == newC.category) {
          thisCategoryAdded = true;
        } else {
          thisCategoryAdded = false;
        }
      }
      if (thisCategoryAdded == false) {
        categoryObject.push(newC);
        thisCategoryAdded = true;
      } else {
        thisCategoryAdded = true;
      }
      commonCategoryList = categoryObject;
    }
    console.log(commonCategoryList);
    // End of Adding Category
  }

  static filterbyCategory(selectedCategory) {
    var allProducts = document.getElementsByClassName('FilteredItems');
    // making Active Class
    var allCategoryList = document.getElementById('categoryFilterList')
      .children;

    for (let index = 0; index < allCategoryList.length; index++) {
      if (
        allCategoryList[index].classList.contains('active') &&
        !allCategoryList[index].classList.contains(selectedCategory)
      ) {
        allCategoryList[index].classList.remove('active');
      } else if (allCategoryList[index].classList.contains(selectedCategory)) {
        allCategoryList[index].classList.add('active');
      }
    }
    // End of making Active Class
    //  Showing Filtered Product
    for (let index = 0; index < allProducts.length; index++) {
      if (allProducts[index].classList.contains(selectedCategory)) {
        allProducts[index].setAttribute('style', 'display: block;');
      } else {
        allProducts[index].setAttribute('style', 'display: none;');
      }
    }
    // End Of Showing Filtered Product
  }

  static showAllProduct() {
    var allProducts = document.getElementsByClassName('FilteredItems');
    for (let index = 0; index < allProducts.length; index++) {
      // allProducts[index].style.display = 'block';
      allProducts[index].setAttribute('style', 'display:block');
    }
  }

  static filterbySearch(searchText, filterbyCategory) {
    searchText = searchText.toUpperCase();
    var allProducts = document.getElementsByClassName('FilteredItems');
    var isContainWord = new Boolean();
    var isSelectedCategory = new Boolean();

    for (let index = 0; index < allProducts.length; index++) {
      isContainWord =
        allProducts[index]
          .getElementsByClassName('featured__item__text')[0]
          .getAttribute('innerText')
          .toUpperCase()
          .indexOf(searchText) > -1;
      isSelectedCategory = allProducts[index].classList.contains(
        filterbyCategory
      );
      if (isContainWord && isSelectedCategory == true) {
        console.log(allProducts[index]);
        allProducts[index].setAttribute('style', 'display:block');
      } else {
        allProducts[index].setAttribute('style', 'display:none');
      }
    }
  }
}
