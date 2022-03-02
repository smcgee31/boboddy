import bNouns from './bNouns.js';

console.log(bNouns);

function getVals() {
  const list = document.getElementsByClassName('col-sm-3 col-xs-6');
  const array = [];
  for (let li of list) {
    array.push(li.textContent);
  }

  console.log(array);
}

console.log([...new Set(yNouns)]);
