module.exports = function open(accounts, event) {
  const { accountName, balance } = event;

  return {
    ...accounts,
    [accountName]: balance
  };
}
