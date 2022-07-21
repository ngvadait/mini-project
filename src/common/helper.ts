export const styleCombine = (...args: any[]): string => {
  return args
    .join(' ')
    .replace(/\s+/g, ' ')
    .replace(/^\s+|\s+$/, '');
};
