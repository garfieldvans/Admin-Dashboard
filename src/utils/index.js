export const priceFormater = number => {
  if (!number) {
    return 0;
  }
  var rupiah = '';
  var numberrev = number.toString().split('').reverse().join('');
  for (var i = 0; i < numberrev.length; i++) {
    if (i % 3 === 0) {
      rupiah += numberrev.substr(i, 3) + ',';
    }
  }
  return rupiah
    .split('', rupiah.length - 1)
    .reverse()
    .join('');
};

export { default as useCustomToast } from './useCustomToast';
