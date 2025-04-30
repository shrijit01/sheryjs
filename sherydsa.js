// ******************************************************
//                        APR/29/25   LEC 11 REC
// ******************************************************
// GCD | HCF 
/*
let n1 = 32,n2 = 20;
// let n1 = 52,n2 = 10;
let res = gcdFun(n1,n2);
console.log(res);


function gcdFun(n1,n2){
    let gcd = 0;
    for(let i = 1 ; i <= Math.min(n1,n2); i++){
        if(n1%i == 0 && n2 %i == 0){
            gcd = i;
        }
    }
    return gcd;
}
*/

/*
// optimal 
function gcdFun(a,b){
    while(a > 0 && b > 0){
        if(a > b ) a = a % b;
        else b = b %a;
    }
    if(a == 0) return b;
    else return a;
}
    TC :- log(max(a,b));
*/

//recursive minus approch
/*
let n1 = 32,n2 = 20;
// let n1 = 52,n2 = 10;
let res = gcdRec(n1,n2);
console.log(res);

function gcdRec(a,b){
    if(a ==  b) return a;
    if(a > b) return gcdRec(a-b,b);
    return gcdRec(b,b-a);
}
*/

// recursive Main 
/*
function gcdRec(params) {
    if(b == 0) return a;
    return gcdRec(b,a%b);
}
    TC :- log(max(a,b));
*/

// FACTORS OF NUMBER OPTIMAL 
// i <= Math.sqrt(n); is same as i*i <= n 


// count of Primes  brute force seve of ethroseries 42
let n = 30;
let arr = new Array(n+1).fill(true) 

for(let i = 2;i<= Math.floor(Math.sqrt(n));i++){
    if(arr[i]){
        for(let j = i*i ; j <= n; j += i){
            arr[j] = false;
        }
    }
}

for(let i = 2;i< arr.length;i++){
    if(arr[i]) process.stdout.write(i + " ");
}

// TC :- 0(log(log(n)));
// sc :- 0(1)
 
// ******************************************************
//                        APR/26/25   LEC 10 REC
// ******************************************************
// Stack memory - LIFO
// Operations - push , pop ,Peak 26.16 
// print 1 to n 
// print n to 1 
// print usung back tracking 
// print sum 
// factorial of n number 
//Nth Fibonacchi Number V1
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
/*
let n = 7;
let res = fib(n);
console.log(res)
function fib(n) {
    if(n <= 1) return n;
    let last = fib(n-1);
    let slast = fib(n-2) 
    return last + slast;
}
*/

/*
// sum of nth fib numbers  
let n2 = 7;
let fibres = sumOfnFib(n2);
console.log(fibres);

function sumOfnFib(n){
    if(n <= 1) return n;
    return sumOfnFib(n-1) + sumOfnFib(n-2);
}
*/


// ******************************************************
//                        APR/24|25/25   LEC 9 25 min Selection sort
// ******************************************************
//Q2  - SELECTION Sort
// in the first rotation of j small elem will bw in LEFT
/* 
let arr  = [10,5,1,12,9];
let n = arr.length;
for(let i = 0; i < n-1; i++){
    let minIndex = i;//2
    for(let j = i+1;j < n;j++){
        if(arr[minIndex] > arr[j]) minIndex = j;
    }
    if(minIndex != i){
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}
// TC :-  o(n2);
// SC :- o(n)
console.log(arr)
*/

// DRY RUN  Phase 1 for i = 0
// [10,5,1,12,9];//minIndex = i = 2
//  i         j
// [1,5,10,12,9];

// DRY RUN  Phase 2 for i = 1
// [1,5,10,12,9];//minIndex = i = 1 = 5
//     i      j
// [1,5,10,12,9]

// DRY RUN  Phase 3 for i = 2
// [1,5,10,12,9] //minIndex = i = 2 = 10
//       i    j
// [1,5,9,12,10]

// DRY RUN  Phase 4 for i = 3
//  [1,5,9,12,10] //minIndex = i = 4 = 10
//          i  j
// [1,5,9,10,12]
// Completed

/*
// APR/26/25
// Q3 Insertion sort  
let arr = [10,5,1,12,9];
let n = arr.length;

for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i-1;
    while(j>=0 && arr[j] > key){
        arr[j+1]  = arr[j];
        j--;
    }    
    arr[j+1] = key;
}
// TC :-  o(n2);
// SC :- o(n)
console.log(arr);
*/

// DRY RUN PHASE 1 
// [10,|5,1,12,9] key = 5 / j = 10
//   j  i
// [10,|10,1,12,9]
//j j+1   i
// [5,|10,1,12,9] key filled in j+1 place

// DRY RUN PHASE 2
// [5,10,| 1,12,9] key = 1 / j = 10
//     j   i
//   [5,10,|10,12,9]
//    j      i
//   [5,5,|10,12,9]
//  j   j+1     i
//   [1,5,10,|12,9]
// j j+1     i

// DRY RUN PHASE 3
//  [1,5,10,|12,9] key = 12 / j = 10
//        j  i


