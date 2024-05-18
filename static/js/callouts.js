var paragraph = document.getElementById("paragraph");
var words = paragraph.textContent.split(" ");
var firstWord = words[0];

var span = document.createElement("span");
span.classList.add("first-word"); // Apply the CSS class to the span
span.textContent = firstWord;

// Use regular expression with word boundary to ensure only the first occurrence is replaced
paragraph.innerHTML = paragraph.innerHTML.replace(
  new RegExp("\\b" + firstWord + "\\b"),
  span.outerHTML,
);
