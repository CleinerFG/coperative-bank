import { numberToCurrency, numberToPercent } from "./formatters.js";

export const currencyFormatter = (ev) => {
  let value = ev.target.value;
  value = numberToCurrency.format(value / 100);
  ev.target.value = value;
};

export const percentFormatter = (ev) => {
  let value = ev.target.value;
  value = numberToPercent.format(value / 100);
  const cursorPosition = ev.target.value.length - 2;
  ev.target.setSelectionRange(cursorPosition, cursorPosition);
};

export const strictNumberFormatter = (ev) => {
  const value = ev.target.value.replace(/\D/g, "");
  ev.target.value = value;
};