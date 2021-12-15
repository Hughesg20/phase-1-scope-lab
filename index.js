// Write your solution in this file!
var customerName = 'bob';

var upperCaseCustomerName=()=>{customerName=customerName.toUpperCase()};

var bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob';
  return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
  }

  const leastFavoriteCustomer = '';

  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = '';
    return leastFavoriteCustomer;
  }