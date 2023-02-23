

// function reverseString(a){
//     let newString=""
//     for(let i=a.length-1;i>=0;i--)
//     {
//     newString= newString.concat(a[i])
    
//     }
//     console.log(newString)
// }

// reverseString('noraiz')

let reverseString = (arr) => [...arr].reduce((a, b)=> { return b.concat(a)})


console.log(reverseString('noraiz'))