// DRY RUN PHASE 4
//  [1,5,10,12,|9] key = 9 / j = 12
//          j   i
// [1,5,10,12,|12]
//       j      i
// [1,5,9,10,|12]
//    j j+1       i

// ******************************************************
//                        APR/23/25 START LEC 9 start 5 min
// ******************************************************
//Q1  buble sort me first rotation me max elem ko right end me lana hota hai 
// algo :- if bubble is greater than right one swap else bubble ko handover krenge 

/*
// Q1 Bubble SORT 
let arr = [48,25,36,12,1];
let n = arr.length; //5
//       0/1/2/3     3 < 5-1 = 4
for (let i = 0; i < n-1; i++) {
     // 0 /1      1<5-1-3 = 1
    for(let j = 0;j<n-1-i;j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }    
}

// TC :-  o(n2);
// SC :- o(n)

// after phase 1  first iteration 
// [25,48,36,12,1];
// [25,36,48,12,1];
// [25,36,12,48,1];
// [25,36,12,1,48];

// after phase 2  first iteration 
// [25,36,12,1,48];
// [25,12,36,1,48];
// [25,12,1,36,48];

// after phase 3  first iteration 
// [25,12,1,36,48];
// [12,25,1,36,48];
// [12,1,25,36,48];

// after phase 4  first iteration 
// [1,12,25,36,48];

console.log(arr)

*/




// ******************************************************
//                        APR/22/25 START LEC 9 start
// ******************************************************
// watch till 4 min 

// ******************************************************
//                        APR/13/25 START LEC 8 complete
// ******************************************************
/*
* 
* * 
* * * 
* * * * 
* * * * *
let prompt = require("prompt-sync")();
let num = Number(prompt("Enter Number -> "));

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")        
    }
    console.log();
}
*/
/*
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 

let prompt = require("prompt-sync")();
let num = Number(prompt("Enter Number -> "));

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j+ " ") ;       
    }    
    console.log();
}
*/
/*
A 
A B
A B C
A B C D
A B C D E

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter Number -> "));

for (let i = 1; i <= n; i++) {
    let ascii = 65;
    for (let j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(ascii) + " ");  
        ascii++;     
    }
    console.log()
}
*/


/*
* * * * * 
* * * * 
* * * 
* * 
*

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter Number -> "));

for (let i = 1; i <= n; i++) {
    for (let j = 1; j<= n-i+1; j++) {
        process.stdout.write("* ") ;       
    }
    console.log();
}

for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
        process.stdout.write("* ") ;       
    }
    console.log();
}
*/

/*
        * 
      * * 
    * * * 
  * * * * 
* * * * *

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter Number -> "));

for(let i = 1;i <= n; i++){
    for(let j = 1;j <= n-i ; j++){
        process.stdout.write("  ");       
    }
    for(let k = 1;k <= i; k++){
        process.stdout.write("* ");       
    }
    console.log();
}
*/

/*

// pyramid 
    * 
   * *
  * * *
 * * * *
* * * * *

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter Number -> "));

for(let i =  1 ; i <= n; i++){
    for(let j = 1 ; j <= n-i;j++){
        process.stdout.write(" ");       
    }
    for(let k = 1;k <= i; k++){
        process.stdout.write("* ");       
    }
    console.log();
}
*/

/*
*    * 
 *  *  
  *   
 *  *  
*    * 

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter Number -> "));

for(let i = 1 ; i <= n ; i++){
    for(let j = 1 ; j <= n;j++){
        if(i == j || i + j == n+1 ){
            process.stdout.write("* ");       
        }
        else process.stdout.write(" ");       
    }
    console.log()
}

*/

/*
*               * 
  *           *   
    *       *     
      *   *       
        *

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter Number -> "));


for(let i = 1; i <= n; i++){
    for(let j = 1 ; j <=  2*n-1; j++){
        if(i == j || i+j == 2*n){
            process.stdout.write("* ");       
        }
        else  process.stdout.write("  ");       
    }
    console.log()
}
*/



// ******************************************************
//                        APR/12/25 START LEC 7 31 min
// ******************************************************
// TC ,TLE 
// VIdeo 7 done 
// Video 8 started pattern programming 

// let prompt = require("prompt-sync")();
// let a = prompt("Enter Number -> ");
// process.stdout.write(a);
// 9 :27


// ******************************************************
//                        APR/10/25 START LEC 7 8min
// ******************************************************
// Binary Search - O log n
// till 30 min 

// ******************************************************
//                        APR/09/25 START LEC 7
// ******************************************************
// 7min 52 sec 


// ******************************************************
//                        APR/08/25 START LEC 7
// ******************************************************
// time complexity 

// ******************************************************
//                        APR/05/25 START from 1hr
// ******************************************************
// Q1 Merge sorted array  ******************
// let arr1 = [1,3,5];
// let arr2 = [2,4,6];

// let merge = new Array(arr1.length + arr2.length);
// let i = j = k = 0;

// while(i < arr1.length && j < arr2.length){
//     if(arr1[i] < arr2[j]){
//         merge[k] = arr1[i];
//         i++;
//         k++;
//     }else{
//         merge[k] = arr2[j];
//         j++;
//         k++;
//     }
// }

