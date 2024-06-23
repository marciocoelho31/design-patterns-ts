import { MyDefaultIterator } from './my-default-iterator';
import { MyIteratorInterface } from './my-iterator-interface';

export class MyDataStructure {
  private _items: string[] = [];
  private iterator: MyIteratorInterface<string> = new MyDefaultIterator(this);

  addItem(...items: string[]): void {
    items.forEach((item) => this.items.push(item));
  }

  get items(): string[] {
    return this._items;
  }

  size(): number {
    return this.items.length;
  }

  changeIterator(iterator: MyIteratorInterface<string>): void {
    this.iterator = iterator;
  }

  [Symbol.iterator](): MyIteratorInterface<string> {
    //this.iterator.reset(); // cuidado para problemas de concorrencia
    return this.iterator;
  }

  resetIterator(): void {
    this.iterator.reset();
  }
}
