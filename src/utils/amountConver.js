import { ToWords } from "to-words";

const amountConvert = (number) => {
  const toWords = new ToWords();
  let words;
  if (number) {
    words = toWords.convert(parseFloat(number));
  }

  return words;
};

export default amountConvert;
