import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const { quote, author: quoteAuthor } = quotes[randomIndex];

  //const { quote, author: quoteAuthor } = randomQuote;
  //const quote = randomQuote.quote;
  //const quoteAuthor = randomQuote.author;

  quoteElement.textContent = `"${quote}"`;
  authorElement.textContent = quoteAuthor;
}

generateBtn.addEventListener('click', generateRandomQuote);

/**generateRandomQuote();*/
