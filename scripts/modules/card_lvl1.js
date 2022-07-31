import {el, setChildren} from 'redom';
import Inputmask from 'inputmask';

const cardPage = () => {
  const card = el('div.wrapper', el('div.card',
      el('p.secure', 'Secure Checkout'), el('div.credit-card',
          el('span.card__number', 'xxxx xxxx xxxx xxxx'),
          el('div.card__personal', el('span.card__name', 'John Doe'),
              el('span.card__date', '04/24'))),
      el('form.form#form', {'action': '#'},
          el('div.form__input-wrap.form__input-wrap_holder',
              el('label.form__label.form__holder-label', 'Card Holder'),
              el('input.input.input__holder', {'type': 'text'})),
          el('div.form__input-wrap.form__input-wrap_number',
              el('label.form__label.form__number-label', 'Card Number'),
              el('input.input.input__number#cardNumberText')),
          el('div.form__input-wrap.form__input-wrap_date',
              el('label.form__label.form__date-label', 'Card Expiry'),
              el('input.input.input__date', {'type': 'text'})),
          el('div.form__input-wrap.form__input-wrap_cvv',
              el('label.form__label.form__cvv-label', 'CVV'),
              el('input.input.input__cvv', {'type': 'text'})),
          el('button.form__button', 'CHECK OUT'))));

  return card;
};

setChildren(document.body, cardPage());

export const cardEvents = () => {
  const cardHolderInput = document.querySelector('.input__holder');
  const cardNumberInput = document.querySelector('.input__number');
  const cardDateInput = document.querySelector('.input__date');
  const cardNameText = document.querySelector('.card__name');
  const cardNumberText = document.querySelector('.card__number');
  const cardDateText = document.querySelector('.card__date');
  const cardCvvInput = document.querySelector('.input__cvv');

  new Inputmask({
    'mask': '9999 9999 9999 9999',
    'placeholder': 'x',
  }).mask(cardNumberInput);

  new Inputmask({
    'mask': '99/99',
    'placeholder': '_',
  }).mask(cardDateInput);

  new Inputmask({
    'mask': '999',
    'placeholder': '_',
  }).mask(cardCvvInput);

  cardNumberInput.addEventListener('input', () => {
    const cardNumberPlaceholder = 'xxxx xxxx xxxx xxxx';
    cardNumberText.textContent = cardNumberInput.value;
    if (cardNumberInput.value.length < 1) {
      cardNumberText.textContent = cardNumberPlaceholder;
    }
  });

  cardHolderInput.addEventListener('input', () => {
    cardNameText.textContent = cardHolderInput.value;
  });

  cardDateInput.addEventListener('input', () => {
    const dataPlaceholder = '__/__';
    cardDateText.textContent = cardDateInput.value;
    if (cardDateInput.value.length < 1) {
      cardDateText.textContent = dataPlaceholder;
    }
  });
};

cardEvents();