// while(i<arr1.length){
//     merge[k] = arri[i]
//     i++;
//     k++;
// }

// while(j<arr2.length){
//     merge[k] = arr2[j]
//     j++;
//     k++;
// }

// console.log(merge)
// Q2 Best time to buy and sell stocks OPTIMIZED *************
// let arr = [7,1,5,3,6,4];
// //                   i
// let maxprofit = 0;//5
// let min = arr[0];//1

// //i - 0-1-2-3-4-5
// for(let i = 0; i <arr.length; i++){
//     if(arr[i] < min) min = arr[i];
//     let profit = arr[i] - min;
//     maxprofit = Math.max(maxprofit,profit);
    
// }

// console.log(min)
// console.log(`Max Profit is ${maxprofit}`)

// Q3 Sort the color  start at 3:17 pm  LEETCODE*************
// 1.20H video time
// let arr = [2,0,2,1,1,0];
// let i = 0,j=0,k=arr.length-1;
// while (i<= k) {
//     if(arr[i] == 0){
//         let temp = arr[i];
//         arr[i]= arr[j];
//         arr[j] = temp;
//         i++;
//         j++;
//     }else if(arr[i] == 2){
//         let temp = arr[i];
//         arr[i]= arr[k];
//         arr[k] = temp;
//         k--;
//     }else{
//         i++;
//     }
// }
// console.log(arr)
// Q4 Maximum sub array (kadanes algo**********
// let nums = [-2,1,-3,4,-1,2,1,-5,4];
// let max = -Infinity;
// let sum = 0;
// for(let i = 0; i < nums.length;i++){
//     sum += nums[i];
//     max = Math.max(sum,max);
//     if(sum < 0) sum = 0;
// }
// console.log(max)
// console.log(sum)


// Q5 Majority elem Moore's voting algo OPTIMIZED IN LEETCODE**************
// let arr = [2,2,1,1,1,2,2];
// let ans = arr[0]
// let count = 1;
// for(let i = 1; i < arr.length;i++){
//     if(count == 0){
//         ans = arr[i];
//         count = 1;
//     }else if (arr[i] == ans){
//         count++;
//     }else{
//         count--;
//     }
// }
// console.log(ans)
// Q6 traping rain water Leetcode***************
// let arr = [ 4,2,0,3,2,5]
// let left = new Array(arr.length);
// let right = new Array(arr.length);

// let maxLeft = arr[0],maxRight = arr[arr.length-1];

// left[0] = maxLeft,right[right.length-1] = maxRight;

// for(let i = 1; i < arr.length;i++){
//     maxLeft = Math.max(arr[i],maxLeft);
//     left[i] = maxLeft;
// }

// for(let i = arr.length-2;i >= 0;i--){
//     maxRight = Math.max(arr[i],maxRight);
//     right[i] = maxRight;
// }

// let ans = 0;
// for(let i = 0 ; i < arr.length;i++){
//     ans += Math.min(left[i],right[i]) - arr[i];
// }

// console.log(ans)
// Video 8 completed at 5:51 Date 5/4/25


// ------------------------------------------------------

// ******************************************************
//                        APR/02/25 START from 48 min
// ******************************************************
/* Q1 Right rotation of array optimized */

// let arr = [1,2,3,4,5];
// // [5,4,3,2,1]
// //[4,5,1,2,3]

// let k = Number(prompt("Enter k DIgit"));

// k = k%arr.length;

// reverse(0,arr.length-1);
// reverse(0,k-1);
// reverse(k,arr.length-1);
// console.log(arr)

// function reverse(i,j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++;
//         j--;
//     }
// }


// Q2 remove duplicates from sorted array 

// let arr = [0,0,1,1,2,3,3,4];
// let j = 1;
// console.log(arr)
// for(let i =0; i <arr.length-1;i++){
//     if(arr[i] != arr[i+1]){
//         arr[j] = arr[i+1];
//         j++;
//     }
// }
// console.log(arr)

//1:00:00 min 

// ******************************************************
//                        APR/01/25 START from 30 min
// ******************************************************
/*Q3 Left and right Rotation By k Element BRUTE FORCE  -- PDQ*/ 
/* 
let arr = [1,2,3,4,5];

let k = 7;
k = k%arr.length;
let count = 0; 
for(let j = 0 ; j <k; j++){
    count++;
    let copy = arr[0];
    for(let i = 0; i < arr.length -1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = copy;
}
console.log(arr)
console.log(count)
*/

/* Q1Left  Rotation By k Element Less-OPTIMIZED */
// let arr = [1,2,3,4,5];
// let temp = new Array(arr.length);

// let k = prompt("Enter number of K ELement");
// k = k % arr.length;

// for(let i = 0; i < arr.length;i++){
//     temp[i] = arr[(i+k)%arr.length];
//     // console.log(`temp[${i}]`,temp[i],arr[(i+k)%arr.length]);
// }
// console.log("Temp at the End ",temp);


/* Q2 RIght  Rotation By k Element LESS-OPTIMIZED */
// let arr = [1,2,3,4,5];
// let temp = new Array(arr.length);

