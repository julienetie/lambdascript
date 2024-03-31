class Counter {
  private count: number = 0;

  public increment(): void {
    this.count++;
  }

  public decrement(): void {
    this.count--;
  }

  public getCount(): number {
    return this.count;
  }
}

// Usage
const counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1

counter.decrement();
console.log(counter.getCount()); // Output: 0