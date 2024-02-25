// **** Q1: Check Palindrome for a Number ****
// Input: 121 -> Output: true
// Input: 10 -> Output: false

function palindrome(x){

    if(x<0) return false
    return x === +x.toString().split("").reverse().join("")

// return x<0? false: x === +x.toString().split("").reverse().join("")
}
console.log(palindrome(767))

// a) Converting it to String first, coz many in-build can be apply on Strings only
// b) For="121", split("2") means output~["1","1"]
//    It means it will remove that particular element and arrange rest all in array, here ["1","2","1"]
// c) Reverse ["1","2","1"] ~ ["1","2","1"]
// d) for=["1","2","1"], join(".") means output~["1.2.1"], it will join it with given character/string/number
// e) Adding + in front will convert that "string to int" again


// **** Q2: Fibonaci number: 0,1,1,2,3,5,8,13.. ****
// F(n) = F(n-1) + F(n-2)
// F(4) = 3

function Fib(n){
    const arry = [0,1]
    for (let i=2; i<=n; i++){  //because already index 0 and 1 is defined in array. So starting with index 2!!
        arry.push(arry[i-1] + arry[i-2])
    }
    console.log(arry[n]);
}
Fib(8)

//When doing in Leet Code or any other platforms!
function Fib(n){
    const arry = [0,1]
    for (let i=2; i<=n; i++){  //because already index 0 and 1 is defined in array. So starting with index 2!!
        arry.push(arry[i-1] + arry[i-2])
    }
    return(arry[n])
}

// 2nd Method: By Recursion
function Fib(n){
    if(n<=1) return n;
    return Fib(n-1) + Fib(n-2);
}
console.log(Fib(4))
// Fib(4) = Fib(2) + Fib(1), it will call again Fib(2) and Fib(1) for anss
// Fib(2) = Fib(1) + Fib(0), Fib(2) = 0+1

// 3rd Method
function Fib(n){
    return n<=1? n : Fib(n-1)+Fib(n-2)
}
console.log(Fib(8))


// **** Q3: Check Anangram: Check Word is made by rearranging of different Word ****
// anagram -> nagaram,  Output: True
// cat -> rat, Output: False

function check(s,t){
    s = s.split("").sort().join("")  
    t = t.split("").sort().join("")
    return s===t
 // return s.split("").sort().join("") === t.split("").sort().join("")
}
console.log(check("sj","si"))

// anagram split("") -> ["a","n","a","g","r","a","m"] "Spliting it by empty Char"
// sort() -> ["a","a","a","g","m","n","r"]
// join("") -> "aaagmnr" "joining it by empty string/char/num"