// let k = prompt("Enter number of K ELement");
// k = k % arr.length;

// for(let i = 0; i < arr.length;i++){
//     temp[(i+k)%arr.length] = arr[i] 
//     // console.log(`temp[${i}]`,temp[i],arr[(i+k)%arr.length]);
// }
// console.log("Temp at the End ",temp);


/* Q3 USing reversal  FULL-OPTIMIZED*/
// let arr = [1,2,3,4,5];

// let k = Number(prompt("Enter k"));
// k = k%arr.length;

// reverse(0,k-1);
// reverse(k,arr.length-1);
// reverse(0,arr.length-1);
// console.log(arr)//[3, 4, 5, 1, 2]
// // rotateArray(arr,d);
// // function rotateArray(arr,d){
// //     let n = arr.length;
// //     d = d%n;
// //     reverse(arr,0,d-1);
// //     reverse(arr,d,n-1);
// //     reverse(arr,0,n-1);
// // }

// function reverse(i,j){
// while(i < j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }
// 48min right rotation 



// ******************************************************
//                        MAR/31/25 START
// ******************************************************
/********************ADVANCE  ARRAYS VIDEO 6 ****************/

/*Q1 Left Rotation By 1 Index */

/*
let arr = [1,2,3,4,5];
let copy= arr[0];

for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i+1];    
}
arr[arr.length-1] = copy;
console.log(arr);
*/

/*Q2 right Rotation By 1 Index */ 
/* 
let arr = [1,2,3,4,5];
//         5,1,2,3,4
let copy = arr[arr.length - 1];//5

for(let i = arr.length - 1; i > 0; i--){
    arr[i] = arr[i-1];
}
arr[0] = copy;
console.log(arr)
*/
                 

                    /***************************
                             STRING Video 5
                    ************************** */
// Q1 Print each character on new line*****
// let str = "sparsh";
// for(let i =  0 ; i < str.length; i++){
//     console.log(str.charAt(i)+"\n");
// } 

// Q2  print in reverse order ****************
// let str = "sparsh";//hsraps
// let rev = "";
// for(let i =  str.length - 1 ; 1 , i >= 0; i-- ){
//     rev += str.charAt(i);
// } 
// console.log(rev)

/* Q4 V1 palindrome string */ //brute force  
// let str = prompt("Enter palindrome String ")
// let rev = "";
// for(let i =  str.length - 1 ; 1 , i >= 0; i-- ){
//     rev += str.charAt(i);
// } 
// if(rev === str)console.log("Palindrome hai") 
// else console.log("not palindrome")

/* **Q4 V2***************OPTIMIZED******************* */ 
// No extra space 
// let str ="madam";
// let i = 0,j = str.length -1;
// let isPalindrome = true;
// while(i < j){
//     if(str.charAt(i) != str.charAt(j)){
//         isPalindrome = false;
//     }
//     i++;
//     j--;
// }
// if(isPalindrome) console.log("palindrome")
// else console.log("Not palindrome")

/* ******************Q5 toggle the string ********************** */
// let s = "csFuGEfgfqU"
// console.log(s)
// let toggle = "";
// for(let i = 0; i<s.length;i++){
//     let ch = s.charCodeAt(i);

//     if(ch >= 65 && ch <= 90){
//         toggle += String.fromCharCode(ch + 32);
//     }else if(ch >= 97 && ch <= 122){
//         toggle += String.fromCharCode(ch - 32);
//     }
// }
// console.log(toggle)

/* ******************Q6 Frequency of Each Character ********************** */
// let str = prompt("Enter string to get Frequency")
// let arr = new Array(128).fill(0);

// for(let i = 0 ; i < str.length ; i++){
//     let index = str.charCodeAt(i);
//     arr[index] = arr[index] + 1;
// }

// for(let i  = 0; i < arr.length ; i++){
//     if(arr[i]>0){
//         console.log(String.fromCharCode(i) + " hjgdgjdsgjdkappears " +arr[i]+" times");
//     }
// }


// ----------------------------------------------------


/* *******************************************************
// ***********String methods and function ***************
******************************************************* */
// let s = "sparsh";
// shallow copy ----------------------
/*
console.log("Length of String ->", s.length); //length is propertie
console.log("slice of String ->", s.slice(0, 2)); //2nd param should be excluding  it can also give negative indexing
console.log("substring of String ->", s.substring(0, 5)); //second number is inclusing
console.log("substring of String ->", s.substring(0)); //if one param then give till last
console.log(s.toUpperCase()); // Uper case string
console.log("Concat of String ->", s.concat(" sp")); //concat the string
console.log("trim of String ->", s.trim());
console.log("index of String ->", s.indexOf("pa")); //find the character and more than a char
console.log("Last index of String ->", s.lastIndexOf("s"));
console.log(s.includes("sp")); //string exist or not
console.log(s.startsWith('spa'))//check the string starte with  this  charater or not 
console.log(s.endsWith("sh"))
console.log(s.replace("sp","spppp"))
console.log(s.replaceAll("sparsh","spppp"))
console.log(s.split(""));// it breaks a string into indivisual character
console.log(s.charAt(4))
console.log(s.charCodeAt(4))
*/



