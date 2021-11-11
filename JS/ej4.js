
let arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]

let result = arr.filter((item,index)=>{
    return arr.indexOf(item) === index;
});
console.log(result)