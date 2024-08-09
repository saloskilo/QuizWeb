const quizData = [
  {
    question: "HTML stands for?",
    options: [
      "Hyper Transfer Markup Language",
      "HyperText Markup Language",
      "Hyper Transfer Makeup Language",
      "Hyper Transport Markup Language",
    ],
    correct: 1,
  },
  {
    question: "How many days make a week?",
    options: ["7", "8", "5", "3"],
    correct: 0,
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "HTML", "CSS", "SQL"],
    correct: 0,
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Microsoft", "Google", "Mozilla"],
    correct: 0,
  },
  {
    question: "What will be the output of: console.log(typeof [])?",
    options: ["object", "array", "undefined", "null"],
    correct: 0,
  },
  {
    question: "CSS stands for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: 0,
  },
  {
    question: "Which of the following is not a programming language?",
    options: ["HTML", "Python", "JavaScript", "Java"],
    correct: 0,
  },
  {
    question:
      "Which of the following is a correct syntax to output 'Hello World' in JavaScript?",
    options: [
      "echo 'Hello World'",
      "print('Hello World')",
      "document.write('Hello World')",
      "response.write('Hello World')",
    ],
    correct: 2,
  },
  {
    question: "What will the following code output: console.log('2' + 2)?",
    options: ["22", "4", "NaN", "SyntaxError"],
    correct: 0,
  },
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["string", "boolean", "number", "All of the above"],
    correct: 3,
  },
  {
    question: "What is the correct way to declare a JavaScript variable?",
    options: ["var x;", "variable x;", "v x;", "let x;"],
    correct: 3,
  },
  {
    question: "What is the output of: console.log(0 == '0')?",
    options: ["true", "false", "TypeError", "undefined"],
    correct: 0,
  },
  {
    question: "Which tag is used to define a list item in HTML?",
    options: ["<li>", "<ul>", "<ol>", "<list>"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct way to create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function:myFunction()",
      "function myFunction()",
      "def myFunction()",
    ],
    correct: 2,
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\nlet x = 5;\nlet y = x++;\nconsole.log(y);\n```",
    options: ["5", "6", "undefined", "NaN"],
    correct: 0,
  },
  {
    question:
      "Which method is used to add an element to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0,
  },
  {
    question:
      "Which keyword is used to check whether a property exists in an object?",
    options: ["in", "exists", "has", "with"],
    correct: 0,
  },
  {
    question: "What does JSON stand for?",
    options: [
      "JavaScript Object Notation",
      "JavaScript Online Notation",
      "JavaScript Oriented Notation",
      "JavaScript Operational Notation",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax for a ternary operator in JavaScript?",
    options: [
      "condition ? expr1 : expr2",
      "condition : expr1 ? expr2",
      "expr1 ? condition : expr2",
      "expr1 : condition ? expr2",
    ],
    correct: 0,
  },
  {
    question: "What is the output of: console.log(typeof NaN)?",
    options: ["number", "string", "undefined", "NaN"],
    correct: 0,
  },
  {
    question: "Which tag is used to create a drop-down list in HTML?",
    options: ["<select>", "<dropdown>", "<list>", "<menu>"],
    correct: 0,
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: ["color", "font-color", "text-color", "background-color"],
    correct: 0,
  },
  {
    question: "What is the output of: console.log(5 + '5')?",
    options: ["55", "10", "NaN", "undefined"],
    correct: 0,
  },
  {
    question:
      "Which HTML element is used to specify a header for a document or section?",
    options: ["<header>", "<head>", "<section>", "<top>"],
    correct: 0,
  },
  {
    question: "Which of the following is not a reserved word in JavaScript?",
    options: ["interface", "throws", "program", "short"],
    correct: 2,
  },
  {
    question: "What will be the output of: console.log([] == false)?",
    options: ["true", "false", "TypeError", "undefined"],
    correct: 0,
  },
  {
    question:
      "Which method is used to remove an element from the beginning of an array in JavaScript?",
    options: ["shift()", "pop()", "splice()", "unshift()"],
    correct: 0,
  },
  {
    question: "Which tag is used to create a clickable button in HTML?",
    options: [
      "<button>",
      "<input type='button'>",
      "<click>",
      "<input type='submit'>",
    ],
    correct: 0,
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\nconsole.log('5' - 3);\n```",
    options: ["2", "53", "NaN", "TypeError"],
    correct: 0,
  },
  {
    question: "Which tag is used to create a table in HTML?",
    options: ["<table>", "<tab>", "<td>", "<tr>"],
    correct: 0,
  },
  {
    question: "What does the 'id' attribute in HTML specify?",
    options: [
      "A unique identifier for the element",
      "The element's class name",
      "The element's style",
      "The element's tag name",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create an array in JavaScript?",
    options: [
      "var arr = [];",
      "var arr = {};",
      "var arr = ();",
      "var arr = <>;",
    ],
    correct: 0,
  },
  {
    question:
      "Which method is used to find the length of a string in JavaScript?",
    options: ["length", "size", "count", "measure"],
    correct: 0,
  },
  {
    question:
      "Which of the following is used to declare a constant in JavaScript?",
    options: ["const", "let", "var", "constant"],
    correct: 0,
  },
  {
    question:
      "Which CSS property is used to set the background color of an element?",
    options: ["background-color", "color", "background", "fill"],
    correct: 0,
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<hyperlink>"],
    correct: 0,
  },
  {
    question:
      "What will the following code output?\n```javascript\nconsole.log(3 + '3' - 3);\n```",
    options: ["30", "33", "0", "NaN"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to declare a function in JavaScript?",
    options: [
      "function myFunc() {}",
      "myFunc() => {}",
      "def myFunc() {}",
      "function:myFunc() {}",
    ],
    correct: 0,
  },
  {
    question: "What is the correct way to create a comment in JavaScript?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "# This is a comment",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to iterate through an array in JavaScript?",
    options: [
      "for(let i=0; i<arr.length; i++)",
      "forEach(let i=0; i<arr.length; i++)",
      "loop(arr)",
      "iterate(arr)",
    ],
    correct: 0,
  },
  {
    question: "Which HTML element is used to specify a line break?",
    options: ["<br>", "<lb>", "<break>", "<line>"],
    correct: 0,
  },
  {
    question:
      "What is the output of the following code?\n```javascript\nconsole.log([1, 2, 3] + [4, 5, 6]);\n```",
    options: ["1,2,34,5,6", "SyntaxError", "undefined", "TypeError"],
    correct: 0,
  },
  {
    question:
      "Which method is used to convert a string to lowercase in JavaScript?",
    options: ["toLowerCase()", "lower()", "makeLower()", "convertToLower()"],
    correct: 0,
  },
  {
    question: "Which attribute is used to specify the URL of an image in HTML?",
    options: ["src", "href", "alt", "link"],
    correct: 0,
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\nconsole.log(2 + 2 * 2);\n```",
    options: ["6", "8", "4", "NaN"],
    correct: 0,
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "id", "inline"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to access the first element of an array?",
    options: ["arr[0]", "arr(1)", "arr{0}", "arr.first()"],
    correct: 0,
  },
  {
    question: "What does the 'alt' attribute in HTML specify?",
    options: [
      "Alternative text for an image",
      "A link's text",
      "The element's tag name",
      "The element's ID",
    ],
    correct: 0,
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\nconsole.log(typeof null);\n```",
    options: ["object", "null", "undefined", "NaN"],
    correct: 0,
  },
  {
    question:
      "Which of the following is a correct way to declare an object in JavaScript?",
    options: [
      "let obj = {};",
      "let obj = [];",
      "let obj = ();",
      "let obj = <>;",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to access a property of an object?",
    options: [
      "object.property",
      "object->property",
      "object[property]",
      "object[property()]",
    ],
    correct: 0,
  },
  {
    question:
      "What is the correct syntax to include an external JavaScript file in HTML?",
    options: [
      "<script src='file.js'></script>",
      "<link href='file.js'></link>",
      "<include src='file.js'></include>",
      "<script link='file.js'></script>",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a class in JavaScript?",
    options: [
      "class MyClass {}",
      "MyClass class {}",
      "define class MyClass {}",
      "class:MyClass {}",
    ],
    correct: 0,
  },
  {
    question:
      "What is the output of the following code?\n```javascript\nlet a = [1, 2, 3];\nlet b = a;\nb.push(4);\nconsole.log(a);\n```",
    options: ["[1, 2, 3, 4]", "[1, 2, 3]", "[4]", "undefined"],
    correct: 0,
  },
  {
    question:
      "Which method is used to add an element to the beginning of an array in JavaScript?",
    options: ["unshift()", "shift()", "push()", "splice()"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a promise in JavaScript?",
    options: ["new Promise()", "Promise()", "promise = {}", "promise()"],
    correct: 0,
  },
  {
    question: "What is the correct syntax to handle errors in JavaScript?",
    options: ["try...catch", "try...except", "handle...error", "catch...error"],
    correct: 0,
  },
  {
    question:
      "Which method is used to convert a string to an integer in JavaScript?",
    options: ["parseInt()", "int()", "toInt()", "convertToInt()"],
    correct: 0,
  },
  {
    question: "Which HTML element is used to create a form?",
    options: ["<form>", "<input>", "<label>", "<textarea>"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create an event listener in JavaScript?",
    options: [
      "element.addEventListener('click', function)",
      "element.on('click', function)",
      "element.event('click', function)",
      "element.listen('click', function)",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to define a string in JavaScript?",
    options: [
      "let str = 'Hello';",
      "let str = Hello;",
      "let str = `Hello`;",
      "let str = {Hello};",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to iterate through an object in JavaScript?",
    options: [
      "for(let key in object)",
      "for(let key of object)",
      "forEach(object)",
      "iterate(object)",
    ],
    correct: 0,
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\nconsole.log('5' - '2');\n```",
    options: ["3", "52", "NaN", "TypeError"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to declare a string in JavaScript?",
    options: [
      "let str = 'Hello';",
      "let str = Hello;",
      "let str = {Hello};",
      "let str = [Hello];",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a class method in JavaScript?",
    options: [
      "method() {}",
      "function method() {}",
      "def method() {}",
      "method: function() {}",
    ],
    correct: 0,
  },
  {
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    options: ["<footer>", "<bottom>", "<foot>", "<base>"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a JavaScript object?",
    options: [
      "let obj = {};",
      "let obj = [];",
      "let obj = ();",
      "let obj = <>;",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to add a property to a JavaScript object?",
    options: [
      "object.property = value;",
      "object->property = value;",
      "object.property(value);",
      "object(property=value);",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create an array in JavaScript?",
    options: [
      "let arr = [];",
      "let arr = {};",
      "let arr = ();",
      "let arr = <>;",
    ],
    correct: 0,
  },
  {
    question: "Which method is used to join two or more arrays in JavaScript?",
    options: ["concat()", "join()", "push()", "merge()"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create an arrow function in JavaScript?",
    options: [
      "let func = () => {}",
      "let func = => {}",
      "let func = () {}",
      "let func = {} => {}",
    ],
    correct: 0,
  },
  {
    question:
      "Which method is used to find the length of an array in JavaScript?",
    options: ["length", "size", "count", "measure"],
    correct: 0,
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    options: ["pop()", "shift()", "splice()", "remove()"],
    correct: 0,
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\nconsole.log(2 + '2' - 1);\n```",
    options: ["21", "22", "NaN", "TypeError"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to access the length of a string in JavaScript?",
    options: ["str.length", "str.size", "str.count", "str.measure"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a new date object in JavaScript?",
    options: ["new Date()", "Date()", "new Date", "createDate()"],
    correct: 0,
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\nconsole.log(0.1 + 0.2);\n```",
    options: ["0.30000000000000004", "0.3", "0.2", "NaN"],
    correct: 0,
  },
  {
    question: "What does the 'var' keyword do in JavaScript?",
    options: [
      "Declares a variable globally or locally",
      "Declares a block-scoped variable",
      "Creates a constant variable",
      "Declares a function",
    ],
    correct: 0,
  },
  {
    question: "Which of the following is a looping structure in JavaScript?",
    options: ["for", "if", "switch", "try"],
    correct: 0,
  },
  {
    question:
      "Which method is used to parse a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toObject()",
      "JSON.convert()",
    ],
    correct: 0,
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\nconsole.log(typeof undefined);\n```",
    options: ["undefined", "string", "object", "number"],
    correct: 0,
  },
  {
    question: "Which tag is used to create an ordered list in HTML?",
    options: ["<ol>", "<ul>", "<li>", "<order>"],
    correct: 0,
  },
  {
    question: "What is the result of: console.log(10 % 3)?",
    options: ["1", "3", "10", "0"],
    correct: 0,
  },
  {
    question:
      "Which method is used to remove whitespace from both ends of a string in JavaScript?",
    options: ["trim()", "slice()", "cut()", "strip()"],
    correct: 0,
  },
  {
    question: "Which HTML element is used to define the title of a document?",
    options: ["<title>", "<head>", "<header>", "<document>"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct way to find the index of an element in an array in JavaScript?",
    options: ["indexOf()", "findIndex()", "search()", "getIndex()"],
    correct: 0,
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "let colors = ['red', 'green', 'blue'];",
      "let colors = 'red', 'green', 'blue';",
      "let colors = (1:'red', 2:'green', 3:'blue');",
      "let colors = 'red'+'green'+'blue';",
    ],
    correct: 0,
  },
  {
    question: "Which of the following is a boolean operator?",
    options: ["&&", "+", "=", "++"],
    correct: 0,
  },
  {
    question: "What will be the output of: console.log(null == undefined)?",
    options: ["true", "false", "TypeError", "NaN"],
    correct: 0,
  },
  {
    question: "Which of the following is a valid JavaScript variable name?",
    options: ["_name", "2name", "-name", "name!"],
    correct: 0,
  },
  {
    question: "Which method is used to combine two strings in JavaScript?",
    options: ["concat()", "add()", "merge()", "join()"],
    correct: 0,
  },
  {
    question:
      "What is the output of the following code?\n```javascript\nconsole.log('Hello'.charAt(0));\n```",
    options: ["H", "e", "l", "o"],
    correct: 0,
  },
  {
    question: "What will be the output of: console.log(!!false)?",
    options: ["false", "true", "undefined", "null"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create an empty object in JavaScript?",
    options: ["let obj = {};", "let obj = [];", "let obj = ()", "let obj = <>"],
    correct: 0,
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["Angular", "HTML", "CSS", "JQuery"],
    correct: 0,
  },
  {
    question:
      "Which method is used to convert a JavaScript object into a JSON string?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.toString()",
    ],
    correct: 0,
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["float", "string", "number", "boolean"],
    correct: 0,
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "The current object",
      "The global object",
      "The parent object",
      "The child object",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct way to create a new object in JavaScript?",
    options: [
      "let obj = new Object();",
      "let obj = Object.create();",
      "let obj = new();",
      "let obj = Object()",
    ],
    correct: 0,
  },
  {
    question:
      "Which method is used to convert a number to a string in JavaScript?",
    options: ["toString()", "toNumber()", "toText()", "convertToString()"],
    correct: 0,
  },
  {
    question:
      "What is the output of the following code?\n```javascript\nconsole.log(typeof NaN);\n```",
    options: ["number", "string", "undefined", "NaN"],
    correct: 0,
  },
  {
    question: "Which HTML element is used to create a paragraph?",
    options: ["<p>", "<paragraph>", "<para>", "<text>"],
    correct: 0,
  },
  {
    question:
      "Which of the following is a valid way to declare a constant in JavaScript?",
    options: [
      "const PI = 3.14;",
      "constant PI = 3.14;",
      "let PI = 3.14;",
      "var PI = 3.14;",
    ],
    correct: 0,
  },
  {
    question:
      "Which method is used to add a new element to an array in JavaScript?",
    options: ["push()", "pop()", "add()", "append()"],
    correct: 0,
  },
  {
    question: "What will be the output of: console.log([] == [])?",
    options: ["false", "true", "TypeError", "undefined"],
    correct: 0,
  },
  {
    question: "Which of the following is a falsy value in JavaScript?",
    options: ["0", "1", "true", "[]"],
    correct: 0,
  },
  {
    question: "What does the 'return' statement do in JavaScript?",
    options: [
      "Exits a function and returns a value",
      "Declares a function",
      "Iterates over an array",
      "Stops a loop",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a template literal in JavaScript?",
    options: [
      "`Hello, ${name}!`",
      "'Hello, ${name}!'",
      '"Hello, ${name}!"',
      "'Hello, ' + name + '!'",
    ],
    correct: 0,
  },
  {
    question:
      "What is the output of the following code?\n```javascript\nconsole.log(Boolean(0));\n```",
    options: ["false", "true", "undefined", "null"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a regular expression in JavaScript?",
    options: ["/pattern/", "regex(pattern)", "new RegExp()", "RegExp(pattern)"],
    correct: 0,
  },
  {
    question:
      "Which method is used to create a copy of an array in JavaScript?",
    options: ["slice()", "copy()", "replicate()", "duplicate()"],
    correct: 0,
  },
  {
    question: "Which HTML element is used to specify the largest heading?",
    options: ["<h1>", "<head>", "<header>", "<h6>"],
    correct: 0,
  },
  {
    question: "What will be the output of: console.log(2 === '2')?",
    options: ["false", "true", "TypeError", "undefined"],
    correct: 0,
  },
  {
    question:
      "Which method is used to round a number to the nearest integer in JavaScript?",
    options: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.trunc()"],
    correct: 0,
  },
  {
    question: "Which tag is used to define an image in HTML?",
    options: ["<img>", "<image>", "<src>", "<picture>"],
    correct: 0,
  },
  {
    question: "What will be the output of: console.log(typeof NaN)?",
    options: ["number", "string", "undefined", "NaN"],
    correct: 0,
  },
  {
    question:
      "Which method is used to convert a string to an integer in JavaScript?",
    options: ["parseInt()", "toInt()", "convertToInt()", "toInteger()"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a new date in JavaScript?",
    options: ["new Date()", "Date()", "new Date", "createDate()"],
    correct: 0,
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    options: ["pop()", "shift()", "splice()", "remove()"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to declare a function in JavaScript?",
    options: [
      "function myFunction()",
      "func myFunction()",
      "def myFunction()",
      "funct myFunction()",
    ],
    correct: 0,
  },
  {
    question:
      "What is the output of the following code?\n```javascript\nconsole.log(typeof null);\n```",
    options: ["object", "null", "undefined", "NaN"],
    correct: 0,
  },
  {
    question:
      "Which method is used to add a new element to the beginning of an array in JavaScript?",
    options: ["unshift()", "shift()", "push()", "pop()"],
    correct: 0,
  },
  {
    question: "What does the 'isNaN' function do in JavaScript?",
    options: [
      "Checks if a value is not a number",
      "Checks if a value is a number",
      "Converts a value to a number",
      "Returns the number of elements in an array",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a promise in JavaScript?",
    options: ["new Promise()", "Promise()", "promise = {}", "promise()"],
    correct: 0,
  },
  {
    question:
      "Which method is used to remove the first element from an array in JavaScript?",
    options: ["shift()", "pop()", "splice()", "remove()"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create an arrow function in JavaScript?",
    options: [
      "let func = () => {}",
      "let func = => {}",
      "let func = () {}",
      "let func = {} => {}",
    ],
    correct: 0,
  },
  {
    question:
      "Which method is used to find the index of a specific element in an array in JavaScript?",
    options: ["indexOf()", "findIndex()", "getIndex()", "searchIndex()"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to add a property to a JavaScript object?",
    options: [
      "object.property = value;",
      "object->property = value;",
      "object.property(value);",
      "object[property=value];",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to convert a string to uppercase in JavaScript?",
    options: [
      "toUpperCase()",
      "upperCase()",
      "makeUpper()",
      "convertToUpper()",
    ],
    correct: 0,
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\nconsole.log(1 + 1 == 2 && 10 * 10 > 50);\n```",
    options: ["true", "false", "undefined", "NaN"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a string in JavaScript?",
    options: [
      "let str = 'Hello';",
      "let str = Hello;",
      "let str = {Hello};",
      "let str = [Hello];",
    ],
    correct: 0,
  },
  {
    question:
      "Which method is used to check if a string contains a specific substring in JavaScript?",
    options: ["includes()", "contains()", "search()", "find()"],
    correct: 0,
  },
  {
    question: "What will be the output of: console.log(3 > 2 > 1)?",
    options: ["false", "true", "TypeError", "NaN"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to define a class in JavaScript?",
    options: [
      "class MyClass {}",
      "MyClass class {}",
      "define class MyClass {}",
      "class:MyClass {}",
    ],
    correct: 0,
  },
  {
    question:
      "Which method is used to sort the elements of an array in JavaScript?",
    options: ["sort()", "order()", "arrange()", "organize()"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to access the length of an array in JavaScript?",
    options: ["array.length", "array.size", "array.count", "array.measure"],
    correct: 0,
  },
  {
    question:
      "What is the output of the following code?\n```javascript\nconsole.log(10 > 9 > 8);\n```",
    options: ["false", "true", "undefined", "NaN"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to access a property of an object in JavaScript?",
    options: [
      "object.property",
      "object->property",
      "object[property()]",
      "object[property]",
    ],
    correct: 0,
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\nconsole.log(0.1 + 0.2 === 0.3);\n```",
    options: ["false", "true", "undefined", "NaN"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to iterate through an array in JavaScript?",
    options: [
      "for(let i = 0; i < arr.length; i++)",
      "for(let i in arr)",
      "forEach(arr)",
      "iterate(arr)",
    ],
    correct: 0,
  },
  {
    question:
      "Which method is used to find the largest number in an array in JavaScript?",
    options: ["Math.max.apply()", "Math.max()", "Math.ceil()", "Math.floor()"],
    correct: 0,
  },
  {
    question:
      "What will be the output of the following code?\n```javascript\nconsole.log(typeof []);\n```",
    options: ["object", "array", "undefined", "NaN"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to declare an array in JavaScript?",
    options: [
      "let arr = [];",
      "let arr = {};",
      "let arr = ();",
      "let arr = <>;",
    ],
    correct: 0,
  },
  {
    question: "What is the result of: console.log('2' + 2)?",
    options: ["22", "4", "NaN", "undefined"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a new object in JavaScript?",
    options: [
      "let obj = {};",
      "let obj = [];",
      "let obj = ();",
      "let obj = <>;",
    ],
    correct: 0,
  },
  {
    question:
      "Which method is used to find the smallest number in an array in JavaScript?",
    options: ["Math.min.apply()", "Math.min()", "Math.ceil()", "Math.floor()"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to declare a variable in JavaScript?",
    options: [
      "let varName;",
      "var varName;",
      "const varName;",
      "variable varName;",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a function expression in JavaScript?",
    options: [
      "let myFunc = function() {}",
      "function myFunc() {}",
      "func myFunc() {}",
      "funct myFunc() {}",
    ],
    correct: 0,
  },
  {
    question:
      "Which method is used to split a string into an array in JavaScript?",
    options: ["split()", "slice()", "divide()", "break()"],
    correct: 0,
  },
  {
    question: "What will be the output of: console.log(1 + '1' - 1)?",
    options: ["10", "0", "11", "NaN"],
    correct: 0,
  },
  {
    question: "What does the '===' operator do in JavaScript?",
    options: [
      "Checks for strict equality",
      "Checks for equality",
      "Checks for inequality",
      "Assigns a value",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to add an event listener in JavaScript?",
    options: [
      "element.addEventListener('click', function)",
      "element.on('click', function)",
      "element.event('click', function)",
      "element.listen('click', function)",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a class in JavaScript?",
    options: [
      "class MyClass {}",
      "MyClass class {}",
      "define class MyClass {}",
      "class:MyClass {}",
    ],
    correct: 0,
  },
  {
    question:
      "Which method is used to check if a string starts with a specific substring in JavaScript?",
    options: ["startsWith()", "beginsWith()", "starts()", "checkStart()"],
    correct: 0,
  },
  {
    question: "What is the result of: console.log(3 > 2 > 1)?",
    options: ["false", "true", "undefined", "NaN"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create an empty array in JavaScript?",
    options: [
      "let arr = [];",
      "let arr = {}",
      "let arr = ();",
      "let arr = <>;",
    ],
    correct: 0,
  },
  {
    question:
      "What is the output of the following code?\n```javascript\nconsole.log(typeof {});\n```",
    options: ["object", "array", "undefined", "NaN"],
    correct: 0,
  },
  {
    question: "What is the result of: console.log('10' - 5)?",
    options: ["5", "15", "NaN", "undefined"],
    correct: 0,
  },
  {
    question:
      "Which method is used to convert a number to a string in JavaScript?",
    options: ["toString()", "toNumber()", "toText()", "convertToString()"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create an arrow function in JavaScript?",
    options: [
      "let func = () => {}",
      "let func = => {}",
      "let func = () {}",
      "let func = {} => {}",
    ],
    correct: 0,
  },
  {
    question:
      "What is the output of the following code?\n```javascript\nconsole.log(1 + 2 + '3');\n```",
    options: ["33", "123", "6", "NaN"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a function declaration in JavaScript?",
    options: [
      "function myFunc() {}",
      "let myFunc = function() {}",
      "func myFunc() {}",
      "funct myFunc() {}",
    ],
    correct: 0,
  },
  {
    question:
      "Which method is used to find the length of a string in JavaScript?",
    options: ["length", "size", "count", "measure"],
    correct: 0,
  },
  {
    question: "What will be the output of: console.log('5' + 3)?",
    options: ["53", "8", "NaN", "undefined"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a template literal in JavaScript?",
    options: [
      "`Hello, ${name}!`",
      "'Hello, ${name}!'",
      '"Hello, ${name}!"',
      "'Hello, ' + name + '!'",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to declare a variable in JavaScript?",
    options: [
      "let varName;",
      "var varName;",
      "const varName;",
      "variable varName;",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create an empty object in JavaScript?",
    options: [
      "let obj = {};",
      "let obj = [];",
      "let obj = ();",
      "let obj = <>;",
    ],
    correct: 0,
  },
  {
    question:
      "What is the output of the following code?\n```javascript\nconsole.log(typeof 'Hello');\n```",
    options: ["string", "number", "undefined", "NaN"],
    correct: 0,
  },
  {
    question:
      "Which method is used to find the type of a variable in JavaScript?",
    options: ["typeof", "type", "getType", "checkType"],
    correct: 0,
  },
  {
    question:
      "What is the output of the following code?\n```javascript\nconsole.log(10 > 9 > 8);\n```",
    options: ["false", "true", "undefined", "NaN"],
    correct: 0,
  },
  {
    question: "Which method is used to check if a value is NaN in JavaScript?",
    options: ["isNaN()", "checkNaN()", "validateNaN()", "isNotANumber()"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to declare an array in JavaScript?",
    options: [
      "let arr = [];",
      "let arr = {};",
      "let arr = ();",
      "let arr = <>;",
    ],
    correct: 0,
  },
  {
    question: "What is the result of: console.log('2' + 2)?",
    options: ["22", "4", "NaN", "undefined"],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct syntax to create a new object in JavaScript?",
    options: [
      "let obj = {};",
      "let obj = [];",
      "let obj = ();",
      "let obj = <>;",
    ],
    correct: 0,
  },
];
console.log(quizData.length);

// step 2 selected the DOM element
const quiz = document.querySelector(".quiz");
const answerElem = document.querySelectorAll(".answer");
const [questionElem, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    ".question,.option_1,.option_2,.option_3,.option_4"
  );
const submitBtn = document.querySelector("#submit");
// selected all DOM 


// initialized current quiz question and score
let currentQuiz = 0;
let score = 0;

// step 3
const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz]; // quizData with index 0 selected question and options of index 0 quizdata
  console.log(question);
  console.log(options);

//   giving value to questionelment 
  questionElem.innerText = `${currentQuiz+1}: question`;


  options.forEach((curElement, index) => {
    window[`option_${index + 1}`].innerText = curElement;
   
  });
};

loadQuiz();

// step 4
const getaSelectedOption = () => {
  let ans_Ind;
  answerElem.forEach((curOption, index) => {
    if (curOption.checked) {
      ans_Ind = index;
    }
  });
  return ans_Ind;
};

const deSelectedAnswer = () => {
  answerElem.forEach((curElment) => (curElment.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getaSelectedOption();
  console.log(selectedOptionIndex);

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score += 1;
  }
  //   step 5
  currentQuiz++;
  console.log(currentQuiz);

  if (currentQuiz < quizData.length) {
    deSelectedAnswer();
    loadQuiz();
  } else {
    quiz.innerHTML = `<div class="result">
    <h2> Your Score: ${score}/${quizData.length} Correct Answers</h2>
    <p>Congratulation on completing the Quiz</p>
    <button class="reload_button" onclick="location.reload()"> Play Again </button> `;
  }
});
