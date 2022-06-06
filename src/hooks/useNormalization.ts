function useNormalization(array: object, key: string): Array<number> {
  /* data normalization to range to 1 ~ 11 */
  const figureArray = [];
  const infoNormalized = []; // figure nomalization

  for (const prop in array) {
    figureArray.push(array[prop][key]);
  }

  for (const i in figureArray) {
    const normalizedNum =
      (figureArray[i] - Math.min(...figureArray)) / (Math.max(...figureArray) - Math.min(...figureArray));
    infoNormalized.push((normalizedNum + 0.3) * 10);
  }

  return infoNormalized;
}

export default useNormalization;
