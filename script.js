document.getElementById('modeSwitch').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
    console.log("dark mode activated")
  });

  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');
  const quoteCategory = document.getElementById('quoteCategory');
  const increaseBtn = document.getElementById('increaseFont');
  const decreaseBtn = document.getElementById('decreaseFont');

  let currentSize = 1.4;
  increaseBtn.addEventListener('click', () => {
    currentSize = Math.min(currentSize + 0.1, 2); 
    quoteText.style.fontSize = currentSize + "rem";
    quoteAuthor.style.fontSize = currentSize + "rem"
    quoteCategory.style.fontSize = currentSize + "rem"
  });
  
  decreaseBtn.addEventListener('click', () => {
    currentSize = Math.max(currentSize - 0.1, 0.6); 
    quoteText.style.fontSize = currentSize + "rem";
    quoteAuthor.style.fontSize = currentSize + "rem"
    quoteCategory.style.fontSize = currentSize + "rem"
  });

const createBtn = document.getElementById('createBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');
const categorySelect = document.getElementById('categorySelect');
console.log(categorySelect)

let currentIndex = 0;

function getFilteredQuotes() {
  let selectedCategory = document.getElementById('categorySelect').value;

  if (selectedCategory === 'all') {
    return quotes;
  } else {
    let filtered = [];
    for (let i = 0; i < quotes.length; i++) {
      if (quotes[i].category === selectedCategory) {
        filtered.push(quotes[i]);
      }
    }
    return filtered;
  }
}

function displayQuote(index) {
  let filteredQuotes = getFilteredQuotes();
  if (filteredQuotes.length > 0) {
    let quote = filteredQuotes[index % filteredQuotes.length];
    document.getElementById('quoteText').textContent = '"' + quote.text + '"';
    document.getElementById('quoteAuthor').textContent = '- ' + quote.author;
    document.getElementById('quoteCategory').textContent = '- ' + quote.category;
  } 
}

document.getElementById('createBtn').addEventListener('click', function () {
  let filteredQuotes = getFilteredQuotes();
  if (filteredQuotes.length > 0) {
    currentIndex = Math.floor(Math.random() * filteredQuotes.length);
    displayQuote(currentIndex);
  }
});

nextBtn.addEventListener('click', function () {
    let filteredQuotes = getFilteredQuotes();
  
    if (filteredQuotes.length > 0) {
      currentIndex = (currentIndex + 1) % filteredQuotes.length;
      displayQuote(currentIndex);
    }
  });
  
  prevBtn.addEventListener('click', function () {
    let filteredQuotes = getFilteredQuotes();
    if (filteredQuotes.length > 0) {
      currentIndex = (currentIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
      displayQuote(currentIndex);
    }
  });
  
  randomBtn.addEventListener('click', function () {
    let filteredQuotes = getFilteredQuotes();
    if (filteredQuotes.length > 0) {
      currentIndex = Math.floor(Math.random() * filteredQuotes.length);
      displayQuote(currentIndex);
    }
  });
