import randomPattern from './utils/random-pattern.js';
import getWord from './utils/get-word.js';

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
  console.log(result);
  return result;
};

// Set you pattern to be a random pattern or a specific pattern
// Set the first word to honor, or not, Creed's first word: "Biznus"
acronym({
  letters: toBuild,
  // pattern: ['adjective', 'noun', 'adverb', 'verb', 'noun', 'adjective', 'noun'],
  pattern: randomPattern(toBuild.length),
  isBiznus: false,
});
