const { open, transfer } = require('./events');
const state = require('./state');

const eventList = [
  open('chain', 200),
  open('eltinho', 100)
];

eventList.push(
  transfer('chain', 'eltinho', 50)
);

eventList.push(
  transfer('chain', 'eltinho', 30)
);

eventList.push(
  open('chain', 100000) //triggers warning if trying to open existing account
);

console.log(state(eventList)); // { chain: 120, eltinho: 180 }
