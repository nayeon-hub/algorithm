class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex > 0 && this.heap[parentIndex] > value) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    if (this.heap.length < 4) {
      if (this.heap[currentIndex] > this.heap[leftIndex]) {
        [this.heap[currentIndex], this.heap[leftIndex]] = [
          this.heap[leftIndex],
          this.heap[currentIndex],
        ];
      }

      return returnValue;
    }

    while (
      this.heap[currentIndex] > this.heap[leftIndex] ||
      this.heap[currentIndex] > this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        [this.heap[currentIndex], this.heap[leftIndex]] = [
          this.heap[leftIndex],
          this.heap[currentIndex],
        ];
        currentIndex = leftIndex;
      } else {
        [this.heap[currentIndex], this.heap[rightIndex]] = [
          this.heap[rightIndex],
          this.heap[currentIndex],
        ];
        currentIndex = rightIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

const heap = new MinHeap();
heap.push(1);
heap.push(2);
heap.push(3);
heap.push(9);
heap.push(10);
heap.push(12);
console.log(heap.heap);

const array = [];
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
console.log(array);
