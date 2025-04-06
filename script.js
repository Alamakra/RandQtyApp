const quotes = [
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    quote: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote:
      'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    author: 'Benjamin Franklin',
  },
  {
    quote:
      'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
    author: 'Helen Keller',
  },
  {
    quote: 'The mind is everything. What you think you become.',
    author: 'Buddha',
  },
  {
    quote:
      'Happiness is not something readymade. It comes from your own actions.',
    author: 'Dalai Lama',
  },
  {
    quote:
      'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    quote: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
  },
  {
    quote:
      'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle Onassis',
  },
  {
    quote: 'The journey of a thousand miles begins with one step.',
    author: 'Lao Tzu',
  },
  {
    quote:
      'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson',
  },
  {
    quote: 'The future starts today, not tomorrow.',
    author: 'Pope John Paul II',
  },
  {
    quote: 'Be the change that you wish to see in the world.',
    author: 'Mahatma Gandhi',
  },
];

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
