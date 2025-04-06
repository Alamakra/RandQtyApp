const quotes = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Strive not to be a success, but rather to be of value. - Albert Einstein',
  'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
  'Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin',
  'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller',
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQuote);

/**generateRandomQuote();*/
