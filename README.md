

# TP_RP_06_JS

JS Function  
a function in js is reusable block of code that performs a specific task it acepts inputs that is perameetrs and process them and returns the results

function 
function name 
{
    parameters or else it can be empty
}


Task 25 april  =  Area of rectrangle dynamic
celcius to fernite and fernite to celcuis function
rasearch on builtin string 

// event handel 
https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers

Events are signals fired inside the browser window that notify of changes in the browser or operating system environment. Programmers can create event handler code that will run when an event fires, allowing web pages to respond appropriately to change.

l. onClick  (Triger and elements is click)
2. onMouse Hover
3. onMouseout
4. onKeyup
5. onKeydown
6. onChange
7. onLoad
8. onSubmit
9. onFoucs (Show border  color  )


DOM
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

document.querySelector()
document.querySelectorAll()
document.createElement()
Element.innerHTML
Element.setAttribute()
Element.getAttribute()
EventTarget.addEventListener()
HTMLElement.style
Node.appendChild()
window.onload
window.scrollTo()


Array 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
Syntax [1,2]

An array is a linear data structure that collects elements of the same data type and stores them in contiguous and adjacent memory locations.
Eg : 
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

Object 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
An object is a collection of related data and/or functionality. These usually consist of several variables and functions (which are called properties and methods when they are inside objects). Let's work through an example to understand what they look like.

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};