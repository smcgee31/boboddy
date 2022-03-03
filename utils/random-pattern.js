export default (num) => {
  const options = ['noun', 'verb', 'adjective', 'adverb'];
  const pattern = [];
  for (let i = 0; i < num; i++) {
    pattern.push(options[Math.floor(Math.random() * options.length)]);
  }
  return pattern;
};
