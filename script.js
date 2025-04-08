import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');
const makeFavBtn = document.getElementById('make-favorite-btn');
const favContainer = document.getElementById('favContainer');

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author: quoteAuthor } = randomQuote;

  console.log(currentQuoteIndex);

  quoteElement.textContent = `"${quote}"`;
  authorElement.textContent = quoteAuthor;
  makeFavBtn.textContent = randomQuote.isFavorite
    ? 'Delete from favorites'
    : 'Add to Favorite';

  makeFavBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  // Validate currentQuoteIndex
  if (
    currentQuoteIndex === undefined ||
    currentQuoteIndex < 0 ||
    currentQuoteIndex >= quotes.length
  ) {
    console.error('Invalid currentQuoteIndex.');
    return;
  }

  const currentQuote = quotes[currentQuoteIndex];
  if (!currentQuote) {
    console.error('No quote found for the current index.');
    return;
  }

  // Toggle the favorite status
  currentQuote.isFavorite = !currentQuote.isFavorite;

  // Update the button text based on the favorite status
  makeFavBtn.textContent = currentQuote.isFavorite
    ? 'Delete from favorites'
    : 'Add to Favorite';

  // Handle favorite card creation or removal
  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('fav-card');
    favoriteCard.innerHTML = `
      <p>${currentQuote.quote}</p>
      <p class="author">${currentQuote.author}</p>
    `;
    favContainer.appendChild(favoriteCard);
  } else {
    // Remove card from favorites
    const favoriteCards = document.querySelectorAll('.fav-card');
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
makeFavBtn.addEventListener('click', toggleFavorite);

/**generateRandomQuote();*/
