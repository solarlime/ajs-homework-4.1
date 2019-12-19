const strToNumber = (str) => {
  try {
    const number = parseInt(str, 10);
    if ((number.toString() === str) && (number > 0)) {
      return number;
    } throw new Error('Не удалось преобразовать строку в число');
  } catch (e) {
    return Error('Не удалось преобразовать строку в число');
  }
};

console.log(strToNumber('-4'));

export default strToNumber;
