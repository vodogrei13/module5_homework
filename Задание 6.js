var arr = [4, 4, 4, 4],
array = [5, 5, 5, "пять"];

function foo(arr) {
for (let i = 0; i < arr.length; i++)
if (arr[i] !== arr[0]) 
  return !1;
   return !0
};

alert([foo(arr), foo(array)]);