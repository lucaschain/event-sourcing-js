module.exports = function openAccount(accountName, balance) {
  return {
    type: 'open',
    accountName,
    balance
  };
}
