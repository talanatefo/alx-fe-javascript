let newQuote = document.getElementById("newQuote");
let quoteDisplay = document.getElementById("quoteDisplay");

let newQuoteText = document.getElementById("newQuoteText");
let newQuoteCategory = document.getElementById("newQuoteCategory");

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

function addQuote() {
  let newQuoteTextValue = newQuoteText.value.trim();
  let newQuoteCategoryValue = newQuoteCategory.value.trim();

  if (newQuoteTextValue && newQuoteCategoryValue) {
    quotes.push({ text: newQuoteTextValue, category: newQuoteCategoryValue });
  } else {
    alert("Please fill in both fields (quote and category).");
  }
}

function showRandomQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDisplay.innerHTML = randomQuote.text + " " + randomQuote.category;
}

newQuote.addEventListener("click", showRandomQuote);
