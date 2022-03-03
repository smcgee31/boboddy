import { bNouns } from './words/nouns/bNouns.js';
import { bVerbs } from './words/verbs/bVerbs.js';
import { bAdjectives } from './words/adjectives/bAdjectives.js';
import { bAdverbs } from './words/adverbs/bAdverbs.js';

import { oNouns } from './words/nouns/oNouns.js';
import { oVerbs } from './words/verbs/oVerbs.js';
import { oAdjectives } from './words/adjectives/oAdjectives.js';
import { oAdverbs } from './words/adverbs/oAdverbs.js';

import { dNouns } from './words/nouns/dNouns.js';
import { dVerbs } from './words/verbs/dVerbs.js';
import { dAdjectives } from './words/adjectives/dAdjectives.js';
import { dAdverbs } from './words/adverbs/dAdverbs.js';

import { yNouns } from './words/nouns/yNouns.js';
import { yVerbs } from './words/verbs/yVerbs.js';
import { yAdjectives } from './words/adjectives/yAdjectives.js';
import { yAdverbs } from './words/adverbs/yAdverbs.js';

/**
 * What kind of structure should there be?
 * Maybe there are a couple of different structures and each
 * day we randomly choose one, as well as randomly creating the acronym.
 *
 *      B          O       B       O          D      D        Y
 * 1. adverb,    verb,    noun,   adjective, noun, adjective, noun
 * 2. adjective, noun(s), adverb, verb,      noun, adjective, noun
 */

const toTitleCase = (str) => {
  const result = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');

  return result;
};

const getBNoun = () => {
  const word = bNouns[Math.floor(Math.random() * bNouns.length)];
  const result = word.charAt(0).toUpperCase() + word.slice(1);
  console.log('🚧 🚧 🚧  ~ file: outputScript.js ~ line 42 ~ result', result);
  return result;
};
getBNoun();

const acronym = () => {
  const bNoun = bNouns[Math.floor(Math.random() * bNouns.length)];
  const bVerb = bVerbs[Math.floor(Math.random() * bVerbs.length)];
  const bAdjective = bAdjectives[Math.floor(Math.random() * bAdjectives.length)];
  const bAdverb = bAdverbs[Math.floor(Math.random() * bAdverbs.length)];

  const oNoun = oNouns[Math.floor(Math.random() * oNouns.length)];
  const oVerb = oVerbs[Math.floor(Math.random() * oVerbs.length)];
  const oAdjective = oAdjectives[Math.floor(Math.random() * oAdjectives.length)];
  const oAdverb = oAdverbs[Math.floor(Math.random() * oAdverbs.length)];

  const dNoun = dNouns[Math.floor(Math.random() * dNouns.length)];
  const dVerb = dVerbs[Math.floor(Math.random() * dVerbs.length)];
  const dAdjective = dAdjectives[Math.floor(Math.random() * dAdjectives.length)];
  const dAdverb = dAdverbs[Math.floor(Math.random() * dAdverbs.length)];

  const yNoun = yNouns[Math.floor(Math.random() * yNouns.length)];
  const yVerb = yVerbs[Math.floor(Math.random() * yVerbs.length)];
  const yAdjective = yAdjectives[Math.floor(Math.random() * yAdjectives.length)];
  const yAdverb = yAdverbs[Math.floor(Math.random() * yAdverbs.length)];

  // #2
  const result = `
  ${bAdjective}
  ${oNoun}s
  ${bAdverb}
  ${oVerb}
  ${dNoun}
  ${dAdjective}
  ${yNoun}
  `;

  console.log(toTitleCase(result));

  return result;
};

acronym();
