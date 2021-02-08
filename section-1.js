let arr = [1, 2, 3, 4];

// Question 1:
// Using foreach, print the elements of arr

arr.forEach((element) => {
  console.log(element);
});

//Question 2:
// Using map, change arr to be [2,4,6,8]

let arr2 = arr.map((element) => element * 2);
arr = [...arr2];
console.log(arr);

// Question 3:
// Using filter, return even numbers in arr

let arr3 = arr.filter((element) => {
  if (element % 2 === 0) return element;
});
console.log("even:", arr3);
