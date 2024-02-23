export const splitString = (str: string, chunkSize: number): string[] => {
  const result: string[] = [];
  const lenght = str.length;
  let index = 0;

  while (index < lenght) {
    result.push(str.slice(index, index + chunkSize));
    index += chunkSize;
  }

  return result;
};
