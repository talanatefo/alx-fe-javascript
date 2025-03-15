let newQuote = document.getElementById("newQuote");
let quoteDisplay = document.getElementById("quoteDisplay");

//let newQuoteText = document.getElementById("newQuoteText");
//let newQuoteCategory = document.getElementById("newQuoteCategory");

let quotes = [
  { text: "first quote", category: "motivation" },
  { text: "second quote", category: "spiritual" },
  { text: "third quote", category: "educational" },
  { text: "fourth quote", category: "health" },
  { text: "fifth quote", category: "motivation" },
];

function showRandomQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDisplay.innerHTML = randomQuote.text + " " + randomQuote.category;
}

function createAddQuoteForm() {
  let quoteForm = document.createElement("div");

  let newQuoteText = document.createElement("input");
  newQuoteText.id = "newQuoteText";
  newQuoteText.type = "text";
  newQuoteText.placeholder = "Enter the quote";

  let newQuoteCategory = document.createElement("input");
  newQuoteCategory.id = "newQuoteCategory";
  newQuoteCategory.type = "Category";
  newQuoteCategory.placeholder = "Enter the category";

  let addButton = document.createElement("button");
  addButton.textContent = "Add Quote";
  addButton.addEventListener("click", function addQuote() {
    let newQuoteTextValue = newQuoteText.value.trim();
    let newQuoteCategoryValue = newQuoteCategory.value.trim();

    if (newQuoteTextValue && newQuoteCategoryValue) {
      quotes.push({ text: newQuoteTextValue, category: newQuoteCategoryValue });
    } else {
      alert("Please fill in both fields (quote and category).");
    }
  });

  quoteForm.appendChild(newQuoteText);
  quoteForm.appendChild(newQuoteCategory);
  quoteForm.appendChild(addButton);

  document.body.appendChild(quoteForm);
}

function showRandomQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDisplay.innerHTML = randomQuote.text + " " + randomQuote.category;
}

document.addEventListener("DOMContentLoaded", createAddQuoteForm);
newQuote.addEventListener("click", showRandomQuote);
