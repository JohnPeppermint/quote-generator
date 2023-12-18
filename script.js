// let apiQuotes = [];
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

function newQuote(arr) {
  const quote = arr[Math.round(Math.random() * arr.length)];
  console.log("🚀 ~ file: script.js:10 ~ newQuote ~ quote:", quote);
<<<<<<< HEAD
  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
=======
  authorText.textContent = quote.a;
  quoteText.textContent = quote.q;
>>>>>>> dbce46a5d48ac5123c8c6b3e4415316e8a8896fe
}

async function getQuotes() {
  const apiUrl = "https://zenquotes.io/api/random";
  try {
    const response = await fetch(apiUrl);
    let apiQuotes = await response.json();
    // console.log("🚀 ~ file: script.js:8 ~ getQuotes ~ apiQuotes:", apiQuotes[Math.round(Math.random() * 1000)]);
    newQuote(apiQuotes);
  } catch (error) {
    //error
  }
}

getQuotes();
