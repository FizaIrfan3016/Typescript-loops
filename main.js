// Deeply under loops
// 1) for loop
for (var i_1 = 0; i_1 < 5; i_1++) {
    console.log(i_1); // Output 0,1,2,3,4
}
// 2) While loop
var i = 0;
while (i < 5) {
    console.log(i); // Output 0,1,2,3,4
    i++;
}
// 3) do-while loop
var z = 0;
do {
    console.log(z); //Output 0
    z++;
} while (z < 0);
// 4) for...in loop
var obj = {
    a: 1, b: 2, c: 3
};
for (var key in obj) {
    console.log("".concat(key, " : ").concat(obj[key])); // Output "a:1", "b:2", "c:3"
}
// 5) for...of loop
var arr = [1, 2, 3];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var element = arr_1[_i];
    console.log(element); //Outputs 1,2,3
}
