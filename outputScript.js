import { nouns, verbs, adjectives, adverbs } from './words';

/**
 * This BOBODDY  acronym word builder can be found at `www.creedthoughts.gov.www/creedthoughts`
 *
 * What kind of structure should there be?
 *
 *      B          O       B       O          D      D        Y
 * 1. adverb,    verb,    noun,   adjective, noun, adjective, noun
 * 2. adjective, noun, adverb, verb,      noun, adjective, noun
 */

// Acronym words to build
const toBuild = 'boboddy';

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

const randomPattern = (num) => {
  const options = ['noun', 'verb', 'adjective', 'adverb'];
  const pattern = [];
  for (let i = 0; i < num; i++) {
    pattern.push(options[Math.floor(Math.random() * options.length)]);
  }
  return pattern;
};

// Set you pattern to be a random pattern or a specific pattern
// Set the first word to honor Creed's first word: "Biznus"
acronym({
  letters: toBuild,
  // pattern: ['adjective', 'noun', 'adverb', 'verb', 'noun', 'adjective', 'noun'],
  pattern: randomPattern(toBuild.length),
  isBiznus: false,
});
