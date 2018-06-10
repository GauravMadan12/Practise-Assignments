console.log("***********************  REGULAR EXPRESSION  **************************");
//1 ​Test the first character of a string is uppercase or not. 
// var str = "gaurav"
// var result = str.toLowerCase()
// if(str.charAt(0) == result.charAt(0))
// {
//     console.log("First character is not Uppercase.")
// }
// else
// {
//     console.log("First character is Uppercase.")
// }
var rex = /^[A-Z]/;
var str = "Gaurav";
if (rex.test(str)) 
{
    console.log("1. First letter of string is Uppercase");
}
else
 {
    console.log("1. First letter of string is Lowercase");
}
console.log("___________________________________________________________");

//2 Write a Regex which accept only string values.( without any spaces )
var str = "This is a sample string.";
console.log(str);
var rex = /^\S+$/;
if (rex.test(str))
 {
    console.log("2. Format is correct");
}
else 
{
    console.log("2. Format is incorrect please remove spaces");
}
console.log("___________________________________________________________");

//.3 Write Regex which accept only numerical values. 
var rex = new RegExp(/^\d+$/);
function valid(str)
 {
    return rex.test(str);
}

console.log("3. Format true/false for'Gaurav12': " + valid("Gaurav12"));
console.log("   Format true/false for'1297': " + valid("1297"));
console.log("___________________________________________________________");

//.4 Write Regex which checks whether a given value is an valid url or not. 
var str = "https://github.com/GauravMadan12/GM-Productions";
console.log(str);
var rex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
if (rex.test(str)) 
{
    console.log("4. Valid URL");
}
else 
{
    console.log("4. Invalid URL");
}
console.log("___________________________________________________________");

//.5 Write Regex which checks  whether a given value is hex-color value or not. 
var str = "#FF0000"; //color code for Red color
console.log(str);
var rex = /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
if (rex.test(str))
 {
    console.log("5. Valid Hexadecimal color code");
}
else 
{
    console.log("5. Invalid Hexadecimal color code");
}
console.log("___________________________________________________________");

console.log("*************************  OBJECTS   **********************************");
//.6 Write a JavaScript program to delete the rollno property from the following object.
//Also print the object before or after deleting the property.
//Sample object: 
//  var student = {  
//                     name : "David Rayy",
//                     sclass : "VI",  
//                     rollno : 12 
//                  }; 
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log("6. Object before deletion of a property: ", student);
delete student.rollno;
console.log("   Object after deletion of a property: ", student);
console.log("___________________________________________________________");

//7 Write a JavaScript program to get the length of an JavaScript object.
//Sample object :  
//var student = {  name : "David Rayy",  sclass : "VI",  rollno : 12  }
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log("7. Length of given object is: " + Object.keys(student).length);
console.log("___________________________________________________________");
//8 Add a new method to an existing prototype.  
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
student.getname = function () {
    return this.name;
};
console.log(student);
console.log("8. Calling method newly added to object: " + student.getname());
console.log("___________________________________________________________");

console.log("*************************  ARRAYS  **********************************");
//9 Create a function which finds and return the second largest number in an array. 
var sdata = [12,34,24,16,78,93]       //***doubt
var temp = 0
console.log("9. Second largest in [12,34,24,16,78,93] number is:")
function large(sdata)
{
    var srt = sdata.sort(function(a,b){ return a-b})
    srt.splice((srt.length-1),1)
    var fval = srt[srt.length-1]
    return fval
}
console.log(large(sdata))
console.log("___________________________________________________________");

//10 Write a JavaScript program to compute the union of two arrays. 
var union = function (demo) 
{
    for (var i = 0; i <= demo.length; i++) 
    {
        for (var j = i + 1; j <= demo.length; j++)
         {
            if (demo[i] == demo[j]) {
                demo.splice(j, 1);
            }
        }
    }
    return demo;
};
var sample = [12, 34, 24, 16, 78, 93];
var data = [1, 34, 78, 45, 20, 16];
var demo = sample.concat(data);
console.log("10. Union of two arrays is: ",union(demo));
console.log("___________________________________________________________");

//11 Write a JavaScript function to check whether an `input` is an array or not. 
var test = function (sample, data) {
    if ((typeof sample) == (typeof data)) {
        return true;
    }
    else {
        return false;
    }
};
var sample = [12, 34, 24, 16, 78, 93];
//var sample = "Gaurav Madan"
var data = [1, 2, 3, 4];
console.log("11. Result is :", test(sample, data));
//console.log(Array.isArray(data))
console.log("___________________________________________________________");

//12 Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
var abc = function (sample, n) {
    return sample.slice(0, n);
};
var sample = [12, 34, 24, 16, 78, 93, 54, 68, 35, 97];
console.log("12. First element of array is: " , sample[0]);
console.log("    Required elements of array are: ",abc(sample, 6));
console.log("___________________________________________________________");

//13  Write a JavaScript program to find the most frequent item of an array. 
/*
var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
var a = new Array()
//a.push(arr[0])
for(var i = 0; i <= arr.length; i++)
{
    b:for(var j = 0; i<=a.length; j++)
    {
        if(arr[i]==a[j])
        {
            continue b
        }
        else
        {
            a.push(arr[i])
        }
    }
}
console.log(a)
*/
console.log("13. Not Solved (doubt)")
console.log("___________________________________________________________");

//14 Write a JavaScript program to compute the sum and product of an array of integers.
function sum(a, b) {
    return a + b;
}
function product(a, b) {
    return a * b;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log("14. Sum of array elements: ", arr.reduce(sum)); //***doubt
console.log("    Product of array elements: ", arr.reduce(product));
console.log("___________________________________________________________");

//15  Write a JavaScript program to add items in an blank array and display the items. 
var arr = [];
var x = function (arr, sample) {
    arr.push(sample);
    return arr;
};
console.log("15. Elements added to blank array: ", x(arr, "gaurav"));
console.log("___________________________________________________________");

//16  Write a JavaScript program which prints the elements of the following array. 
//Note : Use nested for loops.
//Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log("16. Required output:")
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for (var i = 0; i < a.length; i++) {
    console.log("Row " + i);
    a[i].forEach(function (element) {
        console.log(element);
    });
}
console.log("___________________________________________________________");

//17  Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. 
var test_array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var result = [];
var val = 12;
function filter_array(test_array, regx) {
    for (var q = 0; q <= test_array.length; q++) {
        if (test_array[q] > 1 || test_array[q] < -1) {
            result.push(test_array[q]);
        }
    }
    return result;
}
console.log("17. Array after removing 'null', '0', '', 'false', 'undefined' and 'NaN' values is :");
console.log(filter_array(test_array, val));
