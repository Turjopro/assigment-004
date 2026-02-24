1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById means Gets one element by its ID.
getElementsByClassName means Gets all elements with that class, returns a live HTMLCollection.
querySelector means Gets the first element that matches any CSS selector.
querySelectorAll means Gets all elements that match the CSS selector, returns a NodeList. 


2. How do you create and insert a new element into the DOM?

for create an element ----const newDiv = document.createElement("div");
for add an element----newDiv.textContent = "Hello World!";
                      newDiv.className = "my-div";
for insert ----document.body.appendChild(newDiv);


3. What is Event Bubbling? And how does it work?

Event bubbling is when an event starts from the target element and moves up to its parents. for example

html code --<div id="parent">
  <button id="child">Click Me</button>
</div>

javascript---
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked!");
});
document.getElementById("child").addEventListener("click", () => {
  console.log("Button clicked!");
});
after clicking the button--

Button clicked!
Parent clicked! showed


4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is when you attach one event listener to a parent, instead of adding listeners to all child elements.

The parent listens for events on its children using event bubbling..

useful because----
Saves memory (fewer listeners)
Works for dynamically added elements


5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() means ----Stops the browser’s default action. Example: stop a link from navigating.
stopPropagation() means ----Stops the event from bubbling up to parent elements.
