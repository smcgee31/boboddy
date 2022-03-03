import { bNouns } from './nouns/b-nouns.js';
import { bVerbs } from './verbs/b-verbs.js';
import { bAdjectives } from './adjectives/b-adjectives.js';
import { bAdverbs } from './adverbs/b-adverbs.js';

import { oNouns } from './nouns/o-nouns.js';
import { oVerbs } from './verbs/o-verbs.js';
import { oAdjectives } from './adjectives/o-adjectives.js';
import { oAdverbs } from './adverbs/o-adverbs.js';

import { dNouns } from './nouns/d-nouns.js';
import { dVerbs } from './verbs/d-verbs.js';
import { dAdjectives } from './adjectives/d-adjectives.js';
import { dAdverbs } from './adverbs/d-adverbs.js';

import { yNouns } from './nouns/y-nouns.js';
import { yVerbs } from './verbs/y-verbs.js';
import { yAdjectives } from './adjectives/y-adjectives.js';
import { yAdverbs } from './adverbs/y-adverbs.js';

export const nouns = {
  b: bNouns,
  o: oNouns,
  d: dNouns,
  y: yNouns,
};

export const verbs = {
  b: bVerbs,
  o: oVerbs,
  d: dVerbs,
  y: yVerbs,
};

export const adjectives = {
  b: bAdjectives,
  o: oAdjectives,
  d: dAdjectives,
  y: yAdjectives,
};

export const adverbs = {
  b: bAdverbs,
  o: oAdverbs,
  d: dAdverbs,
  y: yAdverbs,
};
