function createCatInfoMarkup(data) {
  return data.breeds
    .map(
      ({ name, description, temperament }) => `
    <img src="${data.url}" width="500" alt="${name}" class="img" />
    <div>
      <h2 class="title">${name}</h2>
      <p class="desc">${description}</p>
      <p class="desc"><b>Temperament: </b>${temperament}</p>
    </div>
  `
    )
    .join('');
}

export { createCatInfoMarkup };
