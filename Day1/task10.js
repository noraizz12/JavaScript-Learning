isPalindrome=(str)=>{a= [...str].reduce((a, b)=> { return b.concat(a)})

if(str===a)
{
    return true;
}
else return false

}


console.log(isPalindrome('did'))