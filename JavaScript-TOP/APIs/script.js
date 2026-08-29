const img = document.querySelector('img');
const btn = document.querySelector('button');
const searchBox = document.querySelector('input');

const gifContainer = document.querySelector('.gif-container');
const searchBtn = document.querySelector('.search-btn');

async function getCats() {
  try {
    const response = await fetch(
      'https://api.giphy.com/v1/gifs/translate?api_key=3pDrfCFw6TxmqbAwqlKszOgrEP1hGHdN&s=cats',
    );
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener('click', getCats);

const apiKey = '3pDrfCFw6TxmqbAwqlKszOgrEP1hGHdN';

async function getCustomMeme() {
  const query = searchBox.value.trim();

  if (!query) {
    alert('Please enter a search term!');
    return;
  }

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=5`;

  try {
    const response = await fetch(url);
    const content = await response.json();

    gifContainer.innerHTML = '';

    content.data.forEach((gif) => {
      const img = document.createElement('img');

      img.src = gif.images.fixed_height.url;
      img.alt = gif.title;

      gifContainer.appendChild(img);
    });
  } catch (err) {
    console.error('Error fetching data from GIPHY:', err);
  }
}

searchBtn.addEventListener('click', getCustomMeme);
