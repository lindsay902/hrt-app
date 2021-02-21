export default (len, pattern) => {
  const possibilities = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789',
  ];
  let chars = '';

  const _pattern = pattern ? pattern : 'aA0';

  _pattern.split('').forEach((a) => {
    if (!isNaN(parseInt(a, 10))) {
      chars += possibilities[2];
    } else if (/[a-z]/.test(a)) {
      chars += possibilities[0];
    } else if (/[A-Z]/.test(a)) {
      chars += possibilities[1];
    }
  });

  let _len = len ? len : 10;

  let result = '';

  while (_len--) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
};
