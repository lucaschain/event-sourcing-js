const handlers = require('./handlers');

function handleEvent(accumulated, event) {
  return handlers[event.type](accumulated, event);
}

module.exports = function currentState(eventList) {
  return eventList.reduce((accumulated, event) => {
    return handleEvent(accumulated, event);
  }, {});
}
