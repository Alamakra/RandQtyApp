const quotes = [
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein',
  },
  {
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
    author: 'Helen Keller',
  },
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQuote());

generateRandomQuote();
