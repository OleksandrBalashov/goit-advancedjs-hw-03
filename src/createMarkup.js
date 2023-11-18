function createMarkupOption(collection) {
  return collection
    .map(({ name, id }) => `<option value="${id}" id="${id}">${name}</option>`)
    .join('');
}

function createCatInfoMarkup(data) {
  return data.breeds
    .map(
      ({ name, description, temperament }) => `
    <h2>${name}</h2>
    <img src="${data.url}" width="300" alt="${name}" />
    <p>${description}</p>
    <p><b>Temperament: </b>${temperament}</p>
  `
    )
    .join('');
}

export { createMarkupOption, createCatInfoMarkup };
