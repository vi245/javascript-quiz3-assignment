//code implementations of array methods

let marks=[70,80,75,87,90,86];
//forEach implementation
console.log("------forEach Implementation----")
marks.forEach(mark=>{
    console.log(` ${mark} `);// invoke callback function for each element
})
console.log("----map Implementation----")
console.log(marks.map(mark=>` ${mark} `));// invoke callback function for every element and return new array
// [ ' 70 ', ' 80 ', ' 75 ', ' 87 ', ' 90 ', ' 86 ' ]

console.log("----filter Implementation----")
console.log(marks.filter(mark=>mark > 80));// return the newarray  that passed the test condition [87,90,86]

console.log("----reduce Implementation----")
const totalMarks=marks.reduce((sum,mark,index,arr)=>{
    return sum=sum+mark;
},0)
console.log(totalMarks);// 488

console.log("----includes Implementation----")
let isMarks=marks.includes(80,2);//false includes(elementTobeSearched,indexfromWhereToStart)
 isMarks=marks.includes(80,0);//true
console.log(isMarks);

console.log("----some Implementation----")//it stops iteration when it found test condition true

var check=marks.some((mark)=>{
    return mark===80;
})
console.log(check);// true
console.log("----every Implementation----")// it checks condition for every elemnt of the array 

var check=marks.every((mark)=>{
    return mark>60;
})
console.log(check);// true


