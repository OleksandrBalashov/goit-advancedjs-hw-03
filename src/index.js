import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { createCatInfoMarkup } from './markups';
import { errorToast } from './notifications';
import 'slim-select/styles';
import 'izitoast/dist/css/iziToast.min.css';
import 'normalize.css';

let initialize = false;

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  catInfo: document.querySelector('.cat-info'),
};

const select = new SlimSelect({
  select: refs.select,
  settings: {
    placeholderText: 'Filter cats breeds',
    disabled: true,
  },
});

setIsFetching(true);
fetchBreeds()
  .then(({ data }) => {
    select.setData(data.map(({ id, name }) => ({ value: id, text: name })));
    initialize = true;
    select.enable();
  })
  .catch(() => errorToast())
  .finally(() => setIsFetching(false));

refs.select.addEventListener('change', ({ target: { value } }) => {
  if (!initialize) return;

  select.disable();

  refs.catInfo.innerHTML = '';

  setIsFetching(true);

  fetchCatByBreed(value)
    .then(({ data }) => {
      const [responce] = data;

      if (!responce) throw new Error();

      refs.catInfo.innerHTML = createCatInfoMarkup(responce);
      select.enable();
    })
    .catch(() => errorToast())
    .finally(() => setIsFetching(false));
});

function setIsFetching(value) {
  value
    ? (refs.loader.style.display = 'block')
    : (refs.loader.style.display = 'none');
}
