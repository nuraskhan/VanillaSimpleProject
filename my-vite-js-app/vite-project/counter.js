export function setupCounter(element) {
  let counter = 0;

  const calculateSum = (n) => {
    return (n * (n + 1)) / 2;
  };

  const setCounter = () => {
    const sumValue = calculateSum(counter);
    element.innerHTML = `Sum of numbers up to ${counter} is ${sumValue}`;
  };

  const clickHandler = () => {
    counter += 1;
    setCounter();
  };

  element.addEventListener('click', clickHandler);

  setCounter();
}