import { MyDataStructure } from './my-data-structure';
import { MyIteratorInterface } from './my-iterator-interface';

export class MyDefaultIterator implements MyIteratorInterface<string> {
  private index = 0;

  constructor(private readonly dataStructure: MyDataStructure) {}

  reset(): void {
    this.index = 0;
  }

  next(): IteratorResult<string> {
    const returnValue = this.makeValue(this.dataStructure.items[this.index]);
    returnValue.done = this.index >= this.dataStructure.size();
    this.index++;
    return returnValue;
  }

  private makeValue(value: string): IteratorResult<string> {
    return { done: false, value };
  }
}