// ---------------------------------------------------

// Q3 0s in left and 1's in right *****
// j will be move when value swap and i will move when 0 then swap and go aage if i then move
// let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0];
// let  i = 0,j = 0;
// while(i < arr.length ){
//     if(arr[i] == 0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
//     i++;
// }
// console.log(arr)

//Q1 Reverse the array with space using extra space arr **************
// 48min

// let arr = [10,20,30,40,50];

// let temp = new Array(arr.length);

// let j = 0;
// for(let i = arr.length -1 ; i >= 0; i--){
//     temp[j] = arr[i];
//     j++;
// }

// console.log(arr)
// console.log(temp)

// Q1 v2  reverse array by swapping  elem **************
// console.log('====================================');
// console.log("2 Pointer ALGO ");
// console.log('====================================');
//         50 40 30 20 10
// let arr = [10,20,30,40,50];
// //               ij
// //i - 50  - 40
// //j - 10  - 20
// //k - 50 - 40
// let i = 0,j = arr.length - 1;

// while(i < j){
//     let temp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = temp;
//     i++;
//     j--;
// }
// console.log(arr)

// -----------------------------------------------------

// MAR/30/25 **************************

//Q3 Min elem in Array**
// let minArr = [99,2,100,21];

// let min = minArr[0];

// for(let  i = 1; i < minArr.length; i++){
//     if(minArr[i] <  min){
//         min = minArr[i];
//     }
// }
// console.log(min);

// --------------------------------------

//Q2 Find 2nd Max in array **
// let arr = [99,2,100,21];
// // let arr = [10,30,40,40,40,40];
// let max = Math.max(arr[0],arr[1]);
// let sMax = Math.min(arr[0],arr[1]);

// for(let i = 2; i < arr.length ; i++){
//     if(arr[i] > max){
//         sMax = max;
//         max = arr[i];
//     }else if(arr[i] > sMax && max != arr[i]){
//         sMax = arr[i];
//     }
// }
// console.log(sMax)

// ------------------------------------

//Q1 Max elem in Array
// let arr = [99,0,100,21];

// let max = arr[0];

// for(let  i = 1; i < arr.length; i++){
//     if(arr[i]> max){
//         max = arr[i];
//     }
// }

// console.log(max);
// ----------------------------------

// MAR/26/25 **************************

/*
 ARrays is the linear data structure 
 store mul value in continues manner 
 
*/

// Dynamic array by user ------

// let arr = new Array(5);

// for(let  i = 0 ;  i< arr.length;i++){
//     arr[i] = Number(prompt(`Enter ${i}th index value `))
// }
// console.log(arr)

// Q1  SUm of the n Arr elem --------------------
// let arr = new Array(5);

// let sum = 0;
// for(let  i = 0 ;  i< arr.length;i++){
//     arr[i] = Number(prompt(`Enter ${i}th index value `))
//     sum += arr[i];
// }
// console.log(arr,sum)
// 31 min

// ----------------------------------------------

// assign value based on index in js  for best practice
//Mastering Arrays------------------------
// Array - [] collection  of mul values in js only
// let arr = [];
// arr.push(1);
// arr.push(100);//add to the arr

// console.log(arr[1])
// next day -------------------
// var arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// // arr.pop();
// arr[7] = 5;
// console.log(arr)

// -----------------------------
// let arr = new Array(3);
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;

// arr[3] = 40;
// arr[10] = 400;
// console.log(arr)

// let arr = new Array(3);
// arr.push(10);
// console.log(arr); //it will print 3 index empty and in 4th pos this will be in 4th index

// ----------------------------------------------

// MAR/25/25 **************************
// Q1 Break  and continue
// break loop ko rokta hai---------------------
// for(var i = 1; i < 23;i++){
//     if(i == 11) break;
//     else console.log(i)
// }

// continue loop ko current iteration ko skip kar deta hai
// for(var i = 1; i < 23;i++){
//     if(i == 11) continue;
//     else console.log(i)
// }

// Q3  While loop Jab tak--------------
// var i = 1 ;
// while(i <10){
//     console.log(i)
//     i++;
// }

// var ans = prompt("exit for close ");
// while(ans != "exit"){
//     ans = prompt("exit for close ");
// }

// -----------------------------------------
// Q4 SOme of digit using while
// var pr = prompt("Kaha tak add karwaoge ?");
// if (pr === null) {
//   console.log("Cancelled Program");
// } else {
//   let ans = Number(pr);

//   if (isNaN(ans)) {
//     console.log("Invalid input");
//   } else {
//     if (ans > 0) {
//         var sum = 0;
//         while(ans > 0){
//             var rem = ans % 10;
//             sum += rem;
//             ans = Math.floor(ans/10);
//         }
//         console.log(sum)
//     } else {
//       console.log("Should be +ve more than Zero");
//     }
//   }
// }

// Q5 reverse the digit using while  -------------------
// var pr = prompt("number do reverse krne k liye ?");
// if (pr === null) {
//   console.log("Cancelled Program");
// } else {
//   let ans = Number(pr);

