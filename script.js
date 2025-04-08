import quotes from './quotes.js'; // Импорт цитат из файла quotes.js

const quoteElement = document.getElementById('quote'); // Получение элемента цитаты из DOM
const authorElement = document.getElementById('quote-author'); // Получение элемента автора из DOM
const generateBtn = document.getElementById('generate-btn'); // Получение элемента кнопки генерации из DOM
const makeFavBtn = document.getElementById('make-favorite-btn'); // Получение элемента кнопки добавления в избранное из DOM
const favContainer = document.getElementById('favContainer'); // Получение элемента контейнера избранного из DOM

let currentQuoteIndex; // Объявление переменной для хранения текущего индекса цитаты

function generateRandomQuote() {
  // Функция для генерации случайной цитаты
  currentQuoteIndex = Math.floor(Math.random() * quotes.length); // Генерация случайного индекса на основе длины массива цитат
  const randomQuote = quotes[currentQuoteIndex]; // Получение случайной цитаты из массива цитат
  const { quote, author: quoteAuthor } = randomQuote; // Деструктуризация цитаты и автора из объекта случайной цитаты

  console.log(currentQuoteIndex); // Вывод текущего индекса цитаты в консоль

  quoteElement.textContent = `"${quote}"`; // Установка текстового содержимого элемента цитаты
  authorElement.textContent = quoteAuthor; // Установка текстового содержимого элемента автора
  makeFavBtn.textContent = randomQuote.isFavorite
    ? 'Удалить из избранного'
    : 'Добавить в избранное'; // Установка текста кнопки в зависимости от свойства isFavorite

  makeFavBtn.style.display = 'inline-block'; // Установка стиля отображения кнопки добавления в избранное в строчный блок
}

function toggleFavorite() {
  // Функция для переключения статуса "избранное" цитаты
  // Валидация currentQuoteIndex
  if (
    currentQuoteIndex === undefined ||
    currentQuoteIndex < 0 ||
    currentQuoteIndex >= quotes.length
  ) {
    // Проверка, является ли currentQuoteIndex допустимым
    console.error('Недопустимый currentQuoteIndex.'); // Вывод сообщения об ошибке в консоль, если currentQuoteIndex недопустим
    return; // Возврат из функции
  }

  const currentQuote = quotes[currentQuoteIndex]; // Получение текущей цитаты из массива цитат
  if (!currentQuote) {
    // Проверка, существует ли текущая цитата
    console.error('Цитата для текущего индекса не найдена.'); // Вывод сообщения об ошибке в консоль, если цитата не найдена
    return; // Возврат из функции
  }

  // Переключение статуса "избранное"
  currentQuote.isFavorite = !currentQuote.isFavorite; // Переключение свойства isFavorite текущей цитаты

  // Обновление текста кнопки в зависимости от статуса "избранное"
  makeFavBtn.textContent = currentQuote.isFavorite
    ? 'Удалить из избранного'
    : 'Добавить в избранное'; // Обновление текста кнопки в зависимости от свойства isFavorite

  // Создание или удаление карточки избранного
  if (currentQuote.isFavorite) {
    // Проверка, является ли текущая цитата избранной
    const favoriteCard = document.createElement('div'); // Создание нового элемента div
    favoriteCard.classList.add('fav-card'); // Добавление класса fav-card новому элементу div
    favoriteCard.innerHTML = `
      <p>${currentQuote.quote}</p>
      <p class="author">${currentQuote.author}</p>
    `; // Установка внутреннего HTML нового элемента div
    favContainer.appendChild(favoriteCard); // Добавление нового элемента div в контейнер избранного
  } else {
    // Удаление карточки из избранного
    const favoriteCards = document.querySelectorAll('.fav-card'); // Получение всех элементов с классом fav-card
    favoriteCards.forEach((card) => {
      // Перебор всех карточек избранного
      if (card.textContent.includes(currentQuote.quote)) {
        // Проверка, содержит ли карточка текущую цитату
        card.remove(); // Удаление карточки из DOM
      }
    });
  }
}

generateBtn.addEventListener('click', generateRandomQuote); // Добавление слушателя событий к кнопке генерации
makeFavBtn.addEventListener('click', toggleFavorite); // Добавление слушателя событий к кнопке добавления в избранное

/**generateRandomQuote();*/ // Вызов функции generateRandomQuote
