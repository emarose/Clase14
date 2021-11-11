let array = [10, "20", 30, "40", 50];
let arrayLen = array.length;
let i = 0;
for (; i < arrayLen; i++) {
    if (typeof array[i] !== String){
        array[i] = Number(array[i]);
    }   
}
console.log(array);