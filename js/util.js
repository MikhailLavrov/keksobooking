// Случайное ЦЕЛОЕ положительные число из переданного диапазона включительно
const getRandomPositiveInteger = (min, max) => {
  if (max <= min) {
    throw new Error('Задан неверный диапазон. Максимальное значение должно быть больше минимального.');
  }
  if (min < 0) {
    throw new Error('Задан неверный диапазон. Диапазон может быть только положительный, включая ноль.');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Случайное число С ПЛАВАЮЩЕЙ ТОЧКОЙ из переданного диапазона включительно
const getRandomPositiveFloat = (min, max, symbolsAfterDot) => {
  if (max <= min) {
    throw new Error('Задан неверный диапазон. Максимальное значение должно быть больше минимального.');
  }
  if (min < 0) {
    throw new Error('Задан неверный диапазон. Диапазон может быть только положительный, включая ноль.');
  }
  return +((min + Math.random() * (max - min)).toFixed(symbolsAfterDot));
};

// Случайный элемент из массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Массив случайной длины из значений (без повторов).
const getRandomArray = (array) => {
  const maxLength = array.length;
  const randomLength = getRandomPositiveInteger(1, maxLength);
  const newArray = [];

  while (newArray.length < randomLength) {
    const randomIndex = getRandomPositiveInteger(0, maxLength - 1);
    const el = array[randomIndex];
    const isUniq = !newArray.includes(el);

    if (isUniq) {
      newArray.push(el);
    }
  }
  return newArray;
};

//get success message
const templateSuccessFragment = document.querySelector('#success').content;
const templateSuccess = templateSuccessFragment.querySelector('.success');
const submitFieldElement = document.querySelector('.ad-form__element--submit');

const showSuccessAlert = () => {
  const successContainer = templateSuccess.cloneNode(true);
  const successElement = successContainer.querySelector('.success__message');

  successElement.style.color = 'blue';
  successElement.style.fontSize = '20px';

  submitFieldElement.append(successElement);

  setTimeout(() => {
    successElement.remove();
  }, 3000);
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getRandomArray, showSuccessAlert};
