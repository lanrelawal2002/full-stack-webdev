// ADD A HTML ELEMENT

let nascentAnchorElement = document.createElement("a");
nascentAnchorElement.href = "https://academind.com";
nascentAnchorElement.textContent = "go to Max and Manu's site.";

let firstParagraph = document.querySelector("p");
firstParagraph.append(nascentAnchorElement);

// DELETE A HTML ELEMENT

// let onlyHeader = document.querySelector("h1#greeting");
// onlyHeader.remove();

let headerParent = document.querySelector("body");
let beginningHeader = document.getElementById("greeting");
headerParent.removeChild(beginningHeader);

// MOVE HTML ELEMENTS AROUND

// headerParent.append(firstParagraph);
// or
firstParagraph.parentElement.appendChild(firstParagraph);

// innerHTML
console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML =
  'Hi! This is without a <a href="https://en.wikipedia.org/wiki/Doubt_(2008_film)">doubt</a> really <em>important!</em>.' +
  "<p>How is this added</p><p>Now I see</p>";

console.dir(document.body);
