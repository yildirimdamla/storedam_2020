export class product_schema {
  creatingDate: { type: Date; default: Date };
  updatedDate: { type: Date; default: Date };
  isDeleted: { type: Boolean; default: false };
  name: String;
  category: String;
  price: Number;
  stockNumber: Number;
  pictures: [];
  description: String;
  tag: [];
  size: String;
  sort: Number;
  code: String;
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
