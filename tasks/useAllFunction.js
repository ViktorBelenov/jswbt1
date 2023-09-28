const useAllFunction = (array) => {
  array.forEach((element, index) => {
    element();
    console.log(index)
  });
};

export {useAllFunction};