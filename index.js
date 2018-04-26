const { open, transfer } = require('./events');
const state = require('./state');

const eventList = [
  open('chain', 200),
  open('eltinho', 100),
  transfer('chain', 'eltinho', 50),
  transfer('chain', 'eltinho', 30),
  open('chain', 100000) //bug abuse
];

console.log(state(eventList)); // { chain: 120, eltinho: 180 }
