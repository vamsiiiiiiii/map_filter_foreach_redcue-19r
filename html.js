const arr=[1,2,3,4,5];
const result=arr.map(i=>i*2)
console.log(result)

// const a=[1,2,3,4,5];

// console.log(a.map(x=>x>2))


const a4=["bob","slice","hello","how are you"]
// const b=29;
console.log(arr.map(z=>console.log(z)))


const a2=[1,2,3,5];
a.forEach(x=>console.log(x))

const b2=["aa","bb","cc","dd"];
b.forEach(a=>console.log(a))

const a=[800,344,1200,44];

const b=a.reduce((acc,curr)=>acc+curr,0)
console.log(b)


let a1=[{id:1,name:"titan watch",price:3333},{id:2,name:"titan watch2", price:2455},{id:3,name:"rolex watch",price:1888},{id:4,name:"watch2",price:1450}];

let b1=a.filter(x=>x.price<=2000).map(x=>x.price).reduce((x,y)=>x+y,0);
// let c=b.map(x=>x.price)
// let d=c.reduce((x,y)=>x+y,0)
// console.log(d)


// map...
// we use to iterate through elem in the array and we can return newArray

//forEach....
// we use to just to iterate the array but not return new aRRay

// ..reduce
// we use reduce to get single values based on multiple digit values in the array
// 