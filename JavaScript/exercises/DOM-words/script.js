import { wordsArray } from './data.js';

const grid = document.getElementById('wordsGrid');
const fragment = document.createDocumentFragment();

const randomHue = () => Math.floor(Math.random() * 360);

wordsArray.forEach(word => {
  const box = document.createElement('div');
  box.className = 'word-box';
  box.textContent = word;
  fragment.appendChild(box);
});

grid.appendChild(fragment);

grid.addEventListener('mouseover', (e) => {
  const box = e.target.closest('.word-box');
  if (!box) return;

  const hue = randomHue();
  const textHue = (hue + 180) % 360;

  box.style.background = `hsl(${hue}, 85%, 88%)`;
  box.style.color = `hsl(${textHue}, 90%, 32%)`;
});

grid.addEventListener('mouseout', (e) => {
  const box = e.target.closest('.word-box');
  if (!box) return;

  box.style.background = '';
  box.style.color = '';
});
