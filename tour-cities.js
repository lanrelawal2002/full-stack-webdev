let tourCitiesSection = document.createElement("section");

let allElementParent = document.querySelector("body");

// let initialPageHeader = document.getElementById("greeting");

// let firstLinkParagraph = document.querySelector("p.second-paragraph");

let lineDivide = document.querySelector("hr");

// allElementParent.insertBefore(tourCitiesSection, lineDivide);

allElementParent.append(tourCitiesSection);

// allElementParent.insertBefore(firstLinkParagraph, initialPageHeader);

// allElementParent.append(tourCitiesSection);

let startingH2Element = document.createElement("h2");
startingH2Element.textContent = "Explore all these exquisite destinations.";
// startingH2Element.textContent.toLowerCase();
tourCitiesSection.appendChild(startingH2Element);

let tourCitiesUnorderedList = document.createElement("ul");
tourCitiesSection.appendChild(tourCitiesUnorderedList);

let tanzaniaListItem = document.createElement("li");
tourCitiesUnorderedList.appendChild(tanzaniaListItem);

let tanzaniaH3Header = document.createElement("h3");
tanzaniaH3Header.textContent = "Tanzania";
tanzaniaListItem.appendChild(tanzaniaH3Header);

let tanzaniaShortDescription = document.createElement("p");
tanzaniaShortDescription.textContent =
  "Know more about the Serengeti National Park";

// tanzaniaShortDescription.toUpperCase();
tanzaniaListItem.appendChild(tanzaniaShortDescription);

let serengetiAnchor = document.createElement("a");
serengetiAnchor.textContent = " here";
serengetiAnchor.href = "https://en.wikipedia.org/wiki/Serengeti_National_Park";
tanzaniaShortDescription.append(serengetiAnchor);

// practice .insertBefore() method
let shortTourDescription = document.createElement("p");
shortTourDescription.textContent =
  "African destinations take priority and are first displayed.";

tourCitiesSection.insertBefore(shortTourDescription, tourCitiesUnorderedList);

// practice deleting DOM elements
// serengetiAnchor.remove();
// tanzaniaShortDescription.removeChild(serengetiAnchor);

//practice moving elements around
// tourCitiesSection.insertBefore(startingH2Element, tourCitiesUnorderedList);
// console.dir(document);

let content = tanzaniaListItem.textContent;
console.log(content);
