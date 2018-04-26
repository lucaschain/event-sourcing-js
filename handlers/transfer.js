module.exports = function transfer(accounts, event) {
  const { from, to, amount } = event;

  return {
    ...accounts,
    [from]: accounts[from] - amount,
    [to]: accounts[to] + amount
  };
}
