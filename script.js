document.getElementById('modeSwitch').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
    console.log("dark mode activated")
  });

  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');
  console.log(quoteAuthor)
  const increaseBtn = document.getElementById('increaseFont');
  const decreaseBtn = document.getElementById('decreaseFont');

  let currentSize = 1.4;
  increaseBtn.addEventListener('click', () => {
    currentSize = Math.min(currentSize + 0.1, 2); 
    quoteText.style.fontSize = currentSize + "rem";
    quoteAuthor.style.fontSize = currentSize + "rem"
  });
  
  decreaseBtn.addEventListener('click', () => {
    currentSize = Math.max(currentSize - 0.1, 0.6); 
    quoteText.style.fontSize = currentSize + "rem";
    quoteAuthor.style.fontSize = currentSize + "rem"
  });