//   if (isNaN(ans)) {
//     console.log("Invalid input");
//   } else {
//     if (ans > 0) {
//         var rev = 0;
//         while(ans > 0){
//             var rem = ans %10;
//             rev =  rev*10 + rem;
//             ans = Math.floor(ans/10);
//         }
//         console.log(rev)
//     } else {
//       console.log("Should be +ve more than Zero");
//     }
//   }
// }

// Q6 Strong number--------------------------
// sum of the factorial of its digit is equal to number itself
// var pr = prompt("number do ");
// if (pr === null) {
//   console.log("Cancelled Program");
// } else {
//   let ans = Number(pr);

//   if (isNaN(ans)) {
//     console.log("Invalid input");
//   } else {
//     if (ans > 0) {
//       var sum = 0;
//       var copy = ans;
//       while (ans > 0) {
//         var rem = ans % 10;
//         var fact = 1;
//         for (var i = 1; i <= rem; i++) {
//           fact *= i;
//         }
//         sum  += fact ;
//         ans = Math.floor(ans / 10);
//       }
//       if(copy == sum)  console.log("Strong number")
//       else console.log("Not Strong")
//     } else {
//       console.log("Should be +ve more than Zero");
//     }
//   }
// }

// array practice for self --------------

// var arr = [1,2,3,4]
// // console.log(arr.length)
// for(let i = 0;  i < arr.length;i++){
//     console.log(arr[i])
// }

// Q7 do while -------------------
// 2 type  of loop
// entry controll  - for ,while
// exit control  - do while
// var i = 1
// do{
//     console.log("hello");
//     i++;
// }
// while(i < 10);

// Q8 repeat hello ----------------
// var i = prompt("Write exit to close")
// do{
//     i = prompt("Write exit to close");

// }
// while(i != "exit");

// Q9 Guess the number ---------------------
// let random = Math.floor(Math.random() * 100) + 1
// console.log(random);
// let guess = -1;
// while (guess !== random) {
//   guess = Number(prompt("Guess the NUmber"));
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     console.log("try again b/w 1-100");
//         continue
//   }
//   if (guess < random) {
//     console.log("too low , try again");
//   } else if (guess > random) {
//     console.log("too high , try again");
//   } else {
//     console.log(`Congrats 🎉🎊 Number was ${guess}`);
//   }
// }

// Complete LEcture 3 --------------**

// --------------------------------------------

// MAR/24/25 **************************
// 01:06:06---
// Q1------------- Sum of n natural number ----------------------------
// var pr = prompt("Kaha tak add karwaoge ?");
// if (pr === null) {
//   console.log("Cancelled Program");
// } else {
//   let ans = Number(pr);

//   if (isNaN(ans)) {
//     console.log("Invalid input");
//   } else {
//     if (ans > 0) {
//       var sum = 0;
//       for (let i = 1; i <= ans; i++) {
//         sum += i;
//       }
//       console.log(sum);
//     } else {
//       console.log("Should be +ve more than Zero");
//     }
//   }
// }

// Q2------------- Factorial  of n  number ----------------------------
// var pr = prompt("Kaha tak add karwaoge ?");
// if (pr === null) {
//   console.log("Cancelled Program");
// } else {
//   let ans = Number(pr);

//   if (isNaN(ans)) {
//     console.log("Invalid input");
//   } else {
//     if (ans > 0) {
//       var fact = 1;
//       for (let i = 1; i <= ans; i++) {
//         fact *= i;
//       }
//       console.log(fact);
//     } else {
//       console.log("Should be +ve more than Zero");
//     }
//   }
// }

// Q3 --------------------FActors of  Numbers -------------------
// kis kis se divide ho rha and 0 aa rha  **
// var pr = prompt("Kaha tak add karwaoge ?");
// if (pr === null) {
//   console.log("Cancelled Program");
// } else {
//   let ans = Number(pr);

//   if (isNaN(ans)) {
//     console.log("Invalid input");
//   } else {
//     if (ans > 0) {
//       for(var i = 1; i <= Math.floor(ans /2);i++){
//         if(ans%i === 0){
//             console.log(i);
//         }
//       }
//       console.log(ans);

//     } else {
//       console.log("Should be +ve more than Zero");
//     }
//   }
// }

// Q4 Prime Numbers ---------------------------
// khud se divide ho rha ho and 1 se **

// var pr = prompt("Kaha tak add karwaoge ?");
// if (pr === null) {
//   console.log("Cancelled Program");
// } else {
//   let ans = Number(pr);

//   if (isNaN(ans)) {
//     console.log("Invalid input");
//   } else {
//     if (ans > 0) {
//       console.log(isPrime(ans));
//     } else {
//       console.log("Should be +ve more than Zero");
//     }
//   }
// }

// function isPrime(ans){
//     if(ans  <= 1) return false;
//     if(ans == 2) return true;
//     if(ans %2 == 0) return false;

//     for(let i = 3 ; i <= Math.floor(Math.sqrt(ans)); i+= 2){
//         if(ans%i == 0)return false;
//     }
//     return true;
// }

// ------------------------------------------------

// EDGE  case in js loop ------------
// for(var i = 1; i <10;i++){
//     console.log("Hello")
// }
// console.log(i)//accessible because var
// --------------------------------

