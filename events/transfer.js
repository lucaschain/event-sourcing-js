module.exports = function transfer(from, to, amount) {
  return {
    type: 'transfer',
    from,
    to,
    amount
  };
}

