class ContentList {

  //properties
  //private array of content
  private _items : Content[];
  static contentCounter = 0;

  //constructor to set the empty array
  constructor(item: Content) {
    this._items = [];
    this._items[0] = item;
    this.addContent();
  }
  // add 1 item to content
  addContent() {
    return ++ContentList.contentCounter;
  }

  //return number of items in array
  returnItemsCount() {
    return this._items.length;
  }

  //getters
  get items(): Content[] {
    return this._items;
  }

  //return output of content
  processContent(content: Content): void {
    console.log(content.body);
  }

}
