function manip_array(arr) {
    arr = arr.sort();
    console.log("Array after sorting = " + arr)
    arr = arr.map(item => item * 10);
    console.log("Array after *10 = " + arr)
    arr = arr.filter((item) => item % 3 == 0);
    return arr;
}
console.log(manip_array([1,4,5,6,7]));
//OP:
// Array after sorting = 1,4,5,6,7
// Array after *10 = 10,40,50,60,70
// 60
