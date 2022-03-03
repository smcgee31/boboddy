import { nouns, verbs, adjectives, adverbs } from '../words/index.js';

export default (type, letter) => {
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
