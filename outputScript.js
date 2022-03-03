import { nouns, verbs, adjectives, adverbs } from './words';

/**
 * What kind of structure should there be?
 * Maybe there are a couple of different structures and each
 * day we randomly choose one, as well as randomly creating the acronym.
 *
 *      B          O       B       O          D      D        Y
 * 1. adverb,    verb,    noun,   adjective, noun, adjective, noun
 * 2. adjective, noun(s), adverb, verb,      noun, adjective, noun
 */

const getWord = (type, letter) => {
  switch (type) {
    case 'noun':
      return nouns[letter][Math.floor(Math.random() * nouns[letter].length)];
    case 'verb':
      return verbs[letter][Math.floor(Math.random() * verbs[letter].length)];
    case 'adjective':
      return adjectives[letter][Math.floor(Math.random() * adjectives[letter].length)];
    case 'adverb':
      return adverbs[letter][Math.floor(Math.random() * adverbs[letter].length)];
    default:
      break;
  }
};
getWord('verbs', 'b');

const acronym = ({ letters, pattern, isBiznus }) => {
  if (letters.length !== pattern.length) {
    throw new Error('the number of letters and the number of patterns must be the same');
  }

  let result = '';

  for (let i = 0; i < letters.length; i++) {
    const word = getWord(pattern[i], letters[i]);
    const capWord = word.charAt(0).toUpperCase() + word.slice(1);
    result += `${capWord} `;
  }

  if (isBiznus) {
    result = result.replace(/^\w+/, 'Biznus');
  }

  console.log('🚧 🚧 🚧  ~ file: outputScript.js ~ line 48 ~ result', result);
  return result;
};

acronym({
  letters: 'boboddy',
  pattern: ['adjective', 'noun', 'adverb', 'verb', 'noun', 'adjective', 'noun'],
  isBiznus: false,
});
