import strToNumber from './app';

test('Decimal', () => {
  expect(strToNumber('5')).toEqual(5);
});

test('String', () => {
  expect(strToNumber('a')).toEqual(Error('Не удалось преобразовать строку в число'));
});

test('Decimal + String', () => {
  expect(strToNumber('5a')).toEqual(Error('Не удалось преобразовать строку в число'));
});

test('Float', () => {
  expect(strToNumber('5.5')).toEqual(Error('Не удалось преобразовать строку в число'));
});

test('Less than zero', () => {
  expect(strToNumber('-5')).toEqual(Error('Не удалось преобразовать строку в число'));
});
