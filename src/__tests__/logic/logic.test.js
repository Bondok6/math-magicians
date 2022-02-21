import operate from '../../logic/operate';

it('operations test', () => {
  expect(operate(2, 2, '+')).toBe('4');
  expect(operate(2, 2, '-')).toBe('0');
  expect(operate(2, 4, 'x')).toBe('8');
  expect(operate(2, 2, '÷')).toBe('1');
  expect(operate(2, 0, '÷')).toBe("Can't divide by 0.");
  expect(operate(4, 2, '%')).toBe('0');
});
