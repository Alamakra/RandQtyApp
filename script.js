import quotes from './src/quotes.js';

const el = (id) => document.getElementById(id);

const createEl = (type, className, content, parent) => {
  const element = document.createElement(type);
  element.className = className;
  element.innerHTML = content;
  parent.appendChild(element);
  return element;
};

const setFavBtnIcon = (isFavorite) =>
  `<img src="heart-${isFavorite ? 'solid' : 'regular'}.svg" alt="${
    isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'
  }" />`;

const [quoteEl, authorEl, generateBtn, makeFavBtn, favContainer] = [
  el('quote'),
  el('quote-author'),
  el('generate-btn'),
  el('make-favorite-btn'),
  el('favContainer'),
];

let currentQuoteIndex;

const displayQuote = (quoteObj) => {
  quoteEl.textContent = `"${quoteObj.quote}"`;
  authorEl.textContent = quoteObj.author;
  makeFavBtn.innerHTML = setFavBtnIcon(quoteObj.isFavorite);
  makeFavBtn.style.display = 'inline-block';
};

const generateRandomQuote = () => {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  console.log(currentQuoteIndex);
  displayQuote(quotes[currentQuoteIndex]);
};

const createFavoriteCard = (quoteObj) => {
  const card = createEl('div', 'fav-card', '', favContainer);
  card.innerHTML = `<p>${quoteObj.quote}</p><p class="author">${quoteObj.author}</p>`;

  const deleteBtn = createEl('button', 'delBtn', 'Удалить хуйню', card);
  deleteBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    quoteObj.isFavorite = false;
    card.remove();
    makeFavBtn.innerHTML = setFavBtnIcon(false);
  });
};

const removeFavoriteCard = (quoteObj) => {
  document
    .querySelectorAll('.fav-card')
    .forEach((card) =>
      card.textContent.includes(quoteObj.quote) ? card.remove() : null
    );
};

const toggleFavorite = () => {
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
    console.error('Quote not found for current index.');
    return;
  }

  currentQuote.isFavorite = !currentQuote.isFavorite;
  makeFavBtn.innerHTML = setFavBtnIcon(currentQuote.isFavorite);

  currentQuote.isFavorite
    ? createFavoriteCard(currentQuote)
    : removeFavoriteCard(currentQuote);
};

generateBtn.addEventListener('click', generateRandomQuote);
makeFavBtn.addEventListener('click', toggleFavorite);

//generateRandomQuote();
