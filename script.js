let newQuote = document.getElementById("newQuote");
let quoteDisplay = document.getElementById("quoteDisplay");

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

newQuote.addEventListener("click", showRandomQuote);
