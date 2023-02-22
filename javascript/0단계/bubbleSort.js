function bubble_sort(arr) {
  let unsorted_arr_idx = arr.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < unsorted_arr_idx; i++) {
      sorted = false;
      const a = arr[i];
      const b = arr[i + 1];
      arr[i] = b;
      arr[i + 1] = a;
      // arr[i + 1] = arr[i];
      // console.log(arr[i], arr[i + 1]);
    }
    unsorted_arr_idx = unsorted_arr_idx - 1;
  }
}

arr = [65, 55, 45, 35, 25, 15, 10];
bubble_sort(arr);
console.log(arr);
