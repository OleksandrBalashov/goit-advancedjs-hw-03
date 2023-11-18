import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createMarkupOption, createCatInfoMarkup } from './createMarkup';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'normalize.css';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  catInfo: document.querySelector('.cat-info'),
};

refs.select.style.display = 'none';

refs.select.addEventListener('change', ({ target: { value } }) => {
  refs.catInfo.innerHTML = '';
  setIsFetching(true);
  fetchCatByBreed(value)
    .then(({ data }) => {
      const [responce] = data;

      if (!responce) throw new Error();

      refs.catInfo.innerHTML = createCatInfoMarkup(responce);
    })
    .catch(() => {
      iziToast.show({
        title: 'Oops!',
        message: 'Something went wrong! Try reloading the page!',
        color: 'red',
        position: 'topRight',
      });
    })
    .finally(() => setIsFetching(false));
});

setIsFetching(true);
fetchBreeds()
  .then(({ data }) => {
    refs.select.innerHTML = createMarkupOption(data);
    refs.select.style.display = 'block';
  })
  .finally(() => setIsFetching(false));

function setIsFetching(value) {
  value
    ? (refs.loader.style.display = 'block')
    : (refs.loader.style.display = 'none');
}
