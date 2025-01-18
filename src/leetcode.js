//Question: 121. Best Time to Buy and Sell Stock


var maxProfit = function (prices) {
  return prices.reduce(
    (max, price, i) => Math.max(max, price - Math.min(...prices.slice(0, i))),
    0
  );
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//question: 122. Best Time to Buy and Sell Stock II

const maxProfit = function (prices) {
  return prices.reduce((profit, price, i) => {
    if (price > prices[i - 1]) profit += price - prices[i - 1];
    return profit;
  }, 0);
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//question: 136. Single Number
var singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]));

//question: 217. Contains Duplicate


