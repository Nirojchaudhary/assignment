fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    const pokemonList = document.getElementById('pokemon-list');

    data.results.forEach(pokemon => {
      fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
          // Create a div to hold the Pokemon card
          const pokemonCard = document.createElement('div');
          pokemonCard.classList.add('pokemon-card');
          pokemonCard.setAttribute('data-pokemon-id', pokemonData.id); // Add this line to set the attribute

          // Create an h2 element to hold the Pokemon's name
          const pokemonName = document.createElement('h2');
          pokemonName.innerText = pokemonData.name;

          // Create an img element to hold the Pokemon's image
          const pokemonImage = document.createElement('img');
          pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`;
          pokemonImage.alt = `${pokemonData.name} image`;
          console.log(pokemonImage.src)  //check the path of image
          pokemonCard.appendChild(pokemonImage);

          // Append the name to the card and the card to the list
          pokemonCard.appendChild(pokemonName);
          pokemonList.appendChild(pokemonCard);
          pokemonCard.addEventListener('click', (event) => {
            const pokemonId = event.target.getAttribute('data-pokemon-id');
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
              .then(response => response.json())
              .then(pokemonDetails => {
                // Render Pokemon details
              });
          });
        });
    });
  });
