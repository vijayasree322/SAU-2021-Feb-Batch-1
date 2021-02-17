//a)String starting with lion
input = "lion is king of jungle"
regress_first = /^lion/
regress_first.test(input)
//OP:true
//b)String ending with cat
input1 = "this is a cat"
regress_last = /cat$/
regress_last.test(input1)
//OP:true
//c)String in form ab^nc where n>=1
regrex = /ab+c/
input_1 = "abbbc"
regrex.test(input_1)
//OP:true
input_3 = "abc"
regrex.test(input_3)
//OP:true
input_2 = "ac"
regrex.test(input_2)
OP:false

//Function that find the index of //these regrex
function find_index(input)
{
var i,flag=0;
var reg_arr =[/^lion/,/cat$/,/ab+c/]
for(i=0;i<reg_arr.length;i++)
{
  var x=input.search(reg_arr[i]);
  if(x!=-1)
  {
     flag=1;
     console.log(x);
     break;
  }
}
if(flag==0)
{
  console.log("not found");
}
}
find_index("this is a cat");
find_index("lion is king of jungle");
find_index("this is abbbc");
find_index("i am vijaya");