// Infinite loops ------------------
// for(var i =1;i <= 10;){//valid
//     console.log(i)
// }

// for(var i =1;;){//valid
//     console.log(i)
// }

// for(;;){//valid
//     console.log("Hello")
// }

// --------------------------------------

// MAR/23/25 **************************
// Loops  ----------------
// understanding ----
// for(start ; end; change ){
// }

// 1 - 22
// for (var i = 1; i < 23; i++) {
//   console.log(i);
// }

//200 - 100
// for(var i = 200; i > 99; i--){
//     console.log(i)
// }

// console.log("Outer i",i)//not accesible in let
// 18.09

// LOOPS end here --------------------------------
//22/MAR/25*******************************

// Q -3
// bijli bill Unit--------------------------------
// let unit = Number(prompt("Enter Electricity unit "));

// let unit = 123;
// console.log(`You have Entered ${unit}`);

// if (isNaN(unit)) {
//   console.log("Please Enter Right Number");
//   console.error("We Accept Only Number Input");
// } else {
//   let amount = 0;

//   if (unit > 400) {
//     amount = (unit - 400) * 13; //3900
//     unit = 400;
//   } //400

//   if (unit > 200 && unit <= 400) {
//     amount += (unit - 200) * 8; //1600
//     unit = 200;
//   } //200

//   if (unit > 100 && unit <= 200) {
//     amount += (unit - 100) * 6; //600
//     unit = 100;
//   }//100

//   amount += unit * 4;
//   console.log(`Your Billable Amount is ${amount}`);
// }
// bijli bill Unit END --------------------------

// Q4 *********************
// INR denomination  Start----------------------------
// MOD karoge tho jo bachega wo dega

// let amount = 5234;
// if(amount >= 500){
//     console.log("500 Notes :" + Math.floor(amount / 500));
//     amount = amount  %  500;
// }
// if(amount >= 200){
//     console.log("200 Notes :" + Math.floor(amount / 200));
//     amount = amount  %  200;
// }
// if(amount >= 100){
//     console.log("100 Notes :" + Math.floor(amount / 100));
//     amount = amount  %  100;
// }
// if(amount >= 50){
//     console.log("50 Notes :" + Math.floor(amount / 50));
//     amount = amount  %  50;
// }
// if(amount >= 20){
//     console.log("20 Notes :" + Math.floor(amount / 20));
//     amount = amount  %  20;
// }
// if(amount >= 10){
//     console.log("10 Notes :" + Math.floor(amount / 10));
//     amount = amount  %  10;
// }
// if(amount >= 5){
//     console.log("5 Notes :" + Math.floor(amount / 5));
//     amount = amount  %  5;
// }
// if(amount >= 2){
//     console.log("2 Notes :" + Math.floor(amount / 2));
//     amount = amount  %  2;
// }
// if(amount === 1){
//     console.log("1 Notes :" + amount / 1);
// }

// INR denomination  End----------------------------

//Ternery Operator Start----------------------------
// Q 5 -
// 12>13 ? console.log("Hey") : console.log("hi")
// console.log(12>13?"Hey":"Hi");
// Nested ternery ------------------------
// let num = 0;
// console.log(num > 0?"Positive ":num <0 ?"Negative":"Zero");
//Ternery Operator End----------------------------

//Switch Case --------------------------
// Case is used for exact match value and if is used for condition match
// let day = 1;
// // type 1
// switch (day) {
//   case 1:
//     console.log("Monday ");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid ");
// }
// Type 2  ----
//********** */ Fall through condition  if switch case not get break *********

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid ");
// }

// Condition inside switch -----------------------
// switch(true){
//     case 19>6:
//         console.log("Hello");
//     break;
//     case 16<6:
//         console.log("Hey");
//     break;
//     default :console.log("invalid");
// }

// precision ------------------
// let num = 0.2+0.3;

// switch(num){
//     case 0.4 :console.log("hello");
//     break
//     case 0.5 :console.log("Hey");
//     break
//     default:console.log("Namaste");
// }

// let num = 0.1+0.2;

// switch(num){
//     case 0.4 :console.log("hello");
//     break
//     case 0.5 :console.log("Hey");
//     break
//     default:console.log("Namaste"); //this will print namaste because of imprecision
// }

//Switch Case --------------------------

//21/MAR/25*******************************
// Video
//20/MAR/25*******************************
// Video

// 19/MAR/25*******************************
// Video 2
// Q 2 **********
// NaN === NaN //False
// isNaN(NaN) //True

// console.log(NaN === NaN)//False
// console.log(isNaN(NaN))//true

// shop discount ********************
// (discount percentage *amount) /100 ;DISCOUNT FORMULA

// let amount = Number(prompt("Enter Amount"));
// if(amount > 0 && amount <= 5000){
//     console.log(amount);
// or
// dis = 0;
// }
// else if(amount > 5000 && amount <= 7000){
//     console.log(amount - Math.floor((5*amount)/100));
// or
// dis = 5;
// }
// else if(amount > 7000 && amount <= 9000){
//     console.log(amount - Math.floor((10*amount)/100));
// or
// dis = 10;
// }
// else if(amount > 9000){
//     console.log(amount - Math.floor((20*amount)/100));
// or
// dis = 20;
// }else {
//     console.log("wrong input")
// }

