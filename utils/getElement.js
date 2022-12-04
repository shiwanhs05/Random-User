export default (selection, bool) => {
  // if you dont pass any arguments for bool, by default its value will be false 
  
  // bool = bool || false;
  let element;
  if(!bool) element = document.querySelector(selection);
  else element = document.querySelectorAll(selection);

  if (element) return element;
  throw new Error('no element selected');
};

// const getElement = (selection, bool = false) => {
// let element;
// if (!bool) element = document.querySelector(selection);
// else element = document.querySelectorAll(selection);

// if (element) return element;
// throw new Error('no element selected');
// };
// export default getElement;