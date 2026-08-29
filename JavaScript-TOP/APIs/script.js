const img = document.querySelector("img");
      const btn = document.querySelector("button");
      const searchBox = document.querySelector("input");

      const gifContainer = document.querySelector(".gif-container");
      const searchBtn = document.querySelector(".search-btn");

      btn.addEventListener("click", function () {
        fetch(
          "https://api.giphy.com/v1/gifs/translate?api_key=3pDrfCFw6TxmqbAwqlKszOgrEP1hGHdN&s=cats",
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (response) {
            img.src = response.data.images.original.url;
          });
      });

      const apiKey = "3pDrfCFw6TxmqbAwqlKszOgrEP1hGHdN";

      searchBtn.addEventListener("click", function () {
        const query = searchBox.value.trim();

        if (!query) {
          alert("Please enter a search term!");
          return;
        }

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=5`;

        fetch(url)
          .then((response) => response.json())
          .then((content) => {

            gifContainer.innerHTML = "";

            content.data.forEach((gif) => {
              const img = document.createElement("img");
              img.src = gif.images.fixed_height.url;
              img.alt = gif.title;
              gifContainer.appendChild(img);
            });
          })
          .catch((err) => {
            console.error("Error fetching data from GIPHY:", err);
          });
      });
