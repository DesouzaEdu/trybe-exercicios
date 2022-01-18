// api.js
//const fetch = require('node-fetch');

const fetchCoins =  async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins =  await fetch(url)
    .then((response) => response.json())
        .then((data) => data.data)
            .catch((error) => error.toString());

  coins
    .filter(({rank}) => rank <= 10)
        .forEach(({id, priceUsd, symbol}) => {
            const coinList = document.getElementById('arrayCoins');
            const coinItem = document.createElement('li');
            coinItem.innerText = `${id} (${symbol}): ${Number(priceUsd).toFixed(2)}`;
            coinList.appendChild(coinItem);
        });
}

fetchCoins();