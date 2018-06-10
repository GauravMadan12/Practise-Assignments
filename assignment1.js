// 1. Create Two variables with number values in them and display the result inside console. 
var a = 12
var b = 97
console.log("1. Var a: "+ a +" Var b: "+ b)
console.log("--------------------------------------------------------------")

//2. Create a function that accepts two parameters and returns the result after multiplying them. Also Display the result inside console.
function product(a,b)
{
    return a * b
}

console.log("2. Product of two no's is: " + product(5,5))
console.log("--------------------------------------------------------------")

//3. Create two string variables concatenate ( Add ) them and display the length of the result string. 
function concat(str1,str2)
{
    var str3 = str1 + str2
    console.log("3. Concatenated string is: "+ str3)
    console.log("   Length of string is: "+ str3.length)
}

concat("Gaurav","Madan")
console.log("--------------------------------------------------------------")

//Create a variable  var​ str = ​"Please locate where 'locate' occurs!"​; 
//Display(in console) the position of first occurrence of the   word “Where” and index of the last occurrence of “locate”.
var str = "Please locate where 'locate' occurs!"
console.log("4. Index of first occurence of 'where'is :" + str.indexOf("where"))
console.log("   Index of last occurence of 'locate'is :" + str.lastIndexOf("locate"))
console.log("--------------------------------------------------------------")

//5. var​ str = ​"Please locate where 'locate' occurs!"​;
//Extract the word “locate” from the above string.
var str = "Please locate where 'locate' occurs!"
console.log("5. Word 'locate' found at index: " + str.search("locate"))
console.log("   Required word from string is: " + str.slice(7,13) )
console.log("--------------------------------------------------------------")

//6. str = ​"Please visit Microsoft!"​; 
//Replace the word “Microsoft” with google and console the result 
var str = "Please visit Microsoft!"
console.log("6. Original string: "+ str)
console.log("   Modified string: "+ str.replace("Microsoft","Google"))
console.log("--------------------------------------------------------------")

//7. var​ text1 = ​"Hello World!"​;  
//Convert the variable to uppercase and lowercase and console the result. 
var text1 = "Hello World!"
console.log("7. Uppercase: " + text1.toUpperCase())
console.log("   Lowercase: " + text1.toLowerCase())
console.log("--------------------------------------------------------------")

//8. var​ text = ​"Hello!"​;
// Convert the above word to an array and console the result 
var text = "Hello!"
console.log("8. Array of given string is: " , text.split(""))
console.log("--------------------------------------------------------------")

//9. var​ fruits = [​"Banana"​, ​"Orange"​, ​"Apple"​, ​"Mango"​]; 
//For the above array :  
//- Add a new element. 
var fruits = ['Banana','Orange','Apple','Mango']
//console.log(fruits)
fruits.push("Grapes")
console.log("9. Adding element: ", fruits)
//- Remove any existing from the element. 
fruits.pop()
fruits.splice(1,1)
console.log("   Deleting element: " , fruits)
//- Check if any given variable is an array or not. 
console.log("   Type of: ",Array.isArray(fruits))
//- Change any specific element to another value. 
console.log("   Replacing elements: ", fruits.splice(1,2,"Pineapple","Watermelon"))
console.log(fruits)
//- Add new element to a specific location (not front or last). 
console.log("   Adding an element in middle: " , fruits.splice(2,0,"Apricot") )
console.log(fruits)
//- Convert the given array to a string. 
console.log("   Array to string form: " , fruits.join())
console.log("--------------------------------------------------------------")

//10.var​ x = ​9.656​;
//- Convert the above number to a string and console the result. 
//- Fix this number to two decimal places and console the result. 
var x = 9.656
console.log("10. Integer to string: " + x.toString()) 
console.log("    Two decimal places: " + x.toFixed(2))
console.log("--------------------------------------------------------------")

//11.var​ x = ​7.65 
//- Convert the value to a nearest integer and console the result.
//- Calculate the square root of above variable and console the result. 
var x = 7.65
console.log("11. Nearest Value: " + x.toPrecision(1))
console.log("    Square root of 7.65 is: "+ Math.sqrt(x))
console.log("--------------------------------------------------------------")

//12.Generate a random number between 0 to 9 and 0 to 99 then console the result. 
console.log("12. Random no's between 0-9 is:" + parseInt(Math.random()*10))
console.log("    Random no's between 0-99 is:" + parseInt(Math.random()*100))

//13..Sort this array  ​var​ points = [​40​, ​100​, ​1​, ​5​, ​25​, ​10​]; 
//And console the result. 
var points = [40,100,1,5,25,10]
console.log("13.  Sorted array is: " , points.sort(function(a,b){ return a-b}) )  