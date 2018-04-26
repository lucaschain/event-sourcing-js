module.exports = function open(accounts, event) {
  const { accountName, balance } = event;

  if (accounts[accountName]) {
    console.warn(`trying to open an existing account for ${accountName}`);
    return accounts;
  }

  return {
    ...accounts,
    [accountName]: balance
  };
}
