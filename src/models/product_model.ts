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
