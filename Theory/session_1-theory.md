What is Emmet?
Difference between a Library and Framework?
What is CDN? Why do we use it?
Why is React known as React?
What is crossorigin in script tag?
What is difference between React and ReactDOM?
What is difference between react.development.js and react.production.js files via CDN?
What is async and defer?

1. What is Emmet?
Emmet is a plugin/tool that helps you write HTML and CSS faster using abbreviations.
Example: div.container>ul>li*3 → expands to HTML code with a div, ul, and 3 li elements.

2. Difference between a Library and Framework?
Library: You call it when you need it. You’re in control.

Framework: It calls your code. Framework is in control.
Example: React (library), Angular (framework).

3. What is CDN? Why do we use it?
CDN (Content Delivery Network) is a network of servers that deliver files (like JS, CSS, images) from the nearest server to the user.
Why use it? Faster loading, better performance, and caching.

4. Why is React known as React?
React was named for its ability to react to data changes and update the UI dynamically and efficiently.

5. What is crossorigin in script tag?
The crossorigin attribute is used when loading scripts from another domain (like a CDN) to handle CORS (Cross-Origin Resource Sharing).
It can be anonymous or use-credentials.

6. Difference between React and ReactDOM?
React: Core library for building UI components.

ReactDOM: Connects React to the DOM (browser).
ReactDOM is needed to render React components in the browser.

7. Difference between react.development.js and react.production.js via CDN?
react.development.js: Unminified, includes warnings and helpful error messages.

react.production.js: Minified, optimized for performance, no dev warnings.

8. What is async and defer in <script> tag?
async: Script loads and runs independently, might interrupt HTML parsing.

defer: Script loads in background and runs after HTML is fully parsed.