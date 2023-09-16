const isStrangeNumber = (number) => {
  let result = false;
  const dividers = getDividers(number);
  console.log(dividers);
  const dividersSum = dividers.reduce((acamulator, currentValue)=>{
    return acamulator+=currentValue;
  });
  console.log(dividersSum);

  if (number === dividersSum) {
    result = true;
  }
  return result;
};

const getDividers = (number) => {
  const result = [];
  for (let i = 1; i <= Math.floor(number/2); i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result;
};

export {isStrangeNumber};