export const formatPrice = (price: number) => {
  const englishToPersianMap: { [key: string]: string } = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };
  return addCharEveryThreeChars(
    price.toString().replace(/\d/g, (digit) => englishToPersianMap[digit]),
    ","
  );
};

export const addCharEveryThreeChars = (input: string, char: string): string => {
  if (char.length !== 1)
    throw new Error("The 'char' parameter must be a single character.");

  const reversedArray = input.split("").reverse();

  for (let i = 3; i < reversedArray.length; i += 4)
    reversedArray.splice(i, 0, char);

  return reversedArray.reverse().join("");
};
