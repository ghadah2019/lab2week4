var title = "Wellcom to My JavaScript Lesson";
console.log(title.length); 

// ___________________________________

var substring = title.substring(0, 13);
console.log(substring);


// ------------------------------------------


var uppercaseTitle = title.toUpperCase();
console.log(uppercaseTitle);



// -------------------------------


var lowercaseWord = title.toLowerCase();
console.log(lowercaseWord);

// -------------------------------------

var replacedWellcome= title.replace("Wellcom", "Hello");
console.log(replacedWellcome);

// ---------------------------------


console.log(typeof title); 


// -------------------------------

var reverse = replacedWellcome.split(" ");
var reversedWords = reverse.reverse();
var reversedSentence = reversedWords.join(" ");
console.log(reversedSentence); 



// ---------------------------------

var num1 = 10
var num2 = 20
var num3 = 30
var minNum = Math.min(num1, num2, num3);
console.log(minNum);



// ---------------------------------------


var maxNum = Math.max(num1, num2, num3);
console.log(maxNum);

// --------------------------

var result = num1 > num2;
console.log(result);


// -----------------------------


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  var year = 1900;
  var isLeap = isLeapYear(year);
  console.log(isLeap); 



// // ---------------------------------
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  var year = 1904;
  var isLeap = isLeapYear(year);
  console.log(isLeap); 



// ----------------------------------------

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  var year = 2000;
  var isLeap = isLeapYear(year);
  console.log(isLeap); 

// -------------------------------

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  var year = 2004;
  var isLeap = isLeapYear(year);
  console.log(isLeap); 


// -------------------------------------

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  var year = 2020;
  var isLeap = isLeapYear(year);
  console.log(isLeap); 



// -----------------------------------

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  var year = 2023;
  var isLeap = isLeapYear(year);
  console.log(isLeap); 



// -----------------------------------


var number1 = 12;

if (number1 % 2 === 0) {
  console.log("The number", number1, "is even.");
} else {
  console.log("The number", number1, "is odd.");
}


// -------------------------------





// --------------------------------

var number2 = 9;

if (number2 % 2 === 0) {
  console.log("The number", number2, "is even.");
} else {
  console.log("The number", number2, "is odd.");
}

for (i = 0 ; i < 10; i++)
{
    if (i % 2 == 0)
    {
        console.log(i);
    }
    else if (i %2 ==  1)
    {
        continue;
    }
}


