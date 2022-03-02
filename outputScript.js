import { bNouns } from './bNouns.js';
import { bVerbs } from './bVerbs.js';
import { bAdjectives } from './bAdjectives.js';
import { bAdverbs } from './bAdverbs.js';

import { oNouns } from './oNouns.js';
import { oVerbs } from './oVerbs.js';
import { oAdjectives } from './oAdjectives.js';
import { oAdverbs } from './oAdverbs.js';

import { dNouns } from './dNouns.js';
import { dVerbs } from './dVerbs.js';
import { dAdjectives } from './dAdjectives.js';
import { dAdverbs } from './dAdverbs.js';

import { yNouns } from './yNouns.js';
import { yVerbs } from './yVerbs.js';
import { yAdjectives } from './yAdjectives.js';
import { yAdverbs } from './yAdverbs.js';

/**
 * What kind of structure should there be?
 * Maybe there are a couple of different structures and each
 * day we randomly choose one, as well as randomly creating the acronym.
 *
 * B        O      B      O        D      D      Y
 * adverb, verb, noun, adjective, noun, verb, noun
 */

const toTitleCase = (str) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');

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

  const result = `
  ${bAdverb}
  ${oVerb}
  ${bNoun}
  ${oAdjective}
  ${dNoun}
  ${dVerb}
  ${yNoun}
  `;

  console.log(toTitleCase(result));

  return result;
};

acronym();