// console.log(amount - Math.floor((20*amount)/100));
// 26:40 min

// 18/MAR/25*******************************
// Watched video

// 17/MAR/25*******************************
// Watched video
// 16/MAR/25*******************************
// Video 2 *************************
// Q1 **********
// var age = Number(prompt("what is your age ?"));
// if(isNaN(age) ) {
//     console.error("Wrong input")
// }

// if(age >= 18){
//     console.log("Valid Voter");
// }else{
//     console.log("InValid Voter");
// }

// if(112>13){
//     console.log("Big")
// }else{
//     console.log("Small")
// }

// 15/MAR/25*******************************

// Practice Math Questions **********************
// area n parameter of rexct *********
// let a = 5;
// let b = 7 ;
// let param = 2*(a+b)
// console.log(a*b)
// console.log(param)
// area  of triangle  *********
// let a = 5;
// let b = 2;
// let c = 3;

// let s = (a+b+c)/2
// console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))

// circumfrence  of circle **********
// let r = 12;
// console.log(Number((2*Math.PI*r).toFixed(2)))

// Math Functions ***************
// console.log(Math.round(10.3));
// console.log(Math.round(10.5));

// console.log(Math.ceil(10.1))
// console.log(Math.floor(10.9))
// console.log(Math.trunc(10.9))
// console.log(Math.pow(2,5))
// console.log(Math.sqrt(14))
// console.log(Math.cbrt(9))
// console.log(Math.abs(-50))
// console.log(Math.max(1,5))
// console.log(Math.min(1,5))
// console.log(Math.floor((Math.random()*9000)+1000));
// // toFixed
// let a = 89.09835;
// console.log(a.toFixed(3))

// practice question  ********************
// 1**********
// let i = 11;
// i = i++ + ++i;
// console.log(i)
//2*************
// let a = 11 ,b = 12;//14
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log(a)//13
// console.log(b)//14
// console.log(c)//73
//3************
// let b = true;//true rep as 1 and false as 0
// b++;
// console.log(b)
// 4**************
// let a = 11++;
// console.log(a); //dsa.js:18 Uncaught SyntaxError: Invalid left-hand side expression in postfix operation (at dsa.js:18:9)

// let a = 10;
// let b = ++(a++);
// console.log(b) ////dsa.js:18 Uncaught SyntaxError: Invalid left-hand side expression in postfix operation (at dsa.js:18:9)

// unary operator ++increment --decrement  *****************
// increment
// let a = 10;
// let b = a++ ;
// console.log(a)
// console.log(b)

//Decrement
// let c = 10;
// let d = c-- ;
// console.log(c)
// console.log(d)

//Logical operator && || and / Or
// console.log(12 >= 12 && 3 > 1) // if first false the it will always give false
// console.log(12 == "12" && 3 > 1)
// console.log(12 > 12 ||  3 > 1) //only one is true then it will give true if first is true then never go for second

// Relational operator  > < >= <= == != !==  always give ans in true or false*******************
// console.log(10>5)
// console.log(10<5)
// console.log(10>=10)
// console.log(10!=10)
// console.log(10!==10)
// let a = 12 ; //assignment operator
// console.log(10==10)  //compare only value
// console.log(10=="10")  //compare only value
// console.log(10===10)  //compare both type and value

// Arithmatic Operator  ******
// let a = 12 ;
// let b = 22;

// console.log(12/5);//for decimal
// console.log(Math.floor(12/5)); //for

// mod**********  me answer niche wala milta hai ya last wala

// console.log(7%2) //bhagfal deta hai
// console.log(7/2) //seshfal deta hai
// console.log(2%7) //devidend/diviser if left one small then output left one
// console.log(Math.floor(2/7)) // it will give ans in zero so use math .floor to get full purna sankhya

// console.log(Math.floor(4568/10))

// 10/MAR/25*************************************
// 40:19s

// 06/MAR/25*************************
// swap 2 var using 3 method ***********

// Method 2  **************
// let a = 10;
// let b = 20;

// a = a+b;
// b = a-b;
// a = a - b;
// console.log(a,b)

// Method 1 Extra var ***************
// let a = 10;
// let b = 20;
// let c ;

// console.log(a,b,c)
// c = a;
// a = b;
// b = c;
// console.log(a,b,c)
// ***************************************

// take user input type casting  ************
// let age = prompt("Enter Age");
// 2nd input type ****************
// let age = Number(prompt("Enter Age"));
// age = Number(age)
// console.log(typeof age)//return string

// type coercion ***********************

// console.log("1"+1)
// console.log("1"-1)
// console.log("2"*1)
// console.log("8"%2)

//Template String***********************
// let a = 10;
// let b = 20;
// console.log( "sum of 10 and 20 is" + a+b);
// console.log( a+b+" is sum of 10 and 20");

// Concatination of String***************
// console.log(("10"+1));

// SUM of TWO Integer
