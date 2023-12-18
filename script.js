// let apiQuotes = [];

function newQuote(arr) {
  const quote = arr[Math.round(Math.random() * arr.length)];
  console.log("🚀 ~ file: script.js:5 ~ newQuote ~ quote:", quote);
}

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
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
