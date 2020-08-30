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

export class FilteringOperations {
  static filterbyCategory(selectedCategory) {
    var allProducts = document.getElementsByClassName('FilteredItems');
    // making Active Class
    var allCategoryList = document.getElementById('categoryFilterList')
      .children;
    console.log(allCategoryList);
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
        console.log('hel');
        allProducts[index].setAttribute('style', 'display: block;');
      } else {
        allProducts[index].setAttribute('style', 'display: none;');
      }
    }
    // End Of Showing Filtered Product
  }
}
