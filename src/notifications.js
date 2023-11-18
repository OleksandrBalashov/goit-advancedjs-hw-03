import iziToast from 'izitoast';

export function errorToast() {
  iziToast.show({
    title: 'Oops!',
    message: 'Something went wrong! Try reloading the page!',
    color: 'red',
    position: 'topRight',
  });
}
