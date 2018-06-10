//1. Write a JavaScript function to convert a binary number to a decimal number. 
var x = (binary) => 
{
    return (parseInt(binary,2))    
}

console.log("1. Binary to decimal: ",x("1101000"))
console.log("_________________________________________________________________")

//2. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number
var y = (value,option) =>
{
     if(option == "binary")
     {
         return parseInt(value,10).toString(2)
     }   
     else if(option == "octal")
     {
         return parseInt(value,10).toString(8)
     }
     else if(option == "hexadecimal")
     {
         return parseInt(value,10).toString(16)
     }
}

console.log("2. Decimal to binary: ",y("12","binary"))
console.log("   Decimal to Octal: ",y("224","octal"))
console.log("   Decimal to Hexadecimal: ",y("2482","hexadecimal"))
console.log("_________________________________________________________________")

//3. Write a JavaScript function to generate a random integer.
var rdm = (a) => {

    return parseInt(Math.random()*a)
} 

console.log("3. Random number b/w 1-100 is : ", rdm(100))
console.log("_________________________________________________________________")

//4.  Write a JavaScript function to format a number up to specified decimal places. 
var format = (val,b) => {
    return val.toFixed(b)
}

console.log("4. Formatted number upto specified deciaml places: ",format(12.3454,3))
console.log("_________________________________________________________________")

//5.  Write a JavaScript function to find the highest value in an array.
var arr = [12,2,34,21,56,102,152,38,59]
var high = (arr) => {
    var order =  arr.sort(function (a,b) { return a-b })
    var len = order.length
    return order[len-1]
}
console.log("5. Array : [12,2,34,21,56,102,152,38,59] ") 
console.log("   Highest value in given array is: ",high(arr))
console.log("_________________________________________________________________")

//6. Write a JavaScript function to find the lowest value in an array.
var arry = [12,2,34,21,56,102,152,38,59]
var low = (arry) => {
    var lorder =  arry.sort(function (p,q) { return p-q })
    return lorder[0]
}
console.log("6. Array : [12,2,34,21,56,102,152,38,59] ") 
console.log("   Lowest value in given array is: ",low(arry))
console.log("_________________________________________________________________")

//7.  Write a JavaScript function to get the greatest common divisor (gcd) of two integers. 
var gcd = (a, b) => {
    if (a == 0)
        return b;
    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    return a;
}

console.log("7. Greatest common divisor of two no's(3,6) is: ",gcd(3,6))
console.log("_________________________________________________________________")

//8.  Write a JavaScript function to test if a number is a power of 2.
var pow = (value) =>
{
    if ((value & (value-1)) == 0 )
    {
        return true 
    }
    else
    {
        return false
    }
}

console.log("8. Given number(255) is a power of 2 (true/false):",pow(255))
console.log("_________________________________________________________________")

//9. Write a JavaScript function to round a number to a given decimal places.
var rnd = (num,dec) => {
    return Number(Math.round(num + 'e' + dec) + 'e-' + dec)  //**doubt
}

console.log("9. Rounding a number to given decimal places: ",rnd(2.63264,3))
console.log("_________________________________________________________________")

//10. Write a JavaScript function to hide email addresses to protect from unauthorized user. 
var hide = (str) =>
{
    var res = str.split('@')
    var first = res[0]
    var name = first.substring(0,first.length/2)
    var final = name + "....@" + res[1]
    return final
}

console.log("10. Hiding email id: ",hide("gaurav@mail.com"))
console.log("_________________________________________________________________")

//11.  Write a JavaScript function to capitalize the first letter of a string. 
var fletter = (letter) =>
{
    var fin = letter.charAt(0).toUpperCase() + letter.substring(1,letter.length)
    return fin
}
console.log("11. Sample string is 'gaurav'")
console.log("    String with first letter capitalized is: ",fletter("gaurav"))
console.log("_________________________________________________________________")

//12.  Write a JavaScript program that accept two integers and display the larger. 
var num1 = 35
var num2 = 28
if( num1 > num2)
{
    console.log("12. Num1 that is ' "+ num1 + " 'is larger than Num2 ' "+ num2 + " '"  )
}
else
{
    console.log("12. Num2 that is ' "+ num2 + "'is larger than Num1' "+ num1 + " '"  )
}
console.log("_________________________________________________________________")

//13.  Write a JavaScript program which compute, the average marks of the following students .
//Then, this average is used to determine the corresponding grade. 
var stud = [["David",80],["Vinoth",77],["Divya",88],["Ishitha",95],["Thomas",68]]
var mks = 0
for(var i in stud)
{
    mks += stud[i][1]
}
var avg = mks/stud.length
console.log("13. Average marks: ",avg)
if(avg < 100 &&  avg > 90)
{
    console.log("     A Grade      ")
}
else if(avg < 90 &&  avg > 80)
{
    console.log("     B Grade      ")
}
else if(avg < 80 &&  avg > 70)
{
    console.log("     C Grade       ")
}
else if(avg < 70 &&  avg > 60)
{
    console.log("     D Grade       ")
}
else if(avg < 60)
{
    console.log("     F Grade        ")
}
console.log("_________________________________________________________________")

//14. Write a JavaScript program to construct the following pattern, using a nested for loop.
var star = ' ' ;
console.log("14. Required pattern output : ")
for(var j = 1; j <=5 ; j++)
{
    for(var p = 1; p <= j; p++)
    {
        star = star + ("*");
    }
    console.log(star);
    star = ' ';   // this is required to set the star again to empty string 
}
console.log("_________________________________________________________________")

//15. Write a JavaScript function that generates all combinations of a string.
var demo = "abc"       
console.log("15. Sample string passed is",demo)
var combo = (demo) =>{          //**doubt
    var arr1 = []               //This function is working well for string for length 3
    var arr2 = []
for(var i = 0; i<demo.length; i++)
{
    arr1.push(demo[i])
}
console.log(arr1.join())
for(var p = 0; p<arr1.length; p++)
{
    for(var q = 1 ; q < arr1.length ; q++)
    {
        if(p==q)
        {
            continue
        }
        else
        {
            arr2.push(arr1[p]+arr1[q])
        }
        
    }
}
console.log(arr2.join())
for(var x = 0; x<arr1.length ; x++ )
{
    for(var y = 0;y<arr2.length; y++ )
    {
        
            console.log(arr1[x] + arr2[y])
    }
}
}
//Function call
combo(demo)
console.log("_________________________________________________________________")