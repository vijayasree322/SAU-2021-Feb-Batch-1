// concat() - Combines the arrays or objects
var firstName = ["shehanaz","ravi"];
var lastName = ["gill","dubey"];
var combine_first_last = firstName.concat(lastName);
console.log(combine_first_last);
//OP:[shehanaz,ravi,gill,dubey]

console.log();
//every() - check for odd numbers if all are true return true "
var arr = [3,11,25,33];
console.log(arr.every((item) => {
    if (item % 2 != 0) {
        return true;
    } else {
        return false;
    }
}));
//OP:true


//filter() - get students who got above 90 marks
var marks = [30,92,34,89,93,95];
var top_marks_list = marks.filter((item) =>
    item >= 90
);
console.log(top_marks_list);
//OP:[92,93,95]


//forEach() - multiply numbers by 2
var nums = [1, 2, 3, 4];
var squares = [];
nums.forEach((num) => console.log(num*2));
//OP:2 4 6 8


//indexOf() - find the first position of a char
var char_arr = ['c','d','e'];
console.log(char_arr.indexOf('c'));
// 0
console.log(char_arr.indexOf('a'));
// -1 (not found)
//join() - join different parts of name with parameter specified in bracket
var name = ['vijaya', 'Sree'];
console.log(name.join(' '));
// OP:vijaya Sree   --joins by space
console.log(name.join());
// Op:vijaya,Sree --joins by ,(comma)
console.log(name.join('-'));
// OP:vijaya-Sree--joins by -(hyphen)

//lastIndexOf() - find position of last occurance of a char in a string;
var str="cat dog";
console.log(str.lastIndexOf('c'));
//OP: 0
console.log(str.lastIndexOf('d'));
//OP:4

//"map() - get uppercase of all the names");
var names = ["naveen", "ravi", "rakesj", "kishore"];
var uppercase = names.map(x => x.toUpperCase());
console.log(uppercase);
//OP:NAVEEN,RAVI,RAKESJ,KISHORE

//"pop() - removes last element in array
var fruits = ["apple", "papaya", "watermelon", "carrot"];
console.log(fruits.pop());
//OP:carrot
console.log(fruits);
// OP:[apple,papaya,watermelon]
console.log(fruits.pop());
//OP: watermelon
console.log(fruits);
//OP: [apple,papaya]

//push() - insert an element
console.log(fruits);
var array = [1,2,3,4]
array.push(12)
console.log(array);


//reduce() - subtract all elements of the array from left to right");
var nums = [1, 2, 3, 4];
var subtract_left = nums.reduce((prev, currentValue) => prev - currentValue);
console.log(subtract_left);
//OP:-8

//reduceRight() - subtract all elements of the array from right to left");
var nums = [1, 2, 3, 4];
var subtract_right = nums.reduceRight((prev, currentValue) => prev - currentValue);
console.log(subtract_right);
//OP:-2

//"reverse() - makes ascending to descending and viceversa
var char_arr = ['a','b','c','d'];
var char_arr_desc = char_arr.reverse();
console.log(char_arr_desc);
//OP:[d,c,b,a]

//shift() - remove the first element from numbers
var nums = [1, 2, 3, 4];
var first_ele = nums.shift();
console.log(nums);
//OP: [2,3,4]
console.log(first_ele);
// OP:1


//slice() - get arr from particular to index (start) to end index (excluded)
var arr=[1,2,3,4,5,5,6];
console.log(arr.slice(2));
//OP: [3,4,5,5,6]
console.log(arr.slice(2, 4));
//OP: [3,4]
console.log(arr.slice(1, 5));
//OP: [2,3,4,5]

//some() - test if array contains atleast one even number
var nums = [2,99,767,33];
console.log(nums.some((num) => (num %2==0)));
//OP:true

//toSource() - get the source code of array - [Dep]");
var emp = new Array("Fred Flintstone", "Caveman", 1970);
//OP:console.log(emp.toSource()); 

//sort() - sort names of employees in ascending order"
var students = ['rakesh', 'ravi', 'raghu', 'raghav'];
var sorted = students.sort();
console.log(sorted);
//OP:[raghav,raghu,rakesh,ravi]
console.log();
//splice() - Correct the months in the array
var numbers = [1,3,4,5,6,7];
numbers.splice(1, 0, 2); // -  inserts at index 1
console.log(numbers);
// OP:1,2,3,4,5,6,7
numbers.splice(4, 1, 10); // - replaces 1 element at index 4
console.log(numbers);
//OP: 1,2,3,4,10,6,7

//toString() - returns the name of all seperated with comma
var names = ['rakesh', 'ravi', 'raghu', 'raghav'];
var to_str = names.toString();
console.log(to_str);
//OP:rakesh,ravi,raghu,raghav

//unshift() - add elements to the begining of the array
var nums = [3, 4, 5];
console.log(nums.unshift(1, 2)); 
console.log(nums);
// OP:[1, 2, 3, 4, 5]