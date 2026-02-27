1. In short, getElementById and getElementsByClassName use specific ID or Class to find, and querySelector/All use any CSS selector and gives more flexibility।

2. Insert or create a new element, use document.createElement() to define the tag, set its content or attributes,
   and then use a method like appendChild() or prepend() to attach it to a parent element in the DOM.

4. Event Bubbling is a type of event in the HTML DOM where an event pushing-up on a specific child element "bubbles up" through its ancestors in the DOM tree.

5. Event Delegation is a system where we attach a single event listener to a parent element instead of adding individual listeners to multiple child elements. 
   It works because of Event Bubbling on a child "bubbles up" to its parent, allowing the parent to catch and handle the event.

6. preventDefault() stops the browser's default action, while stopPropagation() stops the event from moving up the DOM tree.
