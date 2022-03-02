import { bNouns } from './B/bNouns.js';
import { bVerbs } from './B/bVerbs.js';
import { bAdjectives } from './B/bAdjectives.js';
import { bAdverbs } from './B/bAdverbs.js';

import { oNouns } from './O/oNouns.js';
import { oVerbs } from './O/oVerbs.js';
import { oAdjectives } from './O/oAdjectives.js';
import { oAdverbs } from './O/oAdverbs.js';

import { dNouns } from './D/dNouns.js';
import { dVerbs } from './D/dVerbs.js';
import { dAdjectives } from './D/dAdjectives.js';
import { dAdverbs } from './D/dAdverbs.js';

import { yNouns } from './Y/yNouns.js';
import { yVerbs } from './Y/yVerbs.js';
import { yAdjectives } from './Y/yAdjectives.js';
import { yAdverbs } from './Y/yAdverbs.js';

/**
 * What kind of structure should there be?
 * Maybe there are a couple of different structures and each
 * day we randomly choose one, as well as randomly creating the acronym.
 *
 * B        O      B      O        D      D         Y
 * adverb, verb, noun, adjective, noun, adjective, noun
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
  ${dAdjective}
  ${yNoun}
  `;

  console.log(toTitleCase(result));

  return result;
};

acronym();
