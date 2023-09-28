const executeFunction = (array) => {
  return function () {
    const result = [];
    array.forEach(element => {
      result.push(element());
    });
    return result;
  };
};

export { executeFunction };