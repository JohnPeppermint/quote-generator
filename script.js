// let apiQuotes = [];
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

function newQuote(arr) {
  const quote = arr[Math.round(Math.random() * arr.length)];
  console.log("🚀 ~ file: script.js:10 ~ newQuote ~ quote:", quote);
  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
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
