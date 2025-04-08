import quotes from './src/quotes.js'; // Импортируем массив цитат из файла quotes.js

const el = (id) => document.getElementById(id); // Функция для получения элемента по его id

const createEl = (type, className, content, parent) => {
  // Функция для создания нового элемента
  const element = document.createElement(type); // Создаем элемент указанного типа
  element.className = className; // Устанавливаем класс элемента
  element.innerHTML = content; // Устанавливаем содержимое элемента
  parent.appendChild(element); // Добавляем элемент в указанный родительский элемент
  return element; // Возвращаем созданный элемент
};

const setFavBtnIcon = (isFavorite) =>
  // Функция для установки иконки кнопки "Избранное"
  `<img src="heart-${isFavorite ? 'solid' : 'regular'}.svg" alt="${
    isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'
  }" />`; // Возвращаем HTML для иконки, в зависимости от того, является ли цитата избранной

const [quoteEl, authorEl, generateBtn, makeFavBtn, favContainer] = [
  // Получаем элементы из DOM по их id
  el('quote'), // Элемент для отображения цитаты
  el('quote-author'), // Элемент для отображения автора цитаты
  el('generate-btn'), // Кнопка для генерации новой цитаты
  el('make-favorite-btn'), // Кнопка для добавления/удаления цитаты из избранного
  el('favContainer'), // Контейнер для отображения избранных цитат
];

let currentQuoteIndex; // Индекс текущей отображаемой цитаты

const displayQuote = (quoteObj) => {
  // Функция для отображения цитаты на странице
  quoteEl.textContent = `"${quoteObj.quote}"`; // Устанавливаем текст цитаты
  authorEl.textContent = quoteObj.author; // Устанавливаем автора цитаты
  makeFavBtn.innerHTML = setFavBtnIcon(quoteObj.isFavorite); // Устанавливаем иконку кнопки "Избранное"
  makeFavBtn.style.display = 'inline-block'; // Отображаем кнопку "Избранное"
};

const generateRandomQuote = () => {
  // Функция для генерации случайной цитаты
  currentQuoteIndex = Math.floor(Math.random() * quotes.length); // Генерируем случайный индекс цитаты
  console.log(currentQuoteIndex); // Выводим индекс в консоль (для отладки)
  displayQuote(quotes[currentQuoteIndex]); // Отображаем цитату на странице
};

const createFavoriteCard = (quoteObj) => {
  // Функция для создания карточки избранной цитаты
  const card = createEl('div', 'fav-card', '', favContainer); // Создаем div элемент для карточки
  card.innerHTML = `<p>${quoteObj.quote}</p><p class="author">${quoteObj.author}</p>`; // Устанавливаем содержимое карточки (цитата и автор)

  const deleteBtn = createEl('button', 'delBtn', 'Удалить хуйню', card); // Создаем кнопку "Удалить"
  deleteBtn.addEventListener('click', (event) => {
    // Добавляем обработчик события на кнопку "Удалить"
    event.stopPropagation(); // Предотвращаем всплытие события
    quoteObj.isFavorite = false; // Устанавливаем флаг "избранное" в false
    card.remove(); // Удаляем карточку из DOM
    makeFavBtn.innerHTML = setFavBtnIcon(false); // Обновляем иконку кнопки "Избранное"
  });
};

const removeFavoriteCard = (quoteObj) => {
  // Функция для удаления карточки избранной цитаты
  document
    .querySelectorAll('.fav-card') // Получаем все элементы с классом "fav-card"
    .forEach(
      (card) =>
        // Перебираем все карточки
        card.textContent.includes(quoteObj.quote) ? card.remove() : null // Если текст карточки содержит цитату, удаляем карточку
    );
};

const toggleFavorite = () => {
  // Функция для добавления/удаления цитаты из избранного
  if (
    currentQuoteIndex === undefined ||
    currentQuoteIndex < 0 ||
    currentQuoteIndex >= quotes.length
  ) {
    // Проверяем, является ли индекс цитаты валидным
    console.error('Invalid currentQuoteIndex.'); // Выводим ошибку в консоль
    return; // Выходим из функции
  }

  const currentQuote = quotes[currentQuoteIndex]; // Получаем текущую цитату
  if (!currentQuote) {
    // Проверяем, найдена ли цитата
    console.error('Quote not found for current index.'); // Выводим ошибку в консоль
    return; // Выходим из функции
  }

  currentQuote.isFavorite = !currentQuote.isFavorite; // Инвертируем флаг "избранное"
  makeFavBtn.innerHTML = setFavBtnIcon(currentQuote.isFavorite); // Обновляем иконку кнопки "Избранное"

  currentQuote.isFavorite
    ? createFavoriteCard(currentQuote) // Если цитата добавлена в избранное, создаем карточку
    : removeFavoriteCard(currentQuote); // Если цитата удалена из избранного, удаляем карточку
};

generateBtn.addEventListener('click', generateRandomQuote); // Добавляем обработчик события на кнопку "Сгенерировать"
makeFavBtn.addEventListener('click', toggleFavorite); // Добавляем обработчик события на кнопку "Избранное"

//generateRandomQuote(); // Вызываем функцию для генерации случайной цитаты при загрузке страницы (закомментировано)
