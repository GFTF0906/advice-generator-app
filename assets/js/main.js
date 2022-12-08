// DOM ELEMENTS
const adviceIdEl = document.querySelector('.advice__id');
const adviceTxtEl = document.querySelector('.advice__text');
const adviceBtn = document.querySelector('.advice__btn');

// FUNCTIONS
const getAdvice = async () => {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();

  const advId = data.slip.id;
  const advTxt = data.slip.advice;

  adviceIdEl.textContent = `Advice #${advId}`;
  adviceTxtEl.textContent = `"${advTxt}"`;
  
};

const generateAdvice = () => {
  adviceBtn.addEventListener('click', e => {
    e.preventDefault();
    getAdvice();
  });
};

const init = () => {
  generateAdvice();
  getAdvice();
};

init();