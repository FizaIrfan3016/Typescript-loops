// Deeply under loops
// 1) for loop
for (let i = 0; i<5; i++){
    console.log(i) // Output 0,1,2,3,4
} 

// 2) While loop
let i = 0;
while(i<5){
    console.log(i); // Output 0,1,2,3,4
    i++;
}

// 3) do-while loop
let z=0;
do{
    console.log(z); //Output 0
    z++;
}while(z<0);

// 4) for...in loop
const obj = {
    a:1, b:2, c:3
};
for(const key in obj){
    console.log(`${key} : ${obj[key]}`); // Output "a:1", "b:2", "c:3"
}

// 5) for...of loop
const arr = [1,2,3];
for (const element of arr){
    console.log(element); //Outputs 1,2,3